const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Only POST requests are allowed' }),
    };
  }

  const { name, phone, email, comments } = JSON.parse(event.body);

  const API_KEY = process.env.BREVO_API_KEY; // Store your Brevo API key in the environment variables
  const url = 'https://api.brevo.com/v3/smtp/email';

  const emailData = {
    sender: { email: 'your-email@example.com' },  // Replace with your sender email
    to: [{ email: 'recipient@example.com' }],    // Replace with the recipient email
    subject: `New contact form submission from ${name}`,
    htmlContent: `
      <h2>New Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Comments:</strong> ${comments}</p>
    `,
  };

  try {
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
