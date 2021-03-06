import { useContext } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {
  TEvent,
  TSpeaker,
  TEventType,
  TRelatedEventLink,
} from "../../../shared/EventTypes";
import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";
import { AppContext } from "../../../context/context";

interface IEventCardProps {
  event: TEvent;
  eventsMap: Map<number, TRelatedEventLink>;
}

const generateEventTypeText = (type: TEventType) => {
  switch (type) {
    case "workshop":
      return (
        <h2 className="event-card__event-type event-card__h2--workshop">
          WORKSHOP
        </h2>
      );
    case "activity":
      return (
        <h2 className="event-card__event-type event-card__h2--activity">
          ACTIVITY
        </h2>
      );
    case "tech_talk":
      return (
        <h2 className="event-card__event-type event-card__h2--tech_talk">
          TECH TALK
        </h2>
      );
    default:
      return (
        <h2 className="event-card__event-type event-card__h2--default">
          EVENT
        </h2>
      );
  }
};

const EventCard: React.FC<IEventCardProps> = ({ event, eventsMap }) => {
  const {
    state: { user },
  } = useContext(AppContext);
  const presenterImgs = event.speakers.map((speaker: TSpeaker) => (
    <OverlayTrigger
      key={uuidv4()}
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      transition={false}
      overlay={
        <Tooltip id="id" placement="top">
          {speaker.name}
        </Tooltip>
      }
    >
      {speaker.profile_pic ? (
        <img
          src={speaker.profile_pic}
          alt="speaker profile"
          className="event-card__presenter-pfp"
        />
      ) : (
        <div
          className={`event-card__presenter-pfp event-card__default-presenter-pfp event-card__pfp-color-${event.event_type}`}
        >
          {speaker.name.slice(0, 1)}
        </div>
      )}
    </OverlayTrigger>
  ));

  const relatedPills = event.related_events.map((id: number) => {
    if (eventsMap.get(id)?.url) {
      return (
        <a href={eventsMap.get(id)?.url} target="_blank" key={uuidv4()}>
          <div
            className={`event-card__related-pill event-card__related-pill--active event-card__related-pill--${event.event_type}`}
          >
            {eventsMap.get(id)?.name}
          </div>
        </a>
      );
    } else {
      return (
        <div key={uuidv4()} className="event-card__related-pill">
          {eventsMap.get(id)?.name}
        </div>
      );
    }
  });

  return (
    <div className="event-card__card">
      <div className="event-card__date-col">
        <div className="event-card__cal-container">
          <span className="event-card__cal-month">
            {DateTime.fromMillis(event.start_time).monthShort.toUpperCase()}
          </span>
          <span className="event-card__cal-date">
            {DateTime.fromMillis(event.start_time).day}
          </span>
        </div>
      </div>
      <div className="event-card__details-col">
        {generateEventTypeText(event.event_type)}
        <h1 className="event-card__title">{event.name}</h1>
        <h3 className="event-card__time">
          {DateTime.fromMillis(event.start_time).toLocaleString(
            DateTime.TIME_SIMPLE
          )}
          {" - "}
          {DateTime.fromMillis(event.end_time).toLocaleString(
            DateTime.TIME_SIMPLE
          )}
        </h3>
        <p className="event-card__desc">{event.description}</p>
        <p className="event-card__related">Related events</p>
        <div className="event-card__bottom-row">{relatedPills}</div>
        <div className="event-card__bottom-row">
          <div className="presenter-container">{presenterImgs}</div>
          <div className="event-card__attend-button-container">
            <Button
              variant={event.event_type}
              className="event-card__attend-button"
              href={
                user.type === "public" ? event.public_url : event.private_url
              }
              target="_blank"
            >
              Attend
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
