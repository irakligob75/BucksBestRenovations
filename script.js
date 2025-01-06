const images = document.querySelectorAll('.kitchen-gallery img');

images.forEach(img => {
    img.addEventListener('click', () => {
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');

        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${src}" alt="${alt}">
                <span class="close">&times;</span>
            </div>
        `;
        document.body.appendChild(lightbox);

        const closeButton = lightbox.querySelector('.close');
        closeButton.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});
