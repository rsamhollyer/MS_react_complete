import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

export default function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

// Moves data fetching to build process side of things - caching

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_DATA,
    },
    revalidate: 1, // Seconds Nextjs will wait before regenerating the page for incoming requests. This is use dependent.
  };
}

Runs on the server AFTER deployment
// Only need if you need request object OR have data that changes constantly - not good for this particular project

// export async function getServerSideProps(context) {
//   const { req, res } = context; // Headers and other information you might want

//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//   };
// }
