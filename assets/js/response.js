function submitForm(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  const form = document.getElementById('contact');
  const formData = new FormData(form);

  console.log('Submitting form...');
  console.log([...formData.entries()]); // Log the form data being sent

  fetch('https://script.google.com/macros/s/AKfycbyDm9F7Dx23g_slqz4QdppdwpiIJDu3q_BXFBNnzR8EHOiJQNewwigLOR0hjcFkZJso7w/exec', {
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