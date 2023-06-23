const mongoose = require('mongoose');
const env = process.env.NODE_ENC || 'development';
const speak = require('./speak');
const feedback = require('./feedback');



const db = {};

