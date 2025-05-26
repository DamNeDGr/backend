const express = require('express');
const routes = require('./router/router');
const connectDB = require('./model/conectDB');
const cors = require('cors');



const app = express();
app.use(cors({
    origin: 'http://localhost:8888'
}));
app.use(express.json());

connectDB();

app.use('/', routes);

app.use('/api/get-comment/', routes);

app.use('/api/add-comment', routes);

app.listen(3000, () => {
    console.log('Сервер запущен');
})