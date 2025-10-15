document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var submitBtn = this.querySelector('button[type="submit"]');
  var originalBtnText = submitBtn.textContent;

  // Disable button and show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  var formData = new FormData(this);

  // Convert FormData to URL parameters for Google Apps Script
  var params = new URLSearchParams(formData).toString();
  var url = 'https://script.google.com/macros/s/AKfycbxGqbKH75_2wqvls-sfK__e1RpE6p-vzDZouG0Lmb6zG6yyuy12tWiX6t6Lsckq1245gQ/exec?' + params;

  // Use fetch with no-cors mode to bypass CORS restrictions
  fetch(url, {
    method: 'GET',
    mode: 'no-cors',
    redirect: 'follow'
  })
  .then(function() {
    // With no-cors, we can't read the response, so assume success
    alert('✓ Message sent successfully! I will get back to you soon.');
    document.getElementById('contactForm').reset();
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  })
  .catch(function(error) {
    console.error('Error:', error);
    alert('⚠ Could not send message. Please email me directly at giewenpinlac@gmail.com');
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  });
});
