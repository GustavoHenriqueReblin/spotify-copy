"use client"
import {X} from 'lucide-react';
const Helper = require('../js/Helper.js');

interface messageProps{
    idValue: string
    topValue: string
    titleValue: string
    messageContent: string
    textColor: string
    bgColor: string
}

export default ({idValue, topValue, titleValue, messageContent, textColor, bgColor}: messageProps) => {
    return (
        <div id={`${idValue}`} className={`flex opacity-0 absolute w-64 max-w-80 text-${textColor} h-fit bg-${bgColor} right-10 top-${topValue} flex-col rounded-md select-none`}>
            <div className="w-full h-fit px-4 flex flex-row ">
                <div className="w-[calc(100%-28px)] font-bold text-lg pt-2.5 pr-5 overflow-hidden overflow-ellipsis whitespace-nowrap">
                    <a>{titleValue}</a>
                </div>
                <div className="w-fit font-bold text-lg flex justify-end pt-3.5">
                    <a className="cursor-pointer">
                        <X onClick={() => Helper.closeMessage()} className="lg:h-5 md:h-4 ml-1 hover:text-black"/>
                    </a>
                </div>
            </div>
            <div className="w-64 h-fit font-semibold text-sm px-4 pb-2.5 overflow-hidden overflow-ellipsis">
                <a>{messageContent}</a>
            </div>
        </div>
    )
}