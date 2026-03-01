// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sidebar Toggle Functionality
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');

    // Toggle the 'open' class on the sidebar when the button is clicked
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // 2. Highlight Active Navigation Link
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

    // 3. Button Click Action
    const actionButton = document.getElementById('actionButton');
    const messageText = document.getElementById('messageText');

    actionButton.addEventListener('click', () => {
        // Show an alert message
        alert('Hello! You clicked the button.');

        // Update the text on the page as well
        messageText.textContent = 'JavaScript is working perfectly. my love';
        messageText.style.color = '#27ae60'; // Change text color to green
        messageText.style.fontWeight = 'bold';
        messageText.style.marginTop = '1rem';
    });

    // Optional: Close sidebar when clicking outside on mobile
    document.addEventListener('click', (event) => {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = sidebarToggle.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });
});
