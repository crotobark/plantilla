import {Router} from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = Router();

router.get('/movimientos', async (req, res) => {
    const movimientos = await prisma.movimientos.findMany()
    res.json(movimientos)
});

//Creamos un movimiento
router.post('/movimientos', async (req, res) => {

    const { tipo, observaciones, cantidad, producto_id } = req.body

    const newMovimientos = await prisma.movimientos.create({
        data:{
            tipo,
            observaciones,
            cantidad: Number(cantidad),
            //Relacionamos el movimiento con el producto mediante la llave foranea producto_id
            Producto: {
                connect: {
                    id: Number(producto_id)
                }
            }
        }
    });
    res.json(newMovimientos)
})
export default router;
