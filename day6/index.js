const express = require('express');
const app = express();
app.use(express.json());

const items = [
    { id: 1, title: "Moto" },
    { id: 2, title: "Sam uncle" }
];

const category = [
    { cat: 1, title: "Mobiles"},
    { cat: 2, title: "appliances"}
]

var details = [];

app.get('/items', (req, res) => {
    res.json({
        status : 200,
        message : 'got the items',
        data:items
    })
});

app.get('/cat', (req, res) => {
    res.json({
        status : 200,
        message : 'got the category',
        data:category
    })
})

app.get('/item/details', (req,res) => {
    const itemid = req.query.itemid;

    const item = items.filter((item) => item.id == itemid)

    if(item.length == 0){
        res.json({
            status : 404,
            message : "Not Found!"
        })
    }
    else{
        res.json({
            status : 200,
            data: item
        })
    }
})



app.post('/user',(req,res) => {
    const name = req.body.name;
    const pincode = req.body.pincode;
    const address = req.body.address;

    details = [
        username = name,
        userpincoded = pincode,
        useraddress = address
    ]

    res.json({
        message : "Done Uploading",
        data: details
    })
})

app.delete('/user',(req,res) => {
    details = []
    res.json({
        message : "Deleted",
        data : details
    })
})

app.listen(3000, ()=>{
    console.log("Working")
});