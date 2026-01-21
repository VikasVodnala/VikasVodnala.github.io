document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  alert('Message sent successfully!');
});

// Scroll animations
const reveals=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
  reveals.forEach(r=>{
    if(r.getBoundingClientRect().top<window.innerHeight-100){
      r.classList.add('active');
    }
  });
});

// Dark / Light toggle
const toggle=document.getElementById('themeToggle');
toggle.onclick=()=>{
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
};
javascript
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully! (Frontend Demo)");
});
