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
            message: 'incorrect data types entered!',
            errors: validate.error.errors.map(err => ({
                path: err.path.join('.'),
                message: err.message
            }))
        })
    } else {
        await User.create({
            name: req.body.name,
            description: req.body.description,
            interests: req.body.interests,
            socials: req.body.socials
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

app.listen(3002);


