const bancoD = require ('./conection')
const express = require ('express')
const app = express()
const body = require ('body-parser')



function cadastraUser (req) {
    const body = req.body
    return [body.nome, body.email, body.idade, body.valor]
}


function atualizarUser (req) {
    const body = req.body
    return [body.nome, body.email, body.idade, body.valor, req.params.id]
}


app.use(body.json())

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
    
    const select = 'SELECT * FROM clientes, id = ?'
    bancoD.query(select, [req.params.id] ,function (err, result) {

        if(err){ 
            console.log('Erro no Banco de dados: ', err);
        }else {
            res.send({msg:'Lista dos Clientes doguinho', data: result})
        }})
})


app.post('/cadastrar', function (req, res){
    
    const insert = 'INSERT INTO clientes SET nome=?, email=?, idade=?, valor=?'
    
    bancoD.query(insert, cadastraUser (req) ,function (err, result) {

        if(err){ 
            console.log('Erro no Banco de dados: ', err);
        }else {
            res.send({msg:'Usuário Cadastrado com sucesso', data: result})
        }})
})

app.put('/atualizar/:id', function (req, res){
    
    const put = 'UPDATE clientes SET nome=?, email=?, idade=?, valor=? WHERE id=?'
    bancoD.query(put, atualizarUser(req), function (err, result) {

        if(err){ 
            console.log('Erro no Banco de dados: ', err);
        }else {
            res.send({msg:'Usuário Atualizado com sucesso', data: result})
        }})
})

app.delete('/delete/:id', function (req, res){
    
    const del = 'DELETE FROM clientes WHERE id=?'
    bancoD.query(del ,[req.params.id], function (err, result) {

        if(err){ 
            console.log('Erro no Banco de dados: ', err);
        }else {
            res.send({msg:'Usuário Deletado com sucesso', data: result})
        }}) 
})


app.listen(8080, function (){
    console.log("O servidor está rodando na porta 8080")
})

