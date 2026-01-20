const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
const themeToggle = document.getElementById('theme-toggle');

const emailBtn = document.getElementById('emailBtn');
const phoneBtn = document.getElementById('phoneBtn');

let isTransitioning = false;

/* =======================
   THEME TOGGLE
======================= */
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        themeToggle.textContent =
            document.body.classList.contains('light-mode') ? '🌙' : '☀️';
    });
}

/* =======================
   NAVIGATION
======================= */
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetSection = link.dataset.section;
        const currentActiveLink = document.querySelector('.nav-links a.active');
        const currentActiveSection = document.querySelector('section.active');

        if (
            isTransitioning ||
            (currentActiveSection && targetSection === currentActiveSection.id)
        ) return;

        isTransitioning = true;

        currentActiveLink?.classList.remove('active');
        link.classList.add('active');

        currentActiveSection?.classList.add('exiting');

        setTimeout(() => {
            sections.forEach(section =>
                section.classList.remove('active', 'exiting')
            );

            document.getElementById(targetSection)?.classList.add('active');
            isTransitioning = false;
        }, 400);
    });
});

/* =======================
   EMAIL POPUP
======================= */
if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const send = confirm(
            "Send an email to:\n\ncanterejomarmatthewbalictar@gmail.com\n\nClick OK to continue."
        );

        if (send) {
            window.location.href =
                "mailto:canterejomarmatthewbalictar@gmail.com";
        }
    });
}

/* =======================
   PHONE POPUP
======================= */
if (phoneBtn) {
    phoneBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Contact Number:\n\n0928 572 7928");
    });
}
