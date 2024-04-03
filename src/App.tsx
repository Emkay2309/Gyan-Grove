import "./styles/background.css"
import Header from "./components/Header";
import HomeText from "./components/HomeText";
import MainCard from "./components/MainCard";
import CarousalCard from "./components/CarousalCard";


function App() {

  return (
    <div>
      <Header />
      <div className="bg-custom-bg   text-white flex justify-center text-center  items-center flex-col  w-screen">
        <HomeText />
      </div>
      <CarousalCard />
      <MainCard />
    </div>

  )
}

export default App
