import {Home as HomeIcon, Library, Search, Heart} from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen bg-black text-zinc-300 font-bold flex flex-col">
      <main className="h-full flex flex-row">
        <nav className="bg-black w-[calc(30rem)] py-2 pl-2 max-w-[calc(30%)] h-full min-h-[calc(32rem-96rem)] max-h-full">
          <nav className="w-full h-28 bg-zinc-900 rounded-lg"></nav>
          <nav className="w-full h-[calc(100%-7.5rem)] mt-2 bg-zinc-900 rounded-lg"></nav>
        </nav>
        <section className="bg-black p-2 w-full h-full">
          <div className="bg-gradient-to-br from-indigo-900 via-zinc-700 to-zinc-950 h-full w-full rounded-lg"></div>  
        </section>
      </main>
      <footer className="bg-black h-24 max-h-[calc(18%)]"></footer>  
    </div>
  )
}
