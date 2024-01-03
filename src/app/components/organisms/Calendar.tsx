'use client';
import events from '@/app/configs/events';
import CalendarEvent from '../molecules/CalenderEvent';

import { useGetCalendarEvents } from '@/hooks/useCalendar';

console.log('events', events);

const Calendar: any = () => {
  console.log(events);

  const { data, status } = useGetCalendarEvents();

  console.log({ data, status });

  return (
    <div className="flex flex-col justify-between h-full">
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
