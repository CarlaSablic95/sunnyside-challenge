let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");

link1.onmouseover = () => {
    link1.classList.add("border-dark-yellow");
}

link1.onmouseout = () => {
    link1.classList.remove("border-dark-yellow");
}

link2.onmouseover = () => {
    link2.classList.add("border-dark-salmon");
}

link2.onmouseout = () => {
    link2.classList.remove("border-dark-salmon");
}

let burgerMenu = document.getElementById("btn-menu");
let navMenu = document.getElementById("nav-menu");

burgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("d-block");
    navMenu.classList.add("animate__fadeInDown");
});