import { Router } from 'express';
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

    if (tipo === "Entrada") {
        const incrementStock = await prisma.productos.update({
            where: {
                id: Number(producto_id)
            },
            data: {
                stock_actual: {
                    increment: Number(cantidad)
                }
            }
        });
        res.json(incrementStock)
    }

    if (tipo === "Salida") {

        const producto = await prisma.productos.findUnique({
            where: {
                id: Number(producto_id)
            }
        });

        const nuevoStock = producto.stock_actual - Number(cantidad);

        if (nuevoStock < 0) {
            return res.status(400).json({ error: "No hay suficiente stock para realizar la salida" });
        }

        const decrementStock = await prisma.productos.update({
            where: {
                id: Number(producto_id)
            },
            data: {
                stock_actual: nuevoStock
            },
        });
        res.json(decrementStock);
    }

  

const newMovimientos = await prisma.movimientos.create({
    data: {
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
