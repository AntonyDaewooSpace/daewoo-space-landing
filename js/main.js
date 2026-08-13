(function () {
  var header = document.getElementById('header');
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  navToggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    header.classList.toggle('is-scrolled', isOpen || window.scrollY > 20);
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    });
  });

  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Hero video: autoplay muted; the button unmutes + hands over manual control
  var heroSection = document.querySelector('.hero-video');
  var heroVideo = document.getElementById('heroVideo');
  var heroPlay = document.getElementById('heroPlay');
  if (heroSection && heroVideo && heroPlay) {
    heroVideo.addEventListener('playing', function () {
      heroSection.classList.add('is-playing');
    });
    heroPlay.addEventListener('click', function () {
      heroVideo.muted = false;
      heroVideo.setAttribute('controls', '');
      heroVideo.play().catch(function () {
        // Autoplay/unmute bloqueado por el navegador hasta otra interacción del usuario.
      });
    });
  }

  // Launches carousel: arrows + dots move one "page" (visible width) at a time, autoplay loops
  var track = document.getElementById('launchesTrack');
  var nextBtn = document.getElementById('launchesNext');
  var prevBtn = document.getElementById('launchesPrev');
  var dotsWrap = document.getElementById('launchesDots');
  var carousel = document.querySelector('.launches__carousel');

  if (track && dotsWrap && carousel) {
    var dots = [];
    var autoplayTimer = null;

    function getStep() {
      var card = track.children[0];
      var gap = parseFloat(getComputedStyle(track).gap) || 0;
      return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
    }
    function getMaxScroll() {
      return Math.max(0, track.scrollWidth - track.clientWidth);
    }
    function getPageCount() {
      var maxScroll = getMaxScroll();
      var step = getStep();
      return step > 0 ? Math.round(maxScroll / step) + 1 : 1;
    }
    function currentPage() {
      var step = getStep();
      var page = step > 0 ? Math.round(track.scrollLeft / step) : 0;
      return Math.min(Math.max(page, 0), getPageCount() - 1);
    }
    function goToPage(index) {
      var maxScroll = getMaxScroll();
      var target = Math.min(Math.max(index * getStep(), 0), maxScroll);
      track.scrollTo({ left: target, behavior: 'smooth' });
    }
    function buildDots() {
      dotsWrap.innerHTML = '';
      var count = getPageCount();
      dots = [];
      for (var i = 0; i < count; i++) {
        (function (i) {
          var dot = document.createElement('button');
          dot.type = 'button';
          dot.setAttribute('aria-label', 'Ir al lanzamiento ' + (i + 1));
          dot.addEventListener('click', function () {
            goToPage(i);
            restartAutoplay();
          });
          dotsWrap.appendChild(dot);
          dots.push(dot);
        })(i);
      }
      updateActiveDot();
    }
    function updateActiveDot() {
      var page = currentPage();
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === page); });
    }
    function next() {
      var maxScroll = getMaxScroll();
      if (track.scrollLeft >= maxScroll - 4) {
        goToPage(0);
      } else {
        goToPage(currentPage() + 1);
      }
    }
    function prev() {
      if (track.scrollLeft <= 4) {
        goToPage(getPageCount() - 1);
      } else {
        goToPage(currentPage() - 1);
      }
    }
    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = window.setInterval(next, 4500);
    }
    function stopAutoplay() {
      if (autoplayTimer) { window.clearInterval(autoplayTimer); autoplayTimer = null; }
    }
    function restartAutoplay() { startAutoplay(); }

    buildDots();
    track.addEventListener('scroll', function () {
      window.requestAnimationFrame(updateActiveDot);
    }, { passive: true });

    if (nextBtn) nextBtn.addEventListener('click', function () { next(); restartAutoplay(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { prev(); restartAutoplay(); });

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('touchstart', stopAutoplay, { passive: true });

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildDots, 200);
    });

    startAutoplay();
  }

  // Contact form -> mailto fallback (no backend configured)
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = contactForm.name.value.trim();
      var phone = contactForm.phone.value.trim();
      var email = contactForm.email.value.trim();
      var message = contactForm.message.value.trim();

      var subject = 'Contacto desde la web - ' + name;
      var body =
        'Nombre: ' + name + '\n' +
        'Teléfono: ' + phone + '\n' +
        'Correo: ' + email + '\n\n' +
        'Mensaje:\n' + message;

      var mailto =
        'mailto:hquesnay@daewoo.space' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
})();
