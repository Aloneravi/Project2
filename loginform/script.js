const passwordInput = document.querySelector('#psw');
const eyeIcon = document.querySelector('#eye');

eyeIcon.addEventListener('click', function() {
  this.classList.toggle('fa-eye-slash');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type); 
})
// Check required fields on submit
form.addEventListener('submit', (e) => {
  let valid = true;
  
  // Validate inputs
  if(!valid) {
    e.preventDefault();
  }
})
