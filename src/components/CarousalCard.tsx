

import useFetchEvents from "../hooks/useFetchEvents";
import EventCard from "./EventCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

type eventProps = {
    eventName: string;
    cityName: string;
    date: string;
    weather: string;
    distanceKm: string;
    imgUrl: string;
};

const CarousalCard = () => {
    const recomendedEvents = useFetchEvents();

    return (
        <div className="absolute sm:ml-[18%] ml-[12%]">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-screen-lg sm:min-w-full"
            >
                <CarouselContent>
                    {recomendedEvents.map((event1: eventProps, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <EventCard
                                    cityName={event1.cityName}
                                    eventName={event1.eventName}
                                    date={event1.date}
                                    imgUrl={event1.imgUrl}
                                    weather={event1.weather}
                                    distanceKm={event1.distanceKm}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}

export default CarousalCard


