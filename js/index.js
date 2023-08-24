var navul = document.getElementById("nav-ul");
window.onscroll = function() { closeMenu() }; 

var checkbox = document.getElementById("menu-open");

function toggleMenu()
{
    console.log("toggleMenu triggered");

    if(checkbox.checked) {
        navul.classList.add("menu-open");

    }
    else
    {
        navul.classList.remove("menu-open");
    }
}


function closeMenu() {
    navul.classList.remove("menu-open");
}