document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#registrationForm');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const confirmEmailInput = document.querySelector('#confirmEmail');
    const textInput = document.querySelectorAll(".text-input")

    const nameError = document.querySelector('#nameError');
    const emailError = document.querySelector('#emailError');
    const confirmEmailError = document.querySelector('#confirmEmailError');

    nameInput.addEventListener('input', () => validateName());
    emailInput.addEventListener('input', () => validateEmail());

    form.addEventListener('submit', (event) => {
        let isValid = true;

        if (!validateName()) { isValid = false; }
        if (!validateEmail()) { isValid = false; }
        if (!validateConfirmEmail()) { isValid = false; }

        if (!isValid) {
            event.preventDefault();
        }
    });

    for (let i = 0; i < textInput.length; i++) {
        textInput[i].addEventListener('focus', () => {
            if (textInput[i].value === "Required") {
                textInput[i].value = "";
            }
        });

        textInput[i].addEventListener('blur', () => {
            if (textInput[i].value === "") {
                textInput[i].value = "Required";
            }
        });
    };



    function validateName() {
        if (nameInput.value === '' || nameInput.value === "Required") {
            nameError.innerText = 'Name is required.';
            return false;
        } else {
            nameError.innerText = '';
            return true;
        }
    }

    function validateEmail() {
        if (emailInput.value === '' || emailInput.value === "Required") {
            emailError.innerText = 'Email is required.';
            return false;
        } else {
            emailError.innerText = '';
            return true;
        }
    }

    function validateConfirmEmail() {
        if (confirmEmailInput.value === '' || confirmEmailInput.value === "Required") {
            confirmEmailError.innerText = 'Email is required.';
            return false;
        } else if (confirmEmailInput.value !== emailInput.value && emailInput.value != '' && emailInput.value != "Required") {
            confirmEmailError.innerText = 'Emails do not match.';
            return false;
        } else {
            confirmEmailError.innerText = '';
            return true;
        }
    }
});
