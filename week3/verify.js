const express = require('express');
const app = express();
const z = require('zod');


const schema = z.object({
    name: z.string().min(3).max(20),
    age: z.number().min(18).max(60),
    email: z.string().email()
})

const userData = {
    name: "John Doe",
    age: 31,
    email: "john.doe@example.com",
};
app.get('/', function(req,res){
    const result = schema.safeParse(userData);
    if(!(result.success)){
        console.error("Validation failed:");
        res.status(400).send('failed');
    }else{
        console.log("success", result);
        res.send('success');
    }
})

app.listen(3005);