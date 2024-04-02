import useFetchEvents from "./hooks/useFetchEvents";
import "./styles/background.css"
import Header from "./components/Header";
import EventCard from "./components/EventCard";


function App() {

  const [recomendedEvents, upcomingEvents] = useFetchEvents();

  return (
    <div>
      <Header />
      <div className="bg-custom-bg  text-white flex justify-center text-center  items-center flex-col  w-screen">
        <h1 className="text-5xl  py-6">Discover Exciting Events Happening <br /> Near You - Stay Tuned for Updates!</h1>
        <div className="text-[#989090] ">
          <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div>
          {
            recomendedEvents.map((event, index) => (
              <div key={index} className=" border-white h-80 w-40 ">
                <EventCard 
                  eventName={event.eventName} 
                  cityName={event.cityName}
                  date={event.date}
                  distanceKm={event.distanceKm}
                  weather={event.weather}
                  imgUrl={event.imgUrl}
      
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default App
