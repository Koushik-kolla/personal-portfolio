// welcome.js
"use strict";

/**
 * Show welcome alert on page load.
 */
function showWelcomeAlert() {
  window.addEventListener("load", function () {
    alert("Bienvenue sur mon portfolio ! (Welcome to my portfolio!)");
  });
}

/**
 * Enables smooth scrolling for navigation links.
 */
function enableSmoothScroll() {
  document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/**
 * Handles contact form submission and resume download.
 */
function setupContactForm() {
  const form = document.querySelector("form");
  if (!form) return;
  const downloadBtn = form.querySelectorAll("button")[1]; // second button for download

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // You may want to send this data to a backend here

    alert("Thank you for your message! I'll get back to you soon.");
    form.reset();
  });

  // Download Resume button handler
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = "./assets/Koushik_Kolla_Resume.pdf"; // Use relative path for deployment
      link.download = "Koushik_Kolla_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}

/**
 * Sets up dark mode toggle and persists preference.
 */
function setupDarkModeToggle() {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (!darkModeToggle) return;

  // Load preference
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

/**
 * Initialize all features.
 */
function initializePortfolio() {
  showWelcomeAlert();
  enableSmoothScroll();
  setupContactForm();
  setupDarkModeToggle();
}

document.addEventListener("DOMContentLoaded", initializePortfolio);