// ------------ Toggle details for experiences/education -------------
document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.target;
        const node = document.getElementById(id);
        if (!node) return;

        const expanded = btn.getAttribute("aria-expanded") === "true";
        // toggle aria
        btn.setAttribute("aria-expanded", String(!expanded));

        // toggle visibility (use block so lists look natural)
        if (node.classList.contains("hidden")) {
            node.classList.remove("hidden");
            node.style.display = "block";
        } else {
            node.classList.add("hidden");
            node.style.display = "none";
        }
    });
});

// ------------- Fade-in on scroll using IntersectionObserver -------------
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // optional: unobserve after it becomes visible
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in").forEach(el => io.observe(el));

// ------------- Scroll to top button -------------
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ------------- Small accessibility improvement: close navbar on link click (mobile) -------------
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const bsCollapse = document.querySelector('.navbar-collapse');
        if (bsCollapse && bsCollapse.classList.contains('show')) {
            // use bootstrap's collapse via clicking the toggler if open
            document.querySelector('.navbar-toggler')?.click();
        }
    });
});

// ------------- Ensure initial hidden lists are hidden by style (in case CSS didn't run yet) -------------
document.querySelectorAll('.hidden').forEach(n => n.style.display = "none");
