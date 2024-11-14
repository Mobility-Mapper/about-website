document.getElementById('subscribe-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const responseMessage = document.getElementById('response-message');
    const modalBody = document.querySelector('.modal-body');

    const response = await fetch("https://script.google.com/macros/s/AKfycbxvia1M4cVNhTOoRg4ABBBNU_4e_b0DrKk4R_55ZPPrZhxxJg11jFU5v6v0YIODEnHR/exec", {
        method: "POST",
        body: JSON.stringify({ name, email })
    });

    if (response.ok) {

        // Display the success message
        responseMessage.innerHTML = `
        <p class="text-success p-responsive m-3">Thank you for subscribing!</p>
        <button type="button" class="btn m-3 modal-button" data-bs-dismiss="modal">
            Close window 
        </button>`;

        // Hide the modal body
        modalBody.style.display = 'none';

    } else {
        responseMessage.innerHTML = '<p class="text-danger">Oops! Something went wrong. Please try again.</p>';
    }
});

const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');

textarea.addEventListener('input', function () {
    charCount.textContent = this.value.length;
});