//changes the background of the header on the homepage based on scroll//
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
      $('.navbar').addClass('bg-black');
    } else {
      $('.navbar').removeClass('bg-black');
    }
  });
});

//replaces the text in the page header with the page's title//
function titleInjection() {
  document.getElementById("sectiontext").textContent = document.title;;
}

//show/hide navigation on smaller screens//
function insertNav() {
  document.getElementById("nav-content").classList.toggle("hidden");
}

//show/hide for class registration form//
function showForm() {
  document.getElementById("registration").classList.toggle("hidden");
}

//prefills class type on contact form//
function addOption(method) {
  var m = method;
  document.getElementById('class-type').value = m;
}

//loads pageheader and footer on pages//
$(function() {
  $("#navigation").load("/navbar.html");
  $("#pageheader").load("/pageheader.html");
  $("#footer").load("/footer.html");
});

//smoothScroll//
$(function() {
  // This will select everything with the class smoothScroll
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

//carousel//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
