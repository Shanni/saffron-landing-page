document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const body = document.body;

  const toggleNav = () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.classList.toggle('is-open', isOpen);
    body.classList.toggle('no-scroll', isOpen);
  };

  navToggle?.addEventListener('click', toggleNav);

  const navLinks = navMenu?.querySelectorAll('a');
  navLinks?.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-open')) {
        toggleNav();
      }
    });
  });

  const fadeUpEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  fadeUpEls.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.08}s`;
    observer.observe(el);
  });

  const header = document.querySelector('.site-header');
  let lastScroll = window.pageYOffset;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (!header) return;

    if (currentScroll > lastScroll && currentScroll > 120) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
  });

  const form = document.querySelector('.cta-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();

    const confirmation = document.createElement('div');
    confirmation.className = 'form-confirmation';
    confirmation.textContent = 'Thanks! We will contact you within one business day.';
    form.appendChild(confirmation);

    setTimeout(() => {
      confirmation.remove();
    }, 4000);
  });
});
