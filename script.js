const texts = [
    "Hello! I'm Victor Kisselev.",
    "Welcome to my personal site!",
    "I love programming and creating new things.",
    "I'm passionate about web development, especially with HTML, CSS, and JavaScript.",
    "In my spare time, I enjoy learning new technologies and improving my skills.",
    "I believe in lifelong learning and always striving to better myself.",
    "Thank you for visiting my site!",
    "I specialize in front-end development, but I'm also exploring back-end technologies.",
    "I enjoy solving complex problems and making user-friendly interfaces.",
    "When I'm not coding, you can find me hiking or reading a good book.",
    "Let's stay connected and build something incredible!"
];

const additionalTexts = [
    "Feel free to connect with me on social media.",
    "I'm open to collaboration and new opportunities!"
];

const socialLinks = [
    "Twitter",
    "GitHub",
    "LinkedIn",
    "Instagram",
    "Facebook"
];

let textIndex = 0;
let charIndex = 0;
let skipping = false;

function autoScroll() {
    window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom of the page
}

function typeText() {
    const typingElements = document.querySelectorAll('.typing');

    if (textIndex < texts.length) {
        const currentText = texts[textIndex];

        if (charIndex < currentText.length) {
            typingElements.forEach((el, index) => {
                if (index < textIndex) {
                    el.textContent = texts[index]; // Keep previously typed text
                } else if (index === textIndex) {
                    el.textContent += currentText.charAt(charIndex); // Type the current character
                }
            });

            charIndex++;
            setTimeout(typeText, skipping ? 0 : 100); // Speed of typing
        } else {
            textIndex++;
            charIndex = 0;
            setTimeout(typeText, skipping ? 0 : 1000); // Buffer time before moving to the next line
        }
    } else {
        // Start typing additional texts before social links
        typeAdditionalTexts();
    }
}

function typeAdditionalTexts() {
    const typingElements = document.querySelectorAll('.typing');
    
    if (textIndex < additionalTexts.length) {
        const currentText = additionalTexts[textIndex];

        if (charIndex < currentText.length) {
            typingElements.forEach((el, index) => {
                if (index < texts.length + textIndex) {
                    el.textContent = texts[index]; // Keep previously typed text
                } else if (index === texts.length + textIndex) {
                    el.textContent += currentText.charAt(charIndex); // Type the current character
                }
            });

            charIndex++;
            setTimeout(typeAdditionalTexts, skipping ? 0 : 100); // Speed of typing
        } else {
            textIndex++;
            charIndex = 0;
            setTimeout(typeAdditionalTexts, skipping ? 0 : 1000); // Buffer time before moving to the next line
        }
    } else {
        // Start typing social links after all main text and additional texts are done
        typeSocialLinks();
    }
}

function typeSocialLinks() {
    const socialElements = document.querySelectorAll('.social-links a');
    let socialIndex = 0;

    function typeNextLink() {
        if (socialIndex < socialLinks.length) {
            const currentLink = socialLinks[socialIndex];
            let charIndex = 0;

            function typeLink() {
                if (charIndex < currentLink.length) {
                    socialElements[socialIndex].textContent += currentLink.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeLink, skipping ? 0 : 100); // Speed of typing for links
                } else {
                    socialIndex++;
                    socialElements[socialIndex - 1].textContent += ' '; // Add space after link
                    setTimeout(typeNextLink, 500); // Delay before typing the next link
                }
            }

            typeLink();
        }
    }

    typeNextLink();
}

window.onload = () => {
    typeText();
    setInterval(autoScroll, 100); // Set an interval for auto-scrolling
};

// Skip typing on space key down
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        skipping = true;
    }
});

// Resume typing on space key up
window.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
        skipping = false;
    }
});
