import Expirience from "./component/Expirience";
import Hero from "./component/Hero";
import About from "./component/about";
import Top10 from "./component/top10";


export default function Home() {
  return (
  <div className="bg-slate-900 text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-slate-900/20 scrollbar-thumb-sky-300/30
  ">
    <section id = "hero" className="snap-start">
      <Hero />
    </section>
    
    <section id = "about" className="snap-start">
      <About />
    </section>

    <section id = "Expirience" className="snap-start">
      <Expirience />
    </section>

    <section id = "Top10" className="snap-start">
      <Top10 />
    </section>

  </div>
  )
}
