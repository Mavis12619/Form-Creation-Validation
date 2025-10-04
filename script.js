document.addEventListener('DOMContentLoaded', function () {
    console.log("This DOM is fully loaded and ready!");
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Form submitted');
    });
});

// Step 3: Retrieve and trim user inputs
const username = document.getElementById("username").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

console.log("Username:", username);
console.log("Email:", email);
console.log("Password:", password);

// Step 4: Initialize validation variables
let isValid = true;
let messages = [];

// Username validation
if (username.length < 3) {
    isValid = false;
    messages.push("Username must be at least 3 characters long.");
}

// Email validation
if (!email.includes("@") || !email.includes(".")) {
    isValid = false;
    messages.push("Please enter a valid email address.");
}

// Password validation
if (password.length < 8) {
    isValid = false;
    messages.push("Password must be at least 8 characters long.");
}

// Step 5: Display feedback
feedbackDiv.style.display = "block"; // make the feedback div visible

if (isValid) {
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745"; // green
    feedbackDiv.style.backgroundColor = "#d4edda";
} else {
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545"; // red
    feedbackDiv.style.backgroundColor = "#f8d7da";
}