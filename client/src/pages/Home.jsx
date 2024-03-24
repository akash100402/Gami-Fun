import smImg from '../assets/gta.png'
import mdImg from '../assets/shooter-lg.png'

export default function Home() {
  return (
    <div>
      <div
        className="bg-yellow-300 h-screen items-center justify-center flex flex-col md:bg-violet-400 md:h- md:pb-8 md:pt-4" 
      >
        <img src={smImg} alt="img" className="w-72 md:hidden" />
        <img src={mdImg} alt="img" className="w-1/3 hidden md:inline" />
        <p className="font-bold text-8xl text-center text-white">
          Explore New Games
        </p>
      </div>
      
    </div>
  );
}
