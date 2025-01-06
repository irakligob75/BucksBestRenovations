// ყველა სურათის და მოდალის ელემენტების მიღება
const images = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

// ფოტოზე კლიკისას მოდალის გახსნა
images.forEach(image => {
    image.addEventListener('click', () => {
        const fullSizeImg = image.getAttribute('data-fullsize'); // ვიღებთ data-fullsize
        modalImg.src = fullSizeImg; // ვაყენებთ სურათს მოდალში
        modal.style.display = 'flex'; // ვაჩვენებთ მოდალს
    });
});

// მოდალის დახურვა
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // ვმალავთ მოდალს
});
