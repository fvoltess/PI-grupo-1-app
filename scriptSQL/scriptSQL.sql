CREATE DATABASE `food_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `food_db`;
-- MySQL dump 10.13  Distrib 8.0.43, for macos15 (arm64)
--
-- Host: 127.0.0.1    Database: food_db
-- ------------------------------------------------------
-- Server version	9.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int unsigned NOT NULL,
  `user_id` int unsigned NOT NULL,
  `comment` text NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,2,'Muy bueno.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(2,1,3,'Excelente.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(3,1,4,'Genial.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(4,2,2,'Muy bueno.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(5,2,5,'Muy rico.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(6,2,3,'Genial.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(7,3,1,'Lo mejor de toda la página. Increíbles!','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(8,3,4,'Espectaculares, no hay nada igual.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(9,3,5,'Son perfectas, las mejores del mundo.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(10,4,1,'Muy bueno.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(11,4,3,'Excelente.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(12,4,5,'Genial.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(13,5,1,'Muy bueno.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(14,5,2,'Muy rico.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(15,5,4,'Excelente.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(16,6,1,'Muy bueno.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(17,6,2,'Genial.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(18,6,5,'Excelente.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(19,7,1,'Muy bueno.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(20,7,2,'Excelente.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(21,7,3,'Genial.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(22,8,1,'Muy bueno.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(23,8,2,'Genial.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(24,8,5,'Excelente.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(25,9,1,'Muy bueno.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(26,9,3,'Excelente.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(27,9,4,'Genial.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(28,10,1,'Muy bueno.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(29,10,2,'Excelente.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(30,10,3,'Genial.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `image` varchar(250) DEFAULT NULL,
  `name` varchar(200) NOT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'asadoArgentino.jpg','Asado Argentino','Corte de carne asada con chimichurri.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(2,1,'paellaValenciana.jpg','Paella Valenciana','Arroz con mariscos, pollo, conejo y vegetales.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(3,2,'arepasVenezolanas.jpg','Arepas Venezolanas','Tortillas de maíz rellenas con queso y carne mechada.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(4,2,'empanadas.jpg','Empanadas de Carne','Masa frita rellena de carne sazonada.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(5,3,'heladoArtesanal.jpg','Helado Artesanal','Helado hecho a mano con ingredientes frescos.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(6,3,'cevichePeruano.jpg','Ceviche Peruano','Pescado marinado en limón con cebolla y cilantro.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(7,4,'pizzaNapolitana.jpg','Pizza Napolitana','Pizza con tomate, mozzarella fresca y albahaca.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(8,4,'ramen.jpg','Ramen Japonés','Sopa japonesa con fideos, caldo y carne de cerdo.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(9,5,'sushi.jpg','Sushi Japonés','Rollos de arroz con pescado fresco y vegetales.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(10,5,'tacosMexicanos.jpg','Tacos Mexicanos','Tortillas de maíz rellenas de carne, cebolla y cilantro.','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(250) NOT NULL,
  `password` varchar(200) NOT NULL,
  `profile_picture` varchar(250) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'fede@gmail.com','pass123','fede.jpg','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(2,'mili@gmail.com','pass456','mili.png','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(3,'bauti@gmail.com','pass789','bauti.jpeg','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(4,'cristianoronaldo@gmail.com','pass111siuuu','ronaldo.jpg','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL),(5,'leomessi@gmail.com','pass222','messi.png','2025-09-17 19:59:21','2025-09-17 19:59:21',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-17 16:59:54
