'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const MusicPlayer: any = () => {
  return (
    <div className="absolute left-0 flex items-center w-1/3 p-4 overflow-hidden rounded-r-lg h-fit bg-talkativedarkpurple text-almostwhite">
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
