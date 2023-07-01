const MainJS = require('../js/Main.js');
const ReactDOM = require("react-dom");
const Helper = require('../js/Helper.js');
import ErrorBelowInput from "../app/errorBelowInput";

function login() {
    let loginInputValue = document.getElementById("inputEmailLogin").value.trim();
    let passwordInputValue = document.getElementById("inputPasswordLogin").value.trim();
    const emailSection = document.getElementById("sectionEmailLogin");

    if (loginInputValue == "" || passwordInputValue == "") {
        //showMessage("Erro :/", "Preencha todos os campos...", 0);
        if (loginInputValue == "") {
            ReactDOM.render(
                <ErrorBelowInput id="emailErrorBelowInput" message="Insira um e-mail válido!"></ErrorBelowInput>, emailSection
            );
        } else {

        }
        alert('Preencha todos os campos...');
    } else 
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(loginInputValue)) {
        //showMessage("Erro :/", "Informe um e-mail válido!", 0);
        alert('Informe um e-mail válido!');
    } else {
        const informedUser = { login: loginInputValue,  password: passwordInputValue};
        MainJS.fecthUser(informedUser).then(data => {
            if (data.length > 0) {
                // Existe usuário com os dados informados
                sessionStorage.setItem("user", data);
                window.location.href = "../";
            } else { 
                alert('Usuário ou senha inválidos...');
            }
        });
    }
};

// Ao carregar a tela de login
function onLoadLogin() {
    if (sessionStorage.getItem("user") != undefined && sessionStorage.getItem("user") != "") {
        window.location.href = "../";
    } else {
        sessionStorage.removeItem("user");
    }

    Helper.resizePage("loginPage");
};

module.exports = {
    login, onLoadLogin
};