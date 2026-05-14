(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Home hero crossfade */
  var slides = document.querySelectorAll(".hero__slide");
  if (slides.length) {
    if (reduceMotion) {
      slides.forEach(function (s, i) {
        s.classList.toggle("is-active", i === 0);
      });
    } else {
      var cur = 0;
      slides[0].classList.add("is-active");
      window.setInterval(function () {
        slides[cur].classList.remove("is-active");
        cur = (cur + 1) % slides.length;
        slides[cur].classList.add("is-active");
      }, 5200);
    }
  }

  if (!reduceMotion && "IntersectionObserver" in window) {
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );

    document.querySelectorAll(".reveal").forEach(function (el) {
      obs.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
