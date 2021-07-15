/* Variables y requires */
const express = require('express');

const app = express();

const port = 4000

const path = require('path')

/* configuraciones */
app.use(express.static('public'))

/* Levantamos servidor */
app.listen( port , () => console.log(`
------------------------------------
Servidor corriendo en el puerto ${port}
== Link ==> http://localhost:${port}
------------------------------------`) )


/* Rutas */
app.get( '/' , (req, res) => res.sendFile(path.join( __dirname, 'views', 'home.html' ) ) )

app.get( '/registrate', (req,res) => res.send('registrate') )

app.get( '/login' , (req, res) => res.send('login') )