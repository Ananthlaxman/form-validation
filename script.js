document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page reload
    const errors = [];

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorContainer = document.getElementById("errorMessages");
    errorContainer.innerHTML = "";

    // Name validation
    if (name.length < 5) {
      errors.push("Full Name must be at least 5 characters.");
    }

    // Email validation
    if (!email.includes("@")) {
      errors.push("Enter a valid email containing '@'.");
    }

    // Phone number validation
    if (phone === "123456789" || !/^\d{10}$/.test(phone)) {
      errors.push("Enter a valid 10-digit phone number.");
    }

    // Password validation
    if (password.toLowerCase() === "password" || password.toLowerCase() === name.toLowerCase() || password.length < 8) {
      errors.push("Password must be strong, not 'password' or your name, and at least 8 characters long.");
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
      errorContainer.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
    } 
    else {
      alert("Form submitted successfully!");
      document.getElementById("registrationForm").reset(); // Clear form
    }
  });