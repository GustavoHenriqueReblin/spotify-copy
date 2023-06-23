"use client"
import {Home as HomeIcon, Library, Search, Plus, ArrowRight, ChevronDown, ChevronUp, Check} from 'lucide-react'
import Link from 'next/link';
const Helper = require('../js/Helper');

export default () => {
    return (
        <nav className="
            h-full object-cover p-2 
            ssm:hidden
            md:block md:w-72
            lg:w-112
        ">
            <nav className="w-full h-28 bg-zinc-900 rounded-lg flex flex-col min-h-fit">
                <a href="#" className="h-1/2 pt-1.5 flex flex-row items-center gap-5 text-base font-bold mx-6 hover:text-white min-w-[calc(19rem)]">
                    <HomeIcon className=""/>
                    Início
                </a>
                <a href="#" className="h-1/2 pb-2.5 flex flex-row items-center gap-5 text-base font-bold mx-6 hover:text-white min-w-[calc(19rem)]">
                    <Search className=""/>
                    Buscar
                </a>
            </nav>
            <nav className="bg-zinc-900 w-full h-[calc(100%-7.5rem)] mt-2 rounded-lg">
                <div id="yourLibrary" className="w-full h-28 rounded-t-lg flex flex-col"> 
                    <div className="px-6 w-full h-1/2 flex flex-row">
                        <a href="#" className="h-full md:w-4/5 lg:w-1/2 flex flex-row items-center gap-5 text-base font-bold hover:text-white">
                            <Library className=""/>
                            Sua Biblioteca
                        </a>
                        <div className="h-full w-1/2 flex items-center justify-end">
                            <a href="#" className="h-fit w-fit hover:bg-zinc-800 hover:text-white p-0.5 rounded-full ml-3">
                                <Plus className=""/>
                            </a> 
                            <a href="#" className="h-fit w-fit hover:bg-zinc-800 hover:text-white p-0.5 rounded-full ml-3">
                                <ArrowRight className=""/>
                            </a> 
                        </div>
                    </div>
                    <div className="px-6 w-full h-1/2 items-center justify-start flex flex-row">
                        <div className="h-fit w-fit bg-zinc-800 hover:bg-zinc-700 items-center flex rounded-3xl mr-2 cursor-pointer">
                            <a href="#" className="text-zinc-200 text-sm h-full w-full my-1.5 mx-4">
                                Playlists
                            </a> 
                        </div>
                        <div className="h-fit w-fit bg-zinc-800 hover:bg-zinc-700 items-center flex rounded-3xl mr-2 cursor-pointer">
                            <a href="#" className="text-zinc-200 text-sm h-full w-full my-1.5 mx-4">
                                Álbuns
                            </a> 
                        </div>
                    </div>
                </div>

                <div className="w-full h-[calc(100%-7rem)] mt-0.5 py-1">
                    <div className="w-full h-full m-0">
                        <div id="playlists" onScroll={() => Helper.changePlaylistsShadow()} className="overflow-y-auto h-full">
                            <div className="h-8 w-full flex flex-row my-1 mb-2.5">
                                <div className="h-full w-full items-center flex justify-start px-6">
                                    <a href="#" className="h-full w-8 hover:bg-zinc-800 items-center flex justify-center rounded-full">
                                        <Search className="text-zinc-200 h-3/5 w-3/5"/>
                                    </a> 
                                </div> 
                                {/* Modal recentes */}
                                <div id="orderByModal" className="fixed bg-zinc-800 w-64 h-48 rounded-md flex flex-col items-center py-4
                                    md:top-[calc(2.5rem)] md:left-[calc(5.5rem)]
                                    lg:top-[calc(17.5rem)] lg:left-[calc(16.5rem)]
                                ">
                                    <div className="w-full h-8 px-4">
                                        <a className="text-xxs">Classificar por</a>
                                    </div>
                                    <div id="orderBy1" className="w-full h-8 px-4 hover:bg-zinc-700 flex items-center my-0.5 flex-row">
                                        <div className="w-4/5 h-full flex flex-row items-center justify-start">
                                            <a className="text-sm text-green-700">Recentes</a>
                                        </div>
                                        <div className="w-1/5 h-full flex flex-row items-center justify-end">
                                            <Check className="text-green-700 h-5 w-5"/>
                                        </div>
                                    </div>
                                    <div id="orderBy2" className="w-full h-8 px-4 hover:bg-zinc-700 flex items-center my-0.5 flex-row">
                                        <div className="w-4/5 h-full flex flex-row items-center justify-start">
                                            <a className="text-sm">Adicionados recentemente</a>
                                        </div>
                                        <div className="w-1/5 h-full flex-row items-center justify-end hidden">
                                            <Check className="text-zinc-200 h-4 w-4"/>
                                        </div>
                                    </div>
                                    <div id="orderBy3" className="w-full h-8 px-4 hover:bg-zinc-700 flex items-center my-0.5 flex-row">
                                        <div className="w-4/5 h-full flex flex-row items-center justify-start">
                                            <a className="text-sm">Ordem alfabética</a>
                                        </div>
                                        <div className="w-1/5 h-full flex-row items-center justify-end hidden">
                                            <Check className="text-zinc-200 h-4 w-4"/>
                                        </div>
                                    </div>
                                    <div id="orderBy4" className="w-full h-8 px-4 hover:bg-zinc-700 flex items-center my-0.5 flex-row">
                                        <div className="w-4/5 h-full flex flex-row items-center justify-start">
                                            <a className="text-sm">Criador</a>
                                        </div>
                                        <div className="w-1/5 h-full flex-row items-center justify-end hidden">
                                            <Check className="text-zinc-200 h-4 w-4"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-full w-full pr-3">
                                    <a id="orderByBtn" onClick={() => Helper.orderByClick()} className="flex flex-row justify-end items-center text-sm cursor-pointer"> Recentes
                                        <ChevronUp id="orderByChevronUp" className="text-zinc-200 h-4 w-4 mx-1 pt-0.5 hidden"/>
                                        <ChevronDown id="orderByChevronDown" className="text-zinc-200 h-4 w-4 mx-1 pt-0.5"/>
                                    </a> 
                                </div>
                            </div>

                            {/* Script base do registro da playlist */}
                            {/* <div className="h-fit w-full flex flex-col px-2 max-w-[calc(22rem)]">
                                <div className="w-full h-16 hover:bg-zinc-800 rounded-lg cursor-pointer p-2 flex flex-row">
                                    <div className="w-12 h-full bg-black rounded-lg min-w-[calc(3rem)]"></div>
                                    <div className="w-[calc(100%-3rem)] h-full rounded-lg ml-2 flex flex-col">
                                        <div className="w-full h-full rounded-lg items-start flex pr-1">
                                            <a className="font-semibold text-zinc-200 overflow-hidden overflow-ellipsis whitespace-nowrap">Rádio de Can´t Hold Us (feat. Ray Dalton)</a>
                                        </div>
                                        <div className="w-full h-full rounded-lg flex flex-row items-center text-sm">
                                            <a className="flex flex-row items-center">
                                                <Pin className="h-4"/>
                                            </a>     
                                            <a className="font-semibold">Playlist - Spotify</a>
                                        </div>  
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </nav>
        </nav>
    )
}