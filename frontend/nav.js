function openNav() {
    let nav = document.getElementById("s-nav");
    let arrow = document.getElementById("arrow");
    nav.classList.toggle("open");
    arrow.classList.toggle("open");
    if (nav.classList.contains("open")) {
        arrow.innerHTML = "<";
    } else {
        arrow.innetHTML = ">";
    }
}