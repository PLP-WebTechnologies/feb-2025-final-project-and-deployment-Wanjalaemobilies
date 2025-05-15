// Toggle Navigation Menu
const navLinks = document.querySelector('.nav-links');
const toggleMenu = () => {
  navLinks.classList.toggle('active');
};

// Attach click event for toggle button
document.querySelector('.logo h1').addEventListener('click', toggleMenu);

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    e.preventDefault(); // Prevent form submission
  } else {
    alert('Thank you for your message!');
  }
});
