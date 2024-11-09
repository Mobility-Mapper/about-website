document.getElementById('subscribe-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch("https://script.google.com/macros/s/AKfycbxvia1M4cVNhTOoRg4ABBBNU_4e_b0DrKk4R_55ZPPrZhxxJg11jFU5v6v0YIODEnHR/exec", {
        method: "POST",
        body: JSON.stringify({ name, email })
    });

    if (response.ok) {
        alert("Thank you for subscribing!");
    } else {
        alert("Something went wrong. Please try again.");
    }
});