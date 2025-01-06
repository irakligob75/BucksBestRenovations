// JavaScript to handle click and zoom effect for images
document.querySelectorAll('.kitchen-gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = 1000;

        const enlargedImg = document.createElement('img');
        enlargedImg.src = img.src;
        enlargedImg.style.maxWidth = '90%';
        enlargedImg.style.maxHeight = '90%';
        enlargedImg.style.borderRadius = '10px';
        enlargedImg.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';

        overlay.appendChild(enlargedImg);

        // Close the overlay on click
        overlay.addEventListener('click', () => {
            overlay.remove();
        });

        document.body.appendChild(overlay);
    });
});
