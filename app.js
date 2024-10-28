document.addEventListener('DOMContentLoaded', function() {
    const toggleLinks = document.querySelectorAll('.toggle');

    toggleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            const linksContainers = document.querySelectorAll('.links');

            linksContainers.forEach(container => {
                container.style.display = 'none';
            });

            toggleLinks.forEach(link => {
                link.classList.remove('active');
            });

            this.classList.add('active');

            if (section === 'academy') {
                document.querySelector('.academy-links').style.display = 'flex';
            } else if (section === 'software-development') {
                document.querySelector('.software-dev-links').style.display = 'flex';
            }
        });
    });

    // Default display for academy links
    document.querySelector('.academy-links').style.display = 'flex';

    // Function to load content into the main container
    function loadContent(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(html => {
                document.querySelector('.main-container').innerHTML = html;
            })
            .catch(error => console.error('Error fetching page:', error));
    }

    // Initially load home page content
    loadContent('home');

    // Event listeners to load content when links are clicked
    document.querySelectorAll('.menuItem').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.textContent.toLowerCase();
            loadContent(page);
        });
    });
});
