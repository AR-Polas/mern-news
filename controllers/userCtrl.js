const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const userCtrl  ={
    register : async (req,res) => {
      try {
        const {name,email,password} = req.body;
        const user = await User.findOne({email})
        if(user) return res.status(400).json({msg: "The email already exists."})

        if(password.length < 6) 
        return res.status(400).json({msg: "Password is at least 6 characters long."})

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,email,password : passwordHash
        })

        await newUser.save()
        res.json('user created')

      } catch (error) {
        res.status(500).json({msg : error.message})
      }
},

    login : async (req,res) => {
      try {
        const {email,password} = req.body;
        const user = await User.findOne({email})
        if(!user) return res.status(400).json({msg: "User does not exist."})

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({msg: "Incorrect password."})

        res.json(user.role)
      } catch (error) {
        res.status(500).json({msg : error.message})
      }
    }



}

module.exports = userCtrl