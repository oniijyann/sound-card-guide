/* ============================================
   nav.js — 侧边栏导航 + 滚动高亮 + 移动端抽屉
   ============================================ */

(function () {
  const sidebar = document.getElementById("sidebar");
  const navToggle = document.getElementById("navToggle");
  const overlay = document.getElementById("navOverlay");
  const navLinks = document.querySelectorAll(".toc a[href^='#']");

  // --- 移动端抽屉开关 ---
  function openNav() {
    sidebar.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  navToggle.addEventListener("click", function () {
    if (sidebar.classList.contains("open")) {
      closeNav();
    } else {
      openNav();
    }
  });

  overlay.addEventListener("click", closeNav);

  // --- 点击导航链接后关闭抽屉（移动端） ---
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 1024) {
        closeNav();
      }
    });
  });

  // --- 滚动高亮当前章节 ---
  const sections = [];
  document.querySelectorAll("[id]").forEach(function (el) {
    const link = document.querySelector('.toc a[href="#' + el.id + '"]');
    if (link) {
      sections.push({ id: el.id, el: el, link: link });
    }
  });

  function highlightNav() {
    const scrollPos = window.scrollY + 100;
    let current = null;

    for (var i = 0; i < sections.length; i++) {
      var s = sections[i];
      if (s.el.offsetTop <= scrollPos) {
        current = s;
      }
    }

    if (current) {
      sections.forEach(function (s) {
        s.link.classList.remove("active");
      });
      current.link.classList.add("active");

      // 同时高亮父级
      var parent = current.link.closest("ul").previousElementSibling;
      if (parent && parent.tagName === "A") {
        parent.classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", highlightNav, { passive: true });
  highlightNav();
})();
