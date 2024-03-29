import Image from 'next/image';

import imgSrc from '../../../../public/image/DSCF2524.jpg';

const MemoryLane: any = () => {
  return (
    <div className="h-full p-1 overflow-hidden bg-blue-900 rounded-2xl font-raleway">
      <div className="overflow-hidden rounded-t-xl w-full aspect-[5/3]">
        <Image className="mx-auto" src={imgSrc} alt="memorylane" />
      </div>
      <div className="grid grid-cols-2 p-4 text-yellow-500">
        <div className="text-yellow-500">
          <h1 className="text-6xl font-bold">12/6</h1>
          <h2 className="mt-2 text-3xl font-semibold">2022</h2>
        </div>
        <div className="">
          <p>Anton vann mot Adrian. Det var en stor dag för Anton.</p>
        </div>
      </div>
    </div>
  );
};

export default MemoryLane;
