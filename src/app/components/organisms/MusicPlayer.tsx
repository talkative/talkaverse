'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const MusicPlayer: any = () => {
  return (
    <div className="flex items-center w-1/4 p-4 border-2 rounded-lg border-almostwhite bg-tulip text-almostwhite">
      <FontAwesomeIcon className="h-6 pr-3" icon={faPlay} />
      <marquee className="pr-4 italic">
        Now Playing: Tame Impala - One More Year
      </marquee>
    </div>
  );
};

export default MusicPlayer;
