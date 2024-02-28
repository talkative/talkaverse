import { RESTClient } from '../index';

import { useQuery } from '@tanstack/react-query';

export function useGetHosts() {
  async function getHosts() {
    try {
      const response = await RESTClient.get(`/office/hosts`);
      return response;
    } catch (error) {
      console.log('Error in getting office hosts: ', error);
    }
  }

  return useQuery({
    queryKey: ['officeHosts'],
    queryFn: getHosts,
  });
}

export default useGetHosts;
