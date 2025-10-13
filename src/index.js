import express from 'express';
import usersRoutes from './routes/users.routes.js';
import movimientosRoutes from './routes/movimientos.routes.js';
import productosRoutes from './routes/productos.routes.js';

const app = express();

app.use (express.json());

app.use("/api", usersRoutes);
app.use("/api", movimientosRoutes);
app.use("/api", productosRoutes);

app.listen(3000)
console.log('Server on port', 3000);