function allFieldsFilled(fields) {
    return fields.every(field => field.value.trim() !== '');
}

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const phoneField = document.getElementById('phoneField');
const addressField = document.getElementById('addressField');

[firstName, lastName, email].forEach(field => {
    field.addEventListener('input', () => {
        const isNameFilled = firstName.value.trim() !== '' && lastName.value.trim() !== '';
        const isEmailFilled = email.value.trim() !== '' && email.value.includes('@') && email.value.includes('.');

        if (isNameFilled && isEmailFilled) {
            phoneField.style.display = 'block';
        } else {
            phoneField.style.display = 'none';
            addressField.style.display = 'none'; 
        }
    });
});

phone.addEventListener('input', () => {
    if (phone.value.trim() !== '') {
        addressField.style.display = 'block';
    } else {
        addressField.style.display = 'none';
    }
});

// Form submission validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const fields = ['firstName', 'lastName', 'email', 'phone', 'address'];
    let formIsValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field);
        const errorMessage = document.getElementById(field + 'Error');

        if (input.value.trim() === '') {
            input.classList.add('error');
            errorMessage.style.display = 'block';
            formIsValid = false;
        } else {
            input.classList.remove('error');
            errorMessage.style.display = 'none';
        }
    });

    if (formIsValid) {
        window.location.href = 'thankyou.html';
    }

    
}
