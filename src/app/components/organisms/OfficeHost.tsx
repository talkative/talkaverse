import LisaÖrtlund from '../../../../public/image/lisa.svg';
import Image from 'next/image';

const OfficeHost: any = () => {
  const firstSelectedOfficeHost = 'Lisa Örtlund';
  const secondSelectedOfficeHost = 'Lisa Örtlund';
  const theme = 'chips';

  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-col text-end">
        <span className="text-2xl font-bold">Office Hosts</span>
        <span>{`${firstSelectedOfficeHost} & ${secondSelectedOfficeHost}`}</span>
      </div>
      <div className="inline-flex content-end h-32">
        <Image
          src={LisaÖrtlund}
          alt="illustration of an employee at Talkative"
          className="z-0 w-full h-full aspect-[1/1] rounded overflow-hidden relative top-6 left-4"
        />
        <Image
          src={LisaÖrtlund}
          alt="illustration of an employee at Talkative"
          className="z-10 w-full h-full aspect-[1/1] rounded overflow-hidden relative"
        />
      </div>
      <div className="flex flex-col text-start">
        <span className="text-xl font-bold">Theme</span>
        <span>{theme}</span>
      </div>
    </div>
  );
};

export default OfficeHost;
