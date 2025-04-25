// Handling the contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Dziękujemy za kontakt, ' + name + '! Twoja wiadomość została wysłana.');
        // You can add an AJAX request here to actually send the message to a server.
        document.getElementById('contact-form').reset(); // Reset the form fields
    } else {
        alert('Proszę wypełnić wszystkie pola.');
    }
});
