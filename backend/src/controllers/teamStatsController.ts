import { Request, Response } from 'express';

export const teamStatsController = {
  getStats: (req: Request, res: Response) => {
    const stats = {
      funding: {
        value: '>$100 billion',
        description: 'Notional cumulative volume'
      },
      marketShare: {
        value: '0.8%',
        description: 'ETH and BTC options average daily volume'
      },
      trading: {
        value: '>30',
        description: 'Actively supported trading pairs'
      },
      experience: {
        value: '25+',
        description: 'Combined years of traditional market experience'
      },
      established: {
        value: '2017',
        description: 'Year crypto market'
      },
      employees: {
        value: '1,200+',
        description: 'Team employees'
      },
      clients: {
        value: '24/7',
        description: 'Clients'
      },
      trading_volume: {
        value: '5 billion+',
        description: 'Index that we track'
      }
    };

    res.json(stats);
  }
};