import { useEffect, useState, useContext } from "react";
import {
  TEndpointResponse,
  TEvent,
  TEventFilterDisplay,
  TEventFilters,
} from "../../shared/EventTypes";
import EventSearch from "./EventSearch/EventSearch";
import EventFilter from "./EventFilter/EventFilter";
import EventCard from "./EventCard/EventCard";
import Spinner from "react-bootstrap/Spinner";
import { AppContext } from "../../context/context";
import { EVENTS_ENDPOINT } from "../../config.json";

const Events = () => {
  const {
    state: { user },
  } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<TEventFilters>("all");
  const [events, setEvents] = useState<TEvent[]>([]); // Raw events data
  const [eventCards, setEventCards] = useState<JSX.Element[]>([]); // EventCard components to display
  const [eventsMap, setEventsMap] = useState<Map<number, string>>(new Map()); // Maps TEvent.id to TEvent.name
  const [isLoading, setIsLoading] = useState(false);

  // Assign user-friendly names to the event types
  const filterValues: TEventFilterDisplay[] = [
    { name: "All Events", value: "all" },
    { name: "Workshops", value: "workshop" },
    { name: "Activities", value: "activity" },
    { name: "Tech Talks", value: "tech_talk" },
  ];

  // Fetch events data
  useEffect(() => {
    setIsLoading(true);
    fetch(EVENTS_ENDPOINT, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data: TEndpointResponse) => {
        // Create mapping to be used for displaying related events
        data.data.events.forEach((event: TEvent) =>
          setEventsMap((prevState: Map<number, string>) => {
            prevState.set(event.id, event.name);
            return prevState;
          })
        );

        // Apply permission filters and sort by start_time
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
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [user.type]);

  // Update displayed events, filtering by event type, then search value
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
  }, [events, selectedFilter, searchValue, eventsMap]);

  const filters = filterValues.map((filter: TEventFilterDisplay) => (
    <EventFilter
      name={filter.name}
      imgUrl={`./${filter.value}.svg`}
      color={`event-filter__div--${filter.value}`}
      isSelected={selectedFilter === filter.value}
      setSelectedFilter={() => setSelectedFilter(filter.value)}
    />
  ));

  return (
    <div className="dashboard__div--page">
      <div className="dashboard__div--inner-container">
        <EventSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="events__filter-container">{filters}</div>
        {isLoading ? (
          <div className="events__container ">
            <Spinner animation="border" role="status" variant="primary">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <>
            {eventCards.length > 0 ? (
              eventCards
            ) : (
              <div className="events__container">
                <img
                  src="./empty.svg"
                  alt="no events"
                  height={300}
                  width={300}
                />
                <br />
                <span>No events found</span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
