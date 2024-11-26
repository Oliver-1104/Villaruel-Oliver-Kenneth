// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove '#' from href
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Offset to avoid overlap with navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Display a message in the console when the page is loaded
    console.log('Welcome to my website! The page has been loaded.');

    // Change navbar item color when clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
