const express = require('express');
const path = require('path');


const app = express();


//Path Público

const publicPath = path.resolve( __dirname, 'public');

app.listen(3000, ( err ) =>{

    if( err ) throw new Error(err);
    console.log('Servidor corriendo en puerto!!!', 3000);

});
