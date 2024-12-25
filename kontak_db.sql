-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for kontak_db
CREATE DATABASE IF NOT EXISTS `kontak_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `kontak_db`;

-- Dumping structure for table kontak_db.contacts
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table kontak_db.contacts: ~6 rows (approximately)
INSERT INTO `contacts` (`id`, `name`, `phone`) VALUES
	(3, 'Beben', '085468234712'),
	(4, 'Zidane', '082784512345'),
	(6, 'Benu', '085132479852'),
	(7, 'Rinu', '082745192432'),
	(8, 'Yuda', '089387123454');

-- Dumping structure for table kontak_db.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table kontak_db.users: ~5 rows (approximately)
INSERT INTO `users` (`id`, `username`, `password`) VALUES
	(1, 'rohman', '$2y$12$IBoPz20meIDgSpd1Ifre6e9P6er7rWk.8XUe8GOAz7WNT601k0asm'),
	(3, 'yono', '$2y$12$f0Pbn7QbKwoANfzqnVcFxOTUxP/pVsuk75/a0rRkJP5.xy2MXI7Y6'),
	(4, 'tes', '$2y$12$M31SOxJEQsBFJ1nRW01HuOe9WvpU4nQfmKT484sIhhGeAc2fqZCnG'),
	(5, 'abc', '$2y$12$Iri5RlqbfW/csn6NuKiqeelAG6aAyT9tOWeoccY0nTe2FRI9wyAL.'),
	(6, 'bara', '$2y$12$qd8A3pN5gN05cT8S9P4NrOKE5.u1/VyqvxV/5mE9ICB398r3ZfjAO'),
	(7, 'bara123', '$2y$12$RW0Gzo9V1xrqMqIWIpUooe5SyBjxd4mPdISHabfBe9j5kB5OqTjzC');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
