import { TEventFilters } from "../../../shared/EventTypes";

interface IEventFilterProps {
  name: string;
  imgUrl: string;
  color: string;
  setSelectedFilter: () => void;
}

const EventFilter: React.FC<IEventFilterProps> = ({
  name,
  imgUrl,
  color,
  setSelectedFilter,
}) => {
  return (
    <div
      className="event-filter__div--filter-card"
      style={{
        backgroundImage: `url("` + imgUrl + `")`,
      }}
      onClick={setSelectedFilter}
    >
      <div className={`event-filter__div--filter-card-color ${color}`}>
        {name}
      </div>
    </div>
  );
};

export default EventFilter;
