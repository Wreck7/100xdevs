const express = require('express')
const AdminRoute = require('./routes/admin');
const UserRoute = require('./routes/user');
const app = express();
app.use(express.json());


app.use('/admin', AdminRoute);
app.use('/user', UserRoute);

app.listen(7000);
