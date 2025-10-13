import {Router} from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = Router();

router.get('/movimientos', async (req, res) => {
    const movimientos = await prisma.movimientos.findMany()
    res.json(movimientos)
});

export default router;