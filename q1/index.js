
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    let content = `Welcome: `;
    if (!name && !age) {
        content += "name and age is not entered.";
    }else{
        content += `${name} with age ${age}`;
    }
    res.send(content);
});
app.listen(3000);
console.log('Server is running on port 3000');