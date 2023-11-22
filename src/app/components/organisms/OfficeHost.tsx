import LisaÖrtlund from '../../../../public/image/lisa.svg';
import Image from 'next/image';

const OfficeHost: any = () => {
  const firstSelectedOfficeHost = 'Lisa Örtlund';
  const secondSelectedOfficeHost = 'Lisa Örtlund';
  const officeHosts = `${firstSelectedOfficeHost} and ${secondSelectedOfficeHost}`;
  const theme = 'chips';

  return (
    <div className="w-1/3 space-y-6 border-2 border-rose-500">
      <div className="flex flex-col text-center">
        <span className="font-bold">Office Hosts:</span>
        <span className="">{officeHosts}</span>
      </div>
      <div className="flex justify-center h-32">
        <div className="flex w-1/2">
          <Image
            src={LisaÖrtlund}
            alt="illustration of an employee at Talkative"
          />
          <Image
            src={LisaÖrtlund}
            alt="illustration of an employee at Talkative"
          />
        </div>
      </div>
      <div className="flex flex-col text-center">
        <span className="font-bold">Theme: </span>
        <span className="">{theme}</span>
      </div>
    </div>
  );
};

export default OfficeHost;
