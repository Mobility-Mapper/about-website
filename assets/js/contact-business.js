// Message character counter
const textarea = document.getElementById('message-biz');
const charCount = document.getElementById('charCountBiz');

textarea.addEventListener('input', function () {
    charCount.textContent = this.value.length;
});


// contact form submission
document.getElementById('business-contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const org = document.getElementById('org').value;
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('email-biz').value;
    // Get the selected value of the radio button
    const discuss = document.querySelector('input[name="discussion"]:checked')?.value;
    const message = document.getElementById('message-biz').value;

    const responseMessage = document.getElementById('biz-contact-message');
    const form = document.getElementById('business-contact-form');

    const response = await fetch("https://script.google.com/macros/s/AKfycbwUjmcBqVbhV8wyAE00Pcg25529p09kEUidlEijd0ViDIZb1_ELPUZfV0ceJnrOS3YofQ/exec", {
        method: "POST",
        body: JSON.stringify({ org, name, email, discuss, message })
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
