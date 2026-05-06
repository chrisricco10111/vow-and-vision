/**
 * Vow & Vision - Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Navigation scroll effect
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Intersection Observer for scroll fade-in
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Trigger once
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Mobile Menu Logic
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const closeBtn = document.querySelector('.close-menu');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  const toggleMenu = (state: boolean) => {
    mobileNav.classList.toggle('active', state);
    document.body.style.overflow = state ? 'hidden' : '';
  };

  menuBtn?.addEventListener('click', () => toggleMenu(true));
  closeBtn?.addEventListener('click', () => toggleMenu(false));
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
