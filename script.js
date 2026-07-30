document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  alert('Message sent successfully!');
});

// 1. Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  });
}

// 2. High-Performance Scroll Animations (Intersection Observer)
const reveals = document.querySelectorAll('.reveal');
if (reveals.length > 0) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target); // Stop observing once revealed to save resources
      }
    });
  }, {
    rootMargin: '0px 0px -100px 0px'
  });

  reveals.forEach(reveal => observer.observe(reveal));
}

// 3. Dark / Light Theme Toggle
const toggle = document.getElementById('themeToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
  });
}
javascript
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully! (Frontend Demo)");
});
