const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Wreck7:Anuram7@cluster0.zsutz.mongodb.net/retest')
const Schema = mongoose.Schema;
const Model = mongoose.model