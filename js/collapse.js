/* ============================================
   collapse.js — 可折叠章节
   ============================================ */

(function () {
  const blocks = document.querySelectorAll(".collapse-block");

  blocks.forEach(function (block) {
    const toggle = block.querySelector(".collapse-toggle");
    const content = block.querySelector(".collapse-content");
    if (!toggle || !content) return;

    // 设置初始状态
    if (block.dataset.default === "expanded") {
      block.classList.add("open");
    }

    toggle.addEventListener("click", function () {
      block.classList.toggle("open");
    });
  });
})();
