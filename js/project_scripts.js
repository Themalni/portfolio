var previousBtn = document.querySelector(".project__main__btn--previous");
var nextBtn = document.querySelector(".project__main__btn--next");
var projectContainer = document.querySelector(".project__container");

function showNextPage(){
  projectContainer.classList.toggle("project__container--next");
}
nextBtn.addEventListener("click", showNextPage);

function showPreviousPage(){
  projectContainer.classList.toggle("project__container--previous");
}
previousBtn.addEventListener("click", showPreviousPage);
