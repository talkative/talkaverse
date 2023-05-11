const Calendar: any = () => {
  return (
    <div>
      <p className="border-2 border-rose-500 text-black">Calendar</p>
      <div className="bg-slate-50 grid grid-cols-3 gap-4  bg-black ">
        <div className="border-2 border-rose-500 row-span-6">
          Kul grejer i veckan{' '}
        </div>
        <div className="border-2 border-rose-500 row-span-6">Händer idag</div>
        <div className="border-2 border-rose-500 row-span-6">
          <p> Imorgon</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
