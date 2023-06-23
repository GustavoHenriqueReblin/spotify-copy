import {AlertCircle} from 'lucide-react';

export default () => {
    return (
        <div className="h-fit w-auto bg-gradient-to-b from-zinc-800 to-black flex flex-row items-start justify-center m-0 py-10 text-white font-bold select-none">
            <div className="bg-black w-[calc(56rem)] h-fit rounded-lg flex flex-col items-center px-24">
                <h1 className="text-h1 my-6">Insreva-se grátis e comece a curtir.</h1>

                <div className="w-full h-[calc(1px)] bg-zinc-700"></div>

                <section className="w-full h-fit px-28 flex flex-col mt-6">
                    <a className="mt-3 text-sm">Qual é o seu e-mail?</a>
                    <input type="text" placeholder="Insira seu e-mail" className="focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 my-2 border border-zinc-400 rounded-md text-base font-normal"/>
                    <a className="hidden my-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
                        <AlertCircle className="text-red-600"/>
                        Insira um e-mail válido.
                    </a>

                    <a className="mt-3 text-sm">Crie uma senha:</a>
                    <input type="password" placeholder="Crie uma senha" className="focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 my-2 border border-zinc-400 rounded-md text-base font-normal"/>
                    <a className="hidden my-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
                        <AlertCircle className="text-red-600"/>
                        Insira uma senha válida.
                    </a>

                    <a className="mt-3 text-sm">Como devemos chamar você?</a>
                    <input type="text" placeholder="Insira um nome para o perfil" className="focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 my-2 border border-zinc-400 rounded-md text-base font-normal"/>
                    <a className="text-xs font-normal mb-2">Isso aparece no seu perfil.</a>
                    <a className="hidden my-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
                        <AlertCircle className="text-red-600"/>
                        Insira uma senha válida.
                    </a>

                    <a className="mt-3 mb-1 text-sm">Qual sua data de nascimento?</a>
                    <div className="h-fit flex flex-row mb-2">
                        <div className="w-[calc(33.333%)] pr-4">
                            <a className="text-sm font-normal my-1">Dia</a>
                            <input type="text" maxLength={2} placeholder="DD" className="w-full focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 border border-zinc-400 rounded-md text-base font-normal mt-2"/>
                        </div>
                        <div className="w-[calc(70.333%)] pr-4">
                            <a className="text-sm font-normal my-1">Mês</a>
                            <select defaultValue={"mesDefault"} placeholder="Mês" className="w-full overflow-hidden focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 border border-zinc-400 rounded-md text-base font-normal mt-2">
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
                            <input type="text" maxLength={4} placeholder="AAAA" className="w-full focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 border border-zinc-400 rounded-md text-base font-normal mt-2"/>
                        </div>
                    </div>
                    <a className="hidden my-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
                        <AlertCircle className="text-red-600"/>
                        Insira um dia válido para o mês.
                    </a>
                    <a className="hidden my-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
                        <AlertCircle className="text-red-600"/>
                        Selecione o mês do nascimento.
                    </a>
                    <a className="hidden my-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
                        <AlertCircle className="text-red-600"/>
                        Insira um ano válido.
                    </a>

                    <a className="mt-3 mb-1 text-sm">Qual seu gênero?</a>
                    <div className="flex flex-row">
                        {/* onClick={() => Helper.setThemeGenderSelected("inputGender2")} */}
                        <div>
                            <label id="inputGender1" htmlFor="optionGen1" className="flex items-center p-1 mr-5">
                                <input className="appearance-none border border-white hover:border-green-500 mr-1.5 w-4 h-4 rounded-full" type="radio" id="inputGender1" value="1"/>
                                <span className="text-sm font-normal">Masculino</span>
                            </label>
                        </div>

                        {/* onClick={() => Helper.setThemeGenderSelected("inputGender2")} */}
                        <div>
                            <label id="inputGender2" htmlFor="optionGen2" className="flex items-center p-1 mr-5">
                                <input className="appearance-none border border-white hover:border-green-500 mr-1.5 w-4 h-4 rounded-full" type="radio" id="optionGen2" value="2"/>
                                <span className="text-sm font-normal">Feminino</span>
                            </label>
                        </div>

                        {/* onClick={() => Helper.setThemeGenderSelected("inputGender3")} */}
                        <label id="inputGender3" htmlFor="optionGen3" className="flex items-center p-1 mr-5">
                            <input className="appearance-none border-4 border-green-500 hover:border-green-500 mr-1.5 w-4 h-4 rounded-full" type="radio" id="optionGen3" value="3"/>
                            <span className="text-sm font-normal">Outros</span>
                        </label>

                        {/* onClick={() => Helper.setThemeGenderSelected("inputGender4")} */}
                        <label id="inputGender4" htmlFor="optionGen4" className="flex items-center p-1 mr-5">
                            <input className="appearance-none border border-white hover:border-green-500 mr-1.5 w-4 h-4 rounded-full" type="radio" id="optionGen4" value="4" />
                            <span className="text-sm font-normal">Prefiro não dizer</span>
                        </label>
                    </div>

                    <label htmlFor="terms" className="flex items-center p-1 mr-6 mt-6">
                        <input className="appearance-none mr-2 rounded-sm border border-white hover:border-green-500 h-4 w-4" type="checkbox" id="terms" value="Eu concordo"/>
                        <span className="text-sm font-normal">Eu concordo com os {" "}
                            <a href="#" className="text-green-500 underline">Termos e condições de uso do Spotify</a>
                            .
                        </span>
                    </label>
                    <a className="hidden my-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
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
                        <button className="bg-green-500 w-fit rounded-full h-full cursor-default text-black px-10 py-2">Inscrever-se</button>
                    </div>

                    <div className="w-full h-fit my-4 flex items-center justify-center">
                        <span className="text-md font-normal text-center">Já tem uma conta? {" "}
                            <a href="#" className="text-green-500 underline">Faça Login</a>
                            .
                        </span>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}