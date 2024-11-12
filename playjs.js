const scriptURL = 'https://script.google.com/macros/s/AKfycbw-4FyCYC1hEQ-lLumUE1OMq1mr6wKc0bXZqmL3PO211BX5bhDPAlnUL8Krj7wic9qm/exec'


const form = document.forms['Playmasterregistration']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'doPOST', body: new FormData(form) })
  .then(response => alert("Thank you! your form is submitted successfully."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  if (form.checkValidity()) {
    // Disable the button to prevent multiple submissions
    submit.disabled = true;

    // Show loading message
    const loading = document.getElementById('loading');
    loading.style.display = 'block';

    // Simulate a loading delay
    setTimeout(() => {
        // Hide loading and show popup
        loading.style.display = 'none';
        const popup = document.getElementById('popup');
        popup.style.display = 'flex';

        // Clear the form fields
        form.reset();

        // Optionally, you can re-enable the button here if needed
        // submitButton.disabled = false; // Uncomment to enable it again
    }, 2000); // 2 seconds delay for demo
} else {
    // If the form is invalid, trigger the native validation UI
    form.reportValidity();
}
})
