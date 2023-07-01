const MainJS = require('../js/Main.js');
const Helper = require('../js/Helper.js');

const getUserExpiryDate = (loginDate) => {
    // Por padrão, a expiração será de um dia após o login
    loginDate.setDate(loginDate.getDate() + 1);
    
    const ano = loginDate.getFullYear();
    const mes = loginDate.getMonth() + 1; 
    const dia = loginDate.getDate();
    const horas = loginDate.getHours();
    const minutos = loginDate.getMinutes();
    const segundos = loginDate.getSeconds();

    return ano + '/' + mes + '/' + dia + ' ' + horas + ':' + minutos + ':' + segundos;
}

function login() {
    const loginInput = document.getElementById("inputEmailLogin");
    const passInput = document.getElementById("inputPasswordLogin");
    const emailErrorBelowInput = document.getElementById("emailErrorBelowInput");
    const passErrorBelowInput = document.getElementById("passErrorBelowInput");
    let loginInputValue = loginInput.value.trim();
    let passwordInputValue = passInput.value.trim();
    let error = false;

    if (loginInputValue == "" || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(loginInputValue)) {
        emailErrorBelowInput.style.display = 'flex';
        loginInput.style.borderColor = 'rgb(220 38 38 / var(--tw-text-opacity))';
        error = true;
    }
    
    if (passwordInputValue == "") {
        passErrorBelowInput.style.display = 'flex';
        passInput.style.borderColor = 'rgb(220 38 38 / var(--tw-text-opacity))';
        error = true;
    }

    if (loginInputValue == "" || passwordInputValue == "") {
        //showMessage("Erro :/", "Preencha todos os campos...", 0);
        alert('Preencha todos os campos...');
        error = true;
    }

    if (error) {
        Helper.resizePage("loginPage");
    }
    else {
        const informedUser = { id: "", login: loginInputValue,  password: passwordInputValue};
        MainJS.fecthUser(informedUser).then(data => {
            if (data.length > 0) {
                // Existe usuário com os dados informados

                const checkRemember = document.getElementById("remember");
                if (!checkRemember.checked) {
                    document.cookie = "userId=";
                    sessionStorage.setItem("userId", data[0].id);
                } else {
                    document.cookie = `userId=${data[0].id};`;
                    sessionStorage.setItem("userId", "");
                }
                MainJS.updateUser(data[0].id, {expiryDate:getUserExpiryDate(new Date())});

                window.location.href = "../";
            } else { 
                alert('Usuário ou senha inválidos...');
            }
        });
    }
};

const onChangeInput = (idInput, idErrorBelowInput) => {
    const input = document.getElementById(idInput);
    const errorBelowInput = document.getElementById(idErrorBelowInput);
    if (input.value.length > 0) {
        errorBelowInput.style.display = 'none';
        input.style.borderColor = 'rgb(161 161 170 / var(--tw-border-opacity))';
    }
    Helper.resizePage("loginPage");
};

// Ao carregar a tela de login
function onLoadLogin() {
    if (Helper.getCookie("userId") != undefined && Helper.getCookie("userId") != "" && !Helper.isUserExpired()) {
        window.location.href = "../";
    }

    Helper.resizePage("loginPage");
};

module.exports = {
    login, onChangeInput, onLoadLogin
};