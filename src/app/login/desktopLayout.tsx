"use client"
import Link from "next/link";
import {Check, Eye, EyeOff} from 'lucide-react';
import ErrorBelowInput from "../errorBelowInput";
const LoginHelper = require('../../js/LoginHelper.js');
const Helper = require('../../js/Helper.js');

export default () => {
    window.onload = function() {
        LoginHelper.onLoadLogin();
    };

    return (
        <div id="loginPage" className="ssm:hidden lg:h-screen w-auto bg-gradient-to-b from-zinc-800 to-black md:flex flex-row items-start justify-center m-0 py-10 text-white font-bold select-none">
            <div className="bg-black w-[calc(46rem)] h-fit rounded-lg flex flex-col items-center px-24">
                <h1 className="text-h1+ my-6">Entrar no Spotify</h1>
                
                <div className="w-full h-[calc(1px)] bg-zinc-700 mb-4"></div>

                <form autoComplete="off" className="w-full h-fit px-28 flex flex-col my-3">
                    <a className="mt-2 text-sm">E-mail ou nome de usuário:</a>
                    <input id="inputEmailLogin" onChange={() => {LoginHelper.onChangeInput("inputEmailLogin", "emailErrorBelowInput")}} type="text" placeholder="E-mail ou nome de usuário" className="focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 my-2 border border-zinc-400 rounded-md text-base font-normal"/>
                    <ErrorBelowInput id="emailErrorBelowInput" message="Insira um e-mail válido!"></ErrorBelowInput>

                    <a className="mt-2 text-sm">Senha:</a>
                    <div className="w-full flex flex-row">
                        <div className="h-[calc(0.05rem)] absolute w-[calc(19rem)] flex justify-end">
                            <Eye 
                                onClick={() => Helper.changeIconsState("eyePass", "eyeOffPass", Helper.changeInputType("inputPasswordLogin"))} 
                                id="eyePass" className="mt-[calc(1.125rem)] lg:h-5 md:h-4 text-zinc-400 hover:text-white hidden"
                            />
                            <EyeOff 
                                onClick={() => Helper.changeIconsState("eyePass", "eyeOffPass", Helper.changeInputType("inputPasswordLogin"))} 
                                id="eyeOffPass" className="mt-[calc(1.125rem)] lg:h-5 md:h-4 text-zinc-400 hover:text-white block"
                            />
                        </div>
                        <input id="inputPasswordLogin" onChange={() => {LoginHelper.onChangeInput("inputPasswordLogin", "passErrorBelowInput")}} type="password" placeholder="Senha" className="float-left w-full focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 mt-2 mb-1 border border-zinc-400 rounded-md text-base font-normal"/>
                    </div>
                    <ErrorBelowInput id="passErrorBelowInput" message="Insira uma senha válida!"></ErrorBelowInput>
                    
                    <label htmlFor="remember" className="flex flex-row items-center p-1 mr-6 mb-2">
                        <Check id="checkRemember" className="absolute h-4 w-4 hidden"></Check>
                        <input onChange={() => Helper.changeIconsState("checkRemember")} className="appearance-none mr-2 bg-black rounded-sm border border-white after:absolute hover:border-green-500 h-4 w-4" type="checkbox" id="remember" />
                        <a className="text-xs font-normal my-3">Lembrar de mim</a>
                    </label>

                    <div className="w-full h-12 p-0.5 hover:p-0">
                        <div onClick={() => LoginHelper.login()} className="bg-green-500 w-full flex items-center justify-center rounded-full h-full cursor-default text-black">Entrar</div>
                    </div>
                </form>
                <a className="text-sm font-medium underline cursor-pointer hover:text-green-500 my-4">Esqueceu sua senha?</a>

                <div className="w-full h-fit flex flex-row items-center justify-center mb-8">
                    <a className="text-sm text-zinc-600 font-medium cursor-text my-4 mx-2">Não tem uma conta?</a>
                    <Link href="../register/" className="text-sm font-medium underline cursor-pointer text-green-500 my-4">Inscrever-se no Spotify</Link>
                </div>
            </div>
        </div>
    )
}

// Social media buttons
{/* <button className="border-zinc-600 hover:border-white focus:outline-none focus:ring focus:ring-white cursor-default border w-3/5 h-12 rounded-full my-1 flex flex-row items-center justify-center py-1">
    <div className="w-1/4 h-full rounded-full flex flex-row items-center justify-center">
        <a className="w-1/3 h-2/3 flex flex-row items-center bg-[url('http://192.168.2.103:8080/img/googleIcon.png')] bg-no-repeat bg-cover bg-center rounded-full"></a>
    </div>
    <div className="w-3/4 h-full rounded-full">
        <a className="w-full h-full flex flex-row items-center justify-left">Continuar com O Google</a>
    </div>
</button>
<button className="border-zinc-600 hover:border-white focus:outline-none focus:ring focus:ring-white cursor-default border w-3/5 h-12 rounded-full my-1 flex flex-row items-center justify-center py-1">
    <div className="w-1/4 h-full rounded-full flex flex-row items-center justify-center">
        <a className="w-1/3 h-2/3 flex flex-row items-center bg-[url('http://192.168.2.103:8080/img/facebookIcon.png')] bg-no-repeat bg-cover bg-center rounded-full"></a>
    </div>
    <div className="w-3/4 h-full rounded-full">
        <a className="w-full h-full flex flex-row items-center justify-left">Continuar com O Facebook</a>
    </div>
</button>
<button className="border-zinc-600 hover:border-white focus:outline-none focus:ring focus:ring-white cursor-default border w-3/5 h-12 rounded-full my-1 flex flex-row items-center justify-center py-1 mb-10">
    <div className="w-1/4 h-full rounded-full flex flex-row items-center justify-center">
        <a className="w-1/3 h-2/3 flex flex-row items-center bg-[url('http://192.168.2.103:8080/img/appleIcon.png')] bg-no-repeat bg-cover bg-center rounded-full"></a>
    </div>
    <div className="w-3/4 h-full rounded-full">
        <a className="w-full h-full flex flex-row items-center justify-left">Continuar com A Apple</a>
    </div>
</button> */}