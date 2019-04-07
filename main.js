const burger = document.querySelector('.burger-menu');
const heading = document.querySelector('.heading');

burger.addEventListener('click', function(){
    this.classList.toggle('open');
})

//heading.addEventListener('click', ()=>{
//    if(burger.calssList.contains('open')){
//        burger.classList.remove('open');
//    }
//})

document.querySelectorAll('a[href^="#"]').forEach(name => {
  name.addEventListener('click', function (event) {
      event.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  let slideIndex = 1;

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
}

  function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1
    }
  if (n < 1) {
    slideIndex = slides.length
    }

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}