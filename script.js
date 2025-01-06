const images = document.querySelectorAll(".gallery img");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    const imgClone = document.createElement("img");
    imgClone.src = img.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(imgClone);
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});
