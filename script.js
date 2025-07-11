const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });
    
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });
    
    setTimeout(() => {
        span.classList.add('active');
    }, 750 * (idx + 1));
});

function openCard() {
    document.querySelector('.cover').style.display = 'none';
    document.querySelector('.message').style.display = 'block';
}
