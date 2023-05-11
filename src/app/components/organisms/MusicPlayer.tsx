'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const MusicPlayer: any = () => {
  const [isActive, setIsActive] = useState();

  return (
    <div className="flex w-1/4 py-4 pr-4 border-2 rounded-lg border-almostwhite bg-tulip text-almostwhite">
      <FontAwesomeIcon className="px-4 w-14" icon={faPlay} />
      <marquee className="italic">
        Now Playing: Tame Impala - One More Year
      </marquee>
    </div>
  );
};

export default MusicPlayer;
