export function toggleModal(showModal, nome, email) {
    const modal = document.getElementById("modal");
    const main = document.getElementsByTagName("main")[0];
    if (showModal) {
        main.inert = true;
        modal.style.display = "block";
        document.getElementById("nome-msg").innerText += nome;
        document.getElementById("email-msg").innerText += email;
    } else {
        main.inert = false;
        modal.style.display = "none";
        document.getElementById("nome-msg").innerText ="Nome: ";
        document.getElementById("email-msg").innerText = "Email: ";
    }
}

window.toggleModal = toggleModal;