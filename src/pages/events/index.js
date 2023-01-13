import { useRouter } from "next/router";
import { getAllEvents } from "../../utils/constants/dummy-data";
import EventList from "../../utils/components/events/EventList";
import EventsSearch from "../../utils/components/events/EventsSearch";

const EventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();

  const onSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={onSearch} />
      <EventList items={allEvents} />
    </div>
  );
};

export default EventsPage;
