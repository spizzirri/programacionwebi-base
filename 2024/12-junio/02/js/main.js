const carousel = document.querySelector(".main-carousel");

const flkty = new Flickity(carousel, {
  groupCells: true,
  prevNextButtons: false,
  wrapAround: true,
  autoPlay: 1500,
});
