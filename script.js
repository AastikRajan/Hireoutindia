// script.js

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Portfolio Item Hover Effect (CSS can handle most of this, but JS can add some dynamic effects)
const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // Add a class or style change on hover if needed for more complex animations
    // Example: item.classList.add('hovered');
  });

  item.addEventListener("mouseleave", () => {
    // Remove the hover effect
    // Example: item.classList.remove('hovered');
  });
});

// Form Submission Handling (Client-Side Validation Example)
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  let isValid = true;

  // Example: Check if required fields are filled (more robust validation can be added)
  const requiredFields = contactForm.querySelectorAll("[required]");
  requiredFields.forEach((field) => {
    if (!field.value) {
      isValid = false;
      alert("Please fill in all required fields."); // Or a more user-friendly message
      event.preventDefault(); // Prevent form submission
      return; // Exit the loop early
    }
  });

  if (isValid) {
    alert("Message sent successfully!");
  }

  // If isValid is true, the form will submit to the server.
  // You would usually prevent default here and handle the submission with fetch or XMLHttpRequest for AJAX calls.
});

// More advanced interactivity can be added here, such as:
// - Form field validation
// - Image sliders/carousels
// - Animations on scroll
// - Loading more portfolio items on click
// - Interacting with APIs
//... (previous JavaScript code)...

// AJAX Form Submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission (page reload)

  const formData = new FormData(contactForm); // Create FormData object

  fetch("submit_form.php", {
    // Replace with your server-side script URL
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Handle errors
      }
      return response.text(); // Or response.json() if your server returns JSON
    })
    .then((data) => {
      // Handle successful submission (e.g., display a success message)
      alert(data); // Or display a more user-friendly message in the UI
      contactForm.reset(); // Clear the form after successful submission
    })
    .catch((error) => {
      // Handle errors during submission (e.g., display an error message)
      alert(
        "An error occurred during form submission. Please try again later."
      ); // Or display error message in the UI
      console.error("Error:", error);
    });
});

//... (rest of your JavaScript//... (previous JavaScript code)...

// AJAX Form Submission (Enhanced Error Handling & Accessibility)
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  // Check if form exists on current page
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Form validation
    let isValid = true;
    const requiredFields = contactForm.querySelectorAll("[required]");
    requiredFields.forEach((field) => {
      if (!field.value) {
        isValid = false;
        return;
      }
    });

    if (!isValid) {
      const errorMessage = document.createElement("div");
      errorMessage.classList.add("error-message");
      errorMessage.textContent = "Please fill in all required fields.";
      contactForm.parentNode.insertBefore(
        errorMessage,
        contactForm.nextSibling
      );

      setTimeout(() => {
        errorMessage.remove();
      }, 5000);
      return;
    }

    // If valid, proceed with form submission
    const formData = new FormData(contactForm);

    fetch("submit_form.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((err) => {
            throw new Error(err);
          });
        }
        return response.text();
      })
      .then((data) => {
        const successMessage = document.createElement("div");
        successMessage.classList.add("success-message");
        successMessage.textContent = data;
        contactForm.parentNode.insertBefore(
          successMessage,
          contactForm.nextSibling
        );
        contactForm.reset();

        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      })
      .catch((error) => {
        const errorMessage = document.createElement("div");
        errorMessage.classList.add("error-message");
        errorMessage.textContent =
          error.message ||
          "An error occurred during form submission. Please try again later.";
        contactForm.parentNode.insertBefore(
          errorMessage,
          contactForm.nextSibling
        );

        setTimeout(() => {
          errorMessage.remove();
        }, 5000);
        console.error("Error:", error);
      });
  });
}

// Back to Top Button (Accessibility Enhancement)
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Optional: Add keyboard navigation support for the back-to-top button
backToTopButton.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // Trigger click on Enter key press
    backToTopButton.click();
  }
});

//... (previous JavaScript code)...

// Animations on Scroll (Example: Fade In)
const elementsToAnimate = document.querySelectorAll(".animate-on-scroll"); // Add this class to elements you want to animate

window.addEventListener("scroll", () => {
  elementsToAnimate.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight * 0.8) {
      // Adjust 0.8 for when the animation should trigger
      element.classList.add("animated"); // Add the 'animated' class to trigger the animation
    }
  });
});

//... (rest of your JavaScript code)...
//... (rest of your JavaScript code) code)
