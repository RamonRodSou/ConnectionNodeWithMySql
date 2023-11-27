const bancoD = require ('./conection')
const express = require ('express')
const app = express()


function cadastraUser (nome, email, idade, valor) {

    return [nome, email, idade, valor]
}






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


app.post('/cadastro', function (req, res){
    
    const insert = 'INSERT INTO clientes SET nome=?, email=?, idade=?, valor=?'
    bancoD.query(insert, cadastraUser ('Olivia', 'olivia@gmail.com', 5, 100) ,function (err, result) {

        if(err){ 
            console.log('Erro no Banco de dados: ', err);
        }else {
            res.send({msg:'Lista dos Clientes doguinho', data: result})
        }})

})


app.listen(8080, function (){
    console.log("O servidor está rodando na porta 8080")
})

