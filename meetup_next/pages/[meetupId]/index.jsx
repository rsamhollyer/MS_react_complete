import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupDetails({ meetupData }) {
  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetail meetupData={meetupData} />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.ggmv6.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetupsArray = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetupsArray.map(meetup => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.ggmv6.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupsColl = db.collection('meetups');
  const selectedMeetup = await meetupsColl.findOne({ _id: ObjectId(meetupId) });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}
