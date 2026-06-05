
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  var btn = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav-menu');
  if (btn && nav) {
    btn.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }
});
