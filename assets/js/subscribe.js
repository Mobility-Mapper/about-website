document.getElementById('subscribe-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const responseMessage = document.getElementById('response-message');
    const modalBody = document.querySelector('.modal-body');

    const response = await fetch("https://script.google.com/macros/s/AKfycbwgmMyjR-TwJYcBME2FoLJllNBG2wGDZ7uLOLICHlxWA5tMdP3lm8H7A-BXVuwCRuVc8Q/exec", {
        method: "POST",
        body: JSON.stringify({ name, email })
    });

    if (response.ok) {

        // Display the success message
        responseMessage.innerHTML = `
                <div class="px-4">
                    <p>Thank you for subscribing!</p>
                    <button type="button" class="btn my-4 button-orange" data-bs-dismiss="modal">
                        Close window 
                    </button>
                </div>
                `;

        // Hide the modal body
        modalBody.style.display = 'none';

    } else {
        responseMessage.innerHTML = '<p class="text-danger">Oops! Something went wrong. Please try again.</p>';
    }
});