const viewWorkButton = document.getElementById('view-work');
const projectsSection = document.getElementById('projects');

viewWorkButton.addEventListener('click', () => {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});

const viewDocsButton = document.getElementById('view-docs');
const websiteDocs = document.getElementById('documentation');

viewDocsButton.addEventListener('click', () => {
    const isOpen = websiteDocs.hidden;
    websiteDocs.hidden = !isOpen;
    viewDocsButton.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
        websiteDocs.scrollIntoView({ behavior: 'smooth' });
    }
});

const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');
const sendMessageButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('input', () => {
    sendMessageButton.textContent = 'Send Message';
    contactStatus.textContent = '';
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    sendMessageButton.textContent = 'Successful!';
    contactStatus.textContent = 'Form validated successfully. Message delivery is not connected yet.';
    contactForm.reset();
});