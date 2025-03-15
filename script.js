document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').alue;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && emil && message) {
        alert('Thank You For Your Message, ' +name + '! I Will Get Back To You Shortly.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please Fill In All The Fields.');
    }

});