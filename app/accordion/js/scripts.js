
const accordionChild = document.querySelectorAll(".accordion");

for (let i = 0; i < accordionChild.length; i++) {
  const accordionLoops = accordionChild[i];
  const accordionHeader = accordionLoops.querySelector('.accordion-header');

  accordionHeader.addEventListener("click", function () {
    //console.log("yea");
    ///accordionChild[i].classList.toggle('accordion-is-open');
    if (accordionChild[i].classList.contains('accordion-is-open')) {
      accordionChild[i].classList.remove('accordion-is-open')
    } else {
      accordionChild[i].classList.add('accordion-is-open')
    }
  })
}



/* const accordions = Array.from(document.querySelectorAll('.accordion'))

accordions.forEach(accordion => {
  const accordionHeader = accordion.querySelector('.accordion__header')

  accordionHeader.addEventListener('click', e => {
    accordion.classList.toggle('is-open')
  })
}) */