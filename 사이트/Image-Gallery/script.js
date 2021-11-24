var galleryimages = document.querySelectorAll("#gallery figure");
for (i = 0; i < galleryimages.length; i++) {
  galleryimages[i].addEventListener("click", function () {
    this.classList.toggle("expanded");
    galleryimages.classList.toggle("full");
  });
}
