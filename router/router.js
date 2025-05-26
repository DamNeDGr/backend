const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(404).json('Тут нечего нету, уходи!');
});

module.exports = router;