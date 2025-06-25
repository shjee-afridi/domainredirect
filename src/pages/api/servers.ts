import type { NextApiRequest, NextApiResponse } from 'next';

// This is a placeholder. In production, fetch from your real backend or database.
const servers = [
  {
    name: 'Anime Empire',
    icon: '/icon-128x128.png',
    description: 'A vibrant anime community with events, giveaways, and more!',
    members: 12000,
    reviews: 87,
    analytics: {
      bumps: 42,
      rating: 4.8
    }
  },
  {
    name: 'Otaku Central',
    icon: '/icon-128x128.png',
    description: 'Join for anime chat, games, and a friendly staff!',
    members: 8000,
    reviews: 54,
    analytics: {
      bumps: 30,
      rating: 4.6
    }
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ servers });
}
