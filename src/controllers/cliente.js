const clienteController = {
    index(req,res){                                  
        res.json([]);   
    },
    store(req,res){ 
        res.json(req.body);
    },
    show(req,res){
        const {id} = req.params;
        res.json({
            id,
            name: 'João Victor',
            sobrenome :'Prado de lima',
            telefone: '(86)99516-5801',
            email: 'joaovictor@hotmail.com',
            data_nascimento : "23/04/1996",
            endereco_id : 1
        })
    },
    update(req,res){
        const {id} = req.params;
        res.json({
            id,
            ...(req.body || {}),
        })
    },
    destroy(req,res){
        res.status(204).send("");
    }
}


module.exports = clienteController;        
