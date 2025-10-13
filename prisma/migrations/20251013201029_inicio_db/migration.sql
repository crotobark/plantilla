/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_creacion` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `precio` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the `categoria` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoria` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock_actual` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock_minimo` to the `productos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `productos` DROP FOREIGN KEY `Productos_categoriaId_fkey`;

-- DropIndex
DROP INDEX `Productos_categoriaId_fkey` ON `productos`;

-- AlterTable
ALTER TABLE `productos` DROP COLUMN `categoriaId`,
    DROP COLUMN `fecha_creacion`,
    DROP COLUMN `name`,
    DROP COLUMN `precio`,
    DROP COLUMN `stock`,
    ADD COLUMN `categoria` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `stock_actual` INTEGER NOT NULL,
    ADD COLUMN `stock_minimo` INTEGER NOT NULL;

-- DropTable
DROP TABLE `categoria`;

-- CreateTable
CREATE TABLE `movimientos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `cantidad` INTEGER NOT NULL,
    `observaciones` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `producto_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `producto_id` INTEGER NOT NULL,
    `stock_actual` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `movimientos` ADD CONSTRAINT `movimientos_producto_id_fkey` FOREIGN KEY (`producto_id`) REFERENCES `productos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
