function showCourse(courseId) {
    // Hide all course sections
    document.querySelectorAll('.course-section').forEach(section => {
        section.style.display = 'none';
    });
    // Display the selected course
    document.getElementById(courseId).style.display = 'block';
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});