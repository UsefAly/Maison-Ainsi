// Initialize EmailJS
// Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
emailjs.init('F5YJ3AY0z3qU_ZmGZ');

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const messageElement = document.querySelector('.form-message');
    const submitButton = this.querySelector('button');
    const originalButtonText = submitButton.textContent;
    
    // Disable the submit button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<span style="opacity: 0.8;">SIGNING UP</span>';
    messageElement.style.display = 'none';
    messageElement.classList.remove('success');

    // Send the email using EmailJS
    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
    emailjs.send('service_cwr69rt', 'template_vfpwc8k', {
        email: email,
        to_name: 'AINSI Team',
        message: `New signup from: ${email}`
    })
    .then(function() {
        // Success message
        messageElement.textContent = 'Thank you for signing up, we will notify you when we launch.';
        messageElement.style.color = 'var(--text-color)';
        messageElement.style.display = 'block';
        messageElement.classList.add('success');
        document.getElementById('email').value = '';
    })
    .catch(function(error) {
        // Error message
        messageElement.textContent = 'Sorry, there was an error. Please try again later.';
        messageElement.style.color = '#ff6b6b';
        messageElement.style.display = 'block';
        console.error('EmailJS Error:', error);
    })
    .finally(function() {
        // Re-enable the submit button and restore original text
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    });
}); 