"use client"
import {Heart, Cast, ShuffleIcon, SkipBack, SkipForward, Play, Pause, RepeatIcon, Mic2, ListMusic, MonitorSmartphone, Volume1, Maximize2} from 'lucide-react'
const AppHelper = require('../js/AppHelper');

export default () => {
  return (
    <footer id="footer" className="
      bg-black h-24 w-full px-2 pb-1
      ssm:hidden
      md:block md:max-h-[calc(4rem)]
      lg:max-h-[calc(6rem)]
    ">
      <main className="bg-black h-full w-full rounded-lg flex flex-row">
        <section className="w-[calc(25%)] h-full flex flex-row items-center px-2 min-w-[calc(13rem)]">
          <div id="musicImage" className="bg-no-repeat bg-cover rounded-md mr-4 min-w-[calc(2.75rem)]
            md:h-11 md:w-11
            lg:w-14 lg:h-14
          "></div>
          <div className="h-full w-fit flex flex-row items-center mr-5">
            <div className="h-fit w-full flex flex-col items-center">
              <div className="h-fit w-full flex items-start
                lg:max-w-[calc(8rem)]
                md:max-w-[calc(5rem)]
              ">
                <a id="musicName" href="#" className="text-xs font-semibold text-white hover:underline overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {/* Save Your Tears */}
                </a>
              </div>
              <div className="h-fit w-full flex items-start
                lg:max-w-[calc(8rem)]
                md:max-w-[calc(5rem)]
              ">
                <a id="artistName" href="#" className="text-xxs font-normal text-zinc-400 hover:underline overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {/* Milky Chance */}
                </a>
              </div>
            </div>
          </div>
          <div className="h-full w-fit flex items-center mr-4">
            <a className="hover:text-white cursor-default">
                <Heart className="lg:h-4 lg:w-4 md:h-3 md:w-3"/>
            </a>
          </div>
          <div className="h-full w-fit flex items-center">
            <a className="hover:text-white cursor-default">
                <Cast className="lg:h-4 lg:w-4 md:h-3 md:w-3"/>
            </a>
          </div>
        </section>
        <section className="bg-black w-[calc(50%)] h-full flex flex-col">
          <div className="h-2/3 w-full flex flex-row items-center justify-center">
            <a className="flex flex-row items-center lg:mx-2 md:mx-1 cursor-default">
                <ShuffleIcon className="lg:h-4 md:h-3"/>
            </a>
            <a className="flex flex-row items-center lg:mx-2 md:mx-1 cursor-default">
                <SkipBack id="skipBackIcon" className="lg:h-5 md:h-4 text-white"/>
            </a>
            <a id="backgroundPlayPause" onClick={() => AppHelper.playPauseMusic()} className="flex flex-row items-center lg:mx-2 md:mx-1 cursor-default bg-white rounded-full
              md:p-0.5 md:h-2/3
              lg:p-1.5 lg:h-2/3
            ">
                <Play id="playMusicButton" className="lg:h-5 md:h-4 text-black block"/>
                <Pause id="pauseMusicButton" className="lg:h-5 md:h-4 text-black hidden"/>
            </a>
            <a className="flex flex-row items-center lg:mx-2 md:mx-1 cursor-default">
                <SkipForward id="skipForwardIcon" className="lg:h-5 md:h-4 text-white"/>
            </a>
            <a className="flex flex-row items-center lg:mx-2 md:mx-1 cursor-default">
                <RepeatIcon className="lg:h-4 md:h-3"/>
            </a> 
          </div>
          <div className="h-1/3 w-full flex flex-row items-start justify-center mt-0.5"> 
            <div id="initTimeMusic" className="w-fit h-4 text-xxs font-normal mx-2">0:00</div>
            <div id="musicTimeBarBackground" 
              onClick={() => AppHelper.changeTimeOfMusic(event)} 
              onMouseEnter={() => AppHelper.hoverMusicTimeBar(true)} 
              onMouseLeave={() => AppHelper.hoverMusicTimeBar(false)}
              className="w-4/6 h-2 mt-1">
              <div className="w-full h-1 bg-zinc-700 flex flex-row rounded-lg my-[calc(0.2rem)]">
                <div id="musicTimeBar" className="bg-white hover:bg-green-600 w-[calc(0px)] h-full flex flex-row items-center justify-end rounded-lg"></div>
                <div 
                    onMouseDown={() => AppHelper.dragMusicBar(true)} 
                    onMouseUp={() => AppHelper.dragMusicBar(false)} 
                    id="tipMusicTimeBar" className="hidden bg-white h-3 w-3 rounded-full mt-[calc(-4px)]">    
                </div>
              </div>
            </div>
            <div id="finTimeMusic" className="w-fit h-4 text-xxs font-normal mx-2">0:00</div>
          </div>
        </section>
        <section className="bg-black w-[calc(25%)] flex flex-row h-full items-center justify-end">
          <a href="#" className="cursor-default">
              <Mic2 className="lg:h-4 md:h-3 mx-1 text-zinc-400"/>
          </a>
          <a href="#" className="cursor-default">
              <ListMusic className="lg:h-5 md:h-4 mx-1 text-zinc-400"/>
          </a>
          <a href="#" className="cursor-default">
              <MonitorSmartphone className="lg:h-5 md:h-4 mx-1 text-zinc-400"/>
          </a>
          <a href="#" className="cursor-default">
              <Volume1 className="lg:h-5 md:h-4 ml-1 text-zinc-400"/>
          </a>
          <div className="w-1/4 h-1 bg-zinc-700 flex flex-row rounded-xl mx-1 md:min-w-[calc(3rem)]">
            <div id="soundBar" className="bg-white hover:bg-green-600 w-2/3 h-full flex flex-row items-center justify-end rounded-xl">
              <div id="tipSoundBar" className="bg-white h-3 w-3 rounded-full"></div>
            </div>
          </div>
          <a href="#" className="cursor-default">
              <Maximize2 className="lg:h-4 md:h-3 mx-1 text-zinc-400"/>
          </a>
        </section> 
      </main>
    </footer>  
  )
}