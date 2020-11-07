const { io } = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');
const bands = new Bands();


bands.addBand(new Band('Enanitos Verdes'));
bands.addBand(new Band('Pentagono'));
bands.addBand(new Band('Timbiriche'));
bands.addBand(new Band('Desorden Público'));

console.log(bands);

//Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente Conectado');
    client.emit('active-bands', bands.getBands());
    client.on('disconnect', () => {
        console.log("Cliente Desconectado");
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!!!', payload);
        io.emit('mensaje', { admin: 'Hi Coders' });
    });


    client.on('vote-band', (payload) => {

            bands.voteBand(payload.id);
            io.emit('active-bands', bands.getBands());

    });
   /*  client.on('emitir-mensaje', (payload) => {
        //console.log(payload);
        client.broadcast.emit('nuevo-mensaje', payload);
    }); */

});