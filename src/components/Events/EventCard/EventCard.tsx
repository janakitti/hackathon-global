import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { TEvent, TSpeaker } from "../../../shared/EventTypes";
import { v4 as uuidv4 } from "uuid";

interface IEventCardProps {
  event: TEvent;
}

const EventCard: React.FC<IEventCardProps> = ({ event }) => {
  const related = ["Related 1", "Related 2"];

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

  const relatedPills = related.map((name: string) => (
    <div key={uuidv4()} className="related-pill">
      {name}
    </div>
  ));

  return (
    <div className="event-card">
      <div className="date-col">
        <div className="cal-container">
          <span className="cal-month">JAN</span>
          <span className="cal-date">12</span>
        </div>
      </div>
      <div className="details-col">
        <h2 className="event-type">EVENT TYPE</h2>
        <h1 className="event-title">{event.name}</h1>
        <h3 className="event-time">8:00am - 8:30pm</h3>
        <p className="event-desc">{event.description}</p>
        <div className="event-bottom-row">{relatedPills}</div>
        <div className="event-bottom-row">
          <div className="presenter-container">{presenterImgs}</div>
          <div className="attend-button-container">
            <Button variant="primary" className="attend-button">
              Attend
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
