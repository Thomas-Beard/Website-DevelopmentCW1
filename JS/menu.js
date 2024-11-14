function showCourse(courseId) {
    // Hide all course sections
    document.querySelectorAll('.course-section').forEach(section => {
        section.style.display = 'none';
    });
    // Display the selected course
    document.getElementById(courseId).style.display = 'block';


    // animation button
    document.querySelectorAll('.menu-aside button').forEach(button => {
        button.classList.remove('clicked');
    });

    const clickedButton = document.querySelector(`button[onclick="showCourse('${courseId}')"]`);
    clickedButton.classList.add('clicked');

    setTimeout(() => {
        clickedButton.classList.remove('clicked');
    }, 200); // Animation duration in milliseconds
}

// Continuous Scrolling for Reviews Carousel
let scrollPosition = 0;
const scrollSpeed = 1;

function continuousScroll() {
    const carousel = document.querySelector('.reviews-track');
    const reviews = document.querySelectorAll('.review');
    const reviewWidth = reviews[0].offsetWidth + 20; // Review width + margin

    // Move the carousel to the left
    scrollPosition -= scrollSpeed;

    // Reset to the start if we reach the end of all reviews
    if (Math.abs(scrollPosition) >= reviewWidth * reviews.length) {
        scrollPosition = 0; // Reset the scroll position for continuous loop
    }

    carousel.style.transform = `translateX(${scrollPosition}px)`;
}

// Duplicate reviews to create an infinite scrolling effect
function initializeCarousel() {
    const carousel = document.querySelector('.reviews-track');
    const reviews = document.querySelectorAll('.review');

    // Clone each review and append it to the carousel
    reviews.forEach(review => {
        const clone = review.cloneNode(true);
        carousel.appendChild(clone);
    });
}

// Initialize and start the auto-scroll
initializeCarousel();
setInterval(continuousScroll, 20); // Adjust interval for smoother or faster scrolling





window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


