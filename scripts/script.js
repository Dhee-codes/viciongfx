const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const io = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  },
  { threshold: 0.6 }
);

sections.forEach(sec => io.observe(sec));