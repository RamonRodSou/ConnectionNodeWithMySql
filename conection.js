const mySql = require('mysql2');

const host = 'localhost'
const user = 'root'
const password = '1383117468'
const database = 'cadastro'

const conection = mySql.createConnection({
    host:host, 
    user: user,
    password: password,
    database: database

 })

 conection.connect( function(err){

    if(err){
        console.log(err)
    }else{
        console.log('Conectado')
    }

    conection.query('SELECT * FROM clientes', function (erro, results, fields){

        if(err){
            console.log(err)
        }else(
            console.log(results)
            // console.log(fields)
        )

    })
 })

 module.exports = conection