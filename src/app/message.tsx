"use client"
import {X} from 'lucide-react';
import React, { useEffect, useState } from 'react';
const timeCloseAutoMessage = 3000;//ms

interface messageProps{
    titleValue: string
    messageContent: String
    bgType: string
    closeMessage: () => void
}

export default ({
        titleValue, messageContent, bgType, closeMessage
    }: messageProps) => { 
    
    const [width, setWidth] = useState(100);
    let timerMessage: NodeJS.Timeout;

    useEffect(() => {
        const timeoutAutoClose = setTimeout(() => {
            closeMessage();
        }, timeCloseAutoMessage);

        timerMessage = setInterval(() => {
            setWidth((newWidth) => {
              if (newWidth === 0) {
                clearInterval(timerMessage);
                return newWidth;
              }
              return newWidth - 1;
            });
        }, timeCloseAutoMessage / 100);
    
        return () => {
          clearTimeout(timeoutAutoClose);
          clearInterval(timerMessage);
          setWidth(100);
        };
    }, [closeMessage]);

    let bgColor;
    let textColor;
    let timerColor;
    switch (bgType) {
        case "error":
            bgColor = "bg-red-400";
            textColor = "text-black";
            timerColor = "bg-neutral-950";
            break;

        case "sucess":
            bgColor = "bg-sucess";
            textColor = "text-black";
            timerColor = "bg-neutral-950";
            break;

        case "warning":
            bgColor = "bg-warning";
            textColor = "text-black";
            timerColor = "bg-neutral-950";
            break;
    
        default:
            break;
    }

    return (
        <div
        onClick={closeMessage} className={`flex flex-col h-fit w-64 max-w-80 mb-4 ${textColor} bg-orange-300 ${bgColor} rounded-md select-none cursor-pointer transition-opacity`}>
            <div className="w-full h-fit px-4 flex flex-row">
                <div className="w-[calc(100%-28px)] font-bold text-lg pt-2.5 pr-5 overflow-hidden overflow-ellipsis whitespace-nowrap">
                    <a>{titleValue}</a>
                </div>
                <div className="w-fit font-bold text-lg flex justify-end pt-3.5">
                    <a className="cursor-pointer">
                        <X onClick={closeMessage} className="lg:h-5 md:h-4 ml-1 hover:text-black"/>
                    </a>
                </div>
            </div>
            <div className="w-64 h-fit font-semibold text-sm px-4 pb-2.5 overflow-hidden overflow-ellipsis">
                <a>{messageContent}</a>
            </div>
            <div style={{width: `${width}%`}} className={`h-1.5 ${timerColor} rounded-bl-sm`}></div>
        </div>
    );
}