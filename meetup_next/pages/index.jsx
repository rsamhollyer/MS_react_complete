import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { DUMMY_DATA } from '../utils/meetups';

export default function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

// Moves data fetching to build process side of thigns
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_DATA,
    },
    revalidate: 10, // Seconds Nextjs will wait before regenerating the page for incoming request - data is never older than 10seconds. This is use dependent
  };
}
