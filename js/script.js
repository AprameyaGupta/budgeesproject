function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
    document.querySelector(".icon").classList.toggle("close");
  }

function darkMode() {
    document.body.classList.toggle("dark-mode");
}

function editBio() {
  bio = document.getElementById('bio');
  if(bio.disabled) {
    bio.disabled = false;
    return false;
  } else {
    bio.disabled = true;
    return true;
  }
}

// window.onload = () => alert("Logged In Successfully!");