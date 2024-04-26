export default function verificarUsuarioAutenticado(requisicao, resposta, next){
    if(requisicao.session.autenticado){
        next();
    }
    else{
        resposta.send(`
        <script>
            alert("Você deve efetuar o login para prosseguir.");
            window.location.href = '/login.html';
        </script>
    `);
    }
}