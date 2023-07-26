"use client"
import {ChevronLeft, ChevronRight} from 'lucide-react'
const Helper = require('../js/Helper.js');
const AppHelper = require('../js/AppHelper.js');

export default () => {

    window.onload = function() {
        AppHelper.onLoad();
    };

    return (
        <section className="
            h-full min-w-fit py-2 w-full pl-0 pr-2 
            ssm:hidden
            md:block
        ">
            <header id="header" className="h-16 float-left flex flex-row fixed bg-transparent p-5 rounded-t-md
                md:w-[calc(100%-19.25rem)]
                lg:w-[calc(100%-25rem)]
            ">
                <div className="h-full w-1/2 flex flex-row bg-transparent">
                    <div className="bg-black w-8 h-8 rounded-full flex flex-row items-center bg-opacity-50 mr-2">
                        <a href="#" className="">
                            <ChevronLeft className="lg:h-5 md:h-4 ml-1 text-zinc-400"/>
                        </a>
                    </div>
                    <div className="bg-black w-8 h-8 rounded-full flex flex-row items-center bg-opacity-50">
                        <a href="#" className="">
                            <ChevronRight className="lg:h-5 md:h-4 ml-1 text-zinc-400"/>
                        </a>
                    </div>
                </div>
                <div className="h-full w-1/2 flex flex-row items-center justify-end">
                    <div className="bg-black bg-no-repeat bg-cover w-8 h-8 rounded-full flex flex-row items-center bg-opacity-50 mr-2 p-1">
                        <div className="bg-[url('http://192.168.2.103:8080/img/profile.jpg')] bg-no-repeat bg-cover bg-center w-full h-full rounded-full flex flex-row items-center"></div>
                    </div>
                </div>
            </header>

            <main id="mainContent" onScroll={() => AppHelper.hideHeaderBG()} className="h-full bg-zinc-900 to-gray-900 rounded-lg w-full overflow-y-scroll">
                <div className="h-fit bg-gradient-to-b from-purple-950 to-zinc-900 pt-5 px-5">
                    <h1 id="mainTitle" className="text-h1 text-white pt-10"></h1>

                    <section className="h-48 w-full mt-6 lg:flex lg:flex-col md:hidden max-w-[calc(70rem)]">
                        <div className="h-1/2 w-full pb-2 flex flex-row">
                            <div className="w-[calc(32%)] bg-white bg-opacity-20 h-full rounded-md mr-5"></div>
                            <div className="w-[calc(32%)] bg-white bg-opacity-20 h-full rounded-md mr-5"></div>
                            <div className="w-[calc(32%)] bg-white bg-opacity-20 h-full rounded-md"></div>
                        </div>
                        <div className="h-1/2 w-full pt-2 flex flex-row">
                            <div className="w-[calc(32%)] bg-white bg-opacity-20 h-full rounded-md mr-5"></div>
                            <div className="w-[calc(32%)] bg-white bg-opacity-20 h-full rounded-md mr-5"></div>
                            <div className="w-[calc(32%)] bg-white bg-opacity-20 h-full rounded-md"></div>
                        </div>
                    </section>

                    <section className="h-64 w-full mt-6 md:flex md:flex-col lg:hidden">
                        <div className="h-1/3 w-full py-1 flex flex-row mb-1">
                            <div className="w-[calc(65%)] bg-white bg-opacity-20 h-full rounded-md mr-5"></div>
                            <div className="w-[calc(65%)] bg-white bg-opacity-20 h-full rounded-md mr-5"></div>
                        </div>
                        <div className="h-1/3 w-full py-1 flex flex-row mb-1">
                            <div className="w-[calc(65%)] bg-white bg-opacity-20 h-full rounded-md mr-5"></div>
                            <div className="w-[calc(65%)] bg-white bg-opacity-20 h-full rounded-md mr-5"></div>
                        </div>
                        <div className="h-1/3 w-full py-1 flex flex-row mb-1">
                            <div className="w-[calc(65%)] bg-white bg-opacity-20 h-full rounded-md mr-5"></div>
                            <div className="w-[calc(65%)] bg-white bg-opacity-20 h-full rounded-md mr-5"></div>
                        </div>
                    </section>
                </div>

                {/* Remover */}
                <div className="h-40 w-full my-2"></div>
                <div className="h-40 w-full my-2"></div>
                <div className="h-40 w-full my-2"></div>
                <div className="h-40 w-full my-2"></div>
                <div className="h-40 w-full my-2"></div>
                <div className="h-40 w-full my-2"></div>
                <div className="h-40 w-full my-2"></div>
            </main>    
        </section>
    )
}