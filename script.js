// -=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// HERO
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-

let heroSection = document.querySelector('.hero');

// Initialize current and target values
let currentOpacity = 1;
let currentScale = 1;
let currentTranslateY = 0;
let targetOpacity = 1;
let targetScale = 1;
let targetTranslateY = 0;

// Lerp function - linear interpolation
function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

function animate() {
    currentOpacity = lerp(currentOpacity, targetOpacity, 0.1);
    currentScale = lerp(currentScale, targetScale, 0.1);
    currentTranslateY = lerp(currentTranslateY, targetTranslateY, 0.1);

    heroSection.style.opacity = currentOpacity;
    heroSection.style.transform = `scale(${currentScale}) translateY(${currentTranslateY}px)`;

    requestAnimationFrame(animate);
}

// Start the animation loop
animate();

// Update target values on scroll
window.addEventListener('scroll', () => {
    const myWorkSection = document.querySelector('.my-work');
    const myWorkPosition = myWorkSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // For myWorkSection - keep the same class toggle approach
    if (myWorkPosition < windowHeight * 0.5) {
        myWorkSection.classList.add('trigger');
    } else {
        myWorkSection.classList.remove('trigger');
    }

    const startPosition = windowHeight * 0.8;
    const endPosition = windowHeight * 0.3;

    if (myWorkPosition <= startPosition && myWorkPosition >= endPosition) {
        // Keep your original progress calculation
        const progress = 0 + ((myWorkPosition - endPosition) / (startPosition - endPosition));

        // Update target values (not directly applying them)
        targetOpacity = progress;
        targetScale = 0.8 + (progress * 0.2);
        targetTranslateY = (1 - progress) * 50;
    }
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// MY WORK
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// THUMBNAIL 1
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-



// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// THUMBNAIL 2
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-
