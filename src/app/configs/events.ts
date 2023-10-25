interface eventType {
  kind: string;
  etag: string;
  summary: string;
  updated: string;
  timeZone: string;
  accessRole: string;
  defaultReminders: any[];
  items: {
    kind: string;
    etag: string;
    id: string;
    status: string;
    htmlLink: string;
    created: string;
    updated: string;
    summary: string;
    creator: {
      email: string;
    };
    organizer: {
      email: string;
      displayName: string;
      self: boolean;
    };
    start: {
      dateTime: string;
      timeZone: string;
    };
    end: {
      dateTime: string;
      timeZone: string;
    };
    iCalUID: string;
    sequence: number;
    reminders: {
      useDefault: boolean;
    };
    eventType: string;
  }[];
}

const events: eventType[] = [
  {
    kind: 'calendar#events',
    etag: '"p324f3ctduvmvs0g"',
    summary: 'Test calendar talkative',
    updated: '2023-05-11T18:50:17.765Z',
    timeZone: 'Europe/Stockholm',
    accessRole: 'reader',
    defaultReminders: [],
    items: [
      {
        kind: 'calendar#event',
        etag: '"3367662035530000"',
        id: '458uoj47cbmp04gsv60fjbthhe',
        status: 'confirmed',
        htmlLink:
          'https://www.google.com/calendar/event?eid=NDU4dW9qNDdjYm1wMDRnc3Y2MGZqYnRoaGUgY182NGI3ZjEwZDYxMWU1M2NiYzYxNDEzODQyYzY4ZmZhMDgyMjFiYTU0NGMzNjA5NDFlNzc2ZDUyY2Q5NzFmOGM2QGc',
        created: '2023-05-11T18:50:17.000Z',
        updated: '2023-05-11T18:50:17.765Z',
        summary: 'Testing event',
        creator: {
          email: 'marcus.pamp@talkative.se',
        },
        organizer: {
          email:
            'c_64b7f10d611e53cbc61413842c68ffa08221ba544c360941e776d52cd971f8c6@group.calendar.google.com',
          displayName: 'Test calendar talkative',
          self: true,
        },
        start: {
          dateTime: '2023-05-12T19:30:00+02:00',
          timeZone: 'Europe/Stockholm',
        },
        end: {
          dateTime: '2023-05-12T20:30:00+02:00',
          timeZone: 'Europe/Stockholm',
        },
        iCalUID: '458uoj47cbmp04gsv60fjbthhe@google.com',
        sequence: 0,
        reminders: {
          useDefault: true,
        },
        eventType: 'default',
      },
    ],
  },
  {
    kind: 'calendar#events',
    etag: '"p324f3ctduvmvs0g"',
    summary: 'Test calendar talkative',
    updated: '2023-05-11T18:50:17.765Z',
    timeZone: 'Europe/Stockholm',
    accessRole: 'reader',
    defaultReminders: [],
    items: [
      {
        kind: 'calendar#event',
        etag: '"3367662035530000"',
        id: '458uoj47cbmp04gsv60fjbthhe',
        status: 'confirmed',
        htmlLink:
          'https://www.google.com/calendar/event?eid=NDU4dW9qNDdjYm1wMDRnc3Y2MGZqYnRoaGUgY182NGI3ZjEwZDYxMWU1M2NiYzYxNDEzODQyYzY4ZmZhMDgyMjFiYTU0NGMzNjA5NDFlNzc2ZDUyY2Q5NzFmOGM2QGc',
        created: '2023-05-11T18:50:17.000Z',
        updated: '2023-05-11T18:50:17.765Z',
        summary: 'Testing event',
        creator: {
          email: 'marcus.pamp@talkative.se',
        },
        organizer: {
          email:
            'c_64b7f10d611e53cbc61413842c68ffa08221ba544c360941e776d52cd971f8c6@group.calendar.google.com',
          displayName: 'Test calendar talkative',
          self: true,
        },
        start: {
          dateTime: '2023-05-12T19:30:00+02:00',
          timeZone: 'Europe/Stockholm',
        },
        end: {
          dateTime: '2023-05-12T20:30:00+02:00',
          timeZone: 'Europe/Stockholm',
        },
        iCalUID: '458uoj47cbmp04gsv60fjbthhe@google.com',
        sequence: 0,
        reminders: {
          useDefault: true,
        },
        eventType: 'default',
      },
    ],
  },
];

export default events;
