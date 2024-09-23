const scriptURL = 'https://script.google.com/macros/s/AKfycbzoEowW6af1FCSt0c_nm6fqfQYv5DBAPQ-VxVjgAO-zv6AKyZo5bgYWAtDkPjarzOYm/exec'


const form = document.forms['PlaymasterPreregistration']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'doPOST', body: new FormData(form) })
  .then(response => alert("Thank you! your form is submitted successfully."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
