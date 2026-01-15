const express = require('express');
const { generateAIReply } = require('../controllers/chatControllers');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Ai Wrapper API is running....');
});

router.post('/chat', generateAIReply);

module.exports = router;