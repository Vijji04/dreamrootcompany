import './App.css';
import Navbar from "./Navbar.js"
import Rectangle from "./Rectangle.js"
import MainCard from "./MainCard.js"

function App() {
  return (
    <div className="flex flex-col items-center justify-between mx-auto space-y-4 p-2">
      <Navbar />
      <Rectangle />
      <MainCard />
      <button className='w-80 h-10 font-Quicksand text-xs p-2 px-2 pt-2 text-black bg-[#EDEDED] w-20 h-8 rounded-full baseline drop-shadow-lg'>Test</button>
    </div>
  );
}

export default App;
