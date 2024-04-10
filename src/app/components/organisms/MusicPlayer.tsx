'use client';
import { FC } from 'react';
import formatDuration from 'format-duration';

import useGetGroup from '@/hooks/useSonos/useGetGroup';
import { UseGetGroups } from '@/hooks/useSonos/useGetGroups';

interface MusicPlayer {
  groupId: string;
  initialData?: any;
  widget?: boolean;
}

const MusicPlayer: FC<MusicPlayer> = ({ groupId, initialData }) => {
  const { data } = UseGetGroups({ options: { initialData } });
  const [group] =
    data?.sort((a, b) => a.devices.length - b.devices.length) || [];
  const { track } = group || [];

  if (!track) return null;

  return (
    <div
      className="flex items-center justify-center w-full h-full p-8 rounded-lg"
      style={{
        background: `linear-gradient(45deg, ${track.albumArtColors.primary} 0%, ${track.albumArtColors.secondary} 100%)`,
        boxShadow: `inset 0 0 30px ${track.albumArtColors.primary}, inset 0px 0 50px ${track.albumArtColors.secondary}, 0px 0 80px ${track.albumArtColors.primary}`,
      }}
      key={track.title}
    >
      <div className="w-48">
        <img
          className="w-full h-full aspect-[1/1] rounded overflow-hidden shadow-lg"
          src={track.albumArtUri}
          alt={`${track.title} by ${track.artist} album art`}
        />
        <div className="overflow-x-hidden ">
          <h1 className="mt-3 text-xl font-bold line-clamp-2 ">
            {track.title}
          </h1>
          <p className="truncate">{track.artist}</p>
          <p className="mt-1 text-gray-200 truncate">{track.album}</p>
        </div>
        {/* Saving this down here, if we want to add the progress of the song */}
        {/* <div className="relative w-full h-1 mt-3 overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out bg-white"
            style={{
              width: `${track.progress}%`,
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40" />
        </div>
        <div className="flex justify-between w-full mt-1">
          <div>
            <p className="text-sm text-gray-200">
              {formatDuration(track.positionInMs)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-200">
              {formatDuration(track.durationInMs)}
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MusicPlayer;
