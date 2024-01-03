import { useQuery } from '@tanstack/react-query';
import { RESTClient } from '../index';

interface UseGetGroup {
  groupId: string;
  options?: any;
}

async function fetchGroup(groupId: string, signal: any) {
  const response = await RESTClient.get(`/sonos/group/${groupId}`, {
    signal,
  });

  return response.data;
}

export const useGetGroup = ({ groupId, options }: UseGetGroup) => {
  return useQuery({
    queryKey: ['group', groupId],
    queryFn: ({ signal }) => fetchGroup(groupId, signal),
    refetchInterval: 5000, // milliseconds
    refetchIntervalInBackground: true,
    ...options,
  });
};

export default useGetGroup;

// Usage: const { data } = useGetGroup({ groupId, options: { initialData } })
