interface CalendarEventType {
  eventName: string;
  eventDate: string;
}

const CalendarEvent: React.FC<CalendarEventType> = ({
  eventName,
  eventDate,
}) => {
  return (
    <div className="row-span-6 text-black rounded-lg bg-babyblue p-4">
      <p className="font-raleway"> {eventName}</p>
      <p className="font-raleway"> {eventDate}</p>
    </div>
  );
};

export default CalendarEvent;
