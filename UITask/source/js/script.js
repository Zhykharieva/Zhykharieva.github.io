
    let slideIndex = 1;
    const slides = document.querySelectorAll('.slider__photo'),
        prev = document.querySelector('.slider__prev'),
        next = document.querySelector('.slider__next'),
        dots = document.querySelectorAll('.slider__point'),
        slidesWrapper = document.querySelector('.slider__container'),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector('.slider__photo-container');
        function showSlides(n) {
          if (n > slides.length) {
              slideIndex = 1;
          }
          if (n < 1) {
              slideIndex = slides.length;
          }

          slides.forEach((item) => item.style.display = 'none');

          slides[slideIndex - 1].style.display = 'block';
         dots.forEach(dot => dot.classList.remove('slider__point--active'))
         dots[slideIndex -1].classList.add('slider__point--active')
      }

      function plusSlides (n) {
          showSlides(slideIndex += n);
      }

      prev.addEventListener('click', function(){
          plusSlides(-1);
      });

      next.addEventListener('click', function(){
          plusSlides(1);
      });
