let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? "block" : "none";
  });
}

document.querySelector(".next").onclick = () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
};

document.querySelector(".prev").onclick = () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
};

// Auto slide
setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, 5000);

// Initial call
showSlide(slideIndex);




  // Select both text blocks
  const heroTexts = document.querySelectorAll('.hero-text_p1, .hero-text_p2');

  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    heroTexts.forEach(text => {
      // move text up slightly faster than scroll
      text.style.transform = `translate(-50%, calc(-50% - ${scrollY * 0.3}px))`;
    });
  });


  (function(){
  const nav = document.getElementById('site-navbar');

  // detect basic sticky support
  function supportsSticky(){
    const el = document.createElement('a');
    el.style.cssText = 'position:sticky;position:-webkit-sticky;';
    return el.style.position.indexOf('sticky') !== -1;
  }

  if(!supportsSticky()){
    // add class so CSS switches to fixed fallback and prevent overlap
    document.documentElement.classList.add('no-sticky');
    nav.classList.add('fixed-fallback');

    // ensure page content not hidden under fixed navbar
    const navH = nav.offsetHeight;
    document.body.style.paddingTop = navH + 'px';
  }

  // If fixed fallback is used (or even if not), ensure padding is set if necessary (safe)
  function ensurePaddingForFixed(){
    const cs = getComputedStyle(nav);
    if(cs.position === 'fixed'){
      document.body.style.paddingTop = nav.offsetHeight + 'px';
    }
  }
  ensurePaddingForFixed();
  window.addEventListener('resize', ensurePaddingForFixed);

  // mobile toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Optional: highlight active link while scrolling
  const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = navLinks.map(a => document.querySelector(a.getAttribute('href')));
  window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + nav.offsetHeight + 8;
    sections.forEach((sec, i) => {
      if(!sec) return;
      if(sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop){
        navLinks.forEach(l => l.classList.remove('active'));
        navLinks[i].classList.add('active');
      }
    });
  });

  // Debugging helper: warn if an ancestor may break sticky
  (function checkAncestors(){
    let el = nav.parentElement;
    while(el){
      const cs = getComputedStyle(el);
      if(cs.transform !== 'none' || ['auto','scroll','hidden'].includes(cs.overflow)){
        console.warn('Ancestor may interfere with position:sticky:', el, cs);
      }
      el = el.parentElement;
    }
  })();

})();

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLeft = document.querySelector('.nav-left');
  const navRight = document.querySelector('.nav-right');

  navToggle.addEventListener('click', () => {
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
  });
});

function toggleNavLink() {
      const link = document.getElementById("switch-link");

      if (window.innerWidth <= 768) {
        // Mobile → show About
        link.textContent = "About";
        link.href = "about.html";
      } else {
        // Desktop → show Contact
        link.textContent = "Contact";
        link.href = "contact.html";
      }
    }

    // Run on page load
    toggleNavLink();

    // Run when window is resized
    window.addEventListener("resize", toggleNavLink);
