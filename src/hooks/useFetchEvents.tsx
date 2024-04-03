import { useState, useEffect } from 'react';

interface Event {
    eventName: string;
    cityName: string;
    date: string;
    weather: string;
    distanceKm: string;
    imgUrl: string;
}

interface ApiResponse {
    events: Event[];
}

const useFetchEvents = () => {
    const [recomendedEvents, setRecomendedEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchRecomendedEvents = async () => {
            const response = await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco");
            const data: ApiResponse = await response.json();
            setRecomendedEvents(data.events);
        };

        fetchRecomendedEvents();

    }, []);
    return recomendedEvents;
}
export default useFetchEvents;