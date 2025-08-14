//importing express
const express = require('express');

const cors = require('cors'); //importing cors

const app = express();
app.use(cors());
app.use(express.json()); //to use JSON in request body bz POST can only send data in JSON format

app.get('/hello',(request,response)=>{
    //server Code
    //response.send('Hello World');
    //http://localhost:3000/hello
    //http://localhost:3000/hello?name=John
    //http://localhost:3000/hello?name=John&age=30
    var name  =  request.query.name;
    var age = request.query.age;
    response.json({
        name : name,
        age: age
    })
})

app.get('/login',(request,response)=>{
    var username = request.query.username;
    var password = request.query.password;

    if(username == 'admin' && password == 'admin'){
        response.json({
            status: 'success',
            message: 'Login successful'
        });
    }
    else {
        response.json({
            status: 'error',
            message: 'Invalid credentials'
        });
    }
})

app.post('/submit',(request,response)=>{
    var user = request.body.username;
    var password = request.body.password;

    if(user == 'admin' && password == 'admin'){
        response.json({
            status: 'success',
            message: 'Login successful'
        });
    }else {
        response.json({
            status: 'error',
            message: 'Invalid credentials'
        });
    }
})

app.listen(3000,()=>{
    console.log('server started')
})