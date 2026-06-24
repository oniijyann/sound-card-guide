/* ============================================
   animations.js — 滚动入场动画 + Hero 波形
   Audio Neon Theme
   ============================================ */

(function () {
  // --- Hero 波形条生成 ---
  var heroWave = document.getElementById("heroWave");
  if (heroWave) {
    var barCount = 60;
    for (var i = 0; i < barCount; i++) {
      var bar = document.createElement("div");
      bar.className = "bar";
      // 随机动画延迟和时长，模拟音频波形
      bar.style.animationDelay = (Math.random() * 1.2) + "s";
      bar.style.animationDuration = (0.8 + Math.random() * 0.8) + "s";
      heroWave.appendChild(bar);
    }
  }

  // --- 滚动入场动画 ---
  var revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealElements.length > 0) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // 降级处理：直接显示
    revealElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }
})();
