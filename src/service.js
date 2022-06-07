server.get('/id', (req, resp) => {
    try{
        let resposta = "1";
    resp.send({resposta})
    }
    catch{
        console.error(err = 404);
    }
});

server.get('/nome', (req, resp) => {
    try{
        let resposta = "Batman";
        resp.send({resposta})
    }
    catch{
        console.error(err = 404);
    }
});

server.get('/descricaopoder', (req, resp) => {
    try{
    let resposta = "Nenhum poder :(";
    resp.send({resposta})
    }
    catch{
        console.error(err = 404);
    }
});

server.get('/voa', (req, resp) => {
    try{
        let resposta = "Não";
    resp.send({resposta})
    }
    catch{
        console.error(err = 404);
    }
});