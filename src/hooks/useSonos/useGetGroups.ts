import { useQuery } from '@tanstack/react-query';
import { RESTClient } from '../index';

interface UseGetGroups {
  options?: any;
}

type Track = {
  album: string;
  artist: string;
  albumArtUri: string;
  albumArtColors: {
    primary: string;
    secondary: string;
  };
  title: string;
  duration: string;
  durationInMs: number;
  position: string;
  positionInMs: number;
  progress: number;
};

type Device = {
  host: string;
  name: string;
  volume: number;
};

type Group = {
  groupId: string;
  name: string;
  track: Track;
  groupVolume: number;
  status: string;
  muted: boolean;
  devices: Device[];
};

async function fetchGroups(signal: any) {
  const response = await RESTClient.get(`/sonos/groups`, {
    signal,
  });

  return response.data;
}

export const UseGetGroups = ({ options }: UseGetGroups) => {
  return useQuery<Group[]>({
    queryKey: ['groups'],
    queryFn: ({ signal }) => fetchGroups(signal),
    refetchInterval: 5000, // milliseconds
    refetchIntervalInBackground: true,
    ...options,
  });
};

export default UseGetGroups;
