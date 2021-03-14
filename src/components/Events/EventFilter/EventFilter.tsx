interface IEventFilterProps {
  name: string;
  imgUrl: string;
}

const EventFilter: React.FC<IEventFilterProps> = ({ name, imgUrl }) => {
  return (
    <div
      className="event-filter__div--filter-card"
      style={{
        backgroundImage: `url("` + imgUrl + `")`,
      }}
    >
      {name}
    </div>
  );
};

export default EventFilter;
