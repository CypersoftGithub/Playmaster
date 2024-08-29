const scriptURL = 'https://script.google.com/macros/s/AKfycbwhc6Fs0P7ggAjC8I5diTMyrAWQ6w99gxWz8K84qQn7ucRhCHvcKfZt0hMdWUuOTQdG/exec'


const form = document.forms['Playmasterregistration']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})