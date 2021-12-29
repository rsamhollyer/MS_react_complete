import React, { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { DUMMY_DATA } from '../utils/meetups';

export default function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setLoadedMeetups(DUMMY_DATA);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}
