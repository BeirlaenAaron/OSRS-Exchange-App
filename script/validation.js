let email = {},
    signInButton;

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
};

const getDOMElements = function() {
    email.field = document.querySelector('.js-email-field');
    email.errorMessage = document.querySelector('.js-email-error');
    email.input = document.querySelector('.js-email-input');
    signInButton = document.querySelector('.js-email-button');
}

const addErrors = function(formField, errorField, errorMessage) {
    formField.classList.add('has-error');
    errorField.style.opacity = '100';
    errorField.innerHTML = errorMessage;
    signInButton.disabled = true;
}

const removeErrors = function(formField, errorField) {
    formField.classList.remove('has-error');
    errorField.style.opacity = '0';
    signInButton.disabled = false;
}

const doubleCheckEmailAddress = function() {
    if (!isEmpty(email.input.value) && isValidEmailAddress(email.input.value)) {
        removeErrors(email.field, email.errorMessage);
        email.input.removeEventListener('input', doubleCheckEmailAddress);
    } else {
        addErrors(email.field, email.errorMessage, 'The email is incorrect');
    }
}
 
const enableListeners = function() {
    email.input.addEventListener('blur', function() {
        if (isEmpty(email.input.value) && !isValidEmailAddress(email.input.value)) {
            addErrors(email.field, email.errorMessage, 'This field is required.');

            email.input.addEventListener('input', doubleCheckEmailAddress);
        } else {
            if (isEmpty(email.input.value)) {
                removeErrors(email.field, email.errorMessage);
                email.input.removeEventListener('input', doubleCheckEmailAddress);
            }
        }
    });

    signInButton.addEventListener('click', function() {})
}

document.addEventListener('DOMContentLoaded', function() {
    console.info('DOM LOADED')
    getDOMElements();
    enableListeners();
})