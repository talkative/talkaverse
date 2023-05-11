import Image from 'next/image';
import MusicPlayer from './components/organisms/MusicPlayer';
import Calendar from './components/organisms/Calendar';
import Images from './components/organisms/Images';
import MemoryLane from './components/organisms/MemoryLane';
import OfficeHost from './components/organisms/OfficeHost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export default function Home() {
  return (
    <main className="flex flex-col items-center max-h-screen min-h-screen p-4 ">
      <div className="justify-between w-full">
        <MusicPlayer />
      </div>
      <div className="z-10 items-center justify-between w-full max-h-screen font-mono text-sm">
        {/* <div className="grid grid-cols-3 gap-4"> */}
        <div className="grid grid-flow-col grid-rows-2 gap-4 py-2 grid-col-4">
          <div className="col-span-2">
            <MemoryLane />
          </div>
          <div className="col-span-2 bg-white ">
            <Calendar />
          </div>

          <div className="col-span-2">
            <Images />
          </div>

          <div className="">
            <OfficeHost />
          </div>
        </div>
      </div>
    </main>
  );
}
