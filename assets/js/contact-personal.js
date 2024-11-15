// Message character counter
const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');

textarea.addEventListener('input', function () {
    charCount.textContent = this.value.length;
});

// Submit the form
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    // get the name and email
    const name = document.getElementById('name-home').value;
    const email = document.getElementById('email-home').value;
    // get the selected value of the radio button
    const subscribe = document.querySelector('input[name="subscribe"]:checked')?.value;
    // get the message
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('contact-response-message');

    const response = await fetch("https://script.google.com/macros/s/AKfycbwIsZ0vP15UB35lOMzlbkj7XE8VKxk72WuxsluQKvShrzH8r8p35v1nXH0UzrWGmdCLNA/exec", {
        method: "POST",
        body: JSON.stringify({ name, email, subscribe, message})
    });

    if (response.ok) {

        // Display the success message
        responseMessage.innerHTML = `
        <div class="px-4">
            <p>Thank you for your message, we will get back to you as soon as possible.</p>
        </div>
        `;

    } else {
        responseMessage.innerHTML = `
        <div class="px-4">
            <p">Oops! Something went wrong. Please try again.</p>
        </div>
        `;
    }
});