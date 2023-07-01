import {Pin} from 'lucide-react'

function addClass(element, className){
    for (let i = 0; i < className.length; i++) {
        element.classList.add(className[i]);
    }
};

const createPlaylistRow = (playlist) => {
    const {description, type, artistName} = playlist;
    
    const mainDiv = document.createElement("div");
    addClass(mainDiv, ["h-fit", "w-full", "flex", "flex-col", "px-2", "max-w-[calc(22rem)]"]);

    const div02 = document.createElement("div");
    addClass(div02, ["w-full", "h-16", "hover:bg-zinc-800", "rounded-lg", "cursor-pointer", "p-2", "flex", "flex-row"]);
    mainDiv.appendChild(div02);

    const div03 = document.createElement("div");
    addClass(div03, ["w-12", "h-full", "bg-black", "rounded-lg", "min-w-[calc(3rem)]"]);
    div02.appendChild(div03);

    const div04 = document.createElement("div");
    addClass(div04, ["w-[calc(100%-3rem)]", "h-full", "rounded-lg", "ml-2", "flex", "flex-col"]);
    div02.appendChild(div04);

    const div05 = document.createElement("div");
    addClass(div05, ["w-full", "h-full", "rounded-lg", "items-start", "flex", "pr-1"]);
    div04.appendChild(div05);

    const aPlaylistTitle = document.createElement("a");
    addClass(aPlaylistTitle, ["font-semibold", "text-zinc-200", "overflow-hidden", "overflow-ellipsis", "whitespace-nowrap"]);
    aPlaylistTitle.innerText = description;
    div05.appendChild(aPlaylistTitle);

    const div06 = document.createElement("div");
    addClass(div06, ["w-full", "h-full", "rounded-lg", "flex", "flex-row", "items-center", "text-sm"]);
    div04.appendChild(div06);

    const aPin = document.createElement("a");
    addClass(aPin, ["flex", "flex-row", "items-center"]);
    div06.appendChild(aPin);

    // const pin = document.createElement('div');
    // ReactDOM.render(<Pin />, pin);

    const aTypeAndArtist = document.createElement("a");
    addClass(aTypeAndArtist, ["font-semibold"]);
    const typeOfPlaylist = type === 0 || type === "0" ? "Playlist" : "Álbum";
    const artistOfPlaylist = artistName === " " || artistName === "null" || artistName === null || artistName === undefined ? "Spotify" : artistName;
    aTypeAndArtist.innerText = typeOfPlaylist + " - " + artistOfPlaylist;
    div06.appendChild(aTypeAndArtist);

    return mainDiv;
};

const fecthPlaylists = async () => {
    const res = await fetch("http://192.168.2.103:3333/playlists");
    const playlists = res.json();
    return playlists;
};

const fecthUser = async (user) => {
    const res = await fetch("http://192.168.2.103:3333/user", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });
    return res.json();
};

const loadPlaylists = async () => {
    const playlists = await fecthPlaylists();
    const menuPlaylists = document.getElementById("playlists");

    playlists.forEach((playlist) => {
        menuPlaylists.appendChild(createPlaylistRow(playlist));
    });
};

module.exports = {
    loadPlaylists, fecthUser
};