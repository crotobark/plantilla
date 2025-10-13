import {Router} from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = Router();

router.get('/movimientos', async (req, res) => {
    const movimientos = await prisma.movimientos.findMany()
    res.json(movimientos)
});

router.post('/movimientos', async (req, res) => {
    const { tipo, cantidad, productoId } = req.body
    const newMovimeintos = await prisma.movimientos.create({
        data:{
            tipo,
            observaciones,
            cantidad: Number(cantidad),
            producto_id: Number(productoId)
        }
    });
    res.json(newMovimientos)
})
export default router;
