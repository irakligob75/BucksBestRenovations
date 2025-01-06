// Get the modal
var modal = document.getElementById("myModal");

// Get the images and insert them inside the modal
var images = document.getElementsByClassName("gallery-item");
var modalImg = document.getElementById("img01");

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// Get the <span> element to close the modal
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}
