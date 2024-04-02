import express from 'express';

const router = express.Router();

// User Routes
router.get('/user', (req, res) => {
  res.status(200);
  res.json({ message: 'Hello World ola senior!' });
});

router.get('/user/:id', (req, res) => {
  res.status(200);
  res.json({ message: 'Hello World!' });
});

router.post('/user', (req, res) => {
  res.status(201);
  res.json({ message: 'Created' });
});

router.put('/user/"id', (req, res) => {
  res.status(200);
  res.json({ message: 'Updated' });
});

router.delete('/user/:id', (req, res) => {
  res.status(200);
  res.json({ message: 'Deleted' });
});

// Product Routes
router.get('/product', (req, res) => {
  res.status(200);
  res.json({ message: 'Hello World!' });
});

router.get('/product/:id', (req, res) => {
  res.status(200);
  res.json({ message: 'Hello World!' });
});

router.post('/product', (req, res) => {
  res.status(201);
  res.json({ message: 'Created' });
});

router.put('/product/"id', (req, res) => {
  res.status(200);
  res.json({ message: 'Updated' });
});

router.delete('/product/:id', (req, res) => {
  res.status(200);
  res.json({ message: 'Deleted' });
});

// Update routes
router.get('/update', (req, res) => {
  res.status(200);
  res.json({ message: 'Hello World!' });
});

router.get('/update/:id', (req, res) => {
  res.status(200);
  res.json({ message: 'Hello World!' });
});

router.post('/update', (req, res) => {
  res.status(201);
  res.json({ message: 'Created' });
});

router.put('/update/"id', (req, res) => {
  res.status(200);
  res.json({ message: 'Updated' });
});

router.delete('/update/:id', (req, res) => {
  res.status(200);
  res.json({ message: 'Deleted' });
});

// Update Points routes

router.get('/update-points', (req, res) => {
  res.status(200);
  res.json({ message: 'Hello World!' });
});

router.get('/update-points/:id', (req, res) => {
  res.status(200);
  res.json({ message: 'Hello World!' });
});

router.post('/update-points', (req, res) => {
  res.status(201);
  res.json({ message: 'Created' });
});

router.put('/update-points/"id', (req, res) => {
  res.status(200);
  res.json({ message: 'Updated' });
});

router.delete('/update-points/:id', (req, res) => {
  res.status(200);
  res.json({ message: 'Deleted' });
});

export default router;
