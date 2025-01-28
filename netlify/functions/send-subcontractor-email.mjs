import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fetch from 'node-fetch';

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
  const generateSubcontractorPDF = async (formData) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 700]); // Define page size (width x height)
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const { firstName, lastName } = formData;

    // Add content to the PDF
    page.setFont(timesRomanFont);
    page.setFontSize(20);
    page.drawText('Subcontractor Application Form', { x: 50, y: 650, color: rgb(0.2, 0.4, 0.8) });

    page.setFontSize(12);
    let y = 620; // Starting position
    for (const [key, value] of Object.entries(formData)) {
      const fieldValue = Array.isArray(value) ? value.join(', ') : value || 'N/A';
      page.drawText(`${key}: ${fieldValue}`, { x: 50, y });
      y -= 20; // Move to the next line
    }

    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();
    return Buffer.from(pdfBytes).toString('base64'); // Convert to Base64
  };

  try {
    // Generate the PDF as Base64
    const pdfBase64 = await generateSubcontractorPDF(formData);

    // Prepare email data with the correctly structured attachment
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
          name: `subcontractor_application_${formData.firstName}_${formData.lastName}.pdf`,
          content: pdfBase64, // Attach the PDF as Base64
          contentType: 'application/pdf', // Correct content type for PDF
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
