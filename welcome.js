// welcome.js
"use strict";

// All logic is now in style.js for deployment. This file can be removed or left empty.
window.addEventListener("load", function () {
  alert("Bienvenue sur mon portfolio ! (Welcome to my portfolio!)");
});

// Smooth scroll handler (optional if you use section IDs in nav)
document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form handling
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const downloadBtn = form?.querySelectorAll("button")[1]; // second button for download

  form?.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Form submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Thank you for your message! I'll get back to you soon.");
    form.reset();
  });

  // Download Resume button handler
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Simulate download (replace with actual file path)
      const link = document.createElement("a");
      link.href = "./assets/Koushik_Kolla_Resume.pdf"; // Use relative path for deployment
      link.download = "Koushik_Kolla_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // Dark mode toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    // Load preference
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
    }
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      // Save preference
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
      } else {
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }
});
