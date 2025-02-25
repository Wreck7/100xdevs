const express = require('express');
const jwt = require('jsonwebtoken');
const z = require('zod');

const app = express();
app.use(express.json());
const jwtPass = '1234567';

const userSchema = z.object({
    username: z.string().email(),
    password: z.string().min(7)
})

function signJwt(userName, password) {
    return jwt.sign({
        username: userName,
        password: password
    }, jwtPass);
}

function verifyJwt(token) {
    try {
        return jwt.verify(token, jwtPass);
    } catch (err) {
        return null;
    }
}

function decode(token) {
    return jwt.decode(token, {complete: true});
}

app.post('/login', function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const user = userSchema.safeParse(req.body);
    if(!user.success){
        res.status.status(400).json({message: 'invalid input'})
    }else{
        const token = signJwt(username, password);
        res.json({token});
    }
})

app.get('/verify', function(req, res){
    const token = req.headers.authorization;
    const verifies = verifyJwt(token);
    if(!verifies){
        res.status(403).json({message: 'invalid token'});
    }else{
        res.json({message: 'success', user: verifies.username});
    }
})

app.get('/decode', function(req, res){
    const token = req.headers.authorization;
    const decoded = decode(token);
    if(!decoded){
        res.status(403).json({message: 'invalid token'});
    }else{
        res.json({message: 'success', user: decoded.username});
    }
})

app.listen(3001);