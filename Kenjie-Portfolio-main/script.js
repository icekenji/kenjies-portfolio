const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  const open = navMenu.classList.toggle("show");
  menuBtn.textContent = open ? "✕" : "☰";
  document.body.style.overflow = open ? "hidden" : "auto";
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    menuBtn.textContent = "☰";
    document.body.style.overflow = "auto";
  });
});

function openCertModal(imgSrc, title) {
  const modal = document.getElementById('certModal');
  const img = document.getElementById('certModalImg');
  const titleEl = document.getElementById('certModalTitle');
  img.src = imgSrc;
  titleEl.textContent = title;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  const modal = document.getElementById('certModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCertModal();
});
