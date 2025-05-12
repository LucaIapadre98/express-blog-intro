const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.json({
        messaggio: "Server del Mio blog",
    })
});
app.get("/bacheca", (req, res) =>{
    const myblog = [
        {
            title:"Ciambellone",
            content:"",
            ingredient:["latte","uova","farina","zucchero"]
        },
        {
            title:"Cracker_barbabietola",
            content:"",
            ingredient:["latte","uova","farina","zucchero"]
        },
        {
            title:"Pane_fritto_dolce",
            content:"",
            ingredient:["latte","uova","farina","zucchero"]
        },
        {
            title:"Pasta_barbabietola",
            content:"",
            ingredient:["latte","uova","farina","zucchero"]
        },
        {
            title:"Torta_paesana",
            content:"",
            ingredient:["latte","uova","farina","zucchero"]
        }
    ]
    res.json(myblog);
});

app.listen(port , () =>{
    console.log("Ascolta la porta http://localhost:" + port );
    
});