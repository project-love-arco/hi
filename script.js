function sayYes() {
    // Agregar el contenido de respuesta
    document.body.innerHTML = `
        <div class="response">
            <h1>💖 ¡Sabía que dirías que sí! 💖</h1>
            <p>Eres la persona más especial del mundo. ¡Será un San Valentín inolvidable! 2025 me sorprendio contigo mi doña actitud💖🥰💘</p> 
            <img src="./img/ginf.png" alt="Feliz" class="response-img">

            <p> Vamos por un futuro juntos...  H-A 💖</p>
        </div>
    `;

    // Cambiar el fondo
    document.body.classList.add("happy");

    // Crear corazones cayendo
    createFallingHearts();
}

function createFallingHearts() {
    for (let i = 0; i < 10; i++) {  // Crear 10 corazones
        let heart = document.createElement('div');
        heart.classList.add('heart-fall');
        heart.textContent = '❤️';
        // Posicionar cada corazón aleatoriamente
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;  // Duración aleatoria
        document.body.appendChild(heart);

        // Eliminar los corazones después de que caigan
        setTimeout(() => {
            heart.remove();
        }, 5000);  // Eliminar después de 5 segundos
    }
}

function sayNo() {
    let buttonYes = document.querySelector(".yes");
    let buttonNo = document.querySelector(".no");

    buttonYes.style.transform = "scale(1.5)";  // El botón "Sí" crece
    buttonNo.style.transform = "scale(0.5)";  // El botón "No" se hace más pequeño
}
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}
