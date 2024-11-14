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

// Review Carousel Auto-Slide
let currentIndex = 0;

function slideReviews() {
    const carousel = document.querySelector('.reviews-carousel');
    const reviews = document.querySelectorAll('.review');
    currentIndex++;

    // Reset to first review if at the end
    if (currentIndex >= reviews.length) {
        currentIndex = 0;
    }

    // Slide effect using transform
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Set interval for auto-slide
setInterval(slideReviews, 3000); // Slide every 3 seconds


window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


