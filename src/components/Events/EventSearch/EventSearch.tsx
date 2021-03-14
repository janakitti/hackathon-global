interface IEventSearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const EventSearch: React.FC<IEventSearchProps> = ({
  searchValue,
  setSearchValue,
}) => {
  return (
    <div id="event-search__div--card">
      <input
        className="text-input"
        type="text"
        name="search"
        placeholder="Search events"
        value={searchValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(event.target.value)
        }
        required
      ></input>
    </div>
  );
};

export default EventSearch;
