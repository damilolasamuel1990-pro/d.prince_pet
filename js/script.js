/* =========================================================
   D.Prince Pet NG - Main JavaScript
   ========================================================= */

/* EDIT: Put your WhatsApp number here.
   Use the international format WITHOUT "+" or spaces.
   Example: 08012345678  becomes  2348012345678 */
const WHATSAPP_NUMBER = "2347036042766";

/* EDIT: Default message when someone taps a WhatsApp button */
const DEFAULT_MESSAGE = "Hello D.Prince Pet NG, I'm interested in your pets/products.";

/* ---------- Helper: open WhatsApp with a message ---------- */
function openWhatsApp(message) {
  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

/* ---------- All WhatsApp links ---------- */
document.querySelectorAll(".whatsapp-link").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    openWhatsApp(DEFAULT_MESSAGE);
  });
});

/* ---------- Product "Order on WhatsApp" buttons ---------- */
document.querySelectorAll(".order-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".product-card");
    const name = card.getAttribute("data-name");
    const price = card.querySelector(".price").textContent;
    openWhatsApp("Hello D.Prince Pet NG, I want to order: " + name + " (" + price + "). Is it available?");
  });
});

/* ---------- Shop filter ---------- */
const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (b) { b.classList.remove("active"); });
    button.classList.add("active");
    const filter = button.getAttribute("data-filter");

    products.forEach(function (product) {
      const category = product.getAttribute("data-category");
      if (filter === "all" || filter === category) {
        product.classList.remove("hide");
      } else {
        product.classList.add("hide");
      }
    });
  });
});

/* ---------- Mobile menu ---------- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("open");
  });
});

/* ---------- Header shadow + back-to-top on scroll ---------- */
const header = document.getElementById("header");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  header.classList.toggle("scrolled", window.scrollY > 50);
  backToTop.classList.toggle("show", window.scrollY > 500);
});

backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------- Contact form -> WhatsApp ---------- */
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const interest = document.getElementById("interest").value;
  const message = document.getElementById("message").value.trim();

  const text =
    "Hello D.Prince Pet NG!\n\n" +
    "Name: " + name + "\n" +
    "Phone: " + phone + "\n" +
    "Interest: " + interest + "\n" +
    "Message: " + message;

  openWhatsApp(text);
  this.reset();
});

/* ---------- Scroll reveal animation ---------- */
const revealItems = document.querySelectorAll(
  ".service-card, .product-card, .testimonial-card, .about-text, .about-images, .why-item, .contact-info, .contact-form, .section-head"
);
revealItems.forEach(function (el) { el.classList.add("reveal"); });

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(function (el) { observer.observe(el); });

/* ---------- Current year in footer ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
