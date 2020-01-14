const express = require('express');

const routes = require ('./routes/routes');

const app = express();


app.use(express.json()); 
app.use(routes)

app.get('/', (request, response) => {  
    return response.json({message:'Rodando na porta 3000'});  
})

app.listen(3000);

