// Hamburger 🍔
const hamburg = document.getElementById('hamburger');
const one = document.getElementById('lineOne');
const two = document.getElementById('lineTwo');
const three = document.getElementById('lineThree');
const mobileMenu = document.getElementById('mobileMenu');
const mobileContent = document.querySelector('.mobileContent');

// Hover line 
const lists = document.querySelectorAll('.links');
const line = document.getElementById('line');


function animateHamburger() {
    if (hamburg.classList.contains('active')) {
        one.style.transform = 'rotate(45deg)';
        two.style.display = 'none';
        three.style.transform = 'rotate(-45deg)';
        three.style.marginTop = '9.8px';
        hamburg.classList.remove('active');
        mobileMenu.style.height = '100vh';
        setTimeout(() => {
            mobileContent.style.display = 'flex';
        }, 1000);
    } else {
        one.style.transform = 'rotate(0deg)';
        two.style.display = 'block';
        three.style.transform = 'rotate(0deg)';
        three.style.marginTop = '0px';
        hamburg.classList.add('active');
        mobileMenu.style.height = '0';
        mobileContent.style.display = 'none';
    }
}

let position;
let current;

function slideLine() {
    for (let i = 0; i < lists.length; i++) {
        if (lists[i].matches(':hover')) {
            const elleft = lists[i].getBoundingClientRect().left;
            const elwidth = lists[i].offsetWidth;
            position = elleft;
            current = lists[i];
            line.style.left = `${elleft}px`;
            line.style.width = `${elwidth}px`;
        }
    }
}

function setPos(pos, cur) {
    if (cur) {
        const val1 = cur.getBoundingClientRect().left;
        const val2 = cur.offsetWidth;
        line.style.left = `${val1}px`;
        line.style.width = `${val2}px`;
    }
}

setInterval(() => {
    slideLine();
    setPos(position, current);
});

hamburg.addEventListener('click', animateHamburger)


// Carousel About 🎠 
const right = document.getElementById('right');
const left = document.getElementById('left');
const tile = document.querySelectorAll('.aboutContainer');
const tiles = Array.from(tile);

let cur = 0;
let max = tiles.length;

tiles.forEach((el, i) => {
    el.style.transform = `translateY(${100 * (i - cur)}%)`;
})

function slideDown() {
    if (cur === max - 1) {
        cur = 0;
    } else {
        cur++;
    }

    tiles.forEach((el, i) => {
        el.style.transform = `translateY(${100 * (i - cur)}%)`;
    })
}

right.addEventListener('click', slideDown);


// Carousel Projects 🎠 
const pright = document.getElementById('pright');
const pleft = document.getElementById('pleft');
const project = document.querySelectorAll('.proBox');
const projects = Array.from(project);

let pcur = 0;
let pmax = projects.length;

projects.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - pcur)}%)`;
})

function slideRight() {
    if (pcur === pmax - 1) {
        pcur = 0;
    } else {
        pcur++;
    }

    projects.forEach((el, i) => {
        el.style.transform = `translateX(${100 * (i - pcur)}%)`;
    })
}

function slideLeft() {
    if (pcur === 0) {
        pcur = pmax - 1;
    } else {
        pcur--;
    }

    projects.forEach((el, i) => {
        el.style.transform = `translateX(${100 * (i - pcur)}%)`;
    })
}

pright.addEventListener('click', slideRight);
pleft.addEventListener('click', slideLeft);