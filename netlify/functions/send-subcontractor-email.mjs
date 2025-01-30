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
    const page = pdfDoc.addPage([600, 800]); // Increased page height for better spacing
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  
    // Title
    const titleColor = rgb(0.577, 0.078, 0.227); // #93143A
    page.setFont(timesRomanFont);
    page.setFontSize(32);
    page.drawText('Subcontractor Application Form', { x: 50, y: 750, color: titleColor });
  
    // Add section for Personal Information
    page.setFontSize(18);
    page.drawText('Personal Information', { x: 50, y: 720, color: rgb(0, 0, 0) });
  
    // Add the form data with proper labels
    page.setFontSize(14);
    let y = 680; // Starting position
    const sectionData = [
      { label: 'First Name:', value: formData.firstName },
      { label: 'Last Name:', value: formData.lastName },
      { label: 'Email:', value: formData.email },
      { label: 'Phone:', value: formData.phone },
      { label: 'Address:', value: formData.address },
    ];
  
    sectionData.forEach((item) => {
      const fieldValue = item.value || 'N/A';
      page.drawText(`${item.label} ${fieldValue}`, { x: 50, y });
      y -= 20; // Move to the next line
    });
  
    // Add section for other relevant information (e.g., experience, services)
    page.setFontSize(18);
    page.drawText('Work Experience', { x: 50, y: y - 20, color: rgb(0, 0, 0) });
  
    y -= 40; // Add extra space between sections
    const experienceData = [
      { label: 'Years of Experience:', value: formData.experienceYears },
      { label: 'Previous Employers:', value: formData.previousEmployers },
      { label: 'Services Provided:', value: formData.services },
    ];
  
    experienceData.forEach((item) => {
      const fieldValue = item.value || 'N/A';
      page.drawText(`${item.label} ${fieldValue}`, { x: 50, y });
      y -= 20; // Move to the next line
    });
  
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
