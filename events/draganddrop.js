const cards = document.querySelectorAll('.card');
let dragged = null;

cards.forEach(card => {
  card.addEventListener('dragstart', (e) => {
    dragged = card;
    card.classList.add('dragging');
  });

  card.addEventListener('dragend', (e) => {
    dragged = null;
    card.classList.remove('dragging');
  });

  card.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  card.addEventListener('drop', (e) => {
    e.preventDefault();
    const container = card.parentNode;
    const currentIndex = [...container.children].indexOf(card);
    const draggedIndex = [...container.children].indexOf(dragged);

    if (draggedIndex < currentIndex) {
      container.insertBefore(dragged, card.nextSibling);
    } else {
      container.insertBefore(dragged, card);
    }
  });
});