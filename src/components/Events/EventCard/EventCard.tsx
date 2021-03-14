import { useContext } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { TEvent, TSpeaker, TEventType } from "../../../shared/EventTypes";
import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";
import { AppContext } from "../../../context/context";

interface IEventCardProps {
  event: TEvent;
  eventsMap: Map<number, string>;
}

const generateEventTypeText = (type: TEventType) => {
  switch (type) {
    case "workshop":
      return <h2 className="event-type event-card__h2--workshop">WORKSHOP</h2>;
    case "activity":
      return <h2 className="event-type event-card__h2--activity">ACTIVITY</h2>;
    case "tech_talk":
      return (
        <h2 className="event-type event-card__h2--tech_talk">TECH TALK</h2>
      );
    default:
      return <h2 className="event-type event-card__h2--default">EVENT</h2>;
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
        <img src={speaker.profile_pic} className="presenter-pfp" />
      ) : (
        <div className="presenter-pfp default-presenter-pfp">
          {speaker.name.slice(0, 1)}
        </div>
      )}
    </OverlayTrigger>
  ));

  const relatedPills = event.related_events.map((id: number) => (
    <div key={uuidv4()} className="related-pill">
      {eventsMap.get(id)}
    </div>
  ));

  return (
    <div className="event-card">
      <div className="date-col">
        <div className="cal-container">
          <span className="cal-month">
            {DateTime.fromMillis(event.start_time).monthShort.toUpperCase()}
          </span>
          <span className="cal-date">
            {DateTime.fromMillis(event.start_time).day}
          </span>
        </div>
      </div>
      <div className="details-col">
        {generateEventTypeText(event.event_type)}
        <h1 className="event-title">{event.name}</h1>
        <h3 className="event-time">
          {DateTime.fromMillis(event.start_time).toLocaleString(
            DateTime.TIME_SIMPLE
          )}
          {" - "}
          {DateTime.fromMillis(event.end_time).toLocaleString(
            DateTime.TIME_SIMPLE
          )}
        </h3>
        <p className="event-desc">{event.description}</p>
        <div className="event-bottom-row">{relatedPills}</div>
        <div className="event-bottom-row">
          <div className="presenter-container">{presenterImgs}</div>
          <div className="attend-button-container">
            <Button
              variant={event.event_type}
              className="attend-button"
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
