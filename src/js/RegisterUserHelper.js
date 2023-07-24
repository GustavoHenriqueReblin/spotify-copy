const Helper = require('../js/Helper.js');
const MainJS = require('../js/Main.js');

// Ao carregar a tela de cadastro
function onLoadRegister() {
    // Helper.resizePage("registerPage");
};

function register(){
    try {
        const loginInput = document.getElementById("inputEmailRegister");
        const passInput = document.getElementById("inputPasswordRegister");
        const nameInput = document.getElementById("inputNameRegister");
        const dayInput = document.getElementById("inputDayRegister");
        const monthInput = document.getElementById("inputMonthRegister");
        const yearInput = document.getElementById("inputYearRegister");
        const checkTherms = document.getElementById("inputThermsRegister");

        const emailError = document.getElementById("emailErrorBellowInputRegister");
        const passError = document.getElementById("passErrorBellowInputRegister");
        const nameError = document.getElementById("nameErrorBellowInputRegister");
        const dayError = document.getElementById("dayErrorBellowInputRegister");
        const monthError = document.getElementById("monthErrorBellowInputRegister");
        const yearError = document.getElementById("yearErrorBellowInputRegister");
        const thermsError = document.getElementById("thermsErrorBellowInputRegister");
        
        const messageAreaRegister = document.getElementById("messageAreaRegister");

        let loginInputValue = loginInput.value.trim().toLowerCase();
        let passwordInputValue = passInput.value.trim();
        let nameInputValue = nameInput.value.trim();
        let dayInputValue = dayInput.value.trim();
        let monthInputValue = monthInput.value.trim();
        let monthDefaultValue = monthInput.defaultValue;
        let yearInputValue = yearInput.value.trim();
        let error = false;

        if (loginInputValue == "" || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(loginInputValue)) {
            emailError.style.display = 'flex';
            loginInput.style.borderColor = 'rgb(220 38 38 / var(--tw-text-opacity))';
            error = true;
        }
        
        if (passwordInputValue == "") {
            passError.style.display = 'flex';
            passInput.style.borderColor = 'rgb(220 38 38 / var(--tw-text-opacity))';
            error = true;
        }

        if (nameInputValue == "") {
            nameError.style.display = 'flex';
            nameInput.style.borderColor = 'rgb(220 38 38 / var(--tw-text-opacity))';
            error = true;
        }

        if (dayInputValue == "" || isNaN(dayInputValue)) {
            dayError.style.display = 'flex';
            dayInput.style.borderColor = 'rgb(220 38 38 / var(--tw-text-opacity))';
            error = true;
        }

        if (monthDefaultValue != monthInputValue) {
            monthError.style.display = 'flex';
            monthInput.style.borderColor = 'rgb(220 38 38 / var(--tw-text-opacity))';
            error = true;
        }

        if (yearInputValue == "" || isNaN(yearInputValue)) {
            yearError.style.display = 'flex';
            yearInput.style.borderColor = 'rgb(220 38 38 / var(--tw-text-opacity))';
            error = true;
        }

        if (!checkTherms.checked) {
            thermsError.style.display = 'flex';
            error = true;
        }

        if (error) {
            Helper.showMessage("Erro :/", "Preencha todos os campos...", "error", messageAreaRegister);
            window.scrollTo({
                top: 5,
                left: 0,
                behavior: "smooth",
            });
        }else{
            const formatedDate = yearInputValue + "-" + monthInputValue + "-" + dayInputValue;
            const informedUser = { 
                idLastMusic: null, 
                login: loginInputValue, 
                password: passwordInputValue, 
                name: nameInputValue, 
                accountLevel: 1, 
                dateOfBirthday: formatedDate,
                gender: 0 // preciso implementar ainda os estilos dos rbtn
            };
            
            if (MainJS.addUser(informedUser)) {
                document.cookie = `userEmail=${loginInputValue};`;
                window.location.href = "../login";
            }else{
                Helper.showMessage("Erro :/", "Ocorreu algum erro durante o registro...", "error", messageAreaRegister);
            }
        }
    } catch (error) {
        console.error("Erro ao inserir o usuário:", error); 
    }
}

module.exports = {
    onLoadRegister, register
};