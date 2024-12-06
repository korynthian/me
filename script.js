let elements = document.querySelectorAll('.typing');
let currentElementIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (currentElementIndex < elements.length) {
        const element = elements[currentElementIndex];
        const text = element.getAttribute('data-text');

        if (charIndex < text.length) {
            element.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 50); // Typing speed
        } else {
            charIndex = 0;
            currentElementIndex++;
            setTimeout(typeEffect, 500); // Pause before next element
        }
    }
}

window.onload = () => {
    typeEffect();
};
