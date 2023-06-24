"use client"
import Link from "next/link";
import {Check, Eye, EyeOff} from 'lucide-react';
const Helper = require('../../js/Helper.js');

export default () => {

    window.onload = function() {
        Helper.onLoadLogin("responsive");
    };

    return (
        <div className="sm:block md:hidden text-white font-bold bg-gradient-to-b from-zinc-950 to-black w-auto h-screen flex flex-col items-center justify-center px-8 select-none m-0">
            <h1 className="text-h1- w-full pt-8 pb-3">Entrar no Spotify</h1>

            <div className="w-full h-[calc(1px)] border-b border-zinc-700 py-2"></div>

            <section className="w-full h-fit flex flex-col my-3">
                <a className="mt-2 text-sm font-semibold">E-mail ou nome de usuário:</a>
                <input type="text" placeholder="E-mail ou nome de usuário" className="focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 my-2 border border-zinc-400 rounded-md text-base font-normal"/>

                <a className="mt-2 text-sm font-semibold">Senha:</a>
                <div className="w-full flex flex-row">
                    <div className="h-[calc(0.05rem)] absolute w-[calc(100%-5rem)] flex justify-end">
                        <Eye 
                            onClick={() => Helper.changeIconsState("eyePass", "eyeOffPass", Helper.changeInputType("inputPasswordResponsive"))} 
                            id="eyePass" className="mt-[calc(1.125rem)] lg:h-5 md:h-4 text-zinc-400 hidden"
                        />
                        <EyeOff 
                            onClick={() => Helper.changeIconsState("eyePass", "eyeOffPass", Helper.changeInputType("inputPasswordResponsive"))} 
                            id="eyeOffPass" className="mt-[calc(1.125rem)] lg:h-5 md:h-4 text-zinc-400 block"
                        />
                    </div>
                    <input id="inputPasswordResponsive" type="password" placeholder="Senha" className="float-left w-full focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 mt-2 mb-1 border border-zinc-400 rounded-md text-base font-normal"/>
                </div>
                
                <label htmlFor="remember" className="flex flex-row items-center p-1 mr-6 mb-2">
                    <Check id="checkRemember" className="absolute h-4 w-4 hidden"></Check>
                    <input onChange={() => Helper.changeIconsState("checkRemember")} className="appearance-none mr-2 bg-black rounded-sm border border-white after:absolute hover:border-green-500 h-4 w-4" type="checkbox" id="remember" value="Eu concordo" />
                    <a className="text-xs font-normal my-3">Lembrar de mim</a>
                </label>

                <div className="w-full h-12 p-0.5">
                    <button className="bg-green-500 w-full rounded-full h-full cursor-default text-black after:h[calc(105%)]">Entrar</button>
                </div> 
            </section>
            <a className="text-sm font-medium underline cursor-pointer hover:text-green-500 my-4">Esqueceu sua senha?</a>

            <div className="w-full h-fit flex flex-row items-center justify-center mb-8">
                <a className="text-sm text-zinc-600 font-medium cursor-text my-4 mx-2">Não tem uma conta?</a>
                <Link href="../register/" className="text-sm font-medium underline cursor-pointer hover:text-green-500 my-4">Inscrever-se no Sporify</Link>
            </div>
        </div>
    )
}