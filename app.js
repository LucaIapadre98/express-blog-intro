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
            title:"",
            content:"",
            image:"",
            ingredient:["",""]
        }
    ]
});

app.listen(port , () =>{
    console.log("Ascolta la porta http://localhost:" + port );
    
});