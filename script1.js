const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Function to validate fields
function validateFields() {
    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === '') {
        nameError.classList.remove('hidden');
        isValid = false;
    } else {
        nameError.classList.add('hidden');
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.classList.remove('hidden');
        isValid = false;
    } else {
        emailError.classList.add('hidden');
    }

    // Validate Password
    if (passwordInput.value.length < 6) {
        passwordError.classList.remove('hidden');
        isValid = false;
    } else {
        passwordError.classList.add('hidden');
    }

    // Enable or disable the submit button
    submitBtn.disabled = !isValid;
}

// Add event listeners for real-time validation
nameInput.addEventListener('input', validateFields);
emailInput.addEventListener('input', validateFields);
passwordInput.addEventListener('input', validateFields);

// Prevent form submission for demonstration purposes
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (!submitBtn.disabled) {
        alert('Form submitted successfully!');
    }
});
