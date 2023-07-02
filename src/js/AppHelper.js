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

// Cria o elemento referente a playlist
const createPlaylistRow = (playlist) => {
    const {description, type, artistName} = playlist;
    
    const mainDiv = document.createElement("div");
    Helper.addClass(mainDiv, ["h-fit", "w-full", "flex", "flex-col", "px-2", "max-w-[calc(22rem)]"]);

    const div02 = document.createElement("div");
    Helper.addClass(div02, ["w-full", "h-16", "hover:bg-zinc-800", "rounded-lg", "cursor-pointer", "p-2", "flex", "flex-row"]);
    mainDiv.appendChild(div02);

    const div03 = document.createElement("div");
    Helper.addClass(div03, ["w-12", "h-full", "bg-black", "rounded-lg", "min-w-[calc(3rem)]"]);
    div02.appendChild(div03);

    const div04 = document.createElement("div");
    Helper.addClass(div04, ["w-[calc(100%-3rem)]", "h-full", "rounded-lg", "ml-2", "flex", "flex-col"]);
    div02.appendChild(div04);

    const div05 = document.createElement("div");
    Helper.addClass(div05, ["w-full", "h-full", "rounded-lg", "items-start", "flex", "pr-1"]);
    div04.appendChild(div05);

    const aPlaylistTitle = document.createElement("a");
    Helper.addClass(aPlaylistTitle, ["font-semibold", "text-zinc-200", "overflow-hidden", "overflow-ellipsis", "whitespace-nowrap"]);
    aPlaylistTitle.innerText = description;
    div05.appendChild(aPlaylistTitle);

    const div06 = document.createElement("div");
    Helper.addClass(div06, ["w-full", "h-full", "rounded-lg", "flex", "flex-row", "items-center", "text-sm"]);
    div04.appendChild(div06);

    const aPin = document.createElement("a");
    Helper.addClass(aPin, ["flex", "flex-row", "items-center"]);
    div06.appendChild(aPin);

    // const pin = document.createElement('div');
    // ReactDOM.render(<Pin />, pin);

    const aTypeAndArtist = document.createElement("a");
    Helper.addClass(aTypeAndArtist, ["font-semibold"]);
    const typeOfPlaylist = type === 0 || type === "0" ? "Playlist" : "Álbum";
    const artistOfPlaylist = artistName === " " || artistName === "null" || artistName === null || artistName === undefined ? "Spotify" : artistName;
    aTypeAndArtist.innerText = typeOfPlaylist + " - " + artistOfPlaylist;
    div06.appendChild(aTypeAndArtist);

    return mainDiv;
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
    
    Promise.resolve(Helper.isUserExpired()).then(function(isUserExpired_) {
        if (isUserExpired_) {
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
    });
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
    createPlaylistRow, changePlaylistsShadow, hideHeaderBG, onLoad, orderByClick, 
    playPauseMusic, timerMusic
};