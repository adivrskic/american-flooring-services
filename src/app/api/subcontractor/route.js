// /app/api/subcontractor/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    // Destructure form data
    const {
      firstName,
      lastName,
      companyName,
      address,
      city,
      state,
      zip,
      businessPhone,
      altPhone,
      email,
      yearsInTrade,
      productsInstalled,
      generalLiabilities,
      workersComp,
      willingToObtain,
      additionalComments,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !businessPhone) {
      return new Response(JSON.stringify({ error: "Required fields are missing." }), { status: 400 });
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com", // Brevo SMTP server
      port: 587,
      auth: {
        user: process.env.BREVO_EMAIL, // Brevo email
        pass: process.env.BREVO_API_KEY, // Brevo SMTP key
      },
    });

    // Email content
    const mailOptions = {
      from: `"Subcontractor Application" <${process.env.BREVO_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL, // Set the recipient email
      subject: "New Subcontractor Application",
      html: `
        <h3>Subcontractor Application</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Zip:</strong> ${zip}</p>
        <p><strong>Business Phone:</strong> ${businessPhone}</p>
        <p><strong>Alternate Phone:</strong> ${altPhone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Years in Trade:</strong> ${yearsInTrade}</p>
        <p><strong>Products Installed:</strong> ${productsInstalled.join(", ")}</p>
        <p><strong>General Liabilities:</strong> ${generalLiabilities}</p>
        <p><strong>Workers Compensation:</strong> ${workersComp}</p>
        <p><strong>Willing to Obtain:</strong> ${willingToObtain}</p>
        <p><strong>Additional Comments:</strong> ${additionalComments}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Application submitted successfully!" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to submit application." }), { status: 500 });
  }
}
