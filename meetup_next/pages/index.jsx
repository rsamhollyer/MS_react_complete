import { MongoClient } from 'mongodb';
import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

export default function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

// Moves data fetching to build process side of things - caching

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.ggmv6.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const allMeetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: allMeetups.map(meetup => {
        const payload = { ...meetup, id: meetup._id.toString() };
        const { _id, ...newPayload } = payload;
        return newPayload;
      }),
    },
    revalidate: 1, // Seconds Nextjs will wait before regenerating the page for incoming requests. This is use dependent.
  };
}

// Runs on the server AFTER deployment
// Only need if you need request object OR have data that changes constantly - not good for this particular project

// export async function getServerSideProps(context) {
//   const { req, res } = context; // Headers and other information you might want

//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//   };
// }
