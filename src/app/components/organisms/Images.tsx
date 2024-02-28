import Image from 'next/image';

import imgSrc from '../../../../public/image/DSCF2524.jpg';

const Images = () => {
  return (
    <div className="h-full items-center flex">
      <Image className="rounded-2xl" src={imgSrc} alt="memorylane" />
      {/* <p>Bildspel</p> */}
      {/* <div className="h-full overflow-hidden">
        <Image className="h-full rounded-2xl" src={imgSrc} alt="memorylane" />
      </div> */}
    </div>
  );
};

export default Images;
