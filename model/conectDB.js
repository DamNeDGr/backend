const mongoose = require('mongoose');
require('dotenv').config();


const DB_LINK = process.env.DB_LINK;



const connectDB = async () => {
    try {
        await mongoose.connect(DB_LINK, {
            useNewUrlParser: true,
            // useUnifieldTopology: true
        });
        console.log('Подключение к бд успешно!');
    }
    catch(err) {
        console.error('Ошибка подключения к бд : ', err);
        process.exit(1);
    }
};

module.exports = connectDB;