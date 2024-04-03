import "./styles/background.css"
import Header from "./components/Header";
import HomeText from "./components/HomeText";
import MainCard from "./components/MainCard";
import CarousalCard from "./components/CarousalCard";
import Types from "./components/Types";


function App() {

  return (
    <div>
      <Header />
      <Types />
      <div className="bg-custom-bg   text-white flex justify-center text-center  items-center flex-col  w-screen">
        <HomeText />
      </div>
      <CarousalCard />
      <div className="mt-[500px]">
        <MainCard  />
      </div>
    </div>

  )
}

export default App
