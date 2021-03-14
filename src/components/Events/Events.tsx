import { useEffect, useState } from "react";
import { TEndpointResponse, TEvent } from "../../shared/EventTypes";
import EventFilter from "./EventFilter/EventFilter";
import EventCard from "./EventCard/EventCard";

const Events = () => {
  const [events, setEvents] = useState<TEvent[]>([]);
  useEffect(() => {
    fetch(
      "https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }"
    )
      .then((res) => res.json())
      .then((data: TEndpointResponse) =>
        setEvents(
          data.data.events.sort((a: TEvent, b: TEvent) =>
            a.start_time > b.start_time ? 1 : -1
          )
        )
      );
  }, []);

  const eventCards = events.map((item: TEvent) => (
    <EventCard key={item.id} event={item} />
  ));

  return (
    <div id="events-page">
      <div id="events__div--inner-container">
        <div className="events__div--event-filter-container">
          <EventFilter
            name="All Events"
            imgUrl="/all_events.svg"
            color="event-filter__div--all-events"
          />
          <EventFilter
            name="Workshops"
            imgUrl="/workshops.svg"
            color="event-filter__div--workshops"
          />
          <EventFilter
            name="Activities"
            imgUrl="/activities.svg"
            color="event-filter__div--activities"
          />
          <EventFilter
            name="Tech Talks"
            imgUrl="/tech_talks.svg"
            color="event-filter__div--tech-talks"
          />
        </div>

        {eventCards}
      </div>
    </div>
  );
};

export default Events;
