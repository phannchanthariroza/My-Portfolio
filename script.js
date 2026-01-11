// Dark mode persist
const toggle = document.getElementById("darkToggle");
const body = document.body;

if (localStorage.getItem("dark") === "on") {
  body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.onclick = () => {
  body.classList.toggle("dark");
  const darkOn = body.classList.contains("dark");
  localStorage.setItem("dark", darkOn ? "on" : "off");
  toggle.textContent = darkOn ? "☀️" : "🌙";
};

// Mobile menu toggle
const menuBtn = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

menuBtn.onclick = () => {
  nav.classList.toggle("active");
};

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let el of reveals) {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 50) {
      el.classList.add("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// --- UPDATED TRANSLATION LOGIC ---
let currentLang = 'en';
const langBtn = document.getElementById('langToggle');

langBtn.onclick = () => {
  // Toggle language state
  currentLang = currentLang === 'en' ? 'jp' : 'en';
  
  // Update the button label
  langBtn.textContent = currentLang === 'en' ? 'JP' : 'EN';
  
  // Find all elements with translation attributes
  const elements = document.querySelectorAll('[data-en]');

  elements.forEach(el => {
    if (currentLang === 'jp') {
      el.textContent = el.getAttribute('data-jp');
    } else {
      el.textContent = el.getAttribute('data-en');
    }
  });
};