import {Pin} from 'lucide-react'
const MainJS = require('../js/Main.js');
const Helper = require('../js/Helper.js');

const audio = new Audio();
let musicTimer;
let counter = 0;

// Adiciona/remove sombra conforme o scroll das playlists
function changePlaylistsShadow() { 
    const yourLibrary = document.getElementById("yourLibrary");
    const scrollTop = document.getElementById("playlists").scrollTop;
    yourLibrary.style.boxShadow = scrollTop >= 5 ? '5px 20px 40px -20px black' : 'none';
};

// Chamada no click da barra do timer da música
function changeTimeOfMusic(event){
    const finTimeMusic = document.getElementById("finTimeMusic");
    const musicTimeBar = document.getElementById("musicTimeBar");
    const musicTimeBarBack = document.getElementById("musicTimeBarBackground");

    const positionMouseX = event.clientX - musicTimeBarBack.getBoundingClientRect().left;
    const totalSecondsCurrentMusic = Helper.getTimeInSeconds(finTimeMusic.textContent);
    const widthMusicTimeBar = musicTimeBarBack.clientWidth;

    // Atualiza a largura da div que representa o tempo da música
    musicTimeBar.style.width = (Math.round(positionMouseX) + 12) + "px";
    

    const pxPerSecond = widthMusicTimeBar / totalSecondsCurrentMusic;
};

// Chamada ao manter clicado na bolinha do timer da música
function dragMusicBar(isPressed) {
    const musicTimeBarBack = document.getElementById("musicTimeBarBackground");
    const musicTimeBar = document.getElementById("musicTimeBar");
    let pressedTimeout;
    let moveCallback;

    if (isPressed) {
        pressedTimeout = setTimeout(() => {
            moveCallback = (event) => {
                let positionMouseX = event.clientX - musicTimeBarBack.getBoundingClientRect().left;
                if (Math.round(positionMouseX) > 0 && Math.round(positionMouseX) <= musicTimeBarBack.clientWidth) {
                    musicTimeBar.style.width = (Math.round(positionMouseX) + 12) + "px";
                }
            };

            document.addEventListener('mousemove', moveCallback);
        }, 100);
    } else {
        document.removeEventListener("mousemove", moveCallback);
        clearTimeout(pressedTimeout);
    }
};

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
};

function hoverMusicTimeBar(isEntering){
    const musicTimeBar = document.getElementById("musicTimeBar");
    if (isEntering) {
        musicTimeBar.style.backgroundColor = "rgb(22 163 74 / var(--tw-bg-opacity))";
    } else {
        musicTimeBar.style.backgroundColor = "rgb(255 255 255 / var(--tw-bg-opacity))";
    }
}

// Atualzia o footer com as informações da música, futuramente será alterado...
const refreshFooter = (data = null) => {
    const elementsToDisable = [
        "skipBackIcon",
        "playMusicButton",
        "pauseMusicButton",
        "skipForwardIcon",
        "musicTimeBar",
        "tipMusicTimeBar",
        "soundBar",
        "tipSoundBar"
    ];
    const backgroundPlayPause = document.getElementById("backgroundPlayPause");
    const initTimeMusic = document.getElementById("initTimeMusic");
    const finTimeMusic = document.getElementById("finTimeMusic");
    const musicImage = document.getElementById("musicImage");
    const artistName = document.getElementById("artistName");
    const musicName = document.getElementById("musicName");
    let element;

    if (data == null) {
        // Atualiza as cores/opacidade/informações dos elementos 
        for (let i = 0; i < elementsToDisable.length; i++) {
            element = document.getElementById(elementsToDisable[i]);
            element.style.opacity = "0.4";
        };

        musicImage.style.backgroundImage = 'none';
        backgroundPlayPause.style.backgroundColor = "rgb(161 161 170 / var(--tw-text-opacity))";
        initTimeMusic.textContent = "--:--";
        finTimeMusic.textContent = "--:--";
        artistName.textContent = "";  
        musicName.textContent = "";
    }else{
        // Atualiza informações da música
        audio.src = data[0].audio;
        musicImage.style.backgroundImage = `url(${data[0].image})`;
        artistName.textContent = data[0].artistsNames;  
        musicName.textContent = data[0].title;  
        let timeString = data[0].duration;
        timeString = timeString.substring(timeString.indexOf(":") + 1);
        finTimeMusic.textContent = timeString;  

        // Atualiza as cores/opacidade dos elementos 
        for (let i = 0; i < elementsToDisable.length; i++) {
            element = document.getElementById(elementsToDisable[i]);
            element.style.opacity = "1";
        };
        backgroundPlayPause.style.backgroundColor = "rgb(255 255 255 / var(--tw-bg-opacity))";
    }
}

