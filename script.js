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
// Função para ocultar o vídeo de introdução e exibir o conteúdo quando o vídeo terminar
document.getElementById('introVideo').onended = function () {
    const videoIntro = document.getElementById('video-intro');
    const content = document.getElementById('content');

    // Esconder o vídeo de introdução e mostrar o conteúdo da página
    videoIntro.style.display = 'none';
    content.style.display = 'block';
};
// Espera o vídeo carregar e depois altera a velocidade de reprodução
document.getElementById('introvideoPlay').onloadeddata = function() {
    this.playbackRate = 1;  // Ajuste para 2x a velocidade normal
};
// Espera o vídeo carregar e depois altera a velocidade de reprodução
document.getElementById('introVideoNintendo').onloadeddata = function() {
    this.playbackRate = 1;  // Ajuste para 2x a velocidade normal
};

// Espera o vídeo carregar e depois altera a velocidade de reprodução
document.getElementById('introVideoXbox').onloadeddata = function() {
    this.playbackRate = 1;  // Ajuste para 2x a velocidade normal
};

