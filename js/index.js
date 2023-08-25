// Gather doc items
var navul = document.getElementById("nav-ul");
var checkbox = document.getElementById("menu-open");

//Set window Scroll
addEventListener("scroll", (event) => {});
onscroll = (event) => {
    checkbox.checked = false;
    closeMenu();
};


//Toggle
function toggleMenu()
{
    console.log("toggleMenu triggered");
    checkbox.checked = !checkbox.checked;

    if(checkbox.checked) {
        openMenu();
    }
    else
    {
        closeMenu();
    }
    console.log(navul.classList);
}

//Close and open Functions
function closeMenu() {
    navul.classList.remove("menu-open-height");
    navul.classList.add("menu-close-height");
    document.getElementById("header-carret").textContent = "\u25bc";
}

function openMenu() {
    navul.classList.remove("menu-close-height");
    navul.classList.add("menu-open-height");
    document.getElementById("header-carret").textContent = "\u25b2";

}