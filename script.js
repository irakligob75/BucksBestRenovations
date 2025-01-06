// Get all images in the gallery
const images = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

// Open the modal when an image is clicked
images.forEach(image => {
    image.addEventListener('click', () => {
        const fullSizeImg = image.getAttribute('data-fullsize');
        modalImg.src = fullSizeImg;
        modal.style.display = 'flex';
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
