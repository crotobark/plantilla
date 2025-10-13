import {Router} from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = Router();

router.get('/categories', async (req, res) => {
    const categories = await prisma.categoria.findMany()
    res.json(categories)
});

export default router;