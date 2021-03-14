interface IEventFilterProps {
  name: string;
  imgUrl: string;
  color: string;
}

const EventFilter: React.FC<IEventFilterProps> = ({ name, imgUrl, color }) => {
  return (
    <div
      className="event-filter__div--filter-card"
      style={{
        backgroundImage: `url("` + imgUrl + `")`,
      }}
    >
      <div className={`event-filter__div--filter-card-color ${color}`}>
        {name}
      </div>
    </div>
  );
};

export default EventFilter;
