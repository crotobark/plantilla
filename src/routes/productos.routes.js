import {Router} from 'express';

const router = Router();

router.get('/productos', (req, res) => {
    res.send('Lista de productos');
});

export default router;