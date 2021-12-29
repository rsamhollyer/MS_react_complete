/**
 * /api/new-meetup
 * POST ONLY
 */

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { title, image, address, description } = req.body;
  }
}
