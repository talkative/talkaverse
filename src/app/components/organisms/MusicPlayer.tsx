'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const MusicPlayer: any = () => {
  return (
    <div className="absolute left-0 flex items-center w-1/3 px-0 py-4 overflow-hidden rounded-r-lg h-fit bg-talkativedarkpurple text-almostwhite">
      <FontAwesomeIcon className="fixed h-6 pl-3 pr-0" icon={faPlay} />
      <div className="w-full ml-3 overflow-hidden">
        <div className="italic animate-marquee whitespace-nowrap">
          <span> Now Playing: Tame Impala - One More Year</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
