import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const EventCard = () => {
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
        <h1 className="event-title">Event Title</h1>
        <h3 className="event-time">8:00am - 8:30pm</h3>
        <p className="event-desc">
          A Nanoleaf Shapes Mini Triangle Smarter Kit will be awarded to each
          member of the winning team for Best Use of Vonage API. Vonage is a
          cloud communications platform that allows developers to integrate
          voice, video and messaging into their applications using their
          communication APIs. So whether you want to build video calls into your
          app, create a Facebook bot, or build applications on top of
          programmable phone numbers, Vonage has got you covered
        </p>
        <div className="presenter-container"></div>
        <Button variant="primary" className="attend-button">
          Primary
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
