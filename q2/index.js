const express = require('express');
const app = express();

const port = 9090;

app.get('/',(req, res) =>{
    res.send(`<form action = '/result' method = "post">
                Name <input type = "text" name = "nameText" size="10"/>
                Age <input type = "text" name = "ageText" size="10"/>
                    <input type = "submit" name = "submitBtn" value = "Submit Query"/>
            </form>`);
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
    res.send(content); // req.body works ONLY IF app.use(express.urlencoded({extended: false})) is set as written above.    
});

app.listen(port, err =>{
    if(err) {
        console.log(err);
    }
    console.log(`My server is listening on port ${port}`);
});
