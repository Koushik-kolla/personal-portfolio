"use strict";

// Welcome alert
window.addEventListener("load", function () {
  alert("Bienvenue sur mon portfolio ! (Welcome to my portfolio!)");
});

// Smooth scroll for navigation links
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("nav").addEventListener("click", function (e) {
    const anchor = e.target.closest("a[href^='#']");
    if (anchor) {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  // Contact form handler
  document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    alert("Thank you for your message! I'll get back to you soon.");
    this.reset();
  });

  // Download Resume button handler
  document.getElementById('downloadResumeBtn')?.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './assets/Koushik_Kolla_Resume.pdf';
    link.download = 'Koushik_Kolla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // Dark mode toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    if (localStorage.getItem("dark-mode") === "enabled") {
      document.body.classList.add("dark-mode");
    }
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
      } else {
        localStorage.setItem("dark-mode", "disabled");
      }
    });
  }

  // Scroll-to-top button feature
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '↑';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  scrollBtn.className = 'fixed bottom-8 right-8 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg transition hover:bg-blue-700 z-50';
  scrollBtn.style.display = 'none';
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Skills/Education toggle
  document.getElementById('skillsToggle')?.addEventListener('click', function() {
    document.getElementById('skillsSection').style.display = 'block';
    document.getElementById('educationSection').style.display = 'none';
    this.classList.add('bg-blue-500', 'text-white');
    document.getElementById('educationToggle').classList.remove('bg-blue-500', 'text-white');
    document.getElementById('educationToggle').classList.add('bg-gray-200', 'text-blue-500');
  });
  document.getElementById('educationToggle')?.addEventListener('click', function() {
    document.getElementById('skillsSection').style.display = 'none';
    document.getElementById('educationSection').style.display = 'block';
    this.classList.add('bg-blue-500', 'text-white');
    document.getElementById('skillsToggle').classList.remove('bg-blue-500', 'text-white');
    document.getElementById('skillsToggle').classList.add('bg-gray-200', 'text-blue-500');
  });

  // Project filter toggle
  document.querySelectorAll('.project-filter').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.project-filter').forEach(b => b.classList.remove('bg-blue-500', 'text-white'));
      this.classList.add('bg-blue-500', 'text-white');
      const filter = this.getAttribute('data-filter');
      document.querySelectorAll('#projectGrid > div').forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
