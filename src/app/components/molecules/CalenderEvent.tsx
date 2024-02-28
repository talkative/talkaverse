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
  console.log('hajjj', data);

  const eventTimestampStart = data.start.dateTime;
  const eventTimestampEnd = data.end.dateTime;
  const eventStart = new Date(eventTimestampStart);
  const eventEnd = new Date(eventTimestampEnd);

  function getHours(event: string) {
    const hours = new Date(event).getHours();
    return hours;
  }

  function getMinutes(event: string) {
    const minutes = new Date(event).getMinutes();
    return minutes;
  }
  function getDate(parsedTimeStamp: string) {
    const date = eventStart.getMinutes();
    return date;
  }

  function getDay(parsedTimeStamp: string) {
    const day = eventStart.getDay();
    const dayNames = [
      'Söndag',
      'Måndag',
      'Tisdag',
      'Onsdag',
      'Torsdag',
      'Fredag',
      'Lördag',
    ];
    return dayNames[day];
  }

  console.log('data.end.dateTime', getHours(data.end.dateTime));

  return (
    <div className="p-4 text-yellow-500 bg-blue-900 border-2 rounded-2xl font-raleway">
      <div className="text-2xl">
        {eventStart && (
          <>
            <p>{`${eventStart.getDate()} / ${eventStart.getMonth() + 1}`}</p>
          </>
        )}
      </div>
      <div className="text-xl">
        <p className="font-bold font-raleway "> {`  ${data.summary} `} </p>
        {data.start.dateTime && (
          <>
            <div className="flex flex-row">
              <p>{getHours(data.start.dateTime)}:</p>
              <p> {getMinutes(data.start.dateTime)}0</p>
            </div>
          </>
        )}
        {data.end.dateTime && (
          <>
            <div className="flex flex-row text-red-400">
              <p>{getHours(data.end.dateTime)}:</p>
              <p> {getMinutes(data.end.dateTime)}0</p>
            </div>
            <div>
              <p>{getDay(data.end.dateTime)}</p>
            </div>
          </>
        )}

        {data.start.date && <p>{data.start.date}</p>}
        {data.start.date && <p>{getDate(data.start.dateTime)}</p>}
      </div>
    </div>
  );
};

export default CalendarEvent;
