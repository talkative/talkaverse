import Image from 'next/image';

import imgSrc from '../../../../public/image/DSCF2524.jpg';

const MemoryLane: any = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="p-1 overflow-hidden bg-talkativedarkpurple rounded-2xl">
        <div className="overflow-hidden rounded-t-xl w-full aspect-[5/3]">
          <Image className="mx-auto" src={imgSrc} alt="memorylane" />
        </div>
        <div className="grid grid-cols-2 p-4 text-talkativeyellow">
          <div className="text-talkativeyellow">
            <h1 className="text-6xl font-bold">12/6</h1>
            <h2 className="mt-2 text-3xl font-semibold">2022</h2>
          </div>
          <div className="">
            <p>Anton vann mot Adrian. Det var en stor dag för Anton.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryLane;
