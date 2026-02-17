// Intro overlay animation handler
function handleIntroOverlay() {
    const introOverlay = document.getElementById('introOverlay');
    
    // Remove overlay after 3.5 seconds
    setTimeout(() => {
        if (introOverlay) {
            introOverlay.classList.add('fade-out');
            setTimeout(() => {
                introOverlay.remove();
                document.body.classList.add('page-loaded');
            }, 600); // Wait for fade-out animation to complete
        }
    }, 3500);
}

// Page load animation
document.addEventListener('DOMContentLoaded', function() {
    handleIntroOverlay();
});

// Optional: Add fade-in animation to elements with data-animate attribute
function observeElements() {
    const elements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => observer.observe(el));
}

observeElements();
