/*import express from 'express';

import productsRoutes from './routes/productos.routes.js';
import categoriesRoutes from './routes/categories.routes.js';

const app = express();

app.use (express.json());

app.use("/api", productsRoutes);
app.use("/api", categoriesRoutes);

app.listen(3000)
console.log('Server on port', 3000);*/

import express from 'express';
import categoriesRoutes from './routes/categories.routes.js';
import productsRoutes from './routes/productos.routes.js';

const app = express();

app.use(express.json());
app.use('/api', categoriesRoutes);
app.use('/api', productsRoutes);

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));

