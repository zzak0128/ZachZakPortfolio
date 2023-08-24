var checkbox = document.getElementById("menu-open");


function toggleMenu()
{
    console.log("toggleMenu triggered");

    var navul = document.getElementById("nav-ul");
    if(checkbox.checked) {
        navul.style.height = 0;
    }
    else
    {
        navul.style.height = 170;
    }
}