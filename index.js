const express = require('express');
const app   = express();
const port = 3000;
const path = require('path');
const usuarioRoute = require("./routes/UsuarioRoute.js"); 

app.use(express.static(path.join(__dirname,"public"))); /*Definindo a pasta estática do express = public*/
app.set('view engine','ejs'); /*express usa como view engine , o ejs.*/
app.use('/usuario',usuarioRoute); /*Quando digitado /usuario,usuarioRoute é chamado*/


app.listen(port,() =>{
    console.log("App rodando na porta:" + port);
});










