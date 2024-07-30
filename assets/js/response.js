document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var formData = new FormData(this);
  var data = {};
  formData.forEach(function(value, key){
    data[key] = value;
  });

  fetch('https://script.google.com/macros/s/AKfycbzl-Us7NdmIMXrngYzP4-ju2nf_gTPkACGY4JvhGYnkaWz5GVoNGSTOg_TMSHa94clSrQ/exec', { // Replace with your web app URL
    method: 'POST',
    contentType: 'application/json',
    body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(result => {
    alert('Form submitted successfully!');
  })
  .catch(error => {
    alert('Error submitting form: ' + error.message);
  });
});