function sendContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        alert("All fields are required.");
        return false;
    }

    const formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert(`Thank you, ${name}! Your message has been sent.`);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });

    return true;
}
