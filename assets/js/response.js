const scriptURL = 'https://script.google.com/macros/s/AKfycbxwi1TbPCzDRDK8FKUdHcg9POXBSp0yJn9Lw3XLB-YWAODyy4eZvPgmrCS2K_c3x-EB/exechttps://script.google.com/macros/s/AKfycbzmKfw-GhAD1Jf38FsnnMEf38L5tzzFHFKmBHv1A3YdiOZnqL0P8BwHgL0-s9HIKMGfVg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})