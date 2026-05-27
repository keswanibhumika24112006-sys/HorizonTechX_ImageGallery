const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg"
];

let current = 0;

const galleryImage = document.getElementById("gallery-image");

function nextImage(){
  current++;

  if(current >= images.length){
    current = 0;
  }

  galleryImage.src = images[current];
}

function prevImage(){
  current--;

  if(current < 0){
    current = images.length - 1;
  }

  galleryImage.src = images[current];
}