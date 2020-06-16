const express = require('express');                 // Requerimos o express
const consign = require('consign');                 // Requerimos o consign
const bodyParser = require("body-parser");          // Requerimos o bory-parser

const app = express();                              // Executamos o express

app.set('view engine','ejs');                       // Fazemos a configuração do motor de tela 
app.set('views','./app/views');                     // Fazemos a configuração da rota da pasta views

app.use(bodyParser.urlencoded({extended: true}));   // Não faso ideia 

consign().include('app/routes').then('config/connection.js').then('app/models').into(app);

module.exports=app;                                 // Exportamos a variavem "app" com as comfigurações