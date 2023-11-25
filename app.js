const bancoD = require ('./conection')
const express = require ('express')
const app = express()


// Mostrando todos os clientes
app.get('/', function (req, res){
    
    const select = 'SELECT * FROM clientes'
    bancoD.query(select ,function (err, result) {

        if(err){ 
            console.log('Erro no Banco de dados: ', err);
        }else {
            res.send({msg:'Lista dos Clientes doguinho', data: result})
        }})

})

app.get('/:id', function (req, res){
    
    const select = 'SELECT * FROM clientes WHERE id = ?'
    bancoD.query(select, [req.params.id] ,function (err, result) {

        if(err){ 
            console.log('Erro no Banco de dados: ', err);
        }else {
            res.send({msg:'Lista dos Clientes doguinho', data: result})
        }})

})

app.listen(8080, function (){
    console.log("O servidor está rodando na porta 8080")
})

