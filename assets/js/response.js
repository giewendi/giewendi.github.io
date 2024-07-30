document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', submitForm);
  } else {
    console.error('Form element not found.');
  }
});

function submitForm(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  const form = document.getElementById('contactForm');
  if (!form) {
    console.error('Form element not found during submit.');
    return;
  }

  const formData = new FormData(form);

  console.log('Submitting form...');
  console.log([...formData.entries()]); // Log the form data being sent

  fetch('https://script.google.com/macros/s/AKfycbyPo_JacUPSYZkmReMg8DE8a16ELKw-WsgrMmvGSWjahgmAe6ahgMizkbp2iSEJ-2kuHg/exec', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    console.log('Response from server:', data); // Log the response from the server
    if (data.result === 'success') {
      alert('Thank you! your form is submitted successfully.');
      location.reload();
    } else {
      alert('Error: ' + data.error);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred while submitting the form.');
  });
}
