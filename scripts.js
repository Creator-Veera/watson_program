// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const errorElement = document.createElement('div');
    errorElement.classList.add('error');
  
    form.addEventListener('submit', function (event) {
      let isValid = true;
      form.querySelectorAll('.error').forEach((error) => error.remove());
  
      if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
      }
  
      if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
      }
  
      if (phoneInput.value.trim() !== '' && !isValidPhone(phoneInput.value.trim())) {
        showError(phoneInput, 'Please enter a valid phone number');
        isValid = false;
      }
  
      if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required');
        isValid = false;
      }
  
      if (!isValid) {
        event.preventDefault();
      }
    });
  
    function showError(input, message) {
      const error = errorElement.cloneNode();
      error.textContent = message;
      input.parentNode.appendChild(error);
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function isValidPhone(phone) {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
    }
  });
  
/* Chat BOT Scripts */

