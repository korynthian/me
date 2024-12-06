let elements = document.querySelectorAll('.typing');
let currentElementIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (currentElementIndex < elements.length) {
        let element = elements[currentElementIndex];
        let text = element.getAttribute('data-text');

        if (charIndex < text.length) {
            element.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100); // Speed of typing
        } else {
            charIndex = 0;
            currentElementIndex++;
            setTimeout(typeEffect, 500); // Buffer before next element
        }
    }
}

window.onload = typeEffect;
