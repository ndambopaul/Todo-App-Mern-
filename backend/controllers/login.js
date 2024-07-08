const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/users");

const login = async(req, res) => {
    const { email, password } = req.body
    console.log(req.body)

    if(!email || !password) {
        return res.status(400).send({ error: "Please provider email and password" })
    }

    try {
        const user = await User.findOne({ email: email })
        if(!user) return res.status(404).send({ error: `User with email: ${email} not found` })
        
        const passwordMatches = await bcrypt.compare(password, user.password);
        if(!passwordMatches) return res.status(400).send({ error: "Incorrect password" })
        
        const payload = {
            id: user._id, 
            role: user.role, 
            name: user.name, 
            email: user.email
        }
        const token = jwt.sign({ user: payload }, "1234", {expiresIn: "10h"});

        res.send({ token }).status(200)
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error.message })
    }
}

module.exports = {
    login
}