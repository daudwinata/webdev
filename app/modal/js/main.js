/////////////////// Slides

let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".watch-dog__slides");
    slides.forEach(evt => {
        evt.style.display = "none";
    })

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);

}

showSlides();

/////////////////// Modal

const buttonClick = document.querySelectorAll(".watch-dog__banner");
const modalWrapper = document.querySelector(".modal-wrapper");
const bodyBackgroundColor = document.querySelector("body");
const animateText = document.querySelector(".watch-dog__content-h1");
const animateDvd = document.querySelector(".watch-dog__content-dvd-image");
const animateLogo = document.querySelector(".watch-dog__header-logo");
const animateFooter = document.querySelector(".watch-dog__footer");
const animateMenu = document.querySelector(".watch-dog__nav");
const animateCloseButton = document.querySelector(".modal-button-close");
const topRemove = document.querySelector(".top");


let slides = document.querySelectorAll(".watch-dog__slides");

buttonClick.forEach(e => {
    e.addEventListener("click", _ => {

        slides.forEach(event => {
            event.classList.add("test"); //Hidden
        })

        modalWrapper.classList.add("modal-show");
        animateText.classList.add("watch-dog__animate-text-order-js");
        animateDvd.classList.add("watch-dog__animate-dvd-js");
        animateLogo.classList.add("watch-dog__header-logo-animate-js");
        animateFooter.classList.add("watch-dog__footer-animate-js");
        animateMenu.classList.add("watch-dog__nav-animate-js");
        animateCloseButton.classList.add("watch-dog__header-logo-animate-js");

        topRemove.classList.add("hide");

        if (bodyBackgroundColor.classList.contains("modal__background-wrapper")) {
            bodyBackgroundColor.classList.remove("modal__background-wrapper");
        } else {
            bodyBackgroundColor.classList.add("modal__background-wrapper");
        }
    })
})


const buttonClose = document.querySelector(".modal-button-close");

buttonClose.addEventListener("click", _ => {
    modalWrapper.classList.remove("modal-show");
    bodyBackgroundColor.classList.remove("modal__background-wrapper");
    topRemove.classList.remove("hide");

    slides.forEach(event => {
        event.classList.remove("test"); //visible
    })

    _.stopPropagation();
})