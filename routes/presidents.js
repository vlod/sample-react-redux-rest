const express = require('express');

const router = express.Router();

// get individual /api/presidents/31
router.get('/:id', (req, res /* , next */) => {
  const db = req.app.get('db');

  const name = db.presidents.get(req.params.id);
  if (name) {
    name.image = `/images/presidents/${req.params.id}.jpg`;
    return res.json(name);
  }
  // cant find president with this number
  return res.status(404).json({ status: 'error', message: 'No such president' });
});

// get all /api/presidents
router.get('/', (req, res /* , next */) => {
  const db = req.app.get('db');

  const names = db.presidents.all().map(entry => ({ number: entry.number, president: entry.president }));
  return res.json(names);
});

module.exports = router;
