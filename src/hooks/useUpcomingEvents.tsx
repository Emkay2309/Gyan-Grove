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

const useUpcomingEvent = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchUpcomingEvents = async () => {
            const response = await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming");
            const data: ApiResponse = await response.json();
            setEvents(data.events);
        }
        fetchUpcomingEvents();
    });
    return events;
}
export default useUpcomingEvent;