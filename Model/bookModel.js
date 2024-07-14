const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id:{
        type:Number,
        require:true
    },
    bookName:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    coverImg:{
        type:String,
        require:true
    }
})

const books = mongoose.model('books',bookSchema);
module.exports = books;