'use client';
import Image from 'next/image';
import { Jacques_Francois } from 'next/font/google';

import useGetHosts from '@/hooks/useHosts/useGetHosts';

const OfficeHost: any = () => {
  const { data, status } = useGetHosts();
  /*   const jacques = Jacques_Francois({
    subsets: ['latin'],
    weight: '400',
  }); */

  if (!data) {
    return null;
  }

  const {
    data: { assigned, theme, week, coverImage },
  } = data;

  return assigned ? (
    <div className="p-4 space-y-6">
      <div className="flex flex-col text-end">
        <span className={`text-2xl`}>{`Office Hosts w.${week}`}</span>
        <span>{`${assigned[0].name} & ${assigned[1]?.name}`}</span>
      </div>
      <div className="inline-flex content-end h-32">
        <Image
          width={100}
          height={100}
          src={assigned[0]?.avatar_url}
          alt="illustration of an employee at Talkative"
          className="z-0 w-full h-full aspect-[1/1] rounded overflow-hidden relative top-6 left-4 shadow-lg"
        />
        <Image
          src={assigned[1]?.avatar_url}
          width={100}
          height={100}
          alt="illustration of an employee at Talkative"
          className="z-10 w-full h-full aspect-[1/1] rounded overflow-hidden relative shadow-lg"
        />
      </div>
      <div className="flex flex-col text-start">
        <span className="text-xl font-bold">Theme</span>
        <span>{theme}</span>
      </div>
    </div>
  ) : null;
};

export default OfficeHost;
