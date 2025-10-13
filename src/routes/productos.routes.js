import { Router } from 'express';
import prisma from '../db.js'; // ✅ sin llaves

const router = Router();

router.get('/productos', async (req, res) => {
  try {
    const productos = await prisma.productos.findMany(); // ✅ modelo singular
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

export default router;
//me refiero a la ruta de notes