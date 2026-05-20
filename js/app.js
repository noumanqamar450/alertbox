/* ════════════════════════════════════════
   ALERTBOX — Upgraded app.js
   Vanilla JS — no jQuery, no Owl Carousel
   ════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  // ── 1. Navbar scroll effect ───────────────────────────────
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  // ── 2. Mobile menu toggle ─────────────────────────────────
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener("click", () => {
      const isOpen = !mobileDrawer.classList.contains("hidden");
      mobileDrawer.classList.toggle("hidden", isOpen);
      mobileDrawer.classList.toggle("flex", !isOpen);
      menuBtn.querySelector("i").className = isOpen
        ? "fa fa-bars text-lg"
        : "fa fa-xmark text-lg";
    });
    // Close when a link is clicked
    mobileDrawer.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileDrawer.classList.add("hidden");
        mobileDrawer.classList.remove("flex");
        menuBtn.querySelector("i").className = "fa fa-bars text-lg";
      });
    });
  }

  // ── 3. Copy-to-clipboard ──────────────────────────────────
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const codeId = btn.dataset.code;
      const codeEl = codeId ? document.getElementById(codeId) : null;
      const text = codeEl ? codeEl.innerText.trim() : "";

      if (!text) return;

      navigator.clipboard
        .writeText(text)
        .then(() => {
          btn.innerHTML = '<i class="fa fa-check"></i>';
          btn.classList.add("copied");
          showToast("success");
          setTimeout(() => {
            btn.innerHTML = '<i class="fa fa-copy"></i>';
            btn.classList.remove("copied");
          }, 2500);
        })
        .catch(() => {
          showToast("error");
        });
    });
  });

  // ── 4. Toast helper ───────────────────────────────────────
  function showToast(type) {
    const toast = document.getElementById(
      type === "success" ? "toastSuccess" : "toastError",
    );
    if (!toast) return;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  }

  // ── 5. Smooth-scroll nav links ────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ── 6. Carousel ───────────────────────────────────────────
  new Splide(".splide", {
    type: "loop",
    autoplay: 'pause',
    perPage: 3,
    padding: 0,
    classes: {
		arrows: 'splide__arrows',
		arrow : 'splide__arrow',
		prev  : 'splide__arrow--prev',
		next  : 'splide__arrow--next',
  },
    breakpoints: {
		640: {
            perPage: 1,
        },
    }
  }).mount();
  //   const track     = document.getElementById('carouselTrack');
  //   const dotsWrap  = document.getElementById('carouselDots');
  //   const prevBtn   = document.getElementById('prevSlide');
  //   const nextBtn   = document.getElementById('nextSlide');

  //   if (track) {
  //     const slides     = track.querySelectorAll('.carousel-slide');
  //     const total      = slides.length;
  //     let   current    = 0;
  //     let   autoTimer  = null;

  //     // Build dots
  //     slides.forEach((_, i) => {
  //       const dot = document.createElement('button');
  //       dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
  //       dot.setAttribute('aria-label', `Slide ${i + 1}`);
  //       dot.addEventListener('click', () => goTo(i));
  //       dotsWrap.appendChild(dot);
  //     });

  //     function goTo(index) {
  //       current = (index + total) % total;
  //       track.style.transform = `translateX(-${current * 100}%)`;
  //       dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
  //         d.classList.toggle('active', i === current);
  //       });
  //     }

  //     function next() { goTo(current + 1); }
  //     function prev() { goTo(current - 1); }

  //     nextBtn?.addEventListener('click', () => { next(); resetAuto(); });
  //     prevBtn?.addEventListener('click', () => { prev(); resetAuto(); });

  //     // Autoplay
  //     function startAuto() {
  //       autoTimer = setInterval(next, 3500);
  //     }
  //     function resetAuto() {
  //       clearInterval(autoTimer);
  //       startAuto();
  //     }
  //     startAuto();

  //     // Pause on hover
  //     track.parentElement.addEventListener('mouseenter', () => clearInterval(autoTimer));
  //     track.parentElement.addEventListener('mouseleave', startAuto);

  //     // Touch / swipe
  //     let touchStartX = 0;
  //     track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  //     track.addEventListener('touchend', e => {
  //       const diff = touchStartX - e.changedTouches[0].clientX;
  //       if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); resetAuto(); }
  //     }, { passive: true });
  //   }

  // ── 7. Scroll reveal ──────────────────────────────────────
  const revealEls = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
  );
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  revealEls.forEach((el) => revealObserver.observe(el));
});
