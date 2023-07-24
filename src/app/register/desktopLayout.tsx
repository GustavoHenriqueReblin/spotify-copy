"use client"
import {AlertCircle, Check, Eye, EyeOff} from 'lucide-react';
const registerHelper = require('../../js/RegisterUserHelper.js');
const Helper = require('../../js/Helper.js');

export default () => {

    window.onload = function() {
        registerHelper.onLoadRegister();
    };

    return (
        <div id="registerPage" className="ssm:hidden h-fit w-auto bg-gradient-to-b from-zinc-800 to-black md:flex flex-row items-start justify-center m-0 py-10 text-white font-bold select-none">
            <div id="messageAreaRegister" className="w-80 h-full absolute flex flex-col top-0 right-0 pt-14 pl-8"></div>
            <div className="bg-black lg:w-[calc(52rem)] md:w-[calc(46rem)] h-fit rounded-lg flex flex-col items-center lg:px-24 md:px-14">
                <h1 className="text-h1 my-6">Inscreva-se grátis e comece a curtir.</h1>

                <div className="w-full h-[calc(1px)] bg-zinc-700"></div>

                <section className="w-full h-fit lg:px-20 md:px-16 flex flex-col mt-6">
                    <a className="mt-3 text-sm">Qual é o seu e-mail?</a>
                    <input id="inputEmailRegister" onChange={() => {Helper.clearInputError("inputEmailRegister", "emailErrorBellowInputRegister")}} type="text" placeholder="Insira seu e-mail" className="focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 my-2 border border-zinc-400 rounded-md text-base font-normal"/>
                    <a id="emailErrorBellowInputRegister" className="hidden my-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
                        <AlertCircle className="text-red-600"/>
                        Insira um e-mail válido.
                    </a>

                    <a className="mt-3 text-sm">Crie uma senha:</a>
                    <div className="w-full flex flex-row">
                        <div className="h-[calc(0.05rem)] absolute w-[calc(29rem)] flex justify-end">
                            <Eye 
                                onClick={() => Helper.changeIconsState("eyePass", "eyeOffPass", Helper.showPass("inputPasswordRegister"))} 
                                id="eyePass" className="mt-[calc(1.125rem)] lg:h-5 md:h-4 text-zinc-400 hover:text-white hidden"
                            />
                            <EyeOff 
                                onClick={() => Helper.changeIconsState("eyePass", "eyeOffPass", Helper.showPass("inputPasswordRegister"))} 
                                id="eyeOffPass" className="mt-[calc(1.125rem)] lg:h-5 md:h-4 text-zinc-400 hover:text-white block"
                            />
                        </div>
                        <input id="inputPasswordRegister" onChange={() => {Helper.clearInputError("inputPasswordRegister", "passErrorBellowInputRegister")}} type="password" placeholder="Crie uma senha" className="float-left w-full focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 my-2 border border-zinc-400 rounded-md text-base font-normal"/>
                    </div>
                    <a id="passErrorBellowInputRegister" className="hidden my-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
                        <AlertCircle className="text-red-600"/>
                        Insira uma senha válida.
                    </a>

                    <a className="mt-3 text-sm">Como devemos chamar você?</a>
                    <input id="inputNameRegister" onChange={() => {Helper.clearInputError("inputNameRegister", "nameErrorBellowInputRegister")}} type="text" placeholder="Insira um nome para o perfil" className="focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 my-2 border border-zinc-400 rounded-md text-base font-normal"/>
                    <a className="text-xs font-normal mb-2">Isso aparece no seu perfil.</a>
                    <a id="nameErrorBellowInputRegister" className="hidden my-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
                        <AlertCircle className="text-red-600"/>
                        Insira ao menos um nome com 3 letras.
                    </a>

                    <a className="mt-3 mb-1 text-sm">Qual sua data de nascimento?</a>
                    <div className="h-fit flex flex-row mb-2">
                        <div className="w-[calc(33.333%)] pr-4">
                            <a className="text-sm font-normal my-1">Dia</a>
                            <input id="inputDayRegister" onChange={() => {Helper.clearInputError("inputDayRegister", "dayErrorBellowInputRegister")}} type="text" maxLength={2} placeholder="DD" className="w-full focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 border border-zinc-400 rounded-md text-base font-normal mt-2"/>
                        </div>
                        <div className="w-[calc(70.333%)] pr-4">
                            <a className="text-sm font-normal my-1">Mês</a>
                            <select id="inputMonthRegister" defaultValue={"mesDefault"} onChange={() => {Helper.clearInputError("inputMonthRegister", "monthErrorBellowInputRegister")}} placeholder="Mês" className="w-full overflow-hidden focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 pb-[calc(9px)] border border-zinc-400 rounded-md text-base font-normal mt-2">
                                <option value="mesDefault" disabled>Mês</option>
                                <option value="1">Janeiro</option>
                                <option value="2">Fevereiro</option>
                                <option value="3">Março</option>
                                <option value="4">Abril</option>
                                <option value="5">Maio</option>
                                <option value="6">Junho</option>
                                <option value="7">Julho</option>
                                <option value="8">Agosto</option>
                                <option value="9">Setembro</option>
                                <option value="10">Outubro</option>
                                <option value="11">Novembro</option>
                                <option value="12">Dezembro</option>
                            </select>
                        </div>
                        <div className="w-[calc(40.333%)]">
                            <a className="text-sm font-normal my-1">Ano</a>
                            <input id="inputYearRegister" onChange={() => {Helper.clearInputError("inputYearRegister", "yearErrorBellowInputRegister")}} type="text" maxLength={4} placeholder="AAAA" className="w-full focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 border border-zinc-400 rounded-md text-base font-normal mt-2"/>
                        </div>
                    </div>
                    <a id="dayErrorBellowInputRegister" className="hidden my-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
                        <AlertCircle className="text-red-600"/>
                        Insira um dia válido para o mês.
                    </a>
                    <a id="monthErrorBellowInputRegister" className="hidden my-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
                        <AlertCircle className="text-red-600"/>
                        Selecione o mês do nascimento.
                    </a>
                    <a id="yearErrorBellowInputRegister" className="hidden my-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
                        <AlertCircle className="text-red-600"/>
                        Insira um ano válido.
                    </a>

                    <a className="mt-3 mb-1 text-sm">Qual seu gênero?</a>
                    <div className="flex flex-row">
                        <label id="inputGender1" htmlFor="optionGen1" className="flex items-center p-1 mr-5">
                            <input className="appearance-none border border-white hover:border-green-500 mr-1.5 w-4 h-4 rounded-full" type="radio" id="inputGender1" value="1"/>
                            <span className="text-sm font-normal">Masculino</span>
                        </label>
                        <label id="inputGender2" htmlFor="optionGen2" className="flex items-center p-1 mr-5">
                            <input className="appearance-none border border-white hover:border-green-500 mr-1.5 w-4 h-4 rounded-full" type="radio" id="optionGen2" value="2"/>
                            <span className="text-sm font-normal">Feminino</span>
                        </label>
                        <label id="inputGender3" htmlFor="optionGen3" className="flex items-center p-1 mr-5">
                            <input className="appearance-none border-4 border-green-500 hover:border-green-500 mr-1.5 w-4 h-4 rounded-full" type="radio" id="optionGen3" value="3"/>
                            <span className="text-sm font-normal">Outros</span>
                        </label>
                        <label id="inputGender4" htmlFor="optionGen4" className="flex items-center p-1 mr-5">
                            <input className="appearance-none border border-white hover:border-green-500 mr-1.5 w-4 h-4 rounded-full" type="radio" id="optionGen4" value="4" />
                            <span className="text-sm font-normal">Prefiro não dizer</span>
                        </label>
                    </div>

                    <label htmlFor="inputThermsRegister" className="flex items-center p-1 mr-6 mt-6">
                        <Check id="checkTherms" className="absolute h-4 w-4 hidden"></Check>
                        <input id="inputThermsRegister" onChange={() => Helper.changeIconsState("checkTherms")} className="appearance-none mr-2 rounded-sm border border-white hover:border-green-500 h-4 w-4" type="checkbox" value="Eu concordo"/>
                        <span className="text-sm font-normal">Eu concordo com os {" "}
                            <a href="#" className="text-green-500 underline">Termos e condições de uso do Spotify</a>
                            .
                        </span>
                    </label>
                    <a id="thermsErrorBellowInputRegister" className="hidden my-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
                        <AlertCircle className="text-red-600"/>
                        Aceite os termos e condições para continuar.
                    </a>

                    <div className="w-full h-fit mt-6 flex items-center justify-center">
                        <span className="text-xxs font-normal text-center">Para saber mais sobre como o Spotify coleta, utiliza, compartilha e protege seus dados pessoais, leia a {" "}
                            <a href="#" className="text-green-500 underline">Política de Privacidade do Spotify</a>
                            .
                        </span>
                    </div>

                    <div className="w-full h-12 p-0.5 hover:p-0 my-5 flex justify-center">
                        <button onClick={() => registerHelper.register()} className="bg-green-500 w-fit rounded-full h-full cursor-default text-black px-10 py-2">Inscrever-se</button>
                    </div>

                    <div className="w-full h-fit my-4 flex items-center justify-center">
                        <span className="text-md font-normal text-center">Já tem uma conta? {" "}
                            <a href="../login" className="text-green-500 underline">Faça Login</a>
                            .
                        </span>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}