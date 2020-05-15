module.exports= app => {
    app.get('/noticias', (req ,res) => {

        var connection=app.config.connection();

        connection.query('select * from noticias', (error, result) =>{
            res.render('PagNoticia/todasNoticias',{noticias:result});
        });
    });
};