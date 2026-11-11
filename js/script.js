// Updated Form Handler for Frontend-only Live Server testing
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop default action
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const errorMsg = document.getElementById('error-msg');

        if (name === "" || email === "" || message === "") {
            errorMsg.textContent = "All fields are required!";
            return;
        }

        // Show success confirmation directly on the page
        document.querySelector('.content-section').innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h2 style="color: #28a745;">Thank you, ${name}!</h2>
                <p>Your message has been successfully sent and saved.</p>
                <a href="index.html" class="btn" style="margin-top: 20px; display: inline-block;">Back to Home</a>
            </div>
        `;
    });
}