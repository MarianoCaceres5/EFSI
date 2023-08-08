document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carouselInner = document.querySelector('.carousel-inner');

    let currentSlide = 0;

    function showSlide(slideIndex) {
        carouselInner.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    prevButton.addEventListener('click', function () {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    });

    nextButton.addEventListener('click', function () {
        const totalSlides = document.querySelectorAll('.carousel-slide').length;
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    });
});
