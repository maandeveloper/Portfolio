// Add form submission functionality
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Simple form validation
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Mock form submission logic
    alert('Thank you for your message! We will get back to you soon.');
  
    // Clear the form
    event.target.reset();
  });
  