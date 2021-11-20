const express = require('express');

const server = express();
server.use(express.json());
const enderecos = [];

server.get('/enderecos', (req, res) => {
    return res.json(enderecos);
})


server.post('/enderecos', (req, res) => {
    const { nome, avatar, endereco, horarios } = req.body;
    const novo = { nome, avatar, endereco, horarios };
    enderecos.push(novo);
    return res.json(enderecos);
})

server.put('/enderecos/:index', (req, res) => {
    const { index } = req.params;
    const { nome, avatar, endereco, horarios } = req.body;

    const obj = { nome, avatar, endereco, horarios};

    enderecos[index] = obj;

    return res.json(enderecos)
})

server.delete('/enderecos/:index', (req, res) => {
    const index  = req.params;
    
    enderecos.splice(index, 1);

    return res.json('Deletado');
})

server.listen(3000);