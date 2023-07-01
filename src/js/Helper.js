const MainJS = require('../js/Main.js');

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
  }

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

function isUserExpired () {
    let idUserLogged = getCookie("userId") != "" ? getCookie("userId") : sessionStorage.getItem("userId");
    if (idUserLogged === "" || idUserLogged === null) {
        return true;
    } else {
        const dt = new Date();
        const informedUser = { id: idUserLogged, login: "",  password: ""};

        MainJS.fecthUser(informedUser).then(data => {
            if (data.length > 0) {
                const userExpiryDate = new Date(data[0].expiryDate);
                return (dt > userExpiryDate);
            }else{
                return true;
            }
        })
    }
};

// Depois mudar
// Ao carregar a tela de login
function onLoadRegister() {
    resizePage("registerPage");
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

module.exports = {
    changeIconsState, changeInputType, getCookie, getMinutesAndSeconds, getTimeInMilliseconds, 
    isUserExpired, onLoadRegister, resizePage
};