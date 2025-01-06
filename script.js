// Modal image function
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

const images = document.querySelectorAll('.kitchen-gallery img');

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

// Close the modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
