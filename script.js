// Scroll to Top Button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "⬆️"; // Button displays an upward arrow
scrollBtn.id = "scrollTopBtn"; // Add an id for styling
document.body.appendChild(scrollBtn); // Append the button to the body

// Show the button when the user scrolls down
window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none"; // Button is visible only after scrolling 300px
});

// Smooth scroll back to top when the button is clicked
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Form Validation and Success Message
const form = document.getElementById("contactForm"); // Select the form using its id
if (form) {
    form.addEventListener("submit", function (e) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation check
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            e.preventDefault(); // Prevent form submission if fields are empty
        } else {
            // Success message
            e.preventDefault(); // Prevent the actual form submission
            document.getElementById("successMessage").style.display = "block"; // Show success message
        }
    });
}

// Footer Year
const footer = document.querySelector("footer p"); // Find the <p> tag inside the footer
const year = new Date().getFullYear(); // Get the current year
footer.innerHTML = `&copy; ${year} Foodie's Paradise. All rights reserved.`; // Update the footer with the current year

