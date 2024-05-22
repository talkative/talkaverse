//If event is one day or more data.start.date  and data.end.date

import { useState } from 'react';

//if event is less than one day data.start.dateTime and data.end.dateTime

interface CalendarEventType {
  title?: string;
  date?: string;
  time?: number;
  data: any;
}

const CalendarEvent: React.FC<CalendarEventType> = ({
  title,
  date,
  time,
  data,
}) => {
  const eventTimestampStart = data.start.dateTime;
  const eventTimestampEnd = data.end.dateTime;
  const eventStart = new Date(eventTimestampStart);

  function formatDateTimeRange(startDateTime, endDateTime) {
    const getDayInSwedish = (dateTime) => {
      const date = new Date(dateTime);
      return date.toLocaleDateString('sv-SE', { weekday: 'long' });
    };

    const getHours = (dateTime) => {
      const date = new Date(dateTime);
      return date.getHours().toString().padStart(2, '0');
    };

    const getMinutes = (dateTime) => {
      const date = new Date(dateTime);
      return date.getMinutes().toString().padStart(2, '0');
    };

    const startDay = getDayInSwedish(startDateTime);
    const startHours = getHours(startDateTime);
    const startMinutes = getMinutes(startDateTime);

    const endHours = getHours(endDateTime);
    const endMinutes = getMinutes(endDateTime);

    return (
      <>
        <p>{`${startDay} ${startHours}.${startMinutes}`}</p>
        <>
          -
          <div className="flex flex-row text-red-400">
            <p>{`${endHours}:${endMinutes}`}</p>
          </div>
        </>
      </>
    );
  }

  return (
    <div className="p-4 text-yellow-500 bg-blue-900 border-2 rounded-2xl font-raleway">
      <div className="text-2xl"></div>
      <div className="text-xl">
        <p className="font-bold font-raleway "> {`  ${data.summary} `} </p>
        <div className="flex flex-row">
          {data.start.dateTime && (
            <>
              <>
                {formatDateTimeRange(data.start.dateTime, data.end.dateTime)}
                {/*       
                <p>{` ${getDay(data.start.dateTime)} ${getHours(
                  data.start.dateTime
                )}.0${getMinutes(data.start.dateTime)} `}</p>
              </>
              <>
                -
                <div className="flex flex-row text-red-400">
                  <p>{getHours(data.end.dateTime)}:</p>
                  <p> {getMinutes(data.end.dateTime)}</p>
                </div> */}
              </>
            </>
          )}
        </div>
        {data.start.date && (
          <>
            <p>{data.start.date}</p>{' '}
            <p className="text-xs">Pågår till {data.end.date}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CalendarEvent;
