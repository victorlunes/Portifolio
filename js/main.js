document.addEventListener('mousemove', (e) => {
    const shine = document.querySelector('.shine-effect');
    shine.style.setProperty('--x', `${e.clientX}px`);
    shine.style.setProperty('--y', `${e.clientY}px`);
});
