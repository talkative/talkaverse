import MusicPlayer from './components/organisms/MusicPlayer';
import Calendar from './components/organisms/Calendar';
import Images from './components/organisms/Images';
import MemoryLane from './components/organisms/MemoryLane';
import MusicPlayerMarquee from './components/organisms/MusicPlayerMarquee';
import OfficeHost from './components/organisms/OfficeHost';
import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen p-4 p-16 space-y-8   bg-[url('../../public/image/techbar-bg.svg')] bg-cover">
      <div className="flex flex-row justify-between">
        <div>
          <MusicPlayer groupId="RINCON_38420B21AEA101400:2252033196" />
        </div>
        <OfficeHost />
      </div>

      {/* Saving the marqueez - awaiting decision to which player to use  */}
      {/* <div className="flex flex-row justify-end">
        <MusicPlayerMarquee groupId="RINCON_38420B21AEA101400:2252033196" />
        <OfficeHost />
      </div> */}

      <div className="flex flex-row w-full space-x-8">
        {/*     <div className="w-1/3">
          <MemoryLane />
        </div> */}
        <div className="w-1/3 h-1/2">
          <Calendar />
        </div>
        <div className="w-1/3">
          <Images />
        </div>
      </div>
    </main>
  );
}
