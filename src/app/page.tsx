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
    <main className="w-full min-h-screen p-4 flex flex-col space-y-8 p-16 bg-gradient-to-l from-gray">
      <div className="flex flex-row justify-between  w-full">
        <MusicPlayer />
        <OfficeHost />
      </div>

      <div className="w-full flex flex-row space-x-8">
        <div className="w-1/3">
          <MemoryLane />
        </div>
        <div className="w-1/3">
          <Calendar />
        </div>
        <div className="w-1/3">
          <Images />
        </div>
      </div>
      <div className=" flex flex-row w-full"></div>
    </main>
  );
}
