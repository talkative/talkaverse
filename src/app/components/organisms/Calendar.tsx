import CalendarEvent from '../molecules/CalenderEvent';

const Calendar: any = () => {
  return (
    <div>
      <CalendarEvent eventDate="07-12-23" eventName="Åt en kaka" />
      <CalendarEvent eventDate="07-12-23" eventName="Åt en kaka" />
      <CalendarEvent eventDate="07-12-23" eventName="Åt en kaka" />
      <CalendarEvent eventDate="07-12-23" eventName="Åt en kaka" />
    </div>
  );
};

export default Calendar;
