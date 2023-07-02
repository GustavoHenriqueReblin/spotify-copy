import {Pin} from 'lucide-react'
import { Music } from './music.js';
const MainJS = require('../js/Main.js');
const Helper = require('../js/Helper.js');

const audio = new Audio();
let song = new Music();
let musicTimer;
let counter = 0;

// Adiciona/remove sombra conforme o scroll das playlists
function changePlaylistsShadow() { 
    const yourLibrary = document.getElementById("yourLibrary");
    const scrollTop = document.getElementById("playlists").scrollTop;
    yourLibrary.style.boxShadow = scrollTop >= 5 ? '5px 20px 40px -20px black' : 'none';
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
    } else {
        document.addEventListener("keydown", validatePressedKey);

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
};

// Inicializa ou pausa o contador da música
async function timerMusic(count) { 
    if (count) {
        musicTimer = setInterval(function() {
            const initTimeMusic = document.getElementById("initTimeMusic");
            const { minutes, seconds } = Helper.getMinutesAndSeconds(counter);
            initTimeMusic.textContent = minutes + ":" + seconds;
            counter++;
            if (counter > Helper.getTimeInMilliseconds(song._duration)) {
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
    changePlaylistsShadow, hideHeaderBG, onLoad, orderByClick, 
    playPauseMusic, timerMusic
};