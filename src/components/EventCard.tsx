interface Event {
  eventName: string;
  cityName: string;
  date: string;
  weather: string;
  distanceKm: string;
  imgUrl: string;
}

const EventCard = (event: Event) => {
  const dateFormatter = () => {
    const x = new Date(event.date);
    return x.toDateString();
  };
  return (
    <div className="relative p-2 m-2 h-full w-[320px]">
      <img
        src={`https://drive.google.com/thumbnail?id=${event.imgUrl.slice(
          32,
          65
        )}`}
        className="w-[100px] sm:w-[300px] object-cover bg-no-repeat bg-cover "
      />
      <div className="flex justify-between py-[-20px] absolute bottom-8 text-[#989090]  ml-3 mr-4">
        <div className="flex flex-wrap mx-1 px-1">
          <h3 className="font-semibold text-sm">{event.eventName}</h3>
          <p className="text-xs">{event.cityName}</p>
        </div>
        <div className="flex flex-wrap content-center">
          <p className="text-xs">{dateFormatter()}</p>
          <p className="text-xs">
            {event.weather} | {Math.floor(parseInt(event.distanceKm) / 100)}{" "}
            km
          </p>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
