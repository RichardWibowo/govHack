import Expirience from "./component/Expirience";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Skill from "./component/Skill";
import About from "./component/about";
import Project from "./component/project";

export default function Home() {
  return (
  <div className="bg-slate-900 text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-slate-900/20 scrollbar-thumb-sky-300/30
  ">
    <section id = "hero" className="snap-start">
      <Hero />
    </section>
    
    <section id = "about" className="snap-center">
      <About />
    </section>

    <section id = "Expirience" className="snap-start">
      <Expirience />
    </section>

  </div>
  )
}
