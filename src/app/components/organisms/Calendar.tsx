import events from '@/app/configs/events';
import CalendarEvent from '../molecules/CalenderEvent';

console.log('events', events);

const Calendar: any = () => {
  console.log(events);

  return (
    <div className="h-full flex flex-col justify-between">
      {events.map((event, index) => (
        <>
          <div className="h-200">
            <CalendarEvent
              date={event.date}
              title={event.title}
              time={'kl 17.00'}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default Calendar;
