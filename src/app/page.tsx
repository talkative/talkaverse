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
    <main className="max-h-screen min-h-screen p-4">
      <div className="">
        <MusicPlayer />
      </div>
      <div className="grid grid-cols-5 gap-4 ">
        <div className="col-span-2">
          <MemoryLane />
        </div>
        <div className="col-span-3">
          <Calendar />
        </div>
        <div className="col-span-3 ">
          <Images />
        </div>
        <div className="col-span-2">
          <OfficeHost />
        </div>
      </div>
    </main>
  );
}
