document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro-logo");
  const cards = document.querySelectorAll(".card");

  // Masquer le logo après l'animation
  setTimeout(() => {
    intro.style.display = "none";

    // Ensuite, déclencher l'animation des cartes
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("visible");
      }, index * 200); // effet en cascade
    });
  }, 4500); // durée de l'animation du logo
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");
  const body = document.body;

  // Fonction pour ouvrir le modal
  const openModal = (img) => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = `
      <strong>${img.alt}</strong><br>
      ${img.dataset.description || "Aucune description disponible."}
    `;
    body.classList.add("no-background");
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    modal.style.display = "none";
    body.classList.remove("no-background");
  };

  // Ajout des événements sur chaque image
  document.querySelectorAll(".image-container img").forEach((img) => {
    img.addEventListener("click", () => openModal(img));
  });

  // Fermeture via bouton
  closeBtn.addEventListener("click", closeModal);

  // Fermeture en cliquant en dehors de l’image
  window.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  // Fermeture avec touche Échap
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
});
