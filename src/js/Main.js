const AppHelper = require('../js/AppHelper.js');

const fecthPlaylists = async () => {
    try {
        const res = await fetch("http://192.168.2.103:3333/playlists");
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
        console.error("Erro ao buscar seção:", error);
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

const loadPlaylists = async () => {
    try {
        const playlists = await fecthPlaylists();
        const menuPlaylists = document.getElementById("playlists");

        playlists.forEach((playlist) => {
            menuPlaylists.appendChild(AppHelper.createPlaylistRow(playlist));
        });   
    } catch (error) {
        console.error("Erro ao carregar as playlists em tela:", error);
    }
};

module.exports = {
    loadPlaylists, fecthUser, fecthSection, updateUser
};