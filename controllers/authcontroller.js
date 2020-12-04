const express = require('express'); //Chamando o express
const bcrypt = require('bcryptjs') //Chamando o bcrypt
const jwt = require('jsonwebtoken') // Chamando JWT
const User = require('../models/user'); // Tranzendo o modulo de usuarios

const authConfig = require('../config/auth.json') //Chamando o Segredo do token

const router = express.Router(); // Criando o router

//Checando se o email já está sendo usado e Criando Usuario

router.post('/register', async (req, res) => {

    const { email } = req.body
    try {
        //Caso o email já tenha sido cadastrado

        if (await User.findOne( {email} ))
        return res.status(400).send({ error: "Esse Usuario já existe" } )

        const user = await User.create(req.body);

        user.senha = undefined;

        return res.redirect("/auth/authenticate");
    } catch (err) {
        return res.status(400).send( {error: "Deu ruim ai"})
    }
});
//Rota pra aceessar o formulario
router.get('/register', (req, res) => {
    res.marko(require('../templates/form.marko'))
})

router.get('/authenticate', (req, res) =>{
    res.marko(require('../templates/login.marko'))
})

//Rota pra acessar a tela de pagamente, vulgo carrinho
router.get('/pagamentos', (req, res) => {
    res.marko(require('../templates/tela-pagamento.marko'));
})

//Rota para tela de produtos

router.get('/produtos', (req, res) => {
    res.marko(require('../templates/produtos.marko'))
})

/*


//Rota pra Acessar o Formulario
router.get('/', (req, res) => {
    res.marko(require('./templates/index.marko'))
})

//Rota para tela de pagamentos

router.get('/pagamentos', (req, res) => {
    res.marko(require('./templates/tela-pagamento.marko'));
})


//Rota para tela de produtos

router.get('/produtos', (req, res) => {
    res.marko(require('./templates/produtos.marko'))
})

//Rota para a tela de login
router.get('/login', (req, res) =>{
    res.marko(require('./templates/login.marko'))
})

router.post('/login', (req, res) => {
    console.log(req.body)
})*/



router.get('/', (req, res) => {
    res.marko(require('../templates/index.marko'))
})


//Criando a rota de registro (Pra acessar o formulario)

router.get('/register', (req, res) => {
    res.marko(require('../templates/cadastro.marko'))
})

//Criando a rota pra acessar a tela de login

router.get('/authenticate', (req, res) => {
    res.marko(require('../templates/login.marko'))
})


//Criando a rota pra tela inicial


//Efetuando o login (Procurando se o email e a senha foram cadastradas)

router.post('/authenticate', async (req, res) => {
    const {email, senha} = req.body

    const user = await User.findOne({ email }).select('+senha');

    // Se o usuario não for encontrado, normalmente email digitado de forma incorreta

    if (!user)
    return res.status(400).send({ error: "Usuario não encontrado"})

    // Caso a senha informada não for a mesma do banco de dados

    if(!await bcrypt.compare(senha, user.senha))
    return res.status(400).send({ error: 'Senha invalida' })

    //Ocultando a senha quando for efetuada a listagem

    user.senha = undefined;

    const token = jwt.sign({id: user.id}, authConfig.secret, {
        expiresIn: 86400,
    })

    //Caso consiga efetuar o login, Será redirecionado para a tela inicial

    res.redirect('/auth/')
})

//Exportando o modulo pra ser utilizado, porém com o prefixo ('/auth')

module.exports = app => app.use('/auth', router)