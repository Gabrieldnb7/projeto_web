const http = require('http');
const conexao = require('sqlite3').verbose();

function cors(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.statusCode = 204; // No content
        res.end();
    }
    return res;
}

let vendedor = []

const servidorWEB = http.createServer(function(req,res){
    res = cors(req, res)
    const banco = new conexao.Database('banco.sqlite3', (err) => {
        if (err) {
            console.error('Erro ao conectar com o banco de dados.', err.message);
        }
        else{
            console.log('Conexão com o banco de dados bem sucedida.')
        }
    })

    res.setHeader('Content-Type', 'application/json')

    if (req.url === '/api'){
        banco.all('SELECT * FROM vendas', (err, rows) => {
        pedaco = ''
        if (err) {
            res.statusCode = 500;
            console.error('Erro ao selecionar usuários:', err.message);
        } else {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            vendedor = JSON.stringify(rows)
            res.end(vendedor)
        }
        });
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({mensagem: 'rota não encontrada.'}))
    }
})

servidorWEB.listen(5000, () => console.log('Servidor está ON'))