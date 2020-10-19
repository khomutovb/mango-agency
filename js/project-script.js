let t = document.getElementById("cursor");
document.querySelector(".section-row").addEventListener("mousemove", function (n) {
    /*     t.style.left = n.clientX + "px", 
        t.style.top = n.clientY + "px" */
    translateX = n.clientX - 150;
    translateY = n.clientY - 150;
    rotation = (n.pageX / $window.width() * 90) - 45;
    t.style.transform = 'translateX(' + translateX + 'px) translateY(' + translateY + 'px) rotate(' + rotation + 'deg)';
});
function n() {
    t.classList.add("hover")
}
function s() {
    t.classList.remove("hover")
}
function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}
document.addEventListener('DOMContentLoaded', function () {
    let hoverLink = document.querySelectorAll("a.menu__item");
    for (let i = 0; i < hoverLink.length; i++) {
        o(hoverLink[i]);
        let url = hoverLink[i].getAttribute("data-img");
        hoverLink[i].addEventListener('mouseenter', function () {
            t.style.backgroundImage = "url(" + url + ")";
        });
    }
})