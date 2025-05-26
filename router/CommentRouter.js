const express = require('express');
const CommentRouter = express.Router();
const User = require('../model/models');


CommentRouter.post('/comments', async(req, res) => {
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

CommentRouter.get('/comments', async(req, res) => {
    try {
        const users = await User.find({}, '_id name comment');
        if(users.length === 0){
            
            res.status(404).json({message: 'Отзывы не найдены'});
        } else {
            res.json(users);
        }
    }
    catch(err){
        res.status(500).json({message: 'Ошибка получения отзывов', err});
    }
});

CommentRouter.delete('/comments/:id', async(req, res) => {
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


module.exports = CommentRouter;