let sidenav = document.getElementById("sidenav");
let backIcon = document.getElementById("backIcon");
let menuIcon = document.getElementById("menuIcon");

menuIcon.addEventListener("click", function () {
    sidenav.style.right = 0;
});

backIcon.addEventListener("click", function () {
    sidenav.style.right = "-100%";
});