// Abre/fecha o modal de ordenação
function orderByClick(forceClose) { 
    const orderByModal = document.getElementById("orderByModal");
    const orderByChevronUp = document.getElementById("orderByChevronUp");
    const orderByChevronDown = document.getElementById("orderByChevronDown");

    if ((orderByModal?.style.display === "block" && orderByModal?.style.display !== "") || forceClose) {
        orderByModal.style.display =  "none";
        orderByChevronUp.style.display = "none";
        orderByChevronDown.style.display = "block";
    } else {
        orderByModal.style.display =  "block";
        orderByChevronUp.style.display = "block";
        orderByChevronDown.style.display = "none";
    }
};

// Ao clicar no botão play/pause
function playPauseMusic() { 
    if (Helper.changeIconsState("pauseMusicButton", "playMusicButton")) {
        audio.pause();
        timerMusic(false);
    } else {
        audio.play();
        timerMusic(true);
    }
};

async function onLoad() { // Ao carregar a tela principal
    if (await MainJS.isUserExpired()) {
        window.location.href = "/login";
        const messageAreaLogin = document.getElementById("messageArea");
        Helper.showMessage("Ops... sessão expirada! :/", "Entre novamente com seus dados :)", "error", messageAreaLogin);
    } else {
        document.addEventListener("keydown", validatePressedKey);
        document.addEventListener("click", orderByClick(true));

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

        let idLastMusic = Helper.getCookie("lastMusicId") != "" ? Helper.getCookie("lastMusicId") : sessionStorage.getItem("lastMusicId");
        try {
            if (idLastMusic === "null"){
                refreshFooter();
            }else{
                const lastMusic = { idMusic: idLastMusic};
                MainJS.fetchLastMusic(lastMusic).then(async data => {
                    if (data !== undefined && data.length > 0) {
                        refreshFooter(data);
                    }
                });
            }
        } catch (error) {
            console.log("Erro ao buscar última música: " + error);
        }

        MainJS.loadPlaylists();
        Helper.manageLoadingPage(true, "appLoading", "appPage");
    }
};

// Inicializa ou pausa o contador da música
async function timerMusic(count) { 
    if (count) {
        musicTimer = setInterval(function() {
            const initTimeMusic = document.getElementById("initTimeMusic");
            const { minutes, seconds } = Helper.getMinutesAndSeconds(counter);
            initTimeMusic.textContent = minutes + ":" + seconds;
            counter++;
            if (counter > Helper.getTimeInMilliseconds("3:36")) {
                clearInterval(musicTimer);
            }
        }, 10);
    }else {
        clearInterval(musicTimer);
    }
};

// Valida tecla pressionada (apenas na tela principal)
function validatePressedKey(event) { 
    if (event.keyCode === 32 || event.key === " ") { // Espaço
        event.preventDefault();
        playPauseMusic();
    }
};

module.exports = {
    changePlaylistsShadow, changeTimeOfMusic, dragMusicBar, hideHeaderBG, hoverMusicTimeBar, onLoad, orderByClick, 
    playPauseMusic, timerMusic
};