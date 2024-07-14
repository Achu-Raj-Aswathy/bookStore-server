const admin = require('../Model/adminModel')
const jwt = require('jsonwebtoken')

//login admin
exports.adminLogin = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const existingUser = await admin.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, process.env.SECRET_KEY)
            console.log(token);
            res.status(200).json({existingUser,token})

        }
        else {
            res.status(401).json("Invalid email or password")
        }
    } catch (err) {
        res.status(401).json(err)
    }
}