document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.scrollable-content');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
    leftArrow.addEventListener('click', function() {
        container.scrollBy({
            left: -100,
            behavior: 'smooth'
        });
    });
    
    rightArrow.addEventListener('click', function() {
        container.scrollBy({
            left: 100,
            behavior: 'smooth'
        });
    });
});
