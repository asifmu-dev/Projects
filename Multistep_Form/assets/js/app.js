const debtOptions = document.querySelectorAll(".debt-option");
const continueBtn = document.getElementById("continue-btn");
const errorMessage = document.getElementById("error-message");
const formContainer = document.getElementById("form-container");
const loanFormContainer = document.getElementById("loan-form-container");
const step2Container = document.getElementById("step-2");
const step3Container = document.getElementById("step-3");

// Toggle selection on debt option click
debtOptions.forEach((option) => {
  const checkbox = option.querySelector('input[type="checkbox"]');

  option.addEventListener("click", () => {
    checkbox.checked = !checkbox.checked;
    option.classList.toggle("selected", checkbox.checked);
  });

  checkbox.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent triggering the parent div click
    option.classList.toggle("selected", checkbox.checked);
  });
});

// Step 1: Handle the Continue button click after selecting a debt type
continueBtn.addEventListener("click", () => {
  const selectedOptions = document.querySelectorAll(".debt-checkbox:checked");
  if (selectedOptions.length > 0) {
    formContainer.style.display = "none"; // Hide debt type selection
    loanFormContainer.style.display = "block"; // Show loan options
  } else {
    errorMessage.style.display = "block"; // Show error if no option selected
  }
});

// Step 2: Transition from Loan Options to Step 2 after selecting loan amount
const loanButtons = document.querySelectorAll("#loan-form-container .continue-btn");
loanButtons.forEach((button) => {
  button.addEventListener("click", () => {
    loanFormContainer.style.display = "none"; // Hide loan options
    step2Container.style.display = "block"; // Show personal details form (Step 2)
  });
});

const loanButtons2 = document.querySelectorAll("#step-2 .continue-btn");
loanButtons2.forEach((button) => {
  button.addEventListener("click", () => {
    step2Container.style.display = "none"; // Hide loan options
    step3Container.style.display = "block"; // Show personal details form (Step 2)
  });
});

document.getElementById("close-loan").addEventListener("click", () => {
  // Show the loan form container again
  loanFormContainer.style.display = "block";
});





function allFieldsFilled(fields) {
  return fields.every(field => field.value.trim() !== '');
}

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const phoneField = document.getElementById('phoneField');
const addressField = document.getElementById('addressField');
// const continueBtn = document.getElementById('continue-btn');

// Show phone and address fields based on input completion
[firstName, lastName, email].forEach(field => {
  field.addEventListener('input', () => {
    const isNameFilled = firstName.value.trim() !== '' && lastName.value.trim() !== '';
    const isEmailFilled = email.value.trim() !== '' && email.value.includes('@') && email.value.includes('.');

    if (isNameFilled && isEmailFilled) {
      phoneField.style.display = 'block'; // Show phone field
    } else {
      phoneField.style.display = 'none';
      addressField.style.display = 'none'; // Hide address field
    }
  });
});

// Show address field once phone is filled
phone.addEventListener('input', () => {
  if (phone.value.trim() !== '') {
    addressField.style.display = 'block'; // Show address field
  } else {
    addressField.style.display = 'none'; // Hide address field
  }
});

// Form submission validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
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
    window.location.href = '#form-container'; // Redirect to checkbox section (you can adjust the URL as needed)
  }
}
