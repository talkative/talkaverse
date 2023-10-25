import events from '@/app/configs/events';
import { faCalendar, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CalendarEvent from '../Molecules/CalendarEvent';

const test = 'marias';

const Calendar: any = () => {
  return (
    <div>
      <CalendarEvent eventName={events[0].summary} eventDate={''} />
      <CalendarEvent eventName={'Marias födelsedag'} eventDate={'23-07-23'} />
      <CalendarEvent eventName={'Marias födelsedag'} eventDate={'23-07-23'} />
    </div>
  );
};
export default Calendar;
