import express from 'express';
import { teamStatsController } from '../controllers/teamStatsController';
import { contactController } from '../controllers/contactController';
import { partnersController } from '../controllers/partnersController';

const router = express.Router();

// Team stats endpoints
router.get('/team-stats', teamStatsController.getStats);

// Contact endpoints
router.post('/contact', contactController.submitContact);

// Partners endpoints
router.get('/partners', partnersController.getPartners);

// Company info endpoints
router.get('/company-info', (req, res) => {
  res.json({
    name: 'Gravity Team',
    description: 'We are a global cryptocurrency team based in EU. Our professionals have invested over 2 years in market intelligence.',
    established: 2019,
    achievements: [
      'High-quality volume',
      'Very reliable and trustworthy partner',
      'Uniquely active and indispensable part of market-making team'
    ]
  });
});

export { router as apiRouter };