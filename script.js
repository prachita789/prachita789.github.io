const menu_btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".header");

const toogleSwitch = () =>{
   nav.classList.toggle('active');
};

menu_btn.addEventListener("click", () =>
toogleSwitch());