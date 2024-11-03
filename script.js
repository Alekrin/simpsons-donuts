let currentSlide = 0;

// Função para mover o carrossel
function moveCarousel(direction) {
    const carouselItems = document.querySelector('.carousel-items');
    const totalSlides = document.querySelectorAll('.carousel-items .donut').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    carouselItems.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Função para trocar as imagens ao clicar
function toggleHomerImage(event) {
    const img = event.target;
    if (img.src.includes('homer-donut.png')) {
        img.src = 'img/homer-calca.png'; // Caminho para a nova imagem
    } else {
        img.src = 'img/homer-donut.png'; // Caminho para voltar à imagem original
    }
}

// Adiciona os eventos de clique às imagens
document.getElementById('homerDonutLeft').addEventListener('click', toggleHomerImage);
document.getElementById('homerDonutRight').addEventListener('click', toggleHomerImage);