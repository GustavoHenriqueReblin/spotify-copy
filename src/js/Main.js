const Helper = require('../js/Helper.js');

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

const fecthPlaylists = async (user) => {
    try {
        const res = await fetch("http://192.168.2.103:3333/playlists", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        const playlists = res.json();
        return playlists;
    } catch (error) {
        console.error("Erro ao buscar as playlists:", error);
    }
};

const fecthUser = async (user) => {
    try {
        const res = await fetch("http://192.168.2.103:3333/user", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        return res.json();
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
    }
};

const fecthSection = async (section) => {
    try {
        const res = await fetch("http://192.168.2.103:3333/section", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(section)
        });
        return res.json();
    } catch (error) {
        console.error("Erro ao buscar sessão:", error);
    }
};

const updateUser = async (id, user) => {
    try {
        const {login, password, name, accountLevel, dateOfBirthday, gender} = user; 

        await fetch(`http://192.168.2.103:3333/user/${id}`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({login, password, name, accountLevel, dateOfBirthday, gender})
        });   
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
    }
};

const refreshSection = async (section) => {
    try {
        const {idUser, ip, expirationDate} = section; 

        await fetch("http://192.168.2.103:3333/refreshSection", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({idUser, ip, expirationDate})
        });   
    } catch (error) {
        console.error("Erro ao atualizar sessão do usuário " + idUser + ":", error);
    }
};

const loadPlaylists = async () => {
    try {
        const idUserLogged = Helper.getCookie("userId") != "" ? Helper.getCookie("userId") : sessionStorage.getItem("userId");
        const user = { idUser: idUserLogged };
        const playlists = await fecthPlaylists(user);
        const menuPlaylists = document.getElementById("playlists");

        playlists.forEach((playlist) => {
            menuPlaylists.appendChild(createPlaylistRow(playlist));
        });   
    } catch (error) {
        console.error("Erro ao carregar as playlists em tela:", error);
    }
};

async function isUserExpired() {
    try {
        let idUserLogged = Helper.getCookie("userId") != "" ? Helper.getCookie("userId") : sessionStorage.getItem("userId");
        
        if (idUserLogged === "" || idUserLogged === null) {
            return true;
        } else {
            const nowDate = new Date();
            const section = await fecthSection(
                { 
                    idUser: idUserLogged, 
                    ip: await Helper.getIp()
                }
            );
        
            if (section.length > 0) {
                const userExpirationDate = new Date(section[0].expirationDate);
                return nowDate >= userExpirationDate;
            } else {
                return true;
            }
        }   
    } catch (error) {
        console.error("Erro ao verificar expiração do usuário:", error);
        return false;
    }
};

module.exports = {
    loadPlaylists, fecthUser, fecthSection, updateUser, refreshSection, isUserExpired
};