document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const open = navLinks.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(open));
            menuToggle.querySelector("i").className = open
                ? "fas fa-times"
                : "fas fa-bars";
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.querySelector("i").className = "fas fa-bars";
            });
        });
    }

    // Typing animation
    const typingText = document.getElementById("typingText");
    if (typingText) {
        const phrases = [
            "Aspiring Software Developer",
            "AI & ML Enthusiast",
            "Python Developer",
            "Web Development Learner"
        ];
        let phrase = 0, index = 0, deleting = false;

        const type = () => {
            const current = phrases[phrase];
            typingText.textContent = current.substring(0, index);

            if (!deleting && index < current.length) {
                index++;
                setTimeout(type, 75);
            } else if (!deleting) {
                deleting = true;
                setTimeout(type, 1300);
            } else if (index > 0) {
                index--;
                setTimeout(type, 40);
            } else {
                deleting = false;
                phrase = (phrase + 1) % phrases.length;
                setTimeout(type, 250);
            }
        };
        type();
    }

    // Section/card reveal animations
    const revealItems = document.querySelectorAll(
        "section, .skill-card, .education-card, .Sports, .certificate-card, .project-card"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-on-scroll", "is-visible");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealItems.forEach(item => {
            item.classList.add("reveal-on-scroll");
            observer.observe(item);
        });
    } else {
        revealItems.forEach(item => item.classList.add("is-visible"));
    }

    // Active navigation link
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navItems.forEach(link => {
                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === "#" + entry.target.id
                        );
                    });
                }
            });
        }, { rootMargin: "-35% 0px -55% 0px" });

        sections.forEach(section => sectionObserver.observe(section));
    }

    // Smooth internal navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const id = link.getAttribute("href");
            if (!id || id === "#") return;
            const target = document.querySelector(id);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Static portfolio contact form
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();
            alert("Thank you! Your message has been received.");
            contactForm.reset();
        });
    }
});
