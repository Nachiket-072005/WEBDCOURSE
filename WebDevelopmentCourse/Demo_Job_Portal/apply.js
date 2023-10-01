document.getElementById('apply-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const resume = document.getElementById('resume').files[0];

    // Add application submission logic here (e.g., send request to backend)
});
