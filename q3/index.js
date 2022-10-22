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

const date = new Date();
const hour = date.getHours();

const path = require('path')

if(hour>=6 && hour<=18){
    app.use('/css', express.static(path.join(__dirname,'css','day.css')))
}else{
    app.use('/css', express.static(path.join(__dirname, 'css','night.css')))
}

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
    res.send(content); // req.body works ONLY IF app.use(express.urlencoded({extended: false})) is set as written above.    
});

app.listen(port, err =>{
    if(err) {
        console.log(err);
    }
    console.log(`My server is listening on port ${port}`);
});
