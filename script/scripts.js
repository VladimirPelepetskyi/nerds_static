var contactsLink = document.querySelector(".button-contacts")

var contactspopup = document.querySelector(".writeus")

var contactsclose = document.querySelector(".modal-close")


contactsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactspopup.classList.add("writeus-show");
})

contactsclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactspopup.classList.remove("writeus-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (contactspopup.classList.contains("writeus-show")); {
            (contactspopup.classList.remove("writeus-show"));
        }
    }
});


var slidercontrol1 = document.querySelector(".slider-controls-item-1")
var slidercontrol2 = document.querySelector(".slider-controls-item-2")
var slidercontrol3 = document.querySelector(".slider-controls-item-3")


var slide1 = document.querySelector(".slider-item-1")
var slide2 = document.querySelector(".slider-item-2")
var slide3 = document.querySelector(".slider-item-3")



slidercontrol1.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.add("active");
    slide1.classList.remove("active");
    slide1.classList.remove("slider-none");
    slide2.classList.remove("slider-show");
    slide3.classList.remove("slider-show");

});

slidercontrol2.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.remove("slider-show");
    slide1.classList.remove("active");
    slide1.classList.add("slider-none");
    slide2.classList.add("slider-show");
    slide3.classList.remove("slider-show");

});


slidercontrol3.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.add("slider-none");
    slide1.classList.remove("active");
     slide2.classList.remove("slider-show");
    slide3.classList.add("slider-show");

});




