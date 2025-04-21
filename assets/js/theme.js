"use strict";

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Swiper sliders
  var swipers = document.querySelectorAll('.swiper-container');
  swipers.forEach(function(swiperEl) {
    var options = JSON.parse(swiperEl.dataset.swiper || '{}');
    new Swiper(swiperEl, options);
  });

  // Animations for elements with data-zanim attributes
  var animatedElements = document.querySelectorAll('[data-zanim-xs]');
  animatedElements.forEach(function(el) {
    var options = JSON.parse(el.dataset.zanimXs || '{}');
    var delay = options.delay || 0;
    
    setTimeout(function() {
      el.style.transform = 'translate(0px)';
      el.style.opacity = '1';
    }, delay * 1000);
  });

  // Animations for elements with data-zanim-timeline attributes
  var timelineElements = document.querySelectorAll('[data-zanim-timeline]');
  timelineElements.forEach(function(el) {
    el.style.transform = 'translate(0px)';
    el.style.opacity = '1';
  });

  // Scroll to top functionality
  var scrollToTopBtn = document.querySelector('.indicator-up');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Add active class to nav links based on current page
  var currentPage = window.location.pathname.split('/').pop();
  var navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function(link) {
    var linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  // Scroll animation trigger
  document.addEventListener('scroll', function() {
    var scrollTriggerElements = document.querySelectorAll('[data-zanim-trigger="scroll"]');
    scrollTriggerElements.forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
        el.style.filter = 'blur(0px)';
        el.style.opacity = '1';
        el.style.transform = 'translate(0px)';
      }
    });
  });

  // Hide preloader after page loads
  var preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.classList.add('preloader-disappear');
    setTimeout(function() {
      preloader.style.display = 'none';
    }, 300);
  }
}); 