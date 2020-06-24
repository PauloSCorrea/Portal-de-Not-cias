module.exports = function (app){
    app.get('/admin', (req, res) => {
        app.app.controllers.admin.admin(app, req, res);
    });
    app.post('/noticias/salvar', (req, res) => {
        app.app.controllers.admin.noticias_salvar(app, req, res);
    });
};