module.exports.admin = function(app, req ,res) {   //definimos  para que serve qual o caminho da rota
        res.render('PagAdmin/add_noticia', {validacao:{},noticia:{}});      //renderiza a pag e passa dados
    }

module.exports.noticias_salvar = function(app, req, res){     //definimos  para que serve qual o caminho da rota
        var noticia = req.body;         // pegamos as informações que chega na requisição

        req.assert('titulo', 'Título é obrigatório').notEmpty();        //falamos que o campo é obrigatorio
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();        //falamos que o campo é obrigatorio
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);//passamos o tamanho minimo e maximo
        req.assert('autor', 'Autor é obrigatório').notEmpty();        //falamos que o campo é obrigatorio
        req.assert('data_noticia', "Data é obrigatório").notEmpty();        //falamos que o campo é obrigatorio
        req.assert('noticia', 'Notícia é obrigatório').notEmpty();        //falamos que o campo é obrigatorio

        var erros = req.validationErrors();1

        if (erros){
            res.render("PagAdmin/add_noticia",{validacao: erros, noticia: noticia});  // Renderiza a pagina de formulario
            return; //faz o processamento acabar aqui
        }; 

        var connection = app.config.connection();    //a var "connection" = as configurações de connexão do BD
        var noticiasModel = new app.app.models.NoticiasDAO(connection);   //pegamos os metodos do obg NoticiasDAO

        noticiasModel.salvarNoticia(noticia, function(error, result) {   //executamos o metodo salvaNoticia que salva as informações no BD
            res.redirect("/noticias"); // redirecionamos para pag de noticias
        });
};