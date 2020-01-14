const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://francielle_adm:eusoudev@cluster0-1ha6j.mongodb.net/estudando?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

app.use(express.json()); 

app.get('/', (request, response) => {  
    return response.json({message:'Rodando na porta 3000'});  
})

app.listen(3000);

