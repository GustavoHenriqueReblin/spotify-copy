import Menu from '../app/menu'
import Main from '../app/main'
import Footer from '../app/footer'
import Responsive from './responsive'
import Loading from './loading/page'

export default function Home() {
  return (
    <div className="select-none">
      <section id="appPage" className="hidden flex-col font-bold text-zinc-400
        ssm:h-full
        md:h-screen
      ">
        <main className="
          bg-black flex flex-row h-full max-h-[calc(100%-h-24)] min-h-[calc(19.25rem)]
          ssm:min-w-[calc(320px)] 
        ">
          <Responsive></Responsive>
          <Menu></Menu> 
          <Main></Main>
        </main>
        <Footer></Footer> 
      </section>
      <Loading id={"appLoading"} display={"flex"}></Loading>
    </div>
  )
}