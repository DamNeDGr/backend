const express = require('express');
const routes = require('./router/router')
const CommentRouter = require('./router/CommentRouter');
// const AuthRouter = require('./router/AuthRouter');
const connectDB = require('./model/conectDB');
const cors = require('cors');




const app = express();
app.use(cors({
    origin: 'http://localhost:8888'
}));
app.use(express.json());

connectDB();

app.use('/', routes);

app.use('/api', CommentRouter);

// app.use('/api', AuthRouter);

app.listen(3000, () => {
    console.log('Сервер запущен');
})