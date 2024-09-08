document.addEventListener('DOMContentLoaded', () => {
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const forgotPasswordSection = document.getElementById('forgot-password-section');
    const loginForm = document.getElementById('login-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const verifyCodeSection = document.getElementById('verify-code-section');
    const verifyCodeButton = document.getElementById('verify-code-button');

    // Show the forgot password form when the link is clicked
    forgotPasswordLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginForm.style.display = 'none';
        forgotPasswordSection.style.display = 'block';
    });

    // Handle form submission for sending the verification code
    forgotPasswordForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Simulate sending code and show verification section
        forgotPasswordForm.style.display = 'none';
        verifyCodeSection.style.display = 'block';
    });

    // Handle verification code submission
    verifyCodeButton.addEventListener('click', () => {
        const code = document.getElementById('verification-code').value;
        // Simulate code verification
        if (code === '123456') { // Replace with actual code verification logic
            alert('Code verified successfully!');
            // Redirect or show password reset options
        } else {
            alert('Invalid code. Please try again.');
        }
    });
});
