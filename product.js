let sidenav = document.getElementById("sidenav");
let backIcon = document.getElementById("backIcon");
let menuIcon = document.getElementById("menuIcon");
var productContainer = document.getElementById("productContainer")
var productList = productContainer.querySelectorAll("div");
var search = document.getElementById("search");
console.log(productList);
menuIcon.addEventListener("click", function () {
    sidenav.style.right = 0;
});

backIcon.addEventListener("click", function () {
    sidenav.style.right = "-100%";
});

search.addEventListener("keyup", function () {
    var searchedString = event.target.value.toUpperCase();

    for (var count = 0; count < productList.length; count = count + 1) {
        var productName = productList[count].querySelector("h4").textContent;
        if (productName.toUpperCase().indexOf(searchedString) < 0) {
            productList[count].style.display = "none"
        } else {
            productList[count].style.display = "block"
        }
    }
})