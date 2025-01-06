// Get modal elements
const modal = document.createElement("div");
modal.className = "modal";
document.body.appendChild(modal);

const modalImg = document.createElement("img");
modal.appendChild(modalImg);

const closeModal = document.createElement("span");
closeModal.innerHTML = "&times;";
modal.appendChild(closeModal);

// Add click event to all images
const images = document.querySelectorAll(".kitchen-gallery img");
images.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// Close modal on click
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal on outside click
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
