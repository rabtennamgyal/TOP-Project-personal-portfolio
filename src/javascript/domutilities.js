const hamburg = document.getElementById('hamburger');
const one = document.getElementById('hamburg1');
const two = document.getElementById('hamburg2');
const mobileMenu = document.getElementById('mobileMenu');
const mobileContent = document.querySelector('.mobileContent');

hamburg.addEventListener('click', () => {
    if (hamburg.classList.contains('active')) {
        one.style.transform = 'rotate(45deg)';
        one.style.marginBottom = '0'
        two.style.transform = 'rotate(-45deg)';
        hamburg.classList.remove('active');
        mobileMenu.style.height = '90vh';
        setTimeout(() => {
            mobileContent.style.display = 'flex';
        }, 1000);
    } else {
        one.style.transform = 'rotate(0deg)';
        one.style.marginBottom = '1rem'
        two.style.transform = 'rotate(0deg)';
        hamburg.classList.add('active');
        mobileMenu.style.height = '0';
        mobileContent.style.display = 'none';
    }
})