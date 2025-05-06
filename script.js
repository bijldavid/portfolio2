// -=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// HERO
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-
let heroSection = document.querySelector('.hero-inner');
let myWorkSection = document.querySelector('.my-work');

let currentOpacity = 1;
let currentScale = 1;
let currentTranslateY = 0;
let animationFrameId = null;

function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

function updateHeroStyles() {
    // Apply the current values
    heroSection.style.opacity = currentOpacity;
    heroSection.style.transform = `scale(${currentScale}) translateY(${currentTranslateY}px)`;
}

function animateValues() {
    const myWorkRect = myWorkSection.getBoundingClientRect();
    const overlapPercentage = Math.max(0, Math.min(1, 1 - (myWorkRect.top / heroSection.offsetHeight)));

    // Calculate target values
    const targetOpacity = 1 - overlapPercentage * 0.8;
    const targetScale = 1 - overlapPercentage * 0.4;
    const targetTranslateY = -150 * overlapPercentage;

    const smoothFactor = 0.2;

    // Update current values
    currentOpacity = lerp(currentOpacity, targetOpacity, smoothFactor);
    currentScale = lerp(currentScale, targetScale, smoothFactor);
    currentTranslateY = lerp(currentTranslateY, targetTranslateY, smoothFactor);

    updateHeroStyles();

    // Check if we're close enough to the target values
    const stillAnimating =
        Math.abs(currentOpacity - targetOpacity) > 0.001 ||
        Math.abs(currentScale - targetScale) > 0.001 ||
        Math.abs(currentTranslateY - targetTranslateY) > 0.1;

    if (stillAnimating) {
        animationFrameId = requestAnimationFrame(animateValues);
    } else {
        animationFrameId = null;
    }
}

if (heroSection && myWorkSection) {
    window.addEventListener('scroll', () => {
        // Cancel any existing animation
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        // Start a new animation
        animationFrameId = requestAnimationFrame(animateValues);
    });
}





window.addEventListener('scroll', function () {
    const myWorkPosition = myWorkSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the video is within the viewport
    if (myWorkPosition < windowHeight * 0.6) {
        myWorkSection.classList.add('trigger');
    } else {
        myWorkSection.classList.remove('trigger');
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


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// ABOUT ME
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-