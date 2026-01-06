// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");

    // Hamburger to X animation
    const spans = menuToggle.querySelectorAll("span");
    if (mainNav.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(6px, 6px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      const spans = menuToggle.querySelectorAll("span");
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
      mainNav.classList.remove("active");
      const spans = menuToggle.querySelectorAll("span");
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });
}

// Cookie Banner
const cookieBanner = document.getElementById("cookieConsent");
const cookieAccept = document.getElementById("cookieAccept");

// Check if cookies are already accepted
if (!localStorage.getItem("cookiesAccepted")) {
  // Show banner after 1 second
  setTimeout(() => {
    if (cookieBanner) {
      cookieBanner.style.display = "block";
    }
  }, 1000);
}

// Accept cookies
if (cookieAccept) {
  cookieAccept.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    if (cookieBanner) {
      cookieBanner.style.display = "none";
    }
  });
}

// Language Selector Enhancement
document.addEventListener("DOMContentLoaded", () => {
  const langSelectors = document.querySelectorAll(".language-selector");

  langSelectors.forEach((selector) => {
    selector.addEventListener("mouseenter", () => {
      const dropdown = selector.querySelector(".lang-dropdown");
      if (dropdown) {
        dropdown.style.display = "block";
      }
    });

    selector.addEventListener("mouseleave", () => {
      const dropdown = selector.querySelector(".lang-dropdown");
      if (dropdown) {
        setTimeout(() => {
          dropdown.style.display = "none";
        }, 300);
      }
    });
  });
});

// Active navigation highlighting
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();

  // Remove active class from all links
  link.classList.remove("active");

  // Add active class to current page
  if (
    currentPage === linkPage ||
    (currentPage === "" && linkPage === "index.html")
  ) {
    link.classList.add("active");
  }
});

// Form validation for contact forms
const forms = document.querySelectorAll("form");
forms.forEach((form) => {
  form.addEventListener("submit", function (e) {
    const requiredFields = this.querySelectorAll("[required]");
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = "#C44536";

        // Add error message
        let errorMsg = field.nextElementSibling;
        if (!errorMsg || !errorMsg.classList.contains("error-msg")) {
          errorMsg = document.createElement("div");
          errorMsg.className = "error-msg";
          errorMsg.style.color = "#C44536";
          errorMsg.style.fontSize = "0.875rem";
          errorMsg.style.marginTop = "0.25rem";
          errorMsg.textContent = "Dieses Feld ist erforderlich";
          field.parentNode.insertBefore(errorMsg, field.nextSibling);
        }
      } else {
        field.style.borderColor = "";
        // Remove error message
        const errorMsg = field.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains("error-msg")) {
          errorMsg.remove();
        }
      }
    });

    if (!isValid) {
      e.preventDefault();
      alert("Bitte füllen Sie alle erforderlichen Felder aus.");
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Only for anchor links on same page
    if (href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  });
});
