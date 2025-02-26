const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require("./routes/admin")
const app = express();
app.use(bodyParser.json());
app.use(express.json());
// const userRouter = require("./routes/user");

app.use("/admin", adminRouter)
// app.use("/user", userRouter)

app.listen(5000)