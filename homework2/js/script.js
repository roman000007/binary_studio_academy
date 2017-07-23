const burger = document.getElementById('burger');
const menuLeft = document.getElementById('menu-left');
let pos = 5,
    mq;

window.onload = () => {
    getPlatform();
    burger.addEventListener('click', () => {
        menuLeft.style.display = menuLeft.style.display == 'none' ? 'flex' : 'none';
    });
};






window.onresize = function (event) {
    getPlatform();
};


function getPlatform() {
    mq = window.matchMedia("screen and (min-width: 1350px)");
    if (mq.matches) {
        pos = 5;
        console.log(pos.toString() + " platform");
        menuLeft.style.display = 'flex';
    };

    mq = window.matchMedia("screen and (max-width: 1350px) and (min-width:1100px)");
    if (mq.matches) {
        pos = 4;
        console.log(pos.toString() + " platform");
        menuLeft.style.display = 'flex';
    };

    mq = window.matchMedia("screen and (max-width: 1100px) and (min-width:720px)");
    if (mq.matches) {
        pos = 3;
        console.log(pos.toString() + " platform");
        menuLeft.style.display = 'flex';
    };

    mq = window.matchMedia("screen and (max-width: 720px) and (min-width:480px)");
    if (mq.matches) {
        if (pos > 2) {
            console.log("Left menu removed");
            menuLeft.style.display = 'none';
        }
        pos = 2;
        console.log(pos.toString() + " platform");
    };

    mq = window.matchMedia("screen and (max-width: 480px)");
    if (mq.matches) {
        pos = 1;
        console.log(pos.toString() + " platform");
    };
}