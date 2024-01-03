'use client';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useGetGroup } from '@/hooks/useSonos';

interface MusicPlayerMarquee {
  groupId: string;
  initialData?: any;
}

const MusicPlayerMarquee: FC<MusicPlayerMarquee> = ({
  groupId,
  initialData,
}) => {
  const { data, status } = useGetGroup({ groupId, options: { initialData } });

  if (!data) return null;

  const { track } = data;

  return (
    <div className="absolute left-0 flex items-center w-1/3 px-0 py-4 overflow-hidden text-white bg-blue-900 rounded-r-lg h-fit">
      <FontAwesomeIcon className="fixed h-6 pl-3 pr-0" icon={faPlay} />
      <div className="w-full ml-3 overflow-hidden">
        <div className="italic animate-marquee whitespace-nowrap">
          <span>{`${track.title} by ${track.artist} `}</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerMarquee;
