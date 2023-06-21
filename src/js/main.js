function changeMusicBtn() {
    const play = document.getElementById("playMusicButton");
    const pause = document.getElementById("pauseMusicButton");

    if (play?.style.display === "block" || play?.style.display === "") {
        play.style.display = "none";
        pause.style.display = "block";
    } else {
        play.style.display = "block";
        pause.style.display = "none";
    }
}

function hideHeaderBG(){
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

function changePlaylistsShadow(){
    const yourLibrary = document.getElementById("yourLibrary");
    const scrollTop = document.getElementById("playlists").scrollTop;
    yourLibrary.style.boxShadow = scrollTop >= 5 ? '5px 20px 40px -20px black' : 'none';
}

function setMainTitle(){
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
    orderByClick(); orderByClick();
}

function orderByClick(){
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

module.exports = {
    changeMusicBtn, hideHeaderBG, changePlaylistsShadow, setMainTitle, orderByClick
};