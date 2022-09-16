import "./styles/main.css";
import logoImg from "./assets/logo-nlw-esports.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateBanner } from "./components/CreateBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CreateAdModal } from "./components/CreateAdModal";
import axios from "axios";


type Game = {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games")
      .then(res => {
        setGames(res.data)
      });
  }, []);


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

        {games.map(game => {
          return (
            <GameBanner 
              key={game.id}
              bannerUrl={game.bannerUrl} 
              title={game.title} 
              adsCount={game._count.ads}
            />
          );
        })}
        
      </div>
      <Dialog.Root>
        <CreateBanner/>
        <CreateAdModal/>
      </Dialog.Root>
    </div>
  )
}

export default App;
