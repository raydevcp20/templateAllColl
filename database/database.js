const mongoose = require('mongoose'); //Chamando o mongoose

//Efetuando a conexão com o banco de dados
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/noderest',{useNewUrlParser: true}).then( () => {
    console.log('Conexão com o banco de dados realizada com sucesso :D')
}).catch( (err) => {
    console.log('Não foi possivel estabelecer coenxão com o banco de dados devido a: '+err)
});


//exportando o modulo do banco de dados

module.exports = mongoose