const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('#nav-links');

const emailInput = document.querySelector('#email');
const confirmEmailInput = document.querySelector('#confirm-email');

const emailError = document.querySelector('#emailError');
const confirmEmailError = document.querySelector('#confirmEmailError');

// Hamburger
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Modal
document.querySelectorAll('.subscribe').forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.modal').classList.remove('hidden');
  });
});

document.querySelector('#cancel').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('hidden');
});

// Form validation
emailInput.addEventListener('blur', () => validateEmail());
confirmEmailInput.addEventListener('blur', () => validateConfirmEmail());


document.querySelector('.subscribe-form').addEventListener('submit', (event) => {
  let isValid = true;

  if (!validateEmail()) { isValid = false; }
  if (!validateConfirmEmail()) { isValid = false; }

  if (!isValid) {
    event.preventDefault();
  } else {
    document.querySelector('.modal').classList.add('hidden');
    alert(`Subscribed successfully with email: ${emailInput.value}`);
  }
});

function validateEmail() {
  if (emailInput.value === '') {
    emailError.innerText = 'This field is required';
    return false;
  } else if (!emailInput.value.includes('@')) {
    emailError.innerText = 'This field must be a valid address including a @';
    return false;
  } else {
    emailError.innerText = '';
    return true;
  }
}

function validateConfirmEmail() {
  if (confirmEmailInput.value === '') {
    confirmEmailError.innerText = 'This field is required';
    return false;
  } else if (confirmEmailInput.value !== emailInput.value) {
    confirmEmailError.innerText = 'This field must match the provided email address';
    return false;
  } else {
    confirmEmailError.innerText = '';
    return true;
  }
}

