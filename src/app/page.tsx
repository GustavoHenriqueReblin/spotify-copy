import {Home as HomeIcon, Library, Search, Heart, Plus, ArrowRight} from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen bg-black text-zinc-400 font-bold flex flex-col select-none">
      <main className="h-full flex flex-row max-h-[calc(100%-5rem)] min-h-[calc(24rem)]">
        <nav className="bg-black w-[calc(28rem)] py-2 pl-2 max-w-[calc(30%)] h-full min-h-[calc(32rem-96rem)] max-h-full min-w-fit">
          <nav className="w-full h-28 bg-zinc-900 rounded-lg flex flex-col min-h-fit min-w-fit">
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
            <div className="w-full h-28 rounded-t-lg flex flex-col shadow-lg shadow-zinc-950"> 
              <div className="px-6 w-full h-1/2 flex flex-row">
                <a href="#" className="h-full w-1/2 flex flex-row items-center gap-5 text-base font-bold hover:text-white">
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
                <div className="overflow-y-auto h-full">
                  <div className="h-8 w-full flex flex-row my-1 mb-2.5">
                    <div className="h-full w-full items-center flex justify-start px-6">
                      <a href="#" className="h-full w-8 hover:bg-zinc-800 items-center flex justify-center rounded-full">
                        <Search className="text-zinc-200 h-3/5 w-3/5"/>
                      </a> 
                    </div> 
                    <div className="h-full w-full items-center flex justify-end pr-6">
                    </div>
                  </div>
                  <div className="h-fit w-full flex flex-col px-2">
                    <div className="w-full h-16 bg-zinc-800 rounded-lg cursor-pointer p-2 flex flex-row">
                      <div className="w-12 h-full bg-black rounded-lg"></div>
                      <div className="w-[calc(100%-3rem)] h-full rounded-lg ml-2 flex flex-col">
                        <div className="w-full h-full rounded-lg items-start flex">
                          <a className="font-semibold">Musicas curtidas</a>
                        </div>
                        <div className="w-full h-full rounded-lg"></div>  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </nav>
        <section className="bg-black p-2 w-full h-full min-w-fit">
          <div className="bg-gradient-to-br from-indigo-900 via-zinc-700 to-zinc-950 h-full w-full rounded-lg min-w-[calc(28rem)]"></div>  
        </section>
      </main>
      <footer className="bg-black h-20 max-h-[calc(18%)] min-w-[calc(47rem)] min-h-[calc(4rem)]"></footer>  
    </div>
  )
}
