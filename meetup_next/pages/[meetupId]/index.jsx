import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupDetails() {
  return <MeetupDetail />;
}

export async function getStaticProps(context) {
  const {
    params: { meetupId },
  } = context;
  // Could fetch data here

  console.log(meetupId);
  return {
    props: {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/40/Panor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg',
      title: 'First Meetup',
      address: '123 First Street',
      description: 'First Meetup!',
      id: 'm1',
    },
  };
}
