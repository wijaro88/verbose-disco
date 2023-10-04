const express = require('express');
const mongoose = require('mongoose');
const server = express();

const PORT = 3000;

const routes = require('./routes');

const URI_MONGO = 'mongodb+srv://wijaro88:wijaro88rootmaster..@cluster0.1iotunr.mongodb.net/myTasks?retryWrites=true&w=majority';

server.use(express.json());
server.use('/api/v1', routes);



const mongoConnect = async () => {
    try {
        
        await mongoose.connect(URI_MONGO);
        console.log('conectamos a la base de datos');

    } catch (error) {
        console.log('no conecta la bd')
    }
};
mongoConnect();

server.listen(PORT, () => {
    console.log(`Funcionando en puerto ${PORT}`);
});