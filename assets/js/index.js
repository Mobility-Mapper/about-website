window.addEventListener('load', adjustPosition);
window.addEventListener('resize', adjustPosition);

function adjustPosition() {
    // Get the bottom position of #cover-title
    const coverTitle = document.getElementById('cover-title');
    const coverTextCall = document.getElementById('cover-text-call');

    if (coverTitle && coverTextCall) {
        // Get the bottom position of #cover-title
        const rect = coverTitle.getBoundingClientRect();
        const bottomPosition = rect.bottom;

        // Set the top property of #cover-text-call based on #cover-title's bottom
        coverTextCall.style.top = `${bottomPosition}px`; // Add some spacing if needed
    }
}
