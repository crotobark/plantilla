-- CreateTable
CREATE TABLE "products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "referencia" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "unidad_medida" INTEGER NOT NULL,
    "categoria" TEXT NOT NULL,
    "almacen" TEXT NOT NULL,
    "stock_minimo" INTEGER NOT NULL,
    "stock_actual" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "entradas" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "producto_id" BIGINT NOT NULL,
    "fecha" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cantidad" INTEGER NOT NULL,
    "observaciones" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "salidas" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "producto_id" BIGINT NOT NULL,
    "id_detalle_cliente" BIGINT NOT NULL,
    "id_usuario" BIGINT NOT NULL,
    "fecha" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cantidad" INTEGER NOT NULL,
    "observaciones" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "inventario" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "producto_id" BIGINT NOT NULL,
    "stock_actual" INTEGER NOT NULL
);
