const express = require('express');
const app = express();
app.use(express.json());

const pets = [
  { "id": 1, "name": "Bella", "type": "Dog", "image": "bella.jpg" },
  { "id": 2, "name": "Milo", "type": "Cat", "image": "milo.jpg" }
]


app.get('/pets' , (req,res)=>{
    res.json({
        data : pets
    })
})

app.get('/pets/id',(req,res) => {
    var ids = req.query.id;

    const specificid = pets.filter((pet) => pet.id == ids);
    if(specificid.length == 0){
        res.send("Code : 404");
    }
    else{
        res.json({
            data : specificid
        })
    }
})

app.post('/adopt',(req,res) => {
    var pet_id = req.body.pet_id;
    var applicant_name = req.body.applicant_name;
    var email = req.body.email;
    var reason = req.body.reason;

    if(pet_id == "1" && applicant_name == "John Doe"){
        res.json({
            "adoption_id": 7001,
            "status": "pending_review",
            "message": "Your adoption request has been received!"
        })
    }
    else{
        res.send("Code : 404")
    }
})

app.listen(3000, ()=>{
    console.log("Working")
});