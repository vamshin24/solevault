document.addEventListener('DOMContentLoaded', () => {
    // Form submission handling
    const form = document.getElementById('waitlist-form');
    const confirmation = document.getElementById('confirmation');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // In a real app, you would send this to your backend
            const formData = new FormData(form);
            console.log('Form submitted:', Object.fromEntries(formData));

            // Show confirmation message
            form.classList.add('hidden');
            confirmation.classList.remove('hidden');
        });
    }

    // Single starter animation for the hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.classList.add('reveal');
        setTimeout(() => {
            hero.classList.add('visible');
        }, 100);
    }
});

