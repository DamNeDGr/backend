const express = require('express');
const router = express.Router();
const User = require('../model/models');


router.get('/', (req, res) => {
    res.status(404).send('Not found');
});

router.post('/login', (req, res) => {

});



router.post('/api/add-comment', async(req, res) => {
    try {
        const { name, comment } = req.body;
        const ipAddress = req.ip;
        const newUser = new User({
            name,
            comment,
            ipAddress,
            createdAt: new Date()
        });
        
        await newUser.save();
        res.status(200).json({message: 'Отзыв успешно сохранен!'})

    }
    catch(err) {
        res.status(500).json({message: `Ошибка отправки ${err}`});
    }
});

router.get('/api/get-comment', async(req, res) => {
    try {
        const users = await User.find({}, '_id name comment');
        res.json(users);
    }
    catch(err){
        res.status(500).json({message: 'Ошибка получения отзывов', err});
    }
});

router.delete('/api/delete-comment/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await User.findByIdAndDelete(id);
        if(!deleteUser){
            return res.status(404).json({message: 'Отзыв не найден!'});
        }

        res.json({message: 'Отзыв успешно удален'});
    }
    catch(err) {
        res.status(500).json({message: 'Ошибка удаления отзыва', err});
    }
});


module.exports = router;