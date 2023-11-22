interface CalendarEventType {
  title?: string;
  date?: string;
}

const CalendarEvent: React.FC<CalendarEventType> = ({ title, date }) => {
  return (
    <div className="row-span-6 mt-4 text-black flex flex-row rounded-lg p-4 h-full border-2 flex">
      <p className="">{date}</p>
      <p className="">{title}</p>
    </div>
  );
};

export default CalendarEvent;
