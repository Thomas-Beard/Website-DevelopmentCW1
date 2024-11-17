window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

function showThankYouMessage(event) {
    event.preventDefault(); 
    const thankYouMessage = document.getElementById("thank-you-message");
    thankYouMessage.classList.remove("hidden"); // Show the message
}

function hideThankYouMessage() {
    const thankYouMessage = document.getElementById("thank-you-message");
    thankYouMessage.classList.add("hidden"); // Hide the message
}