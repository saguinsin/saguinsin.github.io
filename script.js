const sections = document.querySelectorAll('.section');
const projectCards = document.querySelectorAll('.projectc');
const galleryItems = document.querySelectorAll('.gallery-item');
const contactForm = document.querySelector('.contact-form');
const sectionTitles = document.querySelectorAll('.section-title');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= 0
    );
}

function handleScrollAnimations() {
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('show');
        }
    });
    
    sectionTitles.forEach(title => {
        if (isElementInViewport(title)) {
            title.classList.add('show');
        }
    });
    
    projectCards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('show');
        }
    });
    
    galleryItems.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('show');
        }
    });
    
    if (isElementInViewport(contactForm)) {
        contactForm.classList.add('show');
    }
}

window.addEventListener('load', handleScrollAnimations);
window.addEventListener('scroll', handleScrollAnimations);

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    this.reset();
    

    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.textContent = 'Message Sent!';
    submitBtn.style.backgroundColor = '#4CAF50';
    
    setTimeout(() => {
        submitBtn.textContent = 'Send Message';
        submitBtn.style.backgroundColor = '#cccccc';
    }, 2000);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.5s ease, filter 0.5s ease';
    });
});