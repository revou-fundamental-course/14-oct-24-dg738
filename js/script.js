document.addEventListener('DOMContentLoaded', function() {
    const name = prompt("Please enter your name:");
    document.getElementById('welcome-message').textContent = `Hi ${name}!`;
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        alert("All fields are required.");
        return false;
    }

    alert(`Thank you, ${name}! Your message has been received.`);
    return true;
}
