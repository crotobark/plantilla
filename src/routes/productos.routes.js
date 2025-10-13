import { Router } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = Router();

//Obtenemos los productos
router.get('/productos', async (req, res) => {
    const getProductos = await prisma.productos.findMany()
    res.json(getProductos)
});

//Creamos productos
router.post('/productos', async (req, res) => {
    const newProducto = await prisma.productos.create({
        data: req.body
    })
    res.json(newProducto)
})

//Obtener un producto unico
router.get('/productos/:id', async (req, res) => {
    const getProducto = await prisma.productos.findUnique({
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(getProducto)
})

//Eliminar un producto
router.delete('/productos/:id', async (req, res) => {
    const deleteProducto = await prisma.productos.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(deleteProducto)
})

//Actualizar producto
router.put('/productos/:id', async (req, res) => {
    const updateProducto = await prisma.productos.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })
    res.json(updateProducto)
})

export default router;