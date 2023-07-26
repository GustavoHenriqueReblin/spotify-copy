import Message from '../app/message';
import React from 'react';
import ReactDOM from 'react-dom';

// Adiciona a classe ao elemento
function addClass(element, className){
    for (let i = 0; i < className.length; i++) {
        element.classList.add(className[i]);
    }
};

// Expira o cookie passado por parâmetro
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Mostra ou oculta o primeiro Icon passado por parâmetro e faz o oposto para o outro. Retorno é true quando o primeiro ícone estava visível
// Obs: Passar sempre o Icon com display none por padrão por primeiro...
function changeIconsState(idIcon, idOppositeIcon = "", anotherFunction = undefined){ 
    const icon = document.getElementById(idIcon);
    let isItForHide = icon?.style.display === "block";

    icon.style.display = isItForHide ? "none" : "block";
    if (idOppositeIcon != "") {
        const opositeIcon = document.getElementById(idOppositeIcon);
        opositeIcon.style.display = !isItForHide ? "none" : "block";
    }

    if (anotherFunction != undefined) {
        anotherFunction();
    }

    return isItForHide;
};

// Se o erro estiver visível oculta-o e remove a borda vermelha
const clearInputError = (idInput, idErrorBelowInput, idPage = null) => {
    const input = document.getElementById(idInput);
    const errorBelowInput = document.getElementById(idErrorBelowInput);
    const eyePass = document.getElementById("eyePass");
    
    if (errorBelowInput.style.display != "none") {
        if (input.value.length > 0) {
            errorBelowInput.style.display = "none";
            input.style.borderColor = "rgb(161 161 170 / var(--tw-border-opacity))";
        }
        if (idPage !== null) {
            resizePage(idPage);
        }
    }

    if (eyePass.style.display != "none") {
        changeIconsState("eyePass", "eyeOffPass");
    }
};

// Retorna o valor do cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
};

// Pega o ip da máquina
async function getIp(){
    return "000.000.0.0"; // Implementar alguma forma de salvar ip
    // try {
    //     const response = await fetch('https://api.ipify.org/?format=json');
    //     const data = await response.json();
    //     return data.ip;
    // } catch (error) {
    //     console.error("Erro ao obter o IP:", error);
    // }
};

// Retorna em min:seg os ms passados
function getMinutesAndSeconds(milliseconds) { 
    const seconds = Math.floor(milliseconds / 100); 
    const minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    remainingSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    return { minutes, seconds: remainingSeconds };
};

// Retorna em ms os min:seg passados
function getTimeInMilliseconds(timeInMinutes) { 
    const [minutes, seconds] = timeInMinutes.split(':');
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    return totalSeconds * 100;
};

// Retorna em ms os min:seg passados
function getTimeInSeconds(timeInMinutes) { 
    const [minutes, seconds] = timeInMinutes.split(':');
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    return totalSeconds;
};

// Mostra/oculta página de loading enquanto o backend não retorna com os dados
function manageLoadingPage(close, idLoading, idPage){
    const loading = document.getElementById(idLoading);
    const page = document.getElementById(idPage);
    
    loading.style.display =  close ? "none" : "flex";
    page.style.display =  close ? "flex" : "none";
};

// Muda a altura da div passada por parâmetro
function resizePage(id){
    const div = document.getElementById(id);
    if ((div.scrollHeight > div.clientHeight) && (div.offsetHeight < div.scrollHeight)){ // scroll visível
        div.style.height = "fit-content";
    }else {
        div.style.height = "100vh";
    }
};

// Mostra uma mensagem personalizada..
const showMessage = (title, message, bgType, MessageArea) => {
    try {
        const closeMessage = () => {
            ReactDOM.unmountComponentAtNode(MessageArea);
        };
    
        ReactDOM.render(
            <Message
                titleValue={title}
                messageContent={message}
                bgType={bgType}
                closeMessage={closeMessage}
            ></Message>, MessageArea
        );
    } catch (error) {
        console.log("Erro ao mostrar mensagem personalizada: " + error);
    }
};

// Altera o tipo do input passado por parâmetro
function showPass(idInput, type = ""){
    const input = document.getElementById(idInput);
    if (type === "") { // Pra quando não souber um tipo definido, por padrão assume como sendo password
        input.type = input.type === "password" ? "text" : "password";
    } else {
        input.type = type;
    }
};

module.exports = {
    addClass, changeIconsState, clearInputError, deleteCookie, manageLoadingPage, getCookie, getIp, 
    getMinutesAndSeconds, getTimeInMilliseconds, getTimeInSeconds, resizePage, showMessage, showPass
};