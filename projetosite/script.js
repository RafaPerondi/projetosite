let currentIndex = 0;
const banners = document.querySelectorAll('.banner-item');
const totalBanners = banners.length;

function showBanner(index) {
    banners.forEach((banner, i) => {
        banner.classList.remove('active');
        if (i === index) {
            banner.classList.add('active');
        }
    });
}

function nextBanner() {
    currentIndex = (currentIndex + 1) % totalBanners;
    showBanner(currentIndex);
}

function prevBanner() {
    currentIndex = (currentIndex - 1 + totalBanners) % totalBanners;
    showBanner(currentIndex);
}

setInterval(nextBanner, 5000); // Muda de banner a cada 5 segundos
showBanner(currentIndex); // Mostra o primeiro banner ao carregar
