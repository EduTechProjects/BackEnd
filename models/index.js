const mongoose = require('mongoose');
const env = process.env.NODE_ENC || 'development';
const config = require('../config/config.json')[env];
const speak = require('./speak');
const feedback = require('./feedback');



const db = {};

