const arrowLeft = document.querySelector(".arrow__left-js");
const arrowRight = document.querySelector(".arrow__right-js");
const arrowLeftMob = document.querySelector(".arrow__left-jsm");
const arrowRightMob = document.querySelector(".arrow__right-jsm");
const bonusesContainer = document.querySelectorAll(".bonuses__flex");
const bonusFilters = document.querySelector(".other__text-js");

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
}];

function filters(buttons, items) {
    let activeIndex = 0;
    buttons[activeIndex].classList.add("active__link-orange");
    buttons.forEach((button, buttonIndex) =>
        button.addEventListener("click", () => {
            if (activeIndex > buttonIndex || activeIndex < buttonIndex) {
                buttons[activeIndex].classList.remove("active__link-orange");
                buttons[buttonIndex].classList.add("active__link-orange");
                activeIndex = buttonIndex
            };
            items.forEach((item, itemIndex,) => {
                if (buttonIndex === itemIndex) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            }
            );
        })
    );
};

function arrowControl(buttonleft, buttonright, items, buttons) {
    let activeIndex = 0;
    buttons[activeIndex].classList.add("active__link-orange");
    items[activeIndex].classList.add("active");
    buttonleft.addEventListener("click", () => {
        items[activeIndex].classList.remove("active");
        buttons[activeIndex].classList.remove("active__link-orange");
        activeIndex === 0 ? activeIndex = items.length - 1 : activeIndex -= 1;
        buttons[activeIndex].classList.add("active__link-orange");
        items[activeIndex].classList.add("active");
    })
    buttonright.addEventListener("click", () => {
        items[activeIndex].classList.remove("active");
        buttons[activeIndex].classList.remove("active__link-orange");
        activeIndex === items.length - 1 ? activeIndex = 0 : activeIndex += 1;
        buttons[activeIndex].classList.add("active__link-orange");
        items[activeIndex].classList.add("active");
    });
};

items.forEach((el) => {
    if (el.buttons.length && el.container) {
        filters(el.buttons, el.container);
        if (el.arrows && el.arrows.left && el.arrows.right && el.buttons) {
            arrowControl(el.arrows.left, el.arrows.right, el.container, el.buttons);
        };
    }
});

const getId = (link) => link.getAttribute("href").replace("#", "");
const anchors = document.querySelectorAll('.anchor__list a[href*="#"]');

const observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            anchors.forEach((link) => {
                link.classList.toggle("active__link", getId(link) === entry.target.id);
            });
        }
    });
}, {
    threshold: 1,
});

const section = document.querySelectorAll(".anchor__section-js").forEach((section) =>
    observe.observe(section),
);

for (anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            anchorId = this.getAttribute('href');
            document.querySelector(anchorId).scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        })
    }
};

function bonusesMore(button, items) {
    if (button && items.length) {
        button.addEventListener("click", () => {
            (items[1].classList.contains("active")) ?
                items[1].classList.remove("active") :
                items[1].classList.add("active");
        });
    }
};

bonusesMore(bonusFilters, bonusesContainer);

const burgerButton = document.querySelectorAll(".menu__button");
const birgerContainer = document.querySelectorAll(".header__container-js");

function burger(buttons, items) {
    let activeIndex = 0;
    buttons[activeIndex].classList.add("active");
    items[activeIndex].classList.add("active");
    buttons.forEach((button, buttonIndex) =>
        button.addEventListener("click", () => {
            buttons[activeIndex].classList.remove("active");
            items[activeIndex].classList.remove("active");
            if (activeIndex === 0) { activeIndex = 1; document.body.style.overflow = "hidden" } else { activeIndex = 0; document.body.style.overflow = "visible" };
            buttons[activeIndex].classList.add("active");
            items[activeIndex].classList.add("active");
        })
    );
};

burger(burgerButton, birgerContainer);

function arrowControlOnly(buttonleft, buttonright, items) {
    if (buttonleft && buttonright && items) {
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
    }
};

arrowControlOnly(arrowLeft, arrowRight, bonusesContainer);
arrowControlOnly(arrowLeftMob, arrowRightMob, bonusesContainer);

const commentButton = document.querySelector(".reply__text");
const commentForm = document.querySelector(".form2");

function replyFunction(button, form) {
    if (button && form) {
        button.addEventListener("click", () => {
            form.classList.toggle("active");
        });
    }
};

replyFunction(commentButton, commentForm);