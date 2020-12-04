const express = require('express') // Importando Express

const app = express(); // Criando aplicação express

const bodyParser = require('body-parser'); // Importando o body-parser

app.use(bodyParser.urlencoded()); // configurando o body-parser
app.use(bodyParser.json());




app.use("/assets", express.static(__dirname + "/assets/"));
app.use("/img", express.static(__dirname + "/img/"));
app.use("/scripts", express.static(__dirname + "/scripts/"));

require('./controllers/authcontroller')(app)


//const session = require('express-session');
//const flash = require('connect-flash');
//const passport = require('passport')
//require('./config/auth')(passport)



/*
//Conectando ao Banco de Dados MongoDB
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/matheus', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log('você conseguiu se conectar ao Banco de dados :D')
}).catch ( (err) => {
    console.log('Você não conseguiu se conectar ao bando de dados por causa do erro: '+err)
});

//Fim da conexão com o banco de dados
*/
//Sessão
/*app.use(session({
    secret:"palavrasecreta",
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

//aqui

app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.erros_msg = req.flash("error_msg")
    next()
})*/



//CONFIGURANDO O MARKO
require('marko/node-require'); //Importando o Marko
var markoExpress = require('marko/express'); // 
app.use(markoExpress());


app.listen (3000, '0.0.0.0', () => {
    console.log('Seu servidor já está conectado a rede')
})
//Fim das importações e configurações
