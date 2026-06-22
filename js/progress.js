/* ============================================
   progress.js — 阅读进度条 + 返回顶部
   ============================================ */

(function () {
  const progressBar = document.getElementById("progressBar");
  const backToTop = document.getElementById("backToTop");

  function update() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = percent + "%";

    if (scrollTop > window.innerHeight * 0.8) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
