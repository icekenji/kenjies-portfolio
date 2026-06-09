document.addEventListener("DOMContentLoaded", function () {

  const overlay = document.getElementById("intro-overlay");
  const music = document.getElementById("bg-music");

  overlay.addEventListener("click", function () {

    // Start music
    music.play().catch(() => {});

    // Resume animations
    document.body.classList.remove("paused");

    // Fade overlay
    overlay.style.opacity = "0";

    setTimeout(function () {
      overlay.style.display = "none";
    }, 1000);

  });

});