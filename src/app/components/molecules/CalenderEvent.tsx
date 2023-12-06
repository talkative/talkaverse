interface CalendarEventType {
  title?: string;
  date?: string;
  time?: number;
}

const CalendarEvent: React.FC<CalendarEventType> = ({ title, date, time }) => {
  console.log(title, date);

  return (
    <div className=" mx-2 text-black p-4 space-x-6 space-y-4 rounded-lg bg-almostwhite h-full p-4 flex flex-row">
      <div className="flex w-1/3 mr-2">
        <p className="font-raleway mt-4 text-5xl font-bold"> {`${date}`} </p>
      </div>
      <div className="text-xl ">
        <p className="font-raleway font-bold "> {`  ${title} `} </p>
        {time && <p>{time}</p>}
      </div>
    </div>
  );
};

export default CalendarEvent;
