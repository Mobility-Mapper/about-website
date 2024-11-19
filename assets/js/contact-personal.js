// Message character counter
const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');

textarea.addEventListener('input', function () {
    charCount.textContent = this.value.length;
});


// contact form submission
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name-home').value;
    const email = document.getElementById('email-home').value;
    // Get the selected value of the radio button
    const subscribe = document.querySelector('input[name="subscribe"]:checked')?.value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('contact-message');
    const form = document.getElementById('contact-form');

    const response = await fetch("https://script.google.com/macros/s/AKfycbz4qhlMo7VSXaQjUC94OZHrgJjMG3FYl9-TZgJJQU3ixixpZAPG9lpdGymAgK5GyPHz/exec", {
        method: "POST",
        body: JSON.stringify({ name, email, subscribe, message })
    });

    if (response.ok) {

        // Display the success message
        responseMessage.innerHTML = `
                 <div class="px-4 pt-4 text-center">
                    <p>Thank you for your message, we will get back to you as soon as possible.</p>
                 </div>
                `;

        // Hide the form
        form.style.display = 'none';

    } else {
        responseMessage.innerHTML = '<p class="text-danger">Oops! Something went wrong. Please try again.</p>';
    }
});
