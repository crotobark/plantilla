import { Router } from 'express';
import prisma from '../db.js'; // ✅ sin llaves

const router = Router();

router.get('/categories', async (req, res) => {
    const categories = await prisma.categories.findMany(); // ✅ modelo singular
    res.json(categories);
});

router.get('/categories/:id', async (req, res) => {
   res.json("hola");
   /* const { id } = req.params;
    const category = await prisma.categories.findUnique({
        where: { id: Number(id) }
    });
    res.json(category);
});

router.post('/categories', async (req, res) => {
    const newCategory = await prisma.categories.create({
        data: req.body
    });
    res.json(newCategory);*/
});

export default router;
