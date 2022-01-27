  var slideIndex = 0;
  var myTimer;
  myTimer = setInterval(function(){plusSlides(0)}, 2000);
  function plusSlides(n){
    // important for dont remember current path of slideshow
    clearInterval(myTimer);
    if (n < 0){ // if start from end
      showSlides(slideIndex -= 1);
    } else {
     showSlides(slideIndex += 1); 
    }
    // important(with clearInterval(myTimer)) for resume
    myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
  }

  function slideByDots(n){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    showSlides(slideIndex = n);
  }
  
  function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slider-item");
    console.log(slides, ", ", slideIndex, ", ", n);
    var dots = document.getElementsByClassName("indicator");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
