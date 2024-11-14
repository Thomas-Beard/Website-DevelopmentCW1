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

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


