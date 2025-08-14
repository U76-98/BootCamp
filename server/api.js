const express = require('express');
const app = express();

app.get('/cs', (req, res) => {
    res.json({
        about: "The CS department at Sahyadri College of Engineering and Management offers a comprehensive curriculum in computer science."})
})
app.get('/ec', (req, res) => {
    res.json({
        about: "The EC department at Sahyadri College of Engineering and Management focuses on electronics and communication engineering."})
})
app.get('/hod', (req, res) => {
    res.json({
        hods: ["Name 1", "Name 2", "Name 3"]})
})
app.get('/facility', (req, res) => {
    res.json({
        faculty: ["Gym", "Swimming pool", "Grounds", "Library"],})
})

app.listen(3002, () => {
    console.log('Server started on port 3002');
});