/**
 * Simple Form Validation
 * Add data-validation rules to inputs
 */

const validators = {
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  required: (value) => value.trim().length > 0,
  minLength: (value, min) => value.length >= parseInt(min),
  maxLength: (value, max) => value.length <= parseInt(max),
  phone: (value) => /^[\d\s\-\+\(\)]+$/.test(value) && value.length >= 10,
};

function validateField(input) {
  const rules = input.dataset.validation?.split('|') || [];
  const errors = [];
  
  for (const rule of rules) {
    const [name, ...params] = rule.split(':');
    const validator = validators[name];
    
    if (validator && !validator(input.value, ...params)) {
      errors.push(getErrorMessage(name));
    }
  }
  
  displayFieldError(input, errors);
  return errors.length === 0;
}

function displayFieldError(input, errors) {
  const errorId = input.getAttribute('aria-describedby');
  const errorEl = errorId ? document.getElementById(errorId) : null;
  
  if (errors.length > 0) {
    input.classList.add('input-error');
    input.setAttribute('aria-invalid', 'true');
    if (errorEl) {
      errorEl.textContent = errors[0];
      errorEl.classList.remove('hidden');
    }
  } else {
    input.classList.remove('input-error');
    input.setAttribute('aria-invalid', 'false');
    if (errorEl) {
      errorEl.classList.add('hidden');
    }
  }
}

function getErrorMessage(rule) {
  const messages = {
    email: 'Please enter a valid email',
    required: 'This field is required',
    phone: 'Please enter a valid phone',
  };
  return messages[rule] || 'Invalid input';
}

function validateForm(form) {
  const inputs = form.querySelectorAll('[data-validation]');
  let valid = true;
  
  inputs.forEach(input => {
    if (!validateField(input)) valid = false;
  });
  
  return valid;
}

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('[data-validation]');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => validateField(input));
  });
  
  const forms = document.querySelectorAll('form[data-validate]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      if (!validateForm(form)) {
        e.preventDefault();
      }
    });
  });
});
