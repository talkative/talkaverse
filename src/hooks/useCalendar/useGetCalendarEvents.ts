import { RESTClient } from '../index';

import { useQuery, useQueryClient } from '@tanstack/react-query';

export function useGetCalendarEvents() {
  async function getCalendarEvents() {
    try {
      const response = await RESTClient.get(`/calendar/events`);
      return response;
    } catch (error) {
      console.log('error in getting calendar events', error);
    }
  }

  return useQuery({
    queryKey: ['calendarEvents'],
    queryFn: getCalendarEvents,
  });
}

export default useGetCalendarEvents;
