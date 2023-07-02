const express = require ('express');
const path = require ('path')
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use('/static', express .static(path.join(__dirname, 'static')));

//rotas:
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/servicos', function (req, res) {
    res.sendFile(path.join(__dirname, 'servicos.html'));
})

app.get('/empresa', function (req, res) {
    res.sendFile(path.join(__dirname, 'empresa.html'));
})

app.get('/informacoes', function(req, res) {
    res.sendFile(path.join(__dirname, 'informacoes.html'));
})

app.get('/contato', function(req, res) {
    res.sendFile(path.join(__dirname, 'contato.html'));
})


//conexão com banco:
var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'escobodb'
});

app.get('/buscar', function(req, res){
    var query = req.query.query;
    var words = query.split(' '); // Separa a string de consulta em palavras individuais

    var sql = 'SELECT produto, ensaio, norma FROM escopo WHERE';
    var inserts = [];

    // Para cada palavra na consulta, adicione uma cláusula LIKE à consulta SQL
    for(var i = 0; i < words.length; i++) {
        sql += ' (norma LIKE ? OR produto LIKE ? OR ensaio LIKE ?)';
        inserts.push('%' + words[i] + '%', '%' + words[i] + '%', '%' + words[i] + '%'); // O símbolo '%' é usado em SQL para denotar um caractere curinga
        if(i < words.length - 1) {
            sql += ' OR'; // Adicione OR entre cada cláusula LIKE
        }
    }

    connection.query(sql, inserts, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});




app.listen(port, () =>{
    console.log(`rodando em http//localhost:${port}`);
})
