import {Heart, Cast, ShuffleIcon, SkipBack, SkipForward, Play, Pause, RepeatIcon} from 'lucide-react'

export default () => {
  return (
    <footer className="
      bg-black h-24 w-full px-2 pb-1
      ssm:hidden
      md:block md:max-h-[calc(4rem)]
      lg:max-h-[calc(6rem)]
    ">
      <main className="bg-black h-full w-full rounded-lg flex flex-row">
        <section className="w-[calc(25%)] h-full flex flex-row items-center px-2">
          <div className="bg-white w-14 h-14 rounded-md mr-4"></div>
          <div className="h-full w-fit flex flex-row items-center mr-5">
            <div className="h-fit w-full flex flex-col items-center">
              <div className="h-fit w-full flex items-start
                lg:max-w-[calc(8rem)]
                md:max-w-[calc(4rem)]
              ">
                <a href="#" className="text-sm font-semibold text-white hover:underline overflow-hidden overflow-ellipsis whitespace-nowrap">
                    Save Your Tears
                </a>
              </div>
              <div className="h-fit w-full flex items-start
                lg:max-w-[calc(8rem)]
                md:max-w-[calc(4rem)]
              ">
                <a href="#" className="text-xs font-normal text-zinc-400 hover:underline overflow-hidden overflow-ellipsis whitespace-nowrap">
                    Milky Chance
                </a>
              </div>
            </div>
          </div>
          <div className="h-full w-fit flex items-center mr-4">
            <a href="#" className="hover:text-white cursor-default">
                <Heart className="h-4 w-4"/>
            </a>
          </div>
          <div className="h-full w-fit flex items-center">
            <a href="#" className="hover:text-white cursor-default">
                <Cast className="h-4 w-4"/>
            </a>
          </div>
        </section>
        <section className="bg-black w-[calc(50%)] h-full flex flex-col 
          md:max-w-[calc(25rem)]
          lg:max-w-[calc(60rem)]
        ">
          <div className="h-2/3 w-full flex flex-row items-center justify-center">
            <a href="#" className="flex flex-row items-center mx-2 cursor-default">
                <ShuffleIcon className="h-4"/>
            </a>
            <a href="#" className="flex flex-row items-center mx-2 cursor-default">
                <SkipBack className="h-5 text-white"/>
            </a>
            <a href="#" className="flex flex-row items-center mx-2 cursor-default bg-white p-1.5 h-2/3 rounded-full">
                <Play className="h-5 text-black"/>
            </a>
            <a href="#" className="flex flex-row items-center mx-2 cursor-default">
                <SkipForward className="h-5 text-white"/>
            </a>
            <a href="#" className="flex flex-row items-center mx-2 cursor-default">
                <RepeatIcon className="h-4"/>
            </a> 
          </div>
          <div className="h-1/3 w-full flex flex-row">
            <div className="h-full w-1/6">
              <a className="font-normal text-zinc-300 text-xs flex items-center justify-end px-2">00:12</a>
            </div>
            <div className="h-full w-4/6 flex flex-row items-start pt-1.5">
              <div className="h-[calc(0.280rem)] w-full bg-zinc-800 rounded-lg">
                <div className="h-full w-1/4 bg-zinc-200 hover:bg-green-600 rounded-lg flex flex-row items-center justify-end">
                  <div className="bg-zinc-200 w-3 h-3 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="h-full w-1/6">
              <a className="font-normal text-zinc-300 text-xs flex items-center justify-start px-2">03:02</a>
            </div>
          </div>
        </section>
        <section className="bg-zinc-900 w-[calc(25%)] h-full"></section> 
      </main>
    </footer>  
  )
}