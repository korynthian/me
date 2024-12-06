const texts = [
    "Hello, I'm [Your Name].",
    "Welcome to my personal site!",
    "I'm a web developer passionate about creating engaging digital experiences.",
    "I specialize in front-end development with expertise in HTML, CSS, and JavaScript.",
    "Feel free to explore my projects and get in touch!"
];

let textIndex = 0;
let charIndex = 0;
let typingElement;

function typeText() {
    typingElement = document.querySelectorAll('.typing')[textIndex];
    if (!typingElement) return;

    const text = typingElement.getAttribute('data-text');

    if (charIndex < text.length) {
        typingElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Speed of typing
    } else {
        charIndex = 0;
        textIndex++;
        if (textIndex < texts.length) {
            setTimeout(typeText, 500); // Buffer time before next section
        }
    }
}

window.onload = typeText;
