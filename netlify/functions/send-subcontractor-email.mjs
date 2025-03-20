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
    const page = pdfDoc.addPage([612, 792]); // Standard US Letter size
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    
    // Colors
    const primaryColor = rgb(0.577, 0.078, 0.227); // #93143A
    const textColor = rgb(0.15, 0.15, 0.15);
    const lineColor = rgb(0.8, 0.8, 0.8);
    
    // Margins and spacing
    const marginLeft = 60;
    const marginRight = 60;
    const pageWidth = page.getWidth() - marginLeft - marginRight;
    
    // Header with logo placeholder and title
    page.drawRectangle({
      x: 0,
      y: 732,
      width: page.getWidth(),
      height: 60,
      color: primaryColor,
    });
    
    page.setFont(helveticaBold);
    page.setFontSize(22);
    page.drawText('Subcontractor Application Form', { 
      x: marginLeft, 
      y: 755, 
      color: rgb(1, 1, 1) 
    });
    
    // Current date
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
    page.setFont(helveticaFont);
    page.setFontSize(10);
    page.drawText(`Date: ${currentDate}`, { 
      x: marginLeft, 
      y: 715, 
      color: textColor 
    });
    
    // Helper function for drawing sections
    const drawSection = (title, data, startY) => {
      let y = startY;
      
      // Section Title
      page.setFont(helveticaBold);
      page.setFontSize(14);
      page.drawText(title, { 
        x: marginLeft, 
        y, 
        color: primaryColor 
      });
      
      // Draw a line below the section title
      y -= 10;
      page.drawLine({
        start: { x: marginLeft, y },
        end: { x: page.getWidth() - marginLeft, y },
        thickness: 1,
        color: lineColor,
      });
      
      y -= 25;
      
      // Draw fields in two columns if possible
      page.setFont(helveticaFont);
      page.setFontSize(11);
      
      // Calculate if we should use columns (only for short field values)
      const useColumns = data.length >= 4 && !data.some(item => 
        (item.value && item.value.length > 30) || item.multiline);
      
      if (useColumns) {
        const col1X = marginLeft;
        const col2X = marginLeft + pageWidth / 2 + 10;
        const itemsPerColumn = Math.ceil(data.length / 2);
        
        data.forEach((item, index) => {
          const colX = index < itemsPerColumn ? col1X : col2X;
          const rowIndex = index < itemsPerColumn ? index : index - itemsPerColumn;
          const rowY = y - (rowIndex * 25);
          
          const fieldValue = item.value || 'N/A';
          
          page.setFont(helveticaBold);
          page.drawText(`${item.label}:`, { 
            x: colX, 
            y: rowY, 
            color: textColor 
          });
          
          page.setFont(helveticaFont);
          page.drawText(`${fieldValue}`, { 
            x: colX + 120, 
            y: rowY, 
            color: textColor 
          });
        });
        
        return y - (itemsPerColumn * 25) - 30;
      } else {
        // Single column layout for longer fields
        data.forEach((item) => {
          const fieldValue = item.value || 'N/A';
          
          page.setFont(helveticaBold);
          page.drawText(`${item.label}:`, { 
            x: marginLeft, 
            y, 
            color: textColor 
          });
          
          page.setFont(helveticaFont);
          if (item.multiline && fieldValue.length > 60) {
            // Handle multiline text for longer fields like comments
            const words = fieldValue.split(' ');
            let line = '';
            let lineY = y - 20;
            
            words.forEach(word => {
              const testLine = line + (line ? ' ' : '') + word;
              if (testLine.length > 70) {
                page.drawText(line, { 
                  x: marginLeft, 
                  y: lineY, 
                  color: textColor 
                });
                line = word;
                lineY -= 20;
              } else {
                line = testLine;
              }
            });
            
            if (line) {
              page.drawText(line, { 
                x: marginLeft, 
                y: lineY, 
                color: textColor 
              });
              lineY -= 20;
            }
            
            y = lineY;
          } else {
            page.drawText(`${fieldValue}`, { 
              x: marginLeft + 150, 
              y, 
              color: textColor 
            });
            y -= 25;
          }
        });
        
        return y - 20;
      }
    };
    
    // Personal Information Section
    let currentY = 680;
    
    const personalInfo = [
      { label: 'First Name', value: formData.firstName },
      { label: 'Last Name', value: formData.lastName },
      { label: 'Company Name', value: formData.companyName },
      { label: 'Business Phone', value: formData.businessPhone },
      { label: 'Email', value: formData.email },
      { label: 'Address', value: formData.address }
    ];
    
    currentY = drawSection('Personal Information', personalInfo, currentY);
    
    // Work Experience Section
    const workExperience = [
      { label: 'Years in Trade', value: formData.yearsInTrade },
      { label: 'Products Installed', value: formData.productsInstalled.join(', ') },
      { label: 'General Liabilities', value: formData.generalLiabilities },
      { label: 'Workers Comp', value: formData.workersComp },
      { label: 'Willing to Obtain Insurance', value: formData.willingToObtain }
    ];
    
    currentY = drawSection('Work Experience', workExperience, currentY);
    
    // Additional Information Section
    const additionalInfo = [
      { label: 'Additional Comments', value: formData.additionalComments, multiline: true }
    ];
    
    currentY = drawSection('Additional Information', additionalInfo, currentY);
    
    // Add footer
    page.setFont(helveticaFont);
    page.setFontSize(9);
    page.drawText('American Flooring Services - Subcontractor Application', {
      x: marginLeft,
      y: 40,
      color: textColor
    });
    
    page.drawText('Page 1 of 1', {
      x: page.getWidth() - marginLeft - 50,
      y: 40,
      color: textColor
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
      sender: { email: 'adivrskic@adivrskic.dev' },
      to: [{ email: 'info@americanflooringservices.com' }],
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
