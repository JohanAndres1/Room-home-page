function start(main_hamburger, main_links, main_close) {
    let menuNav = document.querySelector(main_hamburger);
    menuNav.addEventListener('click', () => {
        let menuNav = document.querySelector(main_links);
        menuNav.classList.toggle(main_close);
    }
    );
}
start('.main_hamburger', '.main_links', 'main_close');
start('.main_img', '.main_links', 'main_close')
start('.main_hamburger', '.main', 'main_background');
start('.main_img', '.main', 'main_background');




let timeSlider = 5;
let timeSleep = null;
let selector = 1
// function time() {
//     timeSleep = setInterval(() => {
//         timeSlider--;
//         setTimeout(() => {
//             if (timeSlider == 0) {
//                 if (selector == 1) {
//                     document.querySelector('.main_hero').className = "main_hero2";
//                     timeSlider = 5;
//                     selector = 2;
//                 }
//                 else if (selector == 2) {
//                     document.querySelector('.main_hero2').className = "main_hero3";
//                     timeSlider = 5;
//                     selector = 3;
//                 }
//                 else {
//                     document.querySelector('.main_hero3').className = "main_hero";
//                     timeSlider = 5;
//                     selector = 1;
//                 }
//             }
//         });
//     }, 1000);
// }
// time()



function arrowsRigh(right) {
    timeSlide = 5;
    let next = document.querySelector(right);
    next.addEventListener('click', () => {
        if (selector == 1) {
            document.querySelector('.main_hero').className = "main_hero2";
            let secondItem = document.querySelector(".buy_title");
            secondItem.textContent = "We are available all across the globe";
            let seconP = document.querySelector(".buy_parrafo");
            seconP.textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
            selector = 2;
            timeSlider = 5;
        }
        else if (selector == 2) {
            document.querySelector('.main_hero2').className = "main_hero3";
            let secondItem = document.querySelector(".buy_title");
            secondItem.textContent = "Manufactured with the best materials";
            let seconP = document.querySelector(".buy_parrafo");
            seconP.textContent = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
            selector = 3;
            timeSlider = 5;
        }
        else {
            document.querySelector('.main_hero3').className = "main_hero";
            let secondItem = document.querySelector(".buy_title");
            secondItem.textContent = "Discover innovative ways to decorate";
            let seconP = document.querySelector(".buy_parrafo");
            seconP.textContent = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
            selector = 1;
            timeSlider = 5;
        }
    });
}

function arrowsLeft(left) {
    let back = document.querySelector(left);
    back.addEventListener('click', () => {
        if (selector == 3) {
            document.querySelector('.main_hero3').className = "main_hero2";
            let secondItem = document.querySelector(".buy_title");
            secondItem.textContent = "We are available all across the globe";
            let seconP = document.querySelector(".buy_parrafo");
            seconP.textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
            selector = 2;
            timeSlider = 5;
        }
        else if (selector == 2) {
            document.querySelector('.main_hero2').className = "main_hero";
            let secondItem = document.querySelector(".buy_title");
            secondItem.textContent = "Discover innovative ways to decorate";
            let seconP = document.querySelector(".buy_parrafo");
            seconP.textContent = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
            selector = 1;
            timeSlider = 5;
        }
        else {
            document.querySelector('.main_hero').className = "main_hero3";
            let secondItem = document.querySelector(".buy_title");
            secondItem.textContent = "Manufactured with the best materials";
            let seconP = document.querySelector(".buy_parrafo");
            seconP.textContent = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
            selector = 3;
            timeSlider = 5;
        }
    });
}

arrowsRigh('.arrow_right');
arrowsLeft('.arrow_left');

// let Buy = document.querySelector('').className = "buy_container2";
// const container = document.querySelector(".buy_container");
// const element = document.createElement("h1").classList('buy_title');



// A) Reemplaza por todos sus hijos
// container.replaceChildren(element);

// B) El container es reemplazado por el nuevo item hijo
// container.replaceWith(element);