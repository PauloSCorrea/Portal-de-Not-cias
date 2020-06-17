module.exports= app => {                   //passa uma função para ser exportada para quem quiser usar
    app.get('/noticias', (req, res) => {   //definimos  para que serve qual o caminho da rota

        var connection=app.config.connection();     //a var "connection" = as configurações de connexão do BD
        var noticiasModel = new app.app.models.NoticiasDAO(connection); //pegamos os metodos do obg NoticiasDAO

        noticiasModel.getNoticias( (error, result) => {     //executamos o metodo getnoticias que busca * as informações da tabela noticias no BD
            res.render('PagNoticia/todasNoticias', {noticias:result});      //renderiza a pag e passa dados

        });
    });
        app.get('/noticia', (req ,res) => {   //definimos  para que serve qual o caminho da rota
    
            var connection = app.config.connection();    //a var "connection" = as configurações de connexão do BD
    
            var noticiasModel = new app.app.models.NoticiasDAO(connection); //pegamos os metodos do obg NoticiasDAO
    
            noticiasModel.getNoticia( (error, result) => { //executamos o metodo getnoticia que buaca uma informações no BD
                res.render('PagNoticia/noticia', {noticia:result});      //renderiza a pag e passa dados
            });
        });
    };