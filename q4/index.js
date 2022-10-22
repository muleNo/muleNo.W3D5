const express = require('express');
const app = express();

const port = 9090;

app.get('/',(req, res) =>{
    res.send(`
            <!DOCTYPE html>
            <html lang = "en">
            <head>
                <meta charset = "utf-8">
                <title> Express Assignment </title>
                <link href="css/day.css" rel="stylesheet">
                <link href="css/night.css" rel="stylesheet">
            </head>
            <body>
            <div id = "dynamic"> Greetings!! </div>
            <form action = '/result' method = "post">
                Name <input type = "text" name = "nameText" size="10"/>
                Age <input type = "text" name = "ageText" size="10"/>
                    <input type = "submit" name = "submitBtn" value = "Submit Query"/>
            </form> </body> </html>`);
});

app.use(express.urlencoded()); // the middleware that is used to parse the post body

app.post('/result',(req,res) =>{
    const name = req.body.nameText;
    const age = req.body.ageText;
    let content = "";
    if(!name && !age){
        content += "Please enter both your name and age!";
    }else{
        content = `Your name is ${name} and age is ${age}`;
    }
    res.redirect(303,'/output?name= ${name}&age=${age}');
});

app.get('/output', (req, res) => {
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

app.listen(port, err =>{
    if(err) {
        console.log(err);
    }
    console.log(`My server is listening on port ${port}`);
});
