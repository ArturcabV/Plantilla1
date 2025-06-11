const secciones = document.querySelectorAll('.seccion');
const cuadros = document.querySelectorAll('.cuadro');

let currentIndex = -1;
let lastScroll = window.pageYOffset;

function showCuadro(index, direction) {
    const cuadro = cuadros[index];
    anime({
        targets: cuadro,
        opacity: 1,
        scale: 1,
        translateX: 0,
        duration: 700,
        easing: 'easeOutExpo'
    });
}

function hideCuadro(index, direction) {
    if (index < 0 || index >= cuadros.length) return;
    const cuadro = cuadros[index];
    anime({
        targets: cuadro,
        opacity: 0,
        scale: 0.8,
        translateX: direction === 'down' ? -500 : 500,
        duration: 600,
        easing: 'easeInExpo'
    });
}

function handleScroll() {
    const scrollY = window.pageYOffset;
    const triggerOffset = window.innerHeight * 0.80; // ← Ajusta aquí el "centro" virtual
    const screenMiddle = scrollY + triggerOffset;

    let newIndex = -1;
    secciones.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + scrollY;
        const bottom = top + sec.offsetHeight;

        if (screenMiddle >= top && screenMiddle < bottom) {
            newIndex = i;
        }
    });

    if (newIndex !== currentIndex) {
        const direction = scrollY > lastScroll ? 'down' : 'up';
        hideCuadro(currentIndex, direction);
        showCuadro(newIndex, direction);
        currentIndex = newIndex;
    }

    lastScroll = scrollY;
}

// Inicializar
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
    handleScroll();
});