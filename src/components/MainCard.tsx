import useUpcomingEvevnt from "../hooks/useUpcomingEvents"
import EventCard from "./EventCard";

type eventProps = {
    eventName: string;
    cityName: string;
    date: string;
    weather: string;
    distanceKm: string;
    imgUrl: string;
};

const MainCard = () => {
    const upcomingEvents = useUpcomingEvevnt();
    return (
        <>
            <h1 className="text-xl font-semibold text-[] m-8">Upcoming Events : </h1>
            <div className="flex flex-wrap justify-center items-center">
                {upcomingEvents.map((event1: eventProps, index) => (
                    <div className="p-1  ">
                        <EventCard  key={index} 
                            cityName={event1.cityName}
                            eventName={event1.eventName}
                            date={event1.date}
                            imgUrl={event1.imgUrl}
                            weather={event1.weather}
                            distanceKm={event1.distanceKm}
                        />
                    </div>
                ))}
            </div>
        </>
        
    )
}

export default MainCard;