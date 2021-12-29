/**
 * /api/new-meetup
 * POST ONLY
 */

import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, image, address, description } = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.ggmv6.mongodb.net/meetups?retryWrites=true&w=majority`
    );

    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne({
      title,
      image,
      address,
      description,
    });
    client.close();
    res.status(201).json({ message: 'Meetup Inserted' });
  }
}
