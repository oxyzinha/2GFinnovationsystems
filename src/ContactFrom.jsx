// ContactFrom.jsx
const sendEmail = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
  
    // Send the form data to the backend API
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });
  
      const result = await response.json();
      console.log('Email sent:', result);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  // Form submission handler
  return (
    <form onSubmit={sendEmail}>
      {/* Your form fields here */}
    </form>
  );
  