import { validateEmail } from "./validate.js";
import { toggleModal } from "./modal.js"

const form = document.querySelectorAll("form")[0];
const errMsg = document.getElementById("err-msg"); //elemento do DOM que carrega a mensagem de erro

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Não vai permitir a reinicialização da página,não quebrando o resto do código
    const nome = document.getElementById("inome").value; // pegando o nome
    const email = document.getElementById("iemail").value; // pegando o email
    const txt = document.getElementById("txt").value; // pegando a mensagem
    if (!validateEmail(email)) {
        errMsg.innerText = "Email inválido!";
    } else {
        toggleModal(true, nome, email); //Chamando o modal
        //Limpando os campos
        document.getElementById("inome").value = "";
        document.getElementById("iemail").value = "";
        document.getElementById("txt").value = "";
    }
});