function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
    document.querySelector(".icon").classList.toggle("close");
  }

  function darkMode() {
    document.body.classList.toggle("dark-mode");
  }