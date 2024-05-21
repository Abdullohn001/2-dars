const showBtn = document.getElementById(`show-button`);
const modal = document.getElementById(`modal`);
const closeBtn = document.getElementById(`close-btn`);
const overly = document.getElementById(`overly`);

showBtn.addEventListener(`click`, () => {
  modal.classList.remove(`hidden`);
  overly.classList.remove(`hidden`);
});

closeBtn.addEventListener(`click`, () => {
  modal.classList.add(`hidden`);
  overly.classList.add(`hidden`);
});
