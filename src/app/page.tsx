import {Home as HomeIcon, Library, Search, Heart} from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col text-zinc-300 bg-zinc-950 font-bold">
      <div className="flex flex-1">
        <div className="flex flex-col select-none">
          <div className="bg-zinc-950 px-6 pt-8 w-72">
            <nav className='space-y-4'>
              <a href="#" className='flex items-center gap-2 text-sm font-semibold'>
                <HomeIcon className='mr-1 w-7'/>
                Início
              </a>
              <a href="#" className='flex items-center gap-2 text-sm font-semibold'>
                <Search className='mr-1 w-7'/>
                Buscar
              </a>
              <a href="#" className='flex items-center gap-2 text-sm font-semibold'>
                <Library className='mr-1 w-7'/>
                Sua Biblioteca
              </a>
            </nav>

            <div className='my-2 text-zinc-950'>.</div>
          
            <nav className='space-y-4 mb-4'>
              <a href="#" className='flex items-center gap-2 text-sm font-semibold'>
                <div className='bg-zinc-300 mr-2 rounded-sm w-6 h-6 text-zinc-950 text-lg font-semibold flex items-center justify-center'>+</div>
                Criar Playlist
              </a>
              <a href="#" className='flex items-center gap-2 text-sm font-semibold'>
                <Heart className='bg-gradient-to-br from-violet-900 to-indigo-300 mr-2 p-1 rounded-sm w-6'/>
                Músicas Curtidas
              </a>
            </nav>
          </div>
          <div className='border-b mx-6 border-zinc-700'/>

          <div className="pt-2 h-full ml-6 max-w-xs overflow-y-auto">
            <a className="text-sm font-medium text-zinc-400 my-1.5 h-full flex flex-col" href='#'>Rádio de Não Para</a>
          </div>
        </div>
        <div className="bg-zinc-900 w-full p-4">
          Main
        </div>
      </div>
      <footer className="bg-zinc-800 border-t flex-0 border-zinc-700 p-8 select-none">
        Footer
      </footer>
    </div>
  )
}
