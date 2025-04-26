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

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.section');
hiddenElements.forEach((el) => sectionObserver.observe(el));

// --- Different observer for member cards ---
const cardsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const cards = entry.target.querySelectorAll('.member-card');
    
    if (entry.isIntersecting) {
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('show');
        }, index * 200); // 200ms stagger
      });
    } else {
      cards.forEach((card) => {
        card.classList.remove('show'); // ❗ remove .show if not intersecting
      });
    }
  });
});

const sections = document.querySelectorAll('.members-section');
sections.forEach((el) => cardsObserver.observe(el));




// When the page has fully loaded
window.addEventListener('load', function() {
  // Add the fade-in class after the page loads
  document.body.classList.add('fade-in');
});


// Fade in when page loads
window.addEventListener('pageshow', function(event) {
  document.body.classList.add('fade-in');
});

