const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const offset = 80; // header height
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  });
});