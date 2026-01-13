document.querySelectorAll('.icons figure').forEach(figure => {
    const tooltip = figure.querySelector('figcaption');

    figure.addEventListener('mouseenter', () => {
    tooltip.classList.remove('left');

    const rect = tooltip.getBoundingClientRect();

    if (rect.right > window.innerWidth) {
        tooltip.classList.add('left');
    }
    });
});

function showMore(nameInfo) {
    document.getElementById(nameInfo).style.display = "flex";
    document.getElementById("Infobackground").style.display = "block";
    document.body.classList.add("no-scroll");
}

function hideMore(nameInfo) {
    document.getElementById(nameInfo).style.display = "none";
    document.getElementById("Infobackground").style.display = "none";
    document.body.classList.remove("no-scroll");
}

function previous(name) {
    const img = document.querySelector(`.${name}.active`);
    let prevImg = img.previousElementSibling;

    if (!prevImg || prevImg.tagName == "BUTTON") {
        prevImg = document.querySelectorAll(`img.${name}`);
        prevImg = prevImg[prevImg.length - 1];
    } // jeśli nie ma poprzedniego

    img.classList.remove("active");
    prevImg.classList.add("active");
}

function next(name) {
    const img = document.querySelector(`.${name}.active`);
    let nextImg = img.nextElementSibling;

    if (!nextImg || nextImg.tagName == "BUTTON") {
        nextImg = document.querySelector(`img.${name}`);
    } // jeśli nie ma nastepnego

    img.classList.remove("active");
    nextImg.classList.add("active");
}