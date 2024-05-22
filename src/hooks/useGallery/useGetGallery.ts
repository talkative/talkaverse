import { RESTClient } from '../index';

import { useQuery } from '@tanstack/react-query';

export function useGetGallery() {
  async function getGallery() {
    try {
      const response = await RESTClient.get(`/office/gallery`);

      return response;
    } catch (error) {
      console.log('Error in getting office gallery: ', error);
    }
  }

  return useQuery({
    queryKey: ['officeGallery'],
    queryFn: getGallery,
  });
}

export default useGetGallery;
