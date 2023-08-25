var navul = document.getElementById("nav-ul");
window.onscroll = () => { closeMenu() };

var checkbox = document.getElementById("menu-open");

function toggleMenu()
{
    console.log("toggleMenu triggered");

    if(checkbox.checked) {
        //navul.classList.add("menu-open");
        closeMenu();
    }
    else
    {
        openMenu()
        //navul.classList.remove("menu-open");
    }
}


function closeMenu() {
    navul.style.height = 0;
}

function openMenu() {
    navul.style.height = '150px';
}