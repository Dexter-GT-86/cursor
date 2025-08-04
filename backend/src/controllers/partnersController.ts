import { Request, Response } from 'express';

export const partnersController = {
  getPartners: (req: Request, res: Response) => {
    const partners = [
      {
        id: 1,
        name: 'Binance',
        logo: '/images/partners/binance.png',
        category: 'Exchange'
      },
      {
        id: 2,
        name: 'Coinbase',
        logo: '/images/partners/coinbase.png',
        category: 'Exchange'
      },
      {
        id: 3,
        name: 'Bitcoin',
        logo: '/images/partners/bitcoin.png',
        category: 'Cryptocurrency'
      },
      {
        id: 4,
        name: 'Ethereum',
        logo: '/images/partners/ethereum.png',
        category: 'Cryptocurrency'
      }
    ];

    res.json(partners);
  }
};