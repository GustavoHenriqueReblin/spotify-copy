import Menu from '../app/menu'
import Main from '../app/main'
import Footer from '../app/footer'
import Responsive from './responsive'

export default function Home() {
  return (
    <div className="
      flex flex-col font-bold select-none text-zinc-400
      ssm:h-full
      md:h-screen
    ">
      <main className="
        bg-black flex flex-row h-full max-h-[calc(100%-h-24)] min-h-[calc(19.25rem)]
        ssm:min-w-[calc(320px)] 
      ">
        {/* smLayout && < */}
        <Responsive></Responsive>

        {/* mdLayout && > */}
        <Menu></Menu> 
        <Main></Main>
      </main>
      <Footer></Footer> 
    </div>
  )
}