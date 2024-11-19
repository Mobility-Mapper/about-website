// Get the backtotop button
const backToTopButton = document.getElementById('backToTop');

// Show the button when the user scrolls down 100px
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "flex"; // Show the button
    } else {
        backToTopButton.style.display = "none"; // Hide the button
    }
};

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to the top
    });
});
