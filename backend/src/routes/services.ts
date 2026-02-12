import express from 'express';

const router = express.Router();

// Services routes
router.get('/', (req, res) => {
  // TODO: Get all services
  res.json({ message: 'Get services endpoint' });
});

router.get('/:id', (req, res) => {
  // TODO: Get service by ID
  res.json({ message: 'Get service by ID endpoint' });
});

export default router;
