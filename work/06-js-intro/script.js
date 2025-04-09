(function () {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    //Toggle the visibility of the navigation menu
    const toggleMenu = () => {
        const isOpen = navMenu.classList.contains('open');
        if (isOpen) {
            navMenu.classList.remove('open');
            navToggle.setAttribute('expanded', 'false');
        } else {
            navMenu.classList.add('open');
            navToggle.setAttribute('expanded', 'true');
        }
    };

    // Add click event listener to toggle the menu
    navToggle.addEventListener('click', toggleMenu);

    // Ensure keyboard accessibility
    navToggle.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    });
})();
