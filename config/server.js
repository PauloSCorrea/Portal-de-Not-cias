var express = require('express');                       // Requerimos o express
var consign = require('consign');                       // Requerimos o consign
var bodyParser = require("body-parser");                // Requerimos o bory-parser
var  expressValidator = require("express-validator");   // Requerimos o express-validator

var app = express();                                    // Executa o express

app.set('view engine','ejs');                           // Fazemos a configuração do motor de tela 
app.set('views','./app/views');                         // Fazemos a configuração da rota da pasta views

app.use(bodyParser.urlencoded({extended: true}));       // Não faso ideia
app.use(expressValidator())                             // Executa o expressValida e para para ser usado pela aplicação

consign()
    .include('app/routes')
    .then('config/connection.js')
    .then('app/models')
    .into(app);

module.exports=app;                                     // Exportamos a variavem "app" com as comfigurações