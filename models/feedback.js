const mongoose = require('mongoose');

//내가 말한 영어문장 음성 데이터를 GPT로 교정해준 결과물 
const {Schema}  = mongoose;
const feedbackSchema = new Schema({
    
})

module.exports = mongoose.model('feedback', feedbackSchema);