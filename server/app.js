const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');


let db_url = 'mongodb://wozu:1tester@ds151416.mlab.com:51416/xs-records';

const mongoDb = process.env.MONGODB_URI || db_url;

mongoose.connect(mongoDb, {useNewUrlParser: true});
mongoose.Promise = require('bluebird');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));


let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let albumRouter = require('./routes/albums');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'gracie', cookie: {maxAge: 6000}, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
require('./config/passport');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/albums', albumRouter);

module.exports = app;
