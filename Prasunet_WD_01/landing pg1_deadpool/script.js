document.addEventListener('DOMContentLoaded', () => {
    const customPointer = document.createElement('div');
    customPointer.classList.add('custom-pointer');
    document.body.appendChild(customPointer);

    document.addEventListener('mousemove', (e) => {
        customPointer.style.left = `${e.clientX}px`;
        customPointer.style.top = `${e.clientY}px`;
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const rect = link.getBoundingClientRect();
            customPointer.style.left = `${rect.left + rect.width / 2}px`;
            customPointer.style.top = `${rect.top + rect.height / 2}px`;

            
            customPointer.classList.add('pulse');

            
            customPointer.addEventListener('animationend', () => {
                customPointer.classList.remove('pulse');
            }, { once: true });
        });
    });
});