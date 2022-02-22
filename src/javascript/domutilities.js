// Hamburger 🍔
const hamburg = document.getElementById('hamburger');
const one = document.getElementById('lineOne');
const two = document.getElementById('lineTwo');
const three = document.getElementById('lineThree');
const mobileMenu = document.getElementById('mobileMenu');
const mobileContent = document.querySelector('.mobileContent');

// Hover line 
const lists = document.querySelectorAll('.list');
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

function slideLine() {
    for (let i = 0; i < lists.length; i++) {
        if (lists[i].matches(':hover')) {
            const elleft = lists[i].getBoundingClientRect().left;
            const elwidth = lists[i].offsetWidth;
            line.style.left = `${elleft}px`;
            line.style.width = `${elwidth}px`;
        }
    }
    // check for the element that was last hovered 
}

setInterval(() => {
    slideLine()
})


hamburg.addEventListener('click', animateHamburger)