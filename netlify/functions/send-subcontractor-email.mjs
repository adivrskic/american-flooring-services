import fetch from 'node-fetch';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Only POST requests are allowed' }),
    };
  }

  const formData = JSON.parse(event.body);
  const API_KEY = process.env.BREVO_API_KEY; // Store your Brevo API key in environment variables
  const url = 'https://api.brevo.com/v3/smtp/email';

  // Helper function to generate the PDF
  const generateSubcontractorPDF = (formData) => {
    const doc = new PDFDocument();
    const tempDir = '/tmp'; // Temporary directory for serverless environments
    const filePath = path.join(tempDir, `subcontractor_application_${Date.now()}.pdf`);
    const writeStream = fs.createWriteStream(filePath);

    return new Promise((resolve, reject) => {
      doc.pipe(writeStream);

      // Add PDF content
      doc.fontSize(18).text('Subcontractor Application Form', { align: 'center' }).moveDown();
      doc.fontSize(12);
      for (const [key, value] of Object.entries(formData)) {
        const fieldValue = Array.isArray(value) ? value.join(', ') : value; // Handle arrays
        doc.text(`${key}: ${fieldValue || 'N/A'}`);
      }
      doc.end();

      writeStream.on('finish', () => resolve(filePath));
      writeStream.on('error', reject);
    });
  };

  try {
    // Generate the PDF
    const pdfFilePath = await generateSubcontractorPDF(formData);

    // Prepare email data with attachment
    const emailData = {
      sender: { email: 'adivrskic123@gmail.com' }, // Replace with your sender email
      to: [{ email: 'adivrskic123@gmail.com' }], // Replace with the recipient email
      subject: `AmericanFlooringServices.com - New Subcontractor Application from ${formData.firstName} ${formData.lastName}`,
      htmlContent: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2 style="color: #93143A;">New Subcontractor Application Submission</h2>
            <p><strong>First Name:</strong> ${formData.firstName}</p>
            <p><strong>Last Name:</strong> ${formData.lastName}</p>
            <p><strong>Company Name:</strong> ${formData.companyName}</p>
            <p><strong>Business Phone:</strong> ${formData.businessPhone}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Years in Trade:</strong> ${formData.yearsInTrade}</p>
            <p><strong>Products Installed:</strong> ${formData.productsInstalled.join(', ')}</p>
            <p><strong>General Liabilities:</strong> ${formData.generalLiabilities}</p>
            <p><strong>Workers Comp:</strong> ${formData.workersComp}</p>
            <p><strong>Willing to Obtain Insurance:</strong> ${formData.willingToObtain}</p>
            <p><strong>Additional Comments:</strong> ${formData.additionalComments}</p>
            <footer style="margin-top: 20px; font-size: 12px; color: #333;">
              Sent from Your Website
            </footer>
          </body>
        </html>
      `,
      attachment: [
        {
          content: fs.readFileSync(pdfFilePath, { encoding: 'base64' }), // Read the PDF as base64
          name: `subcontractor_application_${formData.firstName}_${formData.lastName}_${Date.now()}.pdf`,
        },
      ],
    };

    // Send the email via Brevo
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_KEY,
      },
      body: JSON.stringify(emailData),
    });

    const responseBody = await response.json();

    // Clean up temporary file
    fs.unlinkSync(pdfFilePath);

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully' }),
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to send email', error: responseBody }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email', error: error.message }),
    };
  }
};
