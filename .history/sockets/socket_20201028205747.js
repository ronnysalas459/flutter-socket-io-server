const { io } = require('../index');
const Bands = require('../models/bands');
const bands = new Bands();


//Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente Conectado');
    client.on('disconnect', () => {
        console.log("Cliente Desconectado");
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!!!', payload);
        io.emit('mensaje', { admin: 'Hi Coders' });
    })

    client.on('emitir-mensaje', (payload) => {
        //console.log(payload);
        client.broadcast.emit('nuevo-mensaje', payload);
    });

});