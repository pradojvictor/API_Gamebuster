const filmeController = {
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
            name: 'O Senhor dos Anéis',
            ano :'2001',
            duração: '2h 58m',
            quantidade: 50,
            estoque : 30
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


module.exports = filmeController;        
