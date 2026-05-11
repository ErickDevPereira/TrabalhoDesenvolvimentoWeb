let showButtons = false;
const cont = document.getElementById("container");

function toggleHamburguer() {
    if (!showButtons) {
        cont.style.display = "flex";
        cont.style.flexDirection = "column";
    } else {
        cont.style.display = "none";
    }
    showButtons = !showButtons;
}

function correctBug() {
    if (window.innerWidth > 450) {
        cont.style.display = "flex";
        cont.style.flexDirection = "row";
    } else {
        cont.style.display = "none";
        showButtons = false;
    }
}