import { Music } from './music.js';

const audio = new Audio();

let song = new Music();
let musicTimer;
let counter = 0;

document.addEventListener("keydown", validatePressedKey);

function changePlaylistsShadow(){ // Adiciona/remove sombra conforme o scroll das playlists
    const yourLibrary = document.getElementById("yourLibrary");
    const scrollTop = document.getElementById("playlists").scrollTop;
    yourLibrary.style.boxShadow = scrollTop >= 5 ? '5px 20px 40px -20px black' : 'none';
}

function getMinutesAndSeconds(milliseconds) { // Retorna em min:seg os ms passados
    const seconds = Math.floor(milliseconds / 100); 
    const minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    remainingSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    return { minutes, seconds: remainingSeconds };
}

function getTimeInMilliseconds(timeInMinutes) { // Retorna em ms os min:seg passados
    const [minutes, seconds] = timeInMinutes.split(':');
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    return totalSeconds * 100;
  }

function hideHeaderBG(){ // Muda opacidade e cor do header conforme posição do scroll do conteúdo principal
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

function orderByClick(){ // Abre/fecha o modal de ordenação
    const orderByModal = document.getElementById("orderByModal");
    const orderByChevronUp = document.getElementById("orderByChevronUp");
    const orderByChevronDown = document.getElementById("orderByChevronDown");

    if (orderByModal?.style.display === "block" && orderByModal?.style.display !== "") {
        orderByModal.style.display =  "none";
        orderByChevronUp.style.display = "none";
        orderByChevronDown.style.display = "block";
    } else {
        orderByModal.style.display =  "block"
        orderByChevronUp.style.display = "block";
        orderByChevronDown.style.display = "none";
    }
}

function playPauseMusic() { // Ao clicar no botão play/pause
    const play = document.getElementById("playMusicButton");
    const pause = document.getElementById("pauseMusicButton");

    if (play?.style.display === "block" || play?.style.display === "") {
        play.style.display = "none";
        pause.style.display = "block";
        audio.play();
        timerMusic(true);
    } else {
        play.style.display = "block";
        pause.style.display = "none";
        audio.pause();
        timerMusic(false);
    }
}

function onLoad(){
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
        "Save Your Tears", "The Weeknd", "3:36", "False", "", "http://localhost:8080/TheWeeknd-SaveYourTears.mp3"
    );
    audio.src = song._src;
    const finTimeMusic = document.getElementById("finTimeMusic");
    finTimeMusic.textContent = song._duration;
}

async function timerMusic(count){ // Inicializa ou pausa o contador da música
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

function validatePressedKey(event){ // Valida tecla pressionada
    if (event.keyCode === 32 || event.key === " ") { // Espaço
        event.preventDefault();
        playPauseMusic();
    }
}

module.exports = {
    changePlaylistsShadow, getMinutesAndSeconds, getTimeInMilliseconds, 
    hideHeaderBG, onLoad, orderByClick, playPauseMusic, timerMusic
};