import express from 'express';
import autenticar from './seguranca/autenticacao.js';   
import session  from 'express-session';
import verificarUsuarioAutenticado from './seguranca/verificaLogin.js';

const host = '0.0.0.0'
const PORTA = 3000;
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'JP57',
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge: 1000 * 60 * 10

    }
}));

app.get('/login', (requisicao, resposta) => {
    resposta.send(`
        <script>
            alert("Você deve efetuar o login para prosseguir.");
            window.location.href = '/login.html';
        </script>
    `);
});

app.post('/login', autenticar);

app.get('/logout',(requisicao, resposta) =>{
    requisicao.session.autenticado = false;
    resposta.redirect('/login.html');
});

app.use(express.static('./publico'));
app.use(verificarUsuarioAutenticado, express.static('./protegido'));

// Iniciando o servidor
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});