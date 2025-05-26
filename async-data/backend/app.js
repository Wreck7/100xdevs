const express = require('express')
const app = express()
const port = 3000

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/notifications', (req, res)=> {
    res.json({
        network: getRandomInt(1,20),
        jobs: getRandomInt(1,10),
        messaging: getRandomInt(1,10),
        notifications: getRandomInt(1,20)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})