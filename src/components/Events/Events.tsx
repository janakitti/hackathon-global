import { useEffect, useState, useContext } from "react";
import {
  TEndpointResponse,
  TEvent,
  TEventFilters,
} from "../../shared/EventTypes";
import EventFilter from "./EventFilter/EventFilter";
import EventCard from "./EventCard/EventCard";
import { AppContext } from "../../context/context";
import { loginUser } from "../../context/actions/UserActions";

const Events = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(AppContext);
  const [events, setEvents] = useState<TEvent[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<TEventFilters>("all");
  const [eventCards, setEventCards] = useState<JSX.Element[]>();
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
    console.log(user);
    dispatch(
      loginUser({
        username: "ee",
        email: "swdef",
      })
    );
    console.log(user);
  }, []);

  useEffect(() => {
    setEventCards(
      events
        .filter(
          (event: TEvent) =>
            selectedFilter === "all" || event.event_type === selectedFilter
        )
        .map((item: TEvent) => <EventCard key={item.id} event={item} />)
    );
  }, [events, selectedFilter]);

  return (
    <div id="events-page">
      <div id="events__div--inner-container">
        <div className="events__div--event-filter-container">
          <EventFilter
            name="All Events"
            imgUrl="/all_events.svg"
            color="event-filter__div--all-events"
            setSelectedFilter={() => setSelectedFilter("all")}
          />
          <EventFilter
            name="Workshops"
            imgUrl="/workshops.svg"
            color="event-filter__div--workshops"
            setSelectedFilter={() => setSelectedFilter("workshop")}
          />
          <EventFilter
            name="Activities"
            imgUrl="/activities.svg"
            color="event-filter__div--activities"
            setSelectedFilter={() => setSelectedFilter("activity")}
          />
          <EventFilter
            name="Tech Talks"
            imgUrl="/tech_talks.svg"
            color="event-filter__div--tech-talks"
            setSelectedFilter={() => setSelectedFilter("tech_talk")}
          />
        </div>

        {eventCards}
      </div>
    </div>
  );
};

export default Events;
