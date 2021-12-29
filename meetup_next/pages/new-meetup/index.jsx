import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return (
    <div>
      <h1>New Meetup</h1>

      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}
