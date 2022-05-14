const reservaController = {
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
            reserva_codigo: 1,
            filme_codigo: 1,
            quantidade: 1,
            data_devolucao: "10/05/2022" 
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


module.exports = reservaController;  