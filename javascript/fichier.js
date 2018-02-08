$(function() {
  $('a[href=#header]').click(function(){
    $('html').animate({scrollTop:0}, 'slow');
    return false;
  });
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}

function initMap() {
  var uluru = {lat: 48.881201, lng: 2.350838};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}


// Script pour la liste

// Selection globale des ID
var allWorksTitle = document.querySelector('#all-works-title')
var creativeTitle = document.querySelector('#creative-title')
var corporateTitle = document.querySelector('#corporate-title')
var portfolioTitle = document.querySelector('#portfolio-title')

// Selection globale des noeuds des images
var allWorksImages = document.querySelectorAll('.img_portfolio');
var creativeImages = document.querySelectorAll('.creative');
var corporateImages = document.querySelectorAll('.corporate');
var portfolioImages = document.querySelectorAll('.portfolio');

function hideImages() {
  for (var i = 0; i < allWorksImages.length; i++) {
    allWorksImages[i].className = 'hidden'
  }
}

function chooseImages(imagesToShow) {
  var imagesType;
  switch (imagesToShow) {
    case 'creative':
      imagesType = creativeImages;
      break;
    case 'corporate':
      imagesType = corporateImages;
      break;
    case 'portfolio':
      imagesType = portfolioImages;
      break;
    default:
      imagesType = allWorksImages;
  }
  return imagesType;
}

function showImages(imagesToShow) {
  hideImages();
  var imagesGroup = chooseImages(imagesToShow);
  for (var i = 0; i < imagesGroup.length; i++) {
    imagesGroup[i].className = ('img_portfolio ' + imagesToShow);
  }
}

// Ajout des écouteurs
allWorksTitle.addEventListener('click', function() {
  showImages();
});

creativeTitle.addEventListener('click', function() {
  showImages('creative');
});

corporateTitle.addEventListener('click', function() {
  showImages('corporate');
});

portfolioTitle.addEventListener('click', function() {
  showImages('portfolio');
});
