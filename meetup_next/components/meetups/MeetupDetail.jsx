import React from 'react';
import styles from './MeetupDetail.module.css';

export default function MeetupDetail({ title, image, address, description }) {
  return (
    <section className={styles.detail}>
      <img className={styles.image} src={image} alt={title} />
      <h2>{title}</h2>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}
