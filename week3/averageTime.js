// const express = require('express');
// const app = express();

// let beforeTime = 0;
// function calculateAverageTime(req, res, next) {
//     beforeTime = Date.now()
//     next()
// }
// app.get('/', function(req, res){
//     res.send('hello')
//     let afterTime = Date.now();
//     let timeDiff = afterTime - beforeTime;
//     console.log(timeDiff)
// })
// app.listen(5000)
const express = require('express');
const app = express();

let totalTime = 0;
let requestCount = 0;

const calculateAverageTime = (req, res, next) => {
    const startTime = Date.now();
    
    res.on('finish', () => {
        const endTime = Date.now();
        const timeDiff = endTime - startTime;
        totalTime += timeDiff;
        requestCount++;
        const averageTime = totalTime / requestCount;
        console.log(`Request time: ${timeDiff} ms, Average time for this route: ${averageTime.toFixed(2)} ms`);
    });

    next();
};

app.get('/', calculateAverageTime, (req, res) => {
    res.send('This is the specific route');
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});