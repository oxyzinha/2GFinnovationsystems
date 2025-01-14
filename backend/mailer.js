const nodemailer = require('nodemailer');

// Create the transporter using the Gmail SMTP service
const transporter = nodemailer.createTransport({
    service: 'gmail',  // Use Gmail service
    auth: {
        user: process.env.EMAIL_USER, // Email address from the .env file
        pass: process.env.EMAIL_PASS  // App password or your email password
    }
});

// Function to send the email
const sendEmail = async (to, subject, text, html) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender's email address
        to,  // Receiver's email address
        subject,  // Subject of the email
        text,  // Text body
        html  // HTML body
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};

module.exports = sendEmail;
