import Link from "next/link";

export default () => {
    return (
        <div className="lg:h-screen md:h-fit w-auto bg-gradient-to-b from-zinc-800 to-black flex flex-row items-start justify-center m-0 py-10 text-white font-bold select-none">
            <div className="bg-black w-[calc(46rem)] h-fit rounded-lg flex flex-col items-center px-24">
                <h1 className="text-h1+ my-6">Entrar no Spotify</h1>
                
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

                <div className="w-full h-[calc(1px)] bg-zinc-700"></div>

                <section className="w-full h-fit px-28 flex flex-col mt-6">
                    <a className="mt-2 text-sm">E-mail ou nome de usuário:</a>
                    <input type="text" placeholder="E-mail ou nome de usuário" className="focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 my-2 border border-zinc-400 rounded-md text-base font-normal"/>

                    <a className="mt-2 text-sm">Senha:</a>
                    <input type="password" placeholder="Senha" className="focus:outline-none focus:ring focus:ring-white bg-zinc-900 p-2 my-2 border border-zinc-400 rounded-md text-base font-normal"/>
                
                    <a className="text-xs font-medium my-3">Lembrar de mim</a>

                    <div className="w-full h-12 p-0.5 hover:p-0">
                        <button className="bg-green-500 w-full rounded-full h-full cursor-default text-black">Entrar</button>
                    </div>

                </section>
                <a className="text-sm font-medium underline cursor-pointer hover:text-green-500 my-6">Esqueceu sua senha?</a>

                <div className="w-full h-fit flex flex-row items-center justify-center mb-8">
                    <a className="text-sm text-zinc-600 font-medium cursor-text my-4 mx-2">Não tem uma conta?</a>
                    <Link href="../register/" className="text-sm font-medium underline cursor-pointer hover:text-green-500 my-4">Inscrever-se no Sporify</Link>
                </div>
            </div>
        </div>
    )
}