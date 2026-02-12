import express from 'express';

const router = express.Router();

// Team routes
router.get('/', (req, res) => {
  // TODO: Get all team members
  res.json({ message: 'Get team members endpoint' });
});

router.get('/:id', (req, res) => {
  // TODO: Get team member by ID
  res.json({ message: 'Get team member by ID endpoint' });
});

export default router;
