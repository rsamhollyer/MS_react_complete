import { useRouter } from 'next/router';
import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const params = {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`/api/new-meetup`, params);
    const data = await response.json();
    router.replace('/');
  }
  return (
    <div>
      <h1>New Meetup</h1>

      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}
