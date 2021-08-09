/* eslint-disable no-console */
const accordionButtons = document.querySelectorAll('.accordion__button');

function removeClassState() {
  accordionButtons.forEach((element) => {
    element.classList.remove('selected');
    element.nextElementSibling.classList.remove('show');
  });
}
function addClassState(element) {
  element.classList.add('selected');
  const nextSibling = element.nextElementSibling;
  nextSibling.classList.add('show');
}
function showHiddenPanel() {
  if (this.classList.contains('selected')) {
    removeClassState();
  } else {
    removeClassState();
    addClassState(this);
  }
}
// event button
if (accordionButtons) {
  accordionButtons.forEach((element) => {
    element.addEventListener('click', showHiddenPanel);
  });
}
