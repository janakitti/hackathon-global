import { useEffect, useState } from "react";
import { TEndpointResponse, TEvent } from "../../shared/EventTypes";
import EventCard from "./EventCard/EventCard";

const Events = () => {
  const [events, setEvents] = useState<TEvent[]>([]);
  useEffect(() => {
    fetch(
      "https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }"
    )
      .then((res) => res.json())
      .then((data: TEndpointResponse) => setEvents(data.data.events));
  }, []);

  const eventCards = events.map((item: TEvent) => <EventCard event={item} />);

  return <div id="events-page">{eventCards}</div>;
};

export default Events;
