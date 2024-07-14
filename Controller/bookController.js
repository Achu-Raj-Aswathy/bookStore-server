const books = require('../Model/bookModel');

// add book 
exports.addbook = async (req, res) => {
    const { id, bookName, author, price, coverImg } = req.body;
    console.log("================");
    console.log(id, bookName, author, price, coverImg);
    try {
        const existingBook = await books.findOne({ bookName });
        if (existingBook) {
            res.status(401).json(`${bookName} already exist`)
        }
        else {

            const newBook = new books({
                id, bookName, author, price, coverImg
            })
            await newBook.save();
            res.status(200).json("Book added successfully")
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

// get all books
exports.getAllBooks = async (req, res) => {
    try {
        const allBooks = await books.find();
        res.status(200).json(allBooks)
    } catch (error) {
        res.status(401).json(error)
    }
}

// delete book
exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const removeItem = await books.findByIdAndDelete({ _id: id });
        res.status(200).json("Item removed successfully")
    } catch (error) {
        res.status(401).json("Error in deleting")
    }
}
