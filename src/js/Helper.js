const AppHelper = require('../js/AppHelper');

// Mostra ou oculta o primeiro Icon passado por parâmetro e faz o oposto para o outro. Retorno é true quando o primeiro ícone estava visível
// Obs: Passar sempre o Icon com display none por padrão por primeiro...
function changeIconsState(checkId, idOppositeIcon = "", anotherFunction = undefined){ 
    const icon = document.getElementById(checkId);
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

// Altera o tipo do input passado por parâmetro
function changeInputType(idInput, type = ""){
    const input = document.getElementById(idInput);
    if (type === "") { // Pra quando não souber um tipo definido, por padrão assume como sendo password
        input.type = input.type === "password" ? "text" : "password";
    } else {
        input.type = type;
    }
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

// Depois mudar
// Ao carregar a tela de login
function onLoadRegister() {
    resizePage("registerPage");
};

// Redimensiona a div principal
function resizePage(id){
    const div = document.getElementById(id);
    // ENCONTRAR UMA VALIDAÇÃO
    // if ((div.scrollHeight > div.clientHeight) && (div.offsetHeight < div.scrollHeight)){
    //     div.style.height = "fit-content";
    // }else {
    //     div.style.height = "100vh";
    //     //alert('ola');
    // }
};

module.exports = {
    changeIconsState, changeInputType, getMinutesAndSeconds, getTimeInMilliseconds, 
    onLoadRegister, resizePage
};