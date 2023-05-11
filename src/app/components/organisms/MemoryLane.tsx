import Image from 'next/image';

import imgSrc from '../../../../public/image/DSCF2524.jpg';

const MemoryLane: any = () => {
  return (
    <div className="flex border-2 border-rose-500">
      <p className="">Idag i Talkaverse:</p>
      <Image src={imgSrc} alt="memoryLaneImage" width={250} height={250} />
    </div>
  );
};

export default MemoryLane;
