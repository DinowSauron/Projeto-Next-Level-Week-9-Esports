import "./styles/main.css";
import logoImg from "./assets/logo-nlw-esports.svg";
import {MagnifyingGlassPlus} from "phosphor-react"

function App() {

  return (
    <div className="
      max-w-[1344px]
      mx-auto 
      flex 
      flex-col
      items-center
      m-20
    ">
      <img src={logoImg} alt="" />

      <h1 className="
        text-6xl
        mt-20
        text-white
        font-black
      ">
        Seu <span className="
          text-transparent 
          transparent 
          bg-nlw-gradient 
          bg-clip-text
        ">
          duo
        </span> está aqui.
      </h1>


      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">League Of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 2.png" alt="" />
          
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">Dota</strong>
            <span className="text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 3.png" alt="" />
          
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">CSGO</strong>
            <span className="text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 4.png" alt="" />
          
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">APEX</strong>
            <span className="text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 5.png" alt="" />
          
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">FORTNITE</strong>
            <span className="text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 6.png" alt="" />
          
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">WORLD OF Warcraft</strong>
            <span className="text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between align-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
        
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size="24"/> Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
