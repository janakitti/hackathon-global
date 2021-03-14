import { useEffect, useState, useContext } from "react";
import {
  TEndpointResponse,
  TEvent,
  TEventFilters,
} from "../../shared/EventTypes";
import EventSearch from "./EventSearch/EventSearch";
import EventFilter from "./EventFilter/EventFilter";
import EventCard from "./EventCard/EventCard";
import { AppContext } from "../../context/context";

const Events = () => {
  const {
    state: { user },
  } = useContext(AppContext);
  const [events, setEvents] = useState<TEvent[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<TEventFilters>("all");
  const [eventCards, setEventCards] = useState<JSX.Element[]>();
  const [searchValue, setSearchValue] = useState("");
  const [eventsMap, setEventsMap] = useState<Map<number, string>>(new Map());
  useEffect(() => {
    fetch(
      "https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }"
    )
      .then((res) => res.json())
      .then((data: TEndpointResponse) => {
        data.data.events.forEach((event: TEvent) =>
          setEventsMap((prevState: Map<number, string>) => {
            prevState.set(event.id, event.name);
            return prevState;
          })
        );
        setEvents(
          data.data.events
            .filter(
              (event: TEvent) =>
                (user.type === "public" && event.permission === "public") ||
                user.type !== "public"
            )
            .sort((a: TEvent, b: TEvent) =>
              a.start_time > b.start_time ? 1 : -1
            )
        );
      });
  }, []);

  useEffect(() => {
    setEventCards(
      events
        .filter(
          (event: TEvent) =>
            selectedFilter === "all" || event.event_type === selectedFilter
        )
        .filter(
          (event: TEvent) =>
            event.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            event.description?.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((item: TEvent) => (
          <EventCard key={item.id} event={item} eventsMap={eventsMap} />
        ))
    );
  }, [events, selectedFilter, searchValue]);

  return (
    <div id="events-page">
      <div id="events__div--inner-container">
        <EventSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
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
