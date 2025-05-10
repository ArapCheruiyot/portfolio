// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Projects Section when clicking the button
function scrollToProjects() {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
}

// Hover effect on the image
const profileImage = document.getElementById('profile-image');
profileImage.addEventListener('mouseenter', function () {
    profileImage.style.transform = 'scale(1.1)';
    profileImage.style.transition = 'transform 0.3s ease';
});
profileImage.addEventListener('mouseleave', function () {
    profileImage.style.transform = 'scale(1)';
});


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1); // Remove '#'
            
            sections.forEach(section => {
                section.classList.remove("active");
            });

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");
            }

            // Scroll to top of the newly activated section
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Show home section by default
    document.getElementById("home").classList.add("active");
});
