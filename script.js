/* =========================================================
   PORTFOLIO INTERACTIONS
   Responsive, lightweight and error-free.
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for internal navigation.
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Reveal sections/cards as they enter the viewport.
    const revealItems = document.querySelectorAll(
        "section, .skill-card, .education-card, .Sports, .certificate-card, .project-card"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        revealItems.forEach((item) => {
            item.classList.add("reveal-on-scroll");
            observer.observe(item);
        });
    }

    // Contact form: keep the current static portfolio behavior
    // without causing a page reload.
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Thank you! Your message has been received.");
            contactForm.reset();
        });
    }
});
