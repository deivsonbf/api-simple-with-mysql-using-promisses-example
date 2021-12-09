const { send } = require('express/lib/response');
const mysql = require('../config');


// Rota GET
exports.allUsers = (req, res) => {
    const sql = `SELECT * FROM usuarios;`
    mysql.execute(sql).then((result) => {
        res.status(200).send(result);
    }).catch((error) => {
        res.status(500).send(error);
    })
};

// Rota POST
exports.insertUserOntwoTable = (req, res) => {

    let msg = '';

    const sql1 = `insert into usuarios_ativos(nome , senha) values (? , ?);`

    const sql2 = `insert into usuarios(nome , senha) values (? , ?);`

    var parameter = [req.body.nome, req.body.senha]

    mysql.execute(sql1, parameter).then((result1) => {
        msg += 'Query 1 Executada com sucesso!'
    }).catch((error) => {
        msg += 'Query 1 não Executada! ' + " " + error
    })

    mysql.execute(sql2, parameter).then((result2) => {
        msg += ', Query 2 Executada com sucesso!'
        res.status(200).send(msg)
    }).catch((error) => {
        msg += 'Query 2 não Executada! ' + error
        console.log(msg);
        res.status(500).send(error);
    })

}