const scriptURL = 'https://script.google.com/macros/s/AKfycbxBUlu4im6s1RhKQnL34kRBZn0efVlBS62cy7RDhWI/dev'


const form = document.forms['PlaymasterPreregistration']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'doPOST', body: new FormData(form) })
  .then(response => alert("Thank you! your form is submitted successfully."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
