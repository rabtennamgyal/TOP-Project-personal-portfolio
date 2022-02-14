const hamburg = document.getElementById('hamburger');

hamburg.addEventListener('click', () => {
    const one = document.getElementById('hamburg1');
    const two = document.getElementById('hamburg2');
    const three = document.getElementById('hamburg3');

    one.style.transform = 'rotate(45deg)';
    // one.style.margin = '0'
    // two.style.margin = '0'
    two.style.display = 'none';
    three.style.transform = 'rotate(-45deg)';
    //three.style.margin = '0'
})