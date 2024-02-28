'use client';
import events from '@/app/configs/events';
import CalendarEvent from '../molecules/CalenderEvent';

import { useGetCalendarEvents } from '@/hooks/useCalendar';

const Calendar: any = () => {
  const { data, status } = useGetCalendarEvents();

  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-col overflow-hidden justify-between h-full">
      {data &&
        data.data.slice(0, 3).map((data, index) => (
          <>
            <div className="h-200">
              <CalendarEvent title={data.summary} data={data} />
            </div>
          </>
        ))}
    </div>
  );
};

export default Calendar;
