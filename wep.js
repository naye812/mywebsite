function showHomePage(event) {
  event.preventDefault();
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("homeContainer").style.display = "block";
}

function showPhotos() {
  document.getElementById("homeContainer").style.display = "none";
  document.getElementById("photoGallery").style.display = "block";
}

function goBackToHome() {
  document.getElementById("photoGallery").style.display = "none";
  document.getElementById("homeContainer").style.display = "block";
}

function showForgotPassword() {
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("forgotContainer").style.display = "block";
}

function showRegister() {
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("registerContainer").style.display = "block";
}

function goBack() {
  document.getElementById("homeContainer").style.display = "none";
  document.getElementById("forgotContainer").style.display = "none";
  document.getElementById("registerContainer").style.display = "none";
  document.getElementById("photoGallery").style.display = "none";
  document.getElementById("loginContainer").style.display = "block";
}

function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
