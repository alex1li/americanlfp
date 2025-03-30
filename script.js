// Simple JavaScript for American LFP Website

// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.backgroundColor = 'rgba(10, 36, 99, 0.95)';
    } else {
        header.style.padding = '20px 0';
        header.style.backgroundColor = 'rgba(10, 36, 99, 0.9)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Simple animation for stat numbers
function animateStats() {
    const statElements = document.querySelectorAll('.stat-number');
    
    statElements.forEach(stat => {
        const targetValue = stat.textContent;
        const suffix = targetValue.replace(/[0-9.+]/g, '');
        const numericValue = parseFloat(targetValue.replace(/[^0-9.+]/g, ''));
        
        let startValue = 0;
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        
        function updateNumber(currentTime) {
            const elapsedTime = currentTime - startTime;
            
            if (elapsedTime < duration) {
                const progress = elapsedTime / duration;
                const currentValue = Math.floor(progress * numericValue);
                stat.textContent = currentValue + suffix;
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = targetValue;
            }
        }
        
        requestAnimationFrame(updateNumber);
    });
}

// Run animations when elements are in viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'technology') {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const technologySection = document.getElementById('technology');
    if (technologySection) {
        observer.observe(technologySection);
    }
});
