const animateElements = document.querySelectorAll(".js-animate");

Array.from(animateElements).forEach((element, index) => {
  let time = 0;

  if (index > 0) {
    time = ((index + 1) * 2) * 300;
  }

  setTimeout(() => {
    element.classList.add('animated');
  }, time);
});
