const express = require('express');
const Contact = require('../model/contact.model');
const router = express.Router();


// Create a new contact message
router.post('/add', (req, res) => {
    const { name, email, message } = req.body;

    const newContact = new Contact({
        name,
        email,
        message
    });

    newContact.save()
    .then(() => res.json('Contact message added!'))
    .catch(err => {
        console.error('Error saving contact:', err);
        res.status(400).json({ error: err.message });
    });
});

// Get all contact messages
router.get('/', (req, res) => {
    Contact.find()
      .then(contacts => res.json(contacts))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

module.exports = router;