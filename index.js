// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections

let sections = document.querySelectorAll('section') ;
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset =sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that reports on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    /// remove toggle icon and navbar when click navbar links (scroll)

     menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer= document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}
document.addEventListener("DOMContentLoaded", () => {
  const projectSection = document.getElementById("projects"); // FIXED ID
  const scrollLeftBtn = document.getElementById("scroll-left");
  const scrollRightBtn = document.getElementById("scroll-right");

  scrollLeftBtn.addEventListener("click", () => {
    projectSection.scrollBy({ left: -300, behavior: "smooth" });
  });

  scrollRightBtn.addEventListener("click", () => {
    projectSection.scrollBy({ left: 300, behavior: "smooth" });
  });
});


// Add interactivity to education section cards
document.addEventListener('DOMContentLoaded', () => {
  const educationColumns = document.querySelectorAll('.education-column');

  educationColumns.forEach((column) => {
    column.addEventListener('click', () => {
      // Toggle active class on click
      column.classList.toggle('active');
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("0mbM92v8lpGTAmsSl"); // Replace with your actual Public Key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        let statusMessage = document.getElementById("status-message");
        statusMessage.style.display = "none"; // Hide initially

        // Get form values
        let formData = {
            user_name: document.getElementById("name").value,
            user_email: document.getElementById("email").value,
            user_mobile: document.getElementById("mobile").value,
            email_subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        // Send email using EmailJS
        emailjs.send("service_x296kgl", "template_k4j41f4", formData)
            .then(
                function (response) {
                    console.log("Email sent successfully!", response);
                    showMessage("Message sent successfully!", "success");
                    document.getElementById("contact-form").reset(); // Clear form
                },
                function (error) {
                    console.error("Failed to send email:", error);
                    showMessage("Failed to send message. Try again.", "error");
                }
            );
    });

    // Function to toggle message visibility
    function showMessage(text, type) {
        let statusMessage = document.getElementById("status-message");

        statusMessage.textContent = text;
        statusMessage.classList.remove("success", "error"); // Remove previous classes

        if (type === "success") {
            statusMessage.classList.add("success");
        } else {
            statusMessage.classList.add("error");
        }

        statusMessage.style.display = "block"; // Show message

        // Hide message after 3 seconds
        setTimeout(() => {
            statusMessage.style.display = "none";
        }, 3000);
    }
});
