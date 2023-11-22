import events from '@/app/configs/events';
import CalendarEvent from '../molecules/CalenderEvent';

console.log('events', events);

const Calendar: any = () => {
  return (
    <div className="h-full">
      {events.map((event, index) => (
        <>
          <div className="h-1/3">
            <CalendarEvent date={event.date} title={event.title} />
          </div>
        </>
      ))}
    </div>
  );
};

export default Calendar;
