let menu = document.querySelector('.menu-icon');
let navlist = document.querySelector('#navlist');
// ----- menu bar -----
navlist.style.maxHeight = "0px";
menu.onclick = () => {
    if (navlist.style.maxHeight == "0px") {
        navlist.style.maxHeight = "300px";
    }
    else {
        navlist.style.maxHeight = "0px";
    }
}


