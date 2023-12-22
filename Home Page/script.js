function signUp() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Perform client-side validation
    if (!fullName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Here you would typically send a request to the backend to create a new user account.
    // For simplicity, I'm just displaying an alert in this example.
    alert("Account created successfully!");
}