module.exports= app => {                   //passa uma função para ser exportada para quem quiser usar
    app.get('/noticias', (req, res) => {   //definimos  para que serve qual o caminho da rota
        app.app.controllers.noticias.noticias(app, req, res);
    });
    app.get('/noticia', (req ,res) => {   //definimos  para que serve qual o caminho da rota
        app.app.controllers.noticias.noticia(app, req, res);
    });
};