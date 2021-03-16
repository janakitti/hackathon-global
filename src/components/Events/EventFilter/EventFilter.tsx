interface IEventFilterProps {
  name: string;
  imgUrl: string;
  color: string;
  isSelected: boolean;
  setSelectedFilter: () => void;
}

const EventFilter: React.FC<IEventFilterProps> = ({
  name,
  imgUrl,
  color,
  isSelected,
  setSelectedFilter,
}) => {
  return (
    <div
      className="event-filter__card"
      style={{
        backgroundImage: `url("` + imgUrl + `")`,
        width: `${isSelected ? "15em" : "10em"}`,
      }}
      onClick={setSelectedFilter}
    >
      <div className={`event-filter__card-color ${color}`}>
        {name}
      </div>
    </div>
  );
};

export default EventFilter;
