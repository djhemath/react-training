const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");

const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("registration-form");

const emailErr = document.getElementById('email-err');
const passwordErr = document.getElementById('password-err');
const confirmPasswordErr = document.getElementById('confirm-password-err');



// submitBtn.addEventListener('click', () => {
form.addEventListener('submit', (e) => {

  e.preventDefault();

  const email = emailField.value;
  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;

  let isValid = true;

  if(!email || !email.includes('@') || !email.includes('.')) {
    emailField.style.border = '1px solid red';
    emailErr.style.display = 'block';

    isValid = false;
  } else {
    emailField.style.border = '';
    emailErr.style.display = 'none';
  }

  if(!password || password.length < 6) {
    passwordField.style.border = '1px solid red';
    passwordErr.style.display = 'block';
    
    isValid = false;
  } else {
    passwordField.style.border = '';
    passwordErr.style.display = '';
  }

  if(confirmPassword !== password) {
    confirmPasswordField.style.border = '1px solid red';
    confirmPasswordErr.style.display = 'block';

    isValid = false;
  } else {
    confirmPasswordField.style.border = '';
    confirmPasswordErr.style.display = '';
  }

  // All valid
  if(isValid) {
    alert('Yay, Everything is valid!');
  }
});