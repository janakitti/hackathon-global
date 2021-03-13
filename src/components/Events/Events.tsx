import { useEffect } from "react";
import { TEndpointResponse } from "../../shared/EventTypes";
import EventCard from "./EventCard/EventCard";

const Events = () => {
  useEffect(() => {
    fetch(
      "https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }"
    )
      .then((res) => res.json())
      .then((data: TEndpointResponse) => console.log(data.data.events));
  }, []);

  return <EventCard />;
};

export default Events;
