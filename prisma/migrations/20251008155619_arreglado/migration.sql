/*
  Warnings:

  - You are about to drop the column `hola` on the `products` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "referencia" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "unidad_medida" INTEGER NOT NULL,
    "categoria" TEXT NOT NULL,
    "almacen" TEXT NOT NULL,
    "stock_minimo" INTEGER NOT NULL,
    "stock_actual" INTEGER NOT NULL
);
INSERT INTO "new_products" ("almacen", "categoria", "description", "id", "referencia", "stock_actual", "stock_minimo", "unidad_medida") SELECT "almacen", "categoria", "description", "id", "referencia", "stock_actual", "stock_minimo", "unidad_medida" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
