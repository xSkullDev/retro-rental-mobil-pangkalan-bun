// Function tampilan Hamburger pada device smartphone
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
});


// Function tampilan Slide bergerak
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slidesWrapper = document.querySelector('.slides');

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        const visibleSlides = window.innerWidth > 1024 ? 3 : (window.innerWidth > 768 ? 2 : 1);
        const offset = -currentIndex * (100 / visibleSlides);
        slidesWrapper.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    setInterval(nextSlide, 3000);

    showSlide(currentIndex);
});

// Function mengirim pesan whatsapp
function kirimWa() {
    const nomorWa = '+6282253585053';
    const pesanSekarang = "tes";
    const encodedMessage = encodeURIComponent(pesanSekarang);
    const url = `https://api.whatsapp.com/send?phone=${nomorWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}