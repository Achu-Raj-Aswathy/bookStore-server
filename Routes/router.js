const express = require('express');

const adminController = require('../Controller/adminController');
const bookController = require('../Controller/bookController')

const router = new express.Router()

// login admin 
router.post('/admin/login',adminController.adminLogin)

// add book
router.post('/addbook',bookController.addbook)

// list books
router.get('/listbooks',bookController.getAllBooks)

// delete book
router.delete('/deletebook/:id',bookController.deleteBook)

module.exports = router;