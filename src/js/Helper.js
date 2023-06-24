import { Music } from './music.js';
const MainJS = require('../js/Main.js');

const audio = new Audio();

let song = new Music();
let musicTimer;
let counter = 0;

if (sessionStorage.getItem("logged") != undefined && sessionStorage.getItem("logged") === "true") {
    document.addEventListener("keydown", validatePressedKey);
}

// Adiciona/remove sombra conforme o scroll das playlists
function changePlaylistsShadow() { 
    const yourLibrary = document.getElementById("yourLibrary");
    const scrollTop = document.getElementById("playlists").scrollTop;
    yourLibrary.style.boxShadow = scrollTop >= 5 ? '5px 20px 40px -20px black' : 'none';
}

// Mostra ou oculta o primeiro Icon passado por parâmetro e faz o oposto para o outro. Retorno é true quando o primeiro ícone estava visível
// Obs: Passar sempre o Icon com display none por padrão por primeiro...
const changeIconsState = (checkId, idOppositeIcon = "", anotherFunction = undefined) => { 
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
}

// Altera o tipo do input passado por parâmetro
function changeInputType(idInput, type = ""){
    const input = document.getElementById(idInput);
    if (type === "") { // Pra quando não souber um tipo definido, por padrão assume como sendo password
        input.type = input.type === "password" ? "text" : "password";
    } else {
        input.type = type;
    }
}

// Retorna em min:seg os ms passados
function getMinutesAndSeconds(milliseconds) { 
    const seconds = Math.floor(milliseconds / 100); 
    const minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    remainingSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    return { minutes, seconds: remainingSeconds };
}

// Retorna em ms os min:seg passados
function getTimeInMilliseconds(timeInMinutes) { 
    const [minutes, seconds] = timeInMinutes.split(':');
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    return totalSeconds * 100;
  }

// Muda opacidade e cor do header conforme posição do scroll do conteúdo principal
function hideHeaderBG() { 
    const header = document.getElementById("header");
    const scrollTop = document.getElementById("mainContent").scrollTop;
    
    header.style.backgroundColor = "rgb(59 7 100 / var(--tw-bg-opacity))"; // = purple-950
    if (scrollTop > header.clientHeight * 1.5 && scrollTop <= header.clientHeight * 2) {
        header.style.opacity = "0.5"
    } else if (scrollTop > header.clientHeight * 2 && scrollTop <= header.clientHeight * 3) { 
        header.style.opacity = "0.7"
    }else if (scrollTop > header.clientHeight * 3) {
        header.style.opacity = "1"
    }else{
        header.style.opacity = "1";
        header.style.backgroundColor = "transparent";
    }
}

// Abre/fecha o modal de ordenação
function orderByClick() { 
    const orderByModal = document.getElementById("orderByModal");
    const orderByChevronUp = document.getElementById("orderByChevronUp");
    const orderByChevronDown = document.getElementById("orderByChevronDown");

    if (orderByModal?.style.display === "block" && orderByModal?.style.display !== "") {
        orderByModal.style.display =  "none";
        orderByChevronUp.style.display = "none";
        orderByChevronDown.style.display = "block";
    } else {
        orderByModal.style.display =  "block";
        orderByChevronUp.style.display = "block";
        orderByChevronDown.style.display = "none";
    }
}

// Ao clicar no botão play/pause
function playPauseMusic() { 
    if (changeIconsState("pauseMusicButton", "playMusicButton")) {
        audio.pause();
        timerMusic(false);
    } else {
        audio.play();
        timerMusic(true);
    }
}

function onLoad() { // Ao carregar a tela principal
    if (sessionStorage.getItem("logged") == undefined || sessionStorage.getItem("logged") === "false") {
        sessionStorage.setItem("logged", false);
        window.location.href = "/login";
    }

    // Atualiza título conforme horário
    const mainTitle = document.getElementById("mainTitle");
    const data = new Date();
    const hora = data.getHours();

    if (hora >= 6 && hora < 12) {
        mainTitle.innerText = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        mainTitle.innerText = "Boa tarde";
    } else {
        mainTitle.innerText = "Boa noite";
    }
    
    // Fecha modal de ordenação
    orderByClick(); orderByClick();

    // Define a música
    song = new Music(
        "Save Your Tears", "The Weeknd", "3:36", "False", "", "http://192.168.2.103:8080/TheWeeknd-SaveYourTears.mp3"
    );
    audio.src = song._src;
    const finTimeMusic = document.getElementById("finTimeMusic");
    finTimeMusic.textContent = song._duration;

    MainJS.loadPlaylists();
}

// Ao carregar a tela de login
function onLoadLogin(layout) {
    if (sessionStorage.getItem("logged") != undefined && sessionStorage.getItem("logged") === "true") {
        window.location.href = "../";
    } else {
        sessionStorage.setItem("logged", false);
    }

    const div = document.getElementById("loginPage");
    if (div.scrollHeight > div.clientHeight && (div.offsetHeight < div.scrollHeight)){
        div.style.height = "fit-content";
    }else {
        div.style.height = "100vh";
    }
}

// Inicializa ou pausa o contador da música
async function timerMusic(count) { 
    if (count) {
        musicTimer = setInterval(function() {
            const initTimeMusic = document.getElementById("initTimeMusic");
            const { minutes, seconds } = getMinutesAndSeconds(counter);
            initTimeMusic.textContent = minutes + ":" + seconds;
            counter++;
            if (counter > getTimeInMilliseconds(song._duration)) {
                clearInterval(musicTimer);
            }
        }, 10);
    }else {
        clearInterval(musicTimer);
    }
}

// Valida tecla pressionada (apenas na tela principal)
function validatePressedKey(event) { 
    if (event.keyCode === 32 || event.key === " ") { // Espaço
        event.preventDefault();
        playPauseMusic();
    }
}

module.exports = {
    changePlaylistsShadow, changeIconsState, changeInputType, getMinutesAndSeconds, getTimeInMilliseconds, 
    hideHeaderBG, onLoad, onLoadLogin, orderByClick, playPauseMusic, timerMusic
};