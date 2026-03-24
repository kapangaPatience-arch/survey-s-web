const images = [
    "cadastaral survey.png",
    "engineering survey 2.png",
    "Engineering survey.png",
    "mutation survey.png",
    "Topographical survey.png",
    "topographical.png"
];

let index = 0;
const content = document.querySelector(".content");

function changeBackground() {
    content.style.backgroundImage = `url('${images[index]}')`;

    index++;
    if (index >= images.length) {
        index = 0;
    }
}

changeBackground();
setInterval(changeBackground, 4000);
const aboutPage = document.querySelector('.about-page');

if (aboutPage) {
    const elements = aboutPage.querySelectorAll('.fade-in');

    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        elements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                el.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
}