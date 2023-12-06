'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const MusicPlayer: any = () => {
  return (
    <div className="flex items-center w-1/4 p-4 pr-0 overflow-hidden border-2 rounded-lg h-fit border-almostwhite bg-tulip text-almostwhite">
      <FontAwesomeIcon className="h-6 pr-3" icon={faPlay} />
      <div className="overflow-hidden">
        <div className="italic animate-marquee whitespace-nowrap">
          <span> Now Playing: Tame Impala - One More Year</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
