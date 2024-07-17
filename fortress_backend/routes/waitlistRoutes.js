const express = require('express');
const { joinWaitlist, verifyEmail } = require('../controllers/waitlistController');
const validateEmail = require('../middleware/validateEmail');

const router = express.Router();

router.post('/join-waitlist', validateEmail, joinWaitlist);
router.get('/verify-email/:id', verifyEmail);

module.exports = router;
