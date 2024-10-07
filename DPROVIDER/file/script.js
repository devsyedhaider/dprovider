AOS.init();

// ----------------- Nav Bar

document.getElementById("navToggle").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("show");
});

// ---------------- Testimonials

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const testimonialImg = document.getElementById("testimonial-img");
const testimonialText = document.getElementById("testimonial-text");
const testimonialName = document.getElementById("testimonial-name");
const testimonialPosition = document.getElementById("testimonial-position");

const testimonials = [
  {
    img: "./assets/expert/expert-4.jpg",
    text: "Amazing experience! They took our business to new heights. Highly recommend their services.",
    name: "Sarah. K",
    position: "Founder, Startup Hub",
  },
  {
    img: "./assets/expert/expert-5.jpg",
    text: "The strategic insights provided were exactly what we needed to pivot our approach and succeed.",
    name: "Chris M. Lee",
    position: "COO, Enterprise Solutions",
  },
  {
    img: "./assets/expert/expert-6.jpg",
    text: "Their dedication and attention to detail made all the difference in our project’s success.",
    name: "Anna P. Williams ",
    position: "CTO, Tech Innovators",
  },
];

let currentIndex = 1; // Starting index

function updateTestimonials(index) {
  // Hide current content with animation
  testimonialImg.classList.add("hide");
  testimonialText.classList.add("hide");
  testimonialName.classList.add("hide");
  testimonialPosition.classList.add("hide");

  setTimeout(() => {
    // Update content after the hide animation
    testimonialImg.src = testimonials[index].img;
    testimonialText.textContent = testimonials[index].text;
    testimonialName.textContent = testimonials[index].name;
    testimonialPosition.textContent = testimonials[index].position;

    // Show updated content with animation
    testimonialImg.classList.remove("hide");
    testimonialText.classList.remove("hide");
    testimonialName.classList.remove("hide");
    testimonialPosition.classList.remove("hide");
  }, 500); // Timing matches CSS transition duration
}

prevBtn.addEventListener("click", () => {
  currentIndex =
    currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  updateTestimonials(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex =
    currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  updateTestimonials(currentIndex);
});

// Initialize with the first testimonial set as the main display
updateTestimonials(currentIndex);

// ----------------- Faqs

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      // Toggle the active class
      item.classList.toggle("active");

      // Collapse others
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });
});

// ------------------ Conact Us Form

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fields = [
    "firstName",
    "lastName",
    "company",
    "email",
    "phone",
    "services",
  ];
  let isValid = true;

  fields.forEach((field) => {
    const input = document.getElementById(field);
    if (!input.value.trim()) {
      isValid = false;
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "#ddd";
    }
  });

  if (!isValid) {
    alert("Please fill out all required fields.");
    return;
  }

  // Form submission logic here (e.g., sending data to a server)
  alert("Your free proposal request has been submitted!");
  document.getElementById("contactForm").reset();
});

// ------------------- whatsappp

document.getElementById("send-btn").addEventListener("click", sendMessage);
document
  .getElementById("chat-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

function sendMessage() {
  const chatInput = document.getElementById("chat-input");
  const messageText = chatInput.value.trim();
  if (messageText === "") return;

  const chatBody = document.getElementById("chat-body");

  // Create a new message element
  const message = document.createElement("div");
  message.classList.add("message", "sent");
  message.textContent = messageText;

  // Append the message to the chat body
  chatBody.appendChild(message);

  // Scroll to the latest message
  chatBody.scrollTop = chatBody.scrollHeight;

  // Clear the input field
  chatInput.value = "";
}

// --------------- Boost

document.getElementById("check-now-btn").addEventListener("click", function () {
  // Clear input fields
  document.getElementById("website-url").value = "";
  document.getElementById("mail-address").value = "";

  // Show the modal
  const modal = document.getElementById("boost-modal");
  modal.style.display = "flex"; // Display the modal

  // Close the modal when the close button is clicked
  document.querySelector(".close-btn").addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
