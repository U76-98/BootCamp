const express = require('express');
const app = express();

app.get('/menu', (req, res) => {
    res.json({
        flavors: ['Vanilla', 'Chocolate', 'Strawberry', 'Mint'],
        sizes: ['Small', 'Medium', 'Large'],
        quantity: ['Single', 'Double', 'Triple']
    })
})

app.listen(3001, () => {
    console.log('Ice cream server started on port 3001');
});