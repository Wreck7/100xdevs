const express = require('express');
const app = express();

const { userSchema } = require('./types')
const { User } = require('./db')

app.use(express.json());



