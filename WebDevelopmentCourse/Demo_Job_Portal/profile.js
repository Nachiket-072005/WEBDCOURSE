document.addEventListener('DOMContentLoaded', function() {
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        // Add more user information as needed
    };

    const profileInfo = document.getElementById('profile-info');
    
    function displayUserProfile() {
        profileInfo.innerHTML = `
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
        `;
    }

    displayUserProfile();
});
