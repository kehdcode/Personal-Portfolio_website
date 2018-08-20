//DOM selection

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial state of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
 if(!showMenu){
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add ('show'));

    //set menu state
    showMenu = true;
 } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove ('show'));

     //set menu state
     showMenu = false;

 }
}
//Typing Effect

let i = 0;
let txt ='Dawood Ahmed Kehinde{Kehcode}, is a biochemist turn developer. passionate about Tech and Community. Understand Design and Development. I write and teach code and sometimes I design'; /* The text */

const speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("aboutMe").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}