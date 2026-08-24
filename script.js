// Lightbox functionality
const photos = document.querySelectorAll(".gallery-photo");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

photos.forEach(photo => {
  photo.addEventListener("click", () => {
    lightbox.classList.remove("hidden");
    lightboxImg.src = photo.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// Surprise interaction
const hiddenDot = document.getElementById("hiddenDot");
const hiddenMessage = document.getElementById("hiddenMessage");

hiddenDot.addEventListener("click", () => {
  hiddenMessage.classList.remove("hidden");
  hiddenDot.style.transform = "scale(1.5)";
});

// Smooth scroll from hero button
const startStory = document.getElementById("startStory");

startStory.addEventListener("click", () => {
  document.getElementById("showcase").scrollIntoView({ behavior: "smooth" });
});
