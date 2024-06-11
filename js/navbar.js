document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    const currentPagePath = window.location.pathname;

    // Select the navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Loop through each navigation link
    navLinks.forEach(link => {
        // Get the link's href attribute
        let linkHref = link.getAttribute('href');
        
        // Handle the case where the current page path is '/index.html'
        if (currentPagePath === '/index.html' && linkHref === '/') {
            // If the link is the home page link, set the href to '/'
            link.classList.add('active');
        } else if (linkHref === currentPagePath) {
            // If the link's href matches the current page pathname, add the 'active' class
            link.classList.add('active');
        }
    });
});
