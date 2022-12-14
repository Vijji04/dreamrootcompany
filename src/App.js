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
    </div>
  );
}

export default App;
