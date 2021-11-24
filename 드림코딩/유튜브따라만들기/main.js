const infoMoreBtn = document.querySelector(
  ".info .metadata .titleAndButton .moreBtn"
);
const infoTitle = document.querySelector(
  ".info .metadata .titleAndButton .title"
);

infoMoreBtn.addEventListener("click", () => {
  infoMoreBtn.classList.toggle("clicked");
  infoTitle.classList.toggle("clamp");
});
