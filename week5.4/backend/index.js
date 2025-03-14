const express = require('express');
const app = express();

const { userSchema } = require('./types')
const { User } = require('./db')

app.use(express.json());

// function validate(req,res,next) {
//     userSchema.safeParse
// }

app.post('/cards', async function (req, res) {
    const validate = userSchema.safeParse(req.body);
    if (!validate.success) {
        res.status(401).json({
            message: 'incorrect data types entered!'
        })
    } else {
        await User.create({
            name,
            description,
            interests,
            socials
        })
        res.json({
            message: 'successfully added card details'
        })
    }
})

app.get('/cards', async function(req,res){
    const response = await User.find({})
    res.json({cards: response})
})


