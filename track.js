document.getElementById('track-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const appNumber = document.getElementById('app-number').value;
    const trackResult = document.getElementById('track-result');
    const statusMessage = document.getElementById('status-message');

    // Simulating application tracking
    if (appNumber === 'AYUSH123') {
        statusMessage.innerText = 'Your application is under review.';
    } else {
        statusMessage.innerText = 'Invalid application number. Please try again.';
    }

    trackResult.style.display = 'block';
});
