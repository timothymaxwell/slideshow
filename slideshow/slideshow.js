var slideIndex = 0;
var slide1Index = 0;
showSlides();

// Next/previous controls
function plusSlides(b) {
  showSlides(slideIndex += b);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var a;
  var slides1 = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (b > slides1.length) {slide1Index = 1}
  if (b < 1) {slide1Index = slides.length}
  for (a = 0; a < slides.length; a++) {
      slides1[a].style.display = "none";
  }
  for (a = 0; a < dots.length; a++) {
      dots[a].className = dots[a].className.replace(" active", "");
  }
  slides1[slide1Index-1].style.display = "block";
  dots[slide1Index-1].className += " active";
} 

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 1; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}