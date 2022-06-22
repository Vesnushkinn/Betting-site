// const buttonsFirst = document.querySelectorAll(".filter__button-js");
// const itemsSecond = document.querySelectorAll(".offers");
// const arrowLeft = document.querySelector(".arrow__left-js");
// const arrowRight = document.querySelector(".arrow__right-js");
const bonusesContainer = document.querySelectorAll(".bonuses__flex");
const bonusFilters = document.querySelectorAll(".other__text-js");

const items = [{
    container: document.querySelectorAll(".bonuses__flex"),
    buttons: document.querySelectorAll(".bonus__button-js"),
    arrows: {
        right: document.querySelector(".arrow__right-js"),
        left: document.querySelector(".arrow__left-js")
    }

}, {
    container: document.querySelectorAll(".offers"),
    buttons: document.querySelectorAll(".filter__button-js")
}, {
    container: document.querySelectorAll(".offers-2"),
    buttons: document.querySelectorAll(".filter__button-js-2")
}, {
    container: document.querySelectorAll(".offers-3"),
    buttons: document.querySelectorAll(".filter__button-js-3")
}]

function filters(buttons, items) {
    buttons.forEach((button, buttonIndex) =>
        button.addEventListener("click", () => {
            items.forEach((item, itemIndex) =>
                buttonIndex === itemIndex ? (item.classList.add("active")) : (item.classList.remove("active"))
            );
        })
    );
};

function arrowControl(buttonleft, buttonright, items) {
    let activeIndex = 0;
    items[activeIndex].classList.add("active");
    buttonleft.addEventListener("click", () => {
        items[activeIndex].classList.remove("active");
        activeIndex === 0 ? activeIndex = items.length - 1 : activeIndex -= 1;
        items[activeIndex].classList.add("active");
    });
    buttonright.addEventListener("click", () => {
        items[activeIndex].classList.remove("active");
        activeIndex === items.length - 1 ? activeIndex = 0 : activeIndex += 1;
        items[activeIndex].classList.add("active");
    });
};

items.forEach((el) => {
    filters(el.buttons, el.container);
    if (el.arrows && el.arrows.left && el.arrows.right) {
        arrowControl(el.arrows.left, el.arrows.right, el.container);
    };
});

function bonusesMore(button, items) {
    button.addEventListener("click", () =>  console.log(1));
    function hendler() {
        console.log(1);
        items.classList.add("active")
    }

};

bonusesMore(bonusFilters, bonusesContainer)