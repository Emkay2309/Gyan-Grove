interface Event {
    eventName: string;
    cityName: string;
    date: string;
    weather: string;
    distanceKm: string;
    imgUrl: string;
}

const EventCard = ( event : Event) => {
    return (
        <div className="h-80 w-50 border-[#B0BABF] border-2 p-2 m-2">
            <img src={event.imgUrl} className="h-40 w-40 rounded-lg mb-2"></img>
            <h3 className="font-semibold text-lg">{event.eventName}</h3>


        </div>
    )
}
export default EventCard;