const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.json({
        messaggio: "Server del mio blog",
    });
});

app.get("/bacheca", (req, res) =>{
    const myblog = [
        {
            title:"Ciambellone",
            image:"/images/ciambellone.jpeg",
            ingredient:["latte","uova","farina","zucchero","lievito","limone"],
            content:"Dividete i tuorli dagli albumi e montate questi ultimi a neve ferma unendo anche il cremor tartaro. In una ciotola a parte montate i tuorli con lo zucchero fino ad ottenere una crema gonfia e spumosa. Quindi aggiungete l’olio e l’acqua. Unite, poco alla volta, anche la farina, amalgamando il composto dal basso verso l’alto per non farlo smontare.Unite il lievito e la scorza grattugiata del limone. Infine unite gli albumi montati a neve, sempre incorporandoli all’impasto con delicatezza e mescolando dal basso verso l’altoVersate il composto in uno stampo a ciambella di alluminio anodizzato da 25 cm di diametro e 11 cm di altezza (lo stampo da Angel Cake per intenderci) e cuocete in forno statico a 180 °C per circa un’ora."
      
        },
        {
            title:"Cracker_barbabietola",
            image:"/images/cracker_barbabietola.jpeg",
            ingredient:["farina","olio","barbabietola","fibre varie"],
            content:"In una ciotola mescolate la farina con i semi di sesamo nero, i semi di chia, il sale, il lievito e il rosmarino, poi aggiungete la purea di barbabietole e l’olio di semi di girasole. Impastate bene il tutto lo stretto necessario per ottenere un panetto morbido e omogeneo. Prelevate metà dell’impasto e stendetelo con un mattarello tra due fogli di carta forno fino a ottenere una sfoglia sottile all’incirca di 1-2 mm. Con la rotella tagliapasta ricavate dei triangoli di circa 6 cm di lato, poi tagliateli ancora a metà in modo da ricavare dei triangoli. Ripetete la stessa operazione anche con l’altra metà dell’impasto. Trasferite i cracker con i loro fogli di carta forno sulle placche da forno e cuoceteli in forno ventilato a 200°C per 18-20 minuti, fino a che risulteranno leggermente dorati. Toglieteli infine dal forno e lasciateli raffreddare completamente prima di gustarli."
        },
        {
            title:"Pane_fritto_dolce",
            image:"/images/pane_fritto_dolce.jpeg",
            ingredient:["latte","uova","pane","zucchero"],
            content:"Per preparare il pane fritto siciliano si può utilizzare ogni tipo di pane, ma il migliore è quello di semola rimacinata che, una volta fritto, diventa anche croccante all’esterno. Preparare questo dolcetto è davvero semplice e in appena mezz’ora potremo gustarlo in famiglia o con gli amici. Tagliamo il pane raffermo a fette e lo passiamo prima nel latte e poi nelle uova sbattute con zucchero e vaniglia. Dopodiché procediamo con la frittura in abbondante olio caldo. Infine tamponiamo il pane per eliminare l’olio in eccesso e lo passiamo subito nello zucchero semolato, in modo che si attacchi bene sulla superficie."
        },
        {
            title:"Pasta_barbabietola",
            image:"/images/pasta_barbabietola.jpeg",
            ingredient:["pasta","barbabietola","olio","sale","pepe","formaggio"],
            content:"Per la crema, ho pelato una piccola barbabietola, tagliata a cubettoni e messa nel bicchiere del mixer con due cucchiai colmi di Parmigiano, qualche foglia di basilico, mezzo bicchiere di olio extravergine di oliva, sale, pepe e 3 gherigli di noce, un mestolo di acqua di cottura della pasta e ho frullato fino a creare una crema densa.Dal gusto molto particolare è da provare per capire quanto è speciale.Nel frattempo ho messo a cuocere in abbondante acqua bollente e salata gli Spaghetti Pasta Armando.Scolato gli spaghetti al dente e conditi con questa crema meravigliosamente colorata e saporita."
        },
        {
            title:"Torta_paesana",
            image:"/images/torta_paesana.jpeg",
            ingredient:["latte","uova","pane raffermo","zucchero","amaretti","arance","cacao in polvere"],
            content:"Scaldate il latte senza bollirlo e a parte tagliate a pezzi il pane. Versate il latte sul pane fino a ricoprirlo e profumate tutto con la scorza di arancia grattugiata, oppure mettete la buccia intera senza parte bianca e poi eliminatela dopo 30 minuti. Coprite e lasciate ammorbidire il pane e raffreddare il latte. Dopo circa un'ora aggiungete a questo composto le uova, lo zucchero, il cacao e gli amaretti sbriciolati. Mescolate e per ultimi aggiungete anche pinoli e uvetta. Sta molto bene anche un cucchiaio di rum per dare ancora più profumo. Imburrate una teglia e spolverizzatela con il cacao amaro prima di versare all'interno il composto. Cuocete a 180° per un'ora in forno statico."
        }
    ]
    res.json(myblog);
});

app.listen(port , () =>{
    console.log("Ascolta la http://localhost:" + port );
});