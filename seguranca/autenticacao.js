export default function autenticar(requisicao, resposta) {
    const usuario = requisicao.body.usuario;
    const senha = requisicao.body.senha;
    if (usuario === "Unoeste" && senha === "123") {
        requisicao.session.autenticado = true;
        resposta.redirect('/cadastro.html');
    } 
    else {
        resposta.send(`
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Erro de Autenticação</title>
                <link rel="stylesheet" href="css/estilo.css">
            </head>
            <body>
                <h2 class="erro-usuario">Usuário ou senha inválidos</h2>
                <h2 class="erro-usuario">Efetue Login para prosseguir</h2>
                <button class="login-button" onclick="location.href='login.html';">Fazer Login</button>
            </body>
            </html>
        `);
        resposta.end();
    }
}
