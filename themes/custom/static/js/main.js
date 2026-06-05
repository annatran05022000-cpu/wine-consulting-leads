document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("menu-toggle");
  var nav = document.getElementById("nav-menu");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Reading progress bar
  var bar = document.createElement("div");
  bar.id = "read-progress";
  document.body.prepend(bar);
  window.addEventListener("scroll", function () {
    var doc = document.documentElement;
    var scrolled = doc.scrollTop / (doc.scrollHeight - doc.clientHeight) * 100;
    bar.style.width = Math.min(scrolled, 100) + "%";
  });
});
