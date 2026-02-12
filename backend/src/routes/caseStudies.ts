import express from 'express';

const router = express.Router();

// Case studies routes
router.get('/', (req, res) => {
  // TODO: Get all case studies
  res.json({ message: 'Get case studies endpoint' });
});

router.get('/:id', (req, res) => {
  // TODO: Get case study by ID
  res.json({ message: 'Get case study by ID endpoint' });
});

export default router;
