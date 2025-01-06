// Get all gallery images
const images = document.querySelectorAll('.gallery-images img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
const closeButton = lightbox.querySelector('.close');

// Function to open the lightbox with the clicked image
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = image.src;
    });
});

// Close the lightbox when the close button is clicked
closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
