window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const reservationForm = document.querySelector(".reservation-form");
    const confirmationPopup = document.getElementById("confirmation-popup");

    reservationForm.addEventListener("submit", (event) => {
        event.preventDefault(); 
        
        confirmationPopup.classList.remove("hidden");

        reservationForm.reset();
    });
});

function closePopup() {
    const confirmationPopup = document.getElementById("confirmation-popup");
    confirmationPopup.classList.add("hidden"); 
}