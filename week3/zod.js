const express = require('express');
const z = require('zod');
const app = express();

app.use(express.json());
// const schema = z.array(z.number());

function validation(obj) {
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    });
    const response = schema.safeParse(obj);
    return response;
}
app.post('/', (req, res) => {
    const response = validation(req.body.obj);
    console.log(response);
    res.send(response);
})

// app.post('/kidney-check', (req, res) => {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys); 
//     res.send(response);
// })

// global cache
app.use(function(err, req, res, next){
    res.send('something went wrong');
})

app.listen(3002);