import {Settings, History, Bell} from 'lucide-react'

export default () => {
    return (
        <main className="
            h-full w-full p-2 min-w-[calc(320px)]
            md:hidden  
        ">
            
            {/* ssm:bg-green-400
            sm:bg-orange-600
            ssm2:bg-red-500 */}
            <section className="bg-zinc-900 w-full h-fit text-white font-semibold p-4 text-2xl rounded-t-lg">
                <section>

                </section>

                <header className="w-full h-12 flex flex-row mt-2">
                    <div className="h-100 w-1/2 flex items-center justify-start">
                        <h1>Boa noite</h1>
                    </div>
                    <div className="h-100 w-1/2 flex items-center justify-end">
                        <a href="#" className="ml-4">
                            <Bell className=""/>
                        </a>
                        <a href="#" className="ml-4">
                            <History className=""/>
                        </a>
                        <a href="#" className="ml-4">
                            <Settings className=""/>
                        </a>
                    </div>
                </header>
                <div className="w-full h-14 items-center justify-start flex flex-row">
                    <div className="h-fit w-fit bg-zinc-800 hover:bg-zinc-700 items-center flex rounded-3xl mr-2 cursor-pointer">
                        <a href="#" className="text-zinc-200 font-semibold text-xs h-full w-full my-1.5 mx-4">
                            Música
                        </a> 
                    </div>
                    <div className="h-fit w-fit bg-zinc-800 hover:bg-zinc-700 items-center flex rounded-3xl mr-2 cursor-pointer">
                        <a href="#" className="text-zinc-200 font-semibold text-xs h-full w-full my-1.5 mx-4">
                            Podcasts e programas
                        </a> 
                    </div>
                </div>
                <section className="mt-2">
                    <div className="h-14 w-full flex flex-row mt-2">
                        <div className="h-full w-1/2 pr-1">
                            <div className="h-full w-full flex flex-row">
                                <div className="
                                    h-full bg-white rounded-l-md
                                    ssm:w-11
                                    ssm2:w-14
                                "></div>
                                <div className="
                                    h-full w-[calc(100%-3.5rem)] bg-gray-500 rounded-r-md p-1 items-center flex
                                    ssm:w-[calc(100%-2.5rem)]
                                    ssm2:w-[calc(100%-3.5rem)]   
                                ">
                                    <p className="font-semibold text-xs">Músicas Curtidas</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-1/2 pl-1">
                            <div className="h-full w-full flex flex-row">
                            <div className="
                                    h-full bg-white rounded-l-md
                                    ssm:w-11
                                    ssm2:w-14
                                "></div>
                                <div className="
                                    h-full w-[calc(100%-3.5rem)] bg-gray-500 rounded-r-md  items-center flex
                                    ssm:w-[calc(100%-2.5rem)] ssm:px-1
                                    ssm2:w-[calc(100%-3.5rem)] ssm2:p-1 
                                ">
                                    <p className="h-3/4 w-full font-semibold text-xs break-normal">Rádio de Tentação - Ao Vivo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="h-100 w-full flex items-center justify-start mt-4">
                    <h1>Músicas baixadas</h1>
                </div>
            </section>
            <section className="bg-zinc-900 w-full h-44 flex flex-row overflow-x-auto pl-4">
                <div className="w-full h-full flex flex-row mr-4">
                    <div className="h-full w-32 flex flex-col">
                        <div className="h-3/4 w-32 bg-black">
                        
                        </div>  
                        <div className="h-1/4 w-32 flex items-start justify-start pt-1">
                            <p className="font-semibold text-xs">Teste</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex flex-row mr-4">
                    <div className="h-full w-32 flex flex-col">
                        <div className="h-3/4 w-32 bg-black">
                        
                        </div>  
                        <div className="h-1/4 w-32 flex items-start justify-start pt-1">
                            <p className="font-semibold text-xs">Teste</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex flex-row mr-4">
                    <div className="h-full w-32 flex flex-col">
                        <div className="h-3/4 w-32 bg-black">
                        
                        </div>  
                        <div className="h-1/4 w-32 flex items-start justify-start pt-1">
                            <p className="font-semibold text-xs">Teste</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex flex-row mr-4">
                    <div className="h-full w-32 flex flex-col">
                        <div className="h-3/4 w-32 bg-black">
                        
                        </div>  
                        <div className="h-1/4 w-32 flex items-start justify-start pt-1">
                            <p className="font-semibold text-xs">Teste</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex flex-row mr-4">
                    <div className="h-full w-32 flex flex-col">
                        <div className="h-3/4 w-32 bg-black">
                        
                        </div>  
                        <div className="h-1/4 w-32 flex items-start justify-start pt-1">
                            <p className="font-semibold text-xs">Teste</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex flex-row mr-4">
                    <div className="h-full w-32 flex flex-col">
                        <div className="h-3/4 w-32 bg-black">
                        
                        </div>  
                        <div className="h-1/4 w-32 flex items-start justify-start pt-1">
                            <p className="font-semibold text-xs">Teste</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}