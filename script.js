// Get all images inside the gallery
const images = document.querySelectorAll('.gallery img');

// Get the lightbox container and its close button
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close');

// Add click event listeners to all images
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Show the lightbox
        lightboxImage.src = image.src;  // Set the clicked image as the lightbox image
    });
});

// Add click event listener to the close button to hide the lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Optional: Add event listener to close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
