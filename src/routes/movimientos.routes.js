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
<<<<<<< HEAD
    const { tipo, cantidad, productoId, observaciones } = req.body
=======
    const { tipo, observaciones, cantidad, producto_id } = req.body
>>>>>>> 9bd27decbeb34046eb7d5a901889f06801dbcc7d
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
