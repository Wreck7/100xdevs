const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var users = [{
    name: 'karthik',
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

app.get('/', (req, res) => {
    let numOfKidneys = users[0].kidneys.length
    let kidneysHealthy = 0
    let filteredKidneys = users[0].kidneys.filter(kidney => {
        if (kidney.healthy === true) kidneysHealthy = kidneysHealthy + 1
    })
    let kidneysUnhealthy = numOfKidneys - kidneysHealthy
    res.status(200).json({
        name: users[0].name,
        No_of_kidneys: numOfKidneys,
        Kidneys_healthy: kidneysHealthy,
        Kidneys_unhealthy: kidneysUnhealthy
    })
});
app.post('/', function (req, res) {
    let isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.status(200).send("Successfully added a new healthy kidney");
})
app.put('/', function (req, res) {
    users[0].kidneys.filter(k => {
        if (!k.healthy) {
            let makeHealthy = users[0].kidneys.filter(kidney => {
                if (kidney.healthy === false) kidney.healthy = true;
            })
            res.status(200).send("Successfully cured unhealthy kidneys")
        }else{
            res.status(411).send('All your kidneys are already healthy')
        }
    })
})

app.delete('/', function (req, res) {
    users[0].kidneys.filter(k => {
        if (!k.healthy) {
            let onlyHealthy = [];
            users[0].kidneys.filter(kidney => {
                if (kidney.healthy) return onlyHealthy.push({ healthy: true });
            })
            users[0].kidneys = onlyHealthy;
            res.status(200).send('Successfully removed unhealthy kidney')
        } else{
            res.status(411).send('There are no unhealthy kidneys to remove')
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});