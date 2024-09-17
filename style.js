// Smooth scrolling function
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Function to show/hide the Skills section
function toggleSkills() {
    const skillsSection = document.querySelector('.Skills');
    skillsSection.style.display = (skillsSection.style.display === 'none' || skillsSection.style.display === '') ? 'block' : 'none';
}

// Function to show/hide the About Me section
function toggleAboutMe() {
    const aboutSection = document.querySelector('.about');
    aboutSection.style.display = (aboutSection.style.display === 'none' || aboutSection.style.display === '') ? 'block' : 'none';
}

// Event listener to handle navigation clicks
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            // Get the text of the clicked link
            const sectionName = event.target.textContent.trim().toLowerCase();
            let targetSection = '';

            // Determine which section to scroll to based on link text
            if (sectionName === 'home') {
                targetSection = '.main';
            } else if (sectionName === 'about me') {
                targetSection = '.about';
            } else if (sectionName === 'education') {
                targetSection = '.Education';
            } else if (sectionName === 'skills') {
                targetSection = '.Skills';
            } else if (sectionName === 'projects') {
                targetSection = '.Projects';
            } else if (sectionName === 'contact') {
                targetSection = '.ContactMe';
            }

            // Smooth scroll to the target section
            smoothScroll(targetSection);
        });
    });

    // Default view on page load
    smoothScroll('.main');
});

// Form validation and submission
document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const name = event.target.querySelector('input[name="name"]').value;
    const email = event.target.querySelector('input[name="email"]').value;
    const message = event.target.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        // Basic validation passed
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
        // Optionally, you can send form data to a server here
        // Example: form.submit(); or use fetch/axios to send data to your server
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
