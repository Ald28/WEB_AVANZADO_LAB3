import { Router } from "express"

const router = Router();

//---------------------- LISTADO

router.get('/productos/list', async(req, res)=>{
    try {
        res.render('productos/list');
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
});