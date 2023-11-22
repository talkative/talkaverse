interface CalendarEventType {
  title?: string;
  date?: string;
}

const CalendarEvent: React.FC<CalendarEventType> = ({ title, date }) => {
  return (
    <div className="mt-4 text-black rounded-lg bg-almostwhite h-full p-4 flex flex-row">
      <p className="font-raleway"> {date}</p>
      <p className="font-raleway"> {title}</p>
    </div>
  );
};

export default CalendarEvent;
