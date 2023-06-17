const express = require('express');
const bodyParser =require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const qs = require('qs');
const mongoose = require('mongoose');
const morgan = require('morgan');
const multer = require('multer');
const dotenv = require('dotenv');


dotenv.config();
// Router


const app = express();

//앱 서버 포트에 연결하기

app.set('port', process.env.PORT || 3000);
app.set('viw engine', 'html');


//미들웨어 설정 
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser(process.env.COOKIE_SECRET));


//404 에러 처리 미들웨어
app.use((req,res,next) =>{
    const error = new Error('${req.method} ${req.url} 라우터가 없음🧐');
    error.status = 404;
    next(error);
})

//500 에러 미들웨어 정의
app.use((err, req, res, next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error'); 
})


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'client'))
})


//포트 연결
app.listen(app.get('port' ,()=>{
     console.log('${port} 포트입니다.')
}))

// 몽구스 연결
var db= mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    //Mongodb 서버에 연결하기
    console.log("Mongo Db 연결에 성공하였음!🐤")
});

mongoose.connect('mongodb://localhost:27017')

