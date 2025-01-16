const nodemailer = require('nodemailer');

// Create test account
const createTestAccount = async () => {
  const testAccount = await nodemailer.createTestAccount();
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });

  return transporter;
};

const sendEmail = async ({ name, email, message }) => {
  try {
    const transporter = await createTestAccount();
    
    const mailOptions = {
      from: '"Contact Form" <test@example.com>',
      to: 'recipient@example.com',
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    return info;
  } catch (error) {
    console.error('Error in sendEmail:', error);
    throw error;
  }
};

module.exports = sendEmail;
