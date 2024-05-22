'use client';
import Image from 'next/image';

import imgSrc from '../../../../public/image/DSCF2524.jpg';

import { useGetGallery } from '@/hooks/useGallery';

const Images = () => {
  const { data, status } = useGetGallery();
  if (!data) {
    return null;
  }

  console.log('Gallery data: ', data);

  return (
    <div className="items-center">
      <Image className="rounded-2xl" src={imgSrc} alt="memorylane" />
      {/* <p>Bildspel</p> */}
      {/* <div className="h-full overflow-hidden">
        <Image className="h-full rounded-2xl" src={imgSrc} alt="memorylane" />
      </div> */}
    </div>
  );
};

export default Images;
