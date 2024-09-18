const scriptURL = 'https://script.google.com/macros/s/AKfycbz2cJbZ6wBcRMneS_z_znoovM9KkgWWF1uxSYDTgwYOcklsBXkSUBTdZnlCoL5LAzWfHg/exec'


const form = document.forms['PlaymasterPreregistration']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'doPOST', body: new FormData(form) })
  .then(response => alert("Thank you! your form is submitted successfully."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
