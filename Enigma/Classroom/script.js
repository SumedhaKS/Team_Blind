function login() {
    var userType = document.getElementById("userType").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform client-side validation
    if (!username || !password) {
        alert("Please enter both username and password");
        return;
    }

    // Perform authentication (this is just a mock, not secure for production)
    if (userType === "student") {
        alert("Student login successful");
        // Redirect or perform additional actions for student login
    } else if (userType === "tutor") {
        alert("Tutor login successful");
        // Redirect or perform additional actions for tutor login
    } else {
        alert("Invalid user type");
    }
}
