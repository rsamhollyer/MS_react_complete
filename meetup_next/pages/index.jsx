import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { DUMMY_DATA } from '../utils/meetups';

export default function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

export async function getStaticProps() {
  // Moves data fetching to build process side of thigns
  return {
    props: {
      meetups: DUMMY_DATA,
    },
  };
}
