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
let scrollAmount = 0;

function continuousScroll() {
    const carousel = document.querySelector('.reviews-carousel');
    const reviews = document.querySelectorAll('.review');
    const reviewWidth = reviews[0].offsetWidth + 20; // Width of each review + margin

    scrollAmount -= 1; // Adjust scroll speed here

    if (Math.abs(scrollAmount) >= reviewWidth * reviews.length) {
        scrollAmount = 0; // Reset scroll to the start
    }

    carousel.style.transform = `translateX(${scrollAmount}px)`;
}

// Start continuous scrolling
setInterval(continuousScroll, 20); // Adjust interval for smoother or faster scrolling




window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


