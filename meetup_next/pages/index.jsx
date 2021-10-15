import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { DUMMY_DATA } from '../utils/meetups';

export default function HomePage() {
  return <MeetupList meetups={DUMMY_DATA} />;
}
