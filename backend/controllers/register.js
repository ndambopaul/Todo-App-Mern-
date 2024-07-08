const bcrypt = require("bcryptjs");
const User = require("../models/users");

const register = async(req, res) => {
    const { name, email, username, role, password } = req.body

    if(!name || !email || !username || !role || !password) {
        return res.status(400).send({ error: "Please provide all user attributes" })
    }
    try {
        const existingUser = await User.findOne({ "email": email })
        if(existingUser) return res.status(400).send({ error: `User with email: ${email} already exists` })
            
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            name: name,
            email: email,
            role: role,
            password: hashedPassword
        });

        if(!newUser) return res.status(400).send({ error: "User could not be registered!!" })
        
        res.send({ success: "User registered successfully" }).status(201)

    } catch (error) {
        console.log(error)
        return res.status(500).send({ error: error.message })
    }
}

module.exports = {
    register
}