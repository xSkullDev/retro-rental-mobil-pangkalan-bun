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
    
    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove('show');
        }
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
function kirimWa1() {
    const nomorWa = '+6285652259623';
    const pesanSekarang = "Hallo, saya ingin memesan Mobil Inova Reborn. Bisakah Anda memberikan saya informasi tentang mobil yang tersedia?";
    const encodedMessage = encodeURIComponent(pesanSekarang);
    const url = `https://api.whatsapp.com/send?phone=${nomorWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}

function kirimWa2() {
    const nomorWa = '+6285652259623';
    const pesanSekarang = "Hallo, saya ingin memesan Mobil Agya. Bisakah Anda memberikan saya informasi tentang mobil yang tersedia?";
    const encodedMessage = encodeURIComponent(pesanSekarang);
    const url = `https://api.whatsapp.com/send?phone=${nomorWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}

function kirimWa3() {
    const nomorWa = '+6285652259623';
    const pesanSekarang = "Hallo, saya ingin memesan Mobil Sigra. Bisakah Anda memberikan saya informasi tentang mobil yang tersedia?";
    const encodedMessage = encodeURIComponent(pesanSekarang);
    const url = `https://api.whatsapp.com/send?phone=${nomorWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}

function kirimWa4() {
    const nomorWa = '+6285652259623';
    const pesanSekarang = "Hallo, saya ingin memesan Mobil Honda Brio. Bisakah Anda memberikan saya informasi tentang mobil yang tersedia?";
    const encodedMessage = encodeURIComponent(pesanSekarang);
    const url = `https://api.whatsapp.com/send?phone=${nomorWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}

function kirimWa5() {
    const nomorWa = '+6285652259623';
    const pesanSekarang = "Hallo, saya ingin memesan Mobil Wuling Confero. Bisakah Anda memberikan saya informasi tentang mobil yang tersedia?";
    const encodedMessage = encodeURIComponent(pesanSekarang);
    const url = `https://api.whatsapp.com/send?phone=${nomorWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}

function kirimWa6() {
    const nomorWa = '+6285652259623';
    const pesanSekarang = "Hallo, saya ingin memesan Mobil Avanzha. Bisakah Anda memberikan saya informasi tentang mobil yang tersedia?";
    const encodedMessage = encodeURIComponent(pesanSekarang);
    const url = `https://api.whatsapp.com/send?phone=${nomorWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}

function kirimWa7() {
    const nomorWa = '+6285652259623';
    const pesanSekarang = "Hallo, saya ingin memesan Pick Up. Bisakah Anda memberikan saya informasi tentang mobil yang tersedia?";
    const encodedMessage = encodeURIComponent(pesanSekarang);
    const url = `https://api.whatsapp.com/send?phone=${nomorWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}

function kirimWa8() {
    const nomorWa = '+6285652259623';
    const pesanSekarang = "Hallo, saya ingin memesan Honda WRV. Bisakah Anda memberikan saya informasi tentang mobil yang tersedia?";
    const encodedMessage = encodeURIComponent(pesanSekarang);
    const url = `https://api.whatsapp.com/send?phone=${nomorWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}

// Function menghubungi admin
function hubungi1() {
    const kontakWa = '+6285652259623';
    const konsultasi = "Hallo, saya ingin bertanya mengenai layanan Anda.";
    const encodedMessage = encodeURIComponent(konsultasi);
    const url = `https://api.whatsapp.com/send?phone=${kontakWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}

function hubungi2() {
    const kontakWa = '+6281545324360';
    const konsultasi = "Hallo, saya ingin bertanya mengenai layanan Anda.";
    const encodedMessage = encodeURIComponent(konsultasi);
    const url = `https://api.whatsapp.com/send?phone=${kontakWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}

function hubungi3() {
    const kontakWa = '+6285828171418';
    const konsultasi = "Hallo, saya ingin bertanya mengenai layanan Anda.";
    const encodedMessage = encodeURIComponent(konsultasi);
    const url = `https://api.whatsapp.com/send?phone=${kontakWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}

// Function pop up pesan
// Function pop up utama
document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('popUpUtama');

    // Function to show the popup
    function showPopup() {
        popup.style.display = 'block';
    }

    // Show the popup after 1 second
    setTimeout(showPopup, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    const popUpUtama = document.querySelector('.pop-up-utama');
    const popUpIsi = document.querySelector('.pop-up-isi');

    popUpUtama.addEventListener('click', function(event) {
        if (popUpIsi.style.display === 'block') {
            popUpIsi.style.display = 'none'; // Hide the pop-up-isi div
        } else {
            popUpIsi.style.display = 'block'; // Show the pop-up-isi div
        }
        event.stopPropagation(); // Prevent click event from bubbling up to the document
    });

    document.addEventListener('click', function(event) {
        if (!popUpIsi.contains(event.target) && !popUpUtama.contains(event.target)) {
            popUpIsi.style.display = 'none'; // Hide the pop-up-isi div
        }
    });
});

// Function mengirim pesan otomatis ke admin
function adminOtomatis1() {
    const nomorWa = "+6285652259623";
    const isiPesan = "Hallo, saya ingin bertanya mengenai layanan Anda.";
    const encodedMessage = encodeURIComponent(isiPesan);
    const url = `https://api.whatsapp.com/send?phone=${nomorWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}

function adminOtomatis2() {
    const nomorWa = "+6281545324360";
    const isiPesan = "Hallo, saya ingin bertanya mengenai layanan Anda.";
    const encodedMessage = encodeURIComponent(isiPesan);
    const url = `https://api.whatsapp.com/send?phone=${nomorWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}

function adminOtomatis3() {
    const nomorWa = "+6285828171418";
    const isiPesan = "Hallo, saya ingin bertanya mengenai layanan Anda.";
    const encodedMessage = encodeURIComponent(isiPesan);
    const url = `https://api.whatsapp.com/send?phone=${nomorWa}&text=${encodedMessage}`;

    window.open(url, '_blank');
}