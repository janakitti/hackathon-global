// Each event will belong to one of the following types
export type TEventType = "workshop" | "activity" | "tech_talk";

// "all" type used for resetting filters
export type TEventFilters = "all" | TEventType;

// For displaying filter options with a user-friendly name
export type TEventFilterDisplay = {
  name: string;
  value: TEventFilters;
};

export type TPermission = "public" | "private";

export type TSpeaker = {
  name: string;
  profile_pic?: string; // a url to an image
};

// The information for an event will look like so
export type TEvent = {
  id: number;
  name: string;
  event_type: TEventType;
  permission?: TPermission;

  start_time: number; // unix timestamp (ms)
  end_time: number; // unix timestamp (ms)

  description?: string; // a paragraph describing the event
  speakers: TSpeaker[]; // a list of speakers for the event

  public_url?: string; // a url to display for the general public
  private_url: string; // a url to display for hackers
  related_events: number[]; // a list ids corresponding to related events
};

// What the endpoint will return
export type TEndpointResponse = {
  data: {
    events: TEvent[];
  };
};
