var app = require('./config/server'); // Requerimos as configuração do arquivo server

app.listen(3000, (req, res) => console.log('Server ON!'));  // Usamos o metodo "listen" para fazer com que a
                                                            //  aplicação comece a pergar as requisições que
                                                            //  chega na porta 3000.