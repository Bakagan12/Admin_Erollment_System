-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sta_cruz
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `advisers`
--

DROP TABLE IF EXISTS `advisers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advisers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gen_user_id` int(11) DEFAULT NULL,
  `section_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `gen_user_id` (`gen_user_id`),
  KEY `section_id` (`section_id`),
  CONSTRAINT `advisers_ibfk_1` FOREIGN KEY (`gen_user_id`) REFERENCES `gen_users` (`id`),
  CONSTRAINT `advisers_ibfk_2` FOREIGN KEY (`section_id`) REFERENCES `sections` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advisers`
--

LOCK TABLES `advisers` WRITE;
/*!40000 ALTER TABLE `advisers` DISABLE KEYS */;
INSERT INTO `advisers` VALUES (1,19,1,'2025-04-24 15:06:02','2025-04-24 15:06:02'),(2,20,2,'2025-04-24 15:06:15','2025-04-24 15:06:15');
/*!40000 ALTER TABLE `advisers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `announcements`
--

DROP TABLE IF EXISTS `announcements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `announcements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `send_to_role_id` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcements`
--

LOCK TABLES `announcements` WRITE;
/*!40000 ALTER TABLE `announcements` DISABLE KEYS */;
INSERT INTO `announcements` VALUES (1,'Sample Announcement','The new semester will begin on May 1st, 2025. All students should prepare accordingly.',1,1,0,1,NULL,'2025-03-21 04:57:38','2025-04-23 23:13:40'),(2,'New Semester Announcement','The new semester will begin on May 1st, 2025. All students should prepare accordingly.',1,1,0,1,NULL,'2025-03-21 04:59:37','2025-04-23 23:13:40'),(6,'Orientation Day for New Students','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',12,1,0,NULL,NULL,'2025-04-17 15:59:10','2025-04-23 23:09:28'),(7,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',5,1,0,NULL,NULL,'2025-04-17 16:17:26','2025-04-24 07:47:14'),(8,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',13,1,0,NULL,NULL,'2025-04-17 16:23:34','2025-04-24 07:47:14'),(12,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',13,1,0,NULL,NULL,'2025-04-17 16:34:47','2025-04-24 07:47:14'),(13,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',13,1,0,NULL,NULL,'2025-04-17 16:35:52','2025-04-24 07:47:14'),(14,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',13,1,0,NULL,NULL,'2025-04-17 16:39:02','2025-04-24 07:47:14'),(19,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',13,1,0,NULL,NULL,'2025-04-17 16:39:46','2025-04-24 07:47:14'),(20,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',13,1,0,NULL,NULL,'2025-04-17 16:40:00','2025-04-24 07:47:14'),(21,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',13,1,0,NULL,NULL,'2025-04-17 16:40:07','2025-04-24 07:47:14'),(22,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',1,1,0,NULL,NULL,'2025-04-17 16:40:07','2025-04-24 07:47:14'),(23,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',2,1,0,NULL,NULL,'2025-04-17 16:40:07','2025-04-24 07:47:14'),(24,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',3,1,0,NULL,NULL,'2025-04-17 16:40:07','2025-04-24 07:47:14'),(25,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',4,1,0,NULL,NULL,'2025-04-17 16:40:07','2025-04-24 07:47:14'),(26,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',5,1,0,NULL,NULL,'2025-04-17 16:40:07','2025-04-24 07:47:14'),(27,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',6,1,0,NULL,NULL,'2025-04-17 16:40:07','2025-04-24 07:47:14'),(28,'Compulsory','All new students are required to attend the orientation on May 5, 2025 at the main auditorium.',7,1,0,NULL,NULL,'2025-04-17 16:40:07','2025-04-24 07:47:14'),(41,'Important System Update','We will be updating the system on 2025-04-30. Please be prepared for service downtime during this period.',8,NULL,0,NULL,NULL,'2025-04-25 11:13:33','2025-04-25 12:09:11'),(42,'Important System Update','We will be updating the system on 2025-04-30. Please be prepared for service downtime during this period.',9,NULL,0,NULL,NULL,'2025-04-25 11:13:50','2025-04-25 12:09:11'),(43,'Important System Update','We will be updating the system on 2025-04-30. Please be prepared for service downtime during this period.',10,NULL,0,NULL,NULL,'2025-04-25 11:13:54','2025-04-25 12:09:11'),(44,'Important System Update','We will be updating the system on 2025-04-30. Please be prepared for service downtime during this period.',11,NULL,0,NULL,NULL,'2025-04-25 11:14:10','2025-04-25 12:09:11'),(45,'Important System Update','We will be updating the system on 2025-04-30. Please be prepared for service downtime during this period.',12,NULL,0,NULL,NULL,'2025-04-25 11:14:20','2025-04-25 12:09:11'),(46,'Important System Update','We will be updating the system on 2025-04-30. Please be prepared for service downtime during this period.',14,NULL,0,NULL,NULL,'2025-04-25 11:14:24','2025-04-25 12:09:11'),(47,'Important System Update','We will be updating the system on 2025-04-30. Please be prepared for service downtime during this period.',15,NULL,0,NULL,NULL,'2025-04-25 11:21:14','2025-04-25 12:09:11'),(56,NULL,NULL,2,NULL,0,NULL,NULL,'2025-04-25 11:48:16','2025-04-25 11:48:16'),(57,NULL,NULL,2,NULL,0,NULL,NULL,'2025-04-25 11:48:38','2025-04-25 11:48:38'),(58,'Important System Update','We will be updating the system on 2025-04-30. Please be prepared for service downtime during this period.',2,NULL,0,NULL,NULL,'2025-04-25 11:49:01','2025-04-25 11:49:01'),(63,'wdasd','asdczc',13,NULL,0,NULL,NULL,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(64,'wdasdasczxc','asdczcaczxc',12,NULL,0,NULL,NULL,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(68,'asczxc','asczxc',9,NULL,0,NULL,NULL,'2025-04-25 12:26:03','2025-04-25 12:26:03'),(69,'asczxc','asczxc',3,NULL,0,NULL,NULL,'2025-04-25 12:26:24','2025-04-25 12:26:24');
/*!40000 ALTER TABLE `announcements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classification`
--

DROP TABLE IF EXISTS `classification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `is_updated_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classification`
--

LOCK TABLES `classification` WRITE;
/*!40000 ALTER TABLE `classification` DISABLE KEYS */;
INSERT INTO `classification` VALUES (1,'Kinder',0,NULL,'2025-02-06 09:53:19','2025-02-06 09:53:19'),(2,'Elementary',0,NULL,'2025-02-06 09:53:19','2025-02-06 09:53:19'),(3,'Highschool',0,NULL,'2025-02-06 09:53:19','2025-02-06 09:53:19');
/*!40000 ALTER TABLE `classification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clinic_conditions`
--

DROP TABLE IF EXISTS `clinic_conditions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clinic_conditions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `condition_name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clinic_conditions`
--

LOCK TABLES `clinic_conditions` WRITE;
/*!40000 ALTER TABLE `clinic_conditions` DISABLE KEYS */;
INSERT INTO `clinic_conditions` VALUES (1,1,'awdasdawsd','321321',0,'2025-04-16 19:07:12','2025-04-16 19:42:41'),(2,123,'Asthma','Chronic respiratory condition',0,'2025-04-16 19:38:43','2025-04-16 19:38:43'),(3,1,'awdasd','ddd',1,'2025-04-16 19:39:16','2025-04-16 19:42:59'),(4,4,'awdasdawsd','321321',0,'2025-04-16 21:07:32','2025-04-16 21:07:32'),(5,5,'awdasdawsd','321321',0,'2025-04-16 21:08:30','2025-04-16 21:08:30'),(6,1,'awdasdawsd','321321',0,'2025-04-16 21:08:36','2025-04-16 21:08:36'),(7,0,NULL,NULL,NULL,'2025-04-23 20:44:44','2025-04-23 20:44:44');
/*!40000 ALTER TABLE `clinic_conditions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clinic_inventory`
--

DROP TABLE IF EXISTS `clinic_inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clinic_inventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_name` varchar(100) DEFAULT NULL,
  `quantity_available` int(11) DEFAULT NULL,
  `unit` varchar(50) DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `is_deleted` int(11) DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clinic_inventory`
--

LOCK TABLES `clinic_inventory` WRITE;
/*!40000 ALTER TABLE `clinic_inventory` DISABLE KEYS */;
INSERT INTO `clinic_inventory` VALUES (1,'sawdasd',111,'secret','2026-01-01',0,'2025-04-13 01:58:10','2025-04-14 00:57:37'),(2,'asd',0,'asd','0000-00-00',1,'2025-04-14 00:30:24','2025-04-14 00:30:24'),(3,'asd',0,'asd','0000-00-00',1,'2025-04-14 00:30:28','2025-04-14 00:30:28'),(4,'Amoxicillin',100,'capsule','2026-01-01',0,'2025-04-14 00:35:22','2025-04-14 00:35:22'),(5,'Amoxicillin',100,'capsule','2026-01-01',1,'2025-04-14 00:39:26','2025-04-14 00:58:34'),(6,'Amoxicillin',100,'capsule','2026-01-01',0,'2025-04-14 00:39:41','2025-04-14 00:39:41'),(7,'Amoxicillin',100,'capsule','2026-01-01',0,'2025-04-14 00:44:49','2025-04-14 00:44:49'),(8,'Amoxicillin',100,'capsule','2026-01-01',0,'2025-04-14 00:44:52','2025-04-14 00:44:52'),(9,'Amoxicillin',100,'capsule','2026-01-01',0,'2025-04-14 00:44:56','2025-04-14 00:44:56'),(10,'Amoxicillin',100,'capsule','2026-01-01',0,'2025-04-14 00:50:39','2025-04-14 00:50:39'),(11,'Amoxicillin',100,'capsule','2026-01-01',0,'2025-04-14 00:50:42','2025-04-14 00:50:42'),(12,'Amoxicillin',100,'capsule','2026-01-01',0,'2025-04-14 00:53:46','2025-04-14 00:53:46');
/*!40000 ALTER TABLE `clinic_inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clinic_logs`
--

DROP TABLE IF EXISTS `clinic_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clinic_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `activity_type` varchar(100) DEFAULT NULL,
  `incident_description` varchar(255) DEFAULT NULL,
  `treatment` varchar(255) DEFAULT NULL,
  `incident_status` enum('Reported','Ongoing','Resolved') DEFAULT NULL,
  `is_deleted` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clinic_logs`
--

LOCK TABLES `clinic_logs` WRITE;
/*!40000 ALTER TABLE `clinic_logs` DISABLE KEYS */;
INSERT INTO `clinic_logs` VALUES (1,1,'ddasd','asd on wasds','asd and bandage','',0,'2025-04-13 19:17:16','2025-04-14 03:17:16'),(2,1,'ddasd','asd on wasds','asd and bandage','',0,'2025-04-13 19:17:18','2025-04-14 03:17:18');
/*!40000 ALTER TABLE `clinic_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clinic_medications_given`
--

DROP TABLE IF EXISTS `clinic_medications_given`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clinic_medications_given` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `visit_id` int(11) DEFAULT NULL,
  `inventory_item_id` int(11) DEFAULT NULL,
  `quantity_given` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `visit_id` (`visit_id`),
  KEY `inventory_item_id` (`inventory_item_id`),
  CONSTRAINT `clinic_medications_given_ibfk_1` FOREIGN KEY (`visit_id`) REFERENCES `clinic_visits` (`id`) ON DELETE CASCADE,
  CONSTRAINT `clinic_medications_given_ibfk_2` FOREIGN KEY (`inventory_item_id`) REFERENCES `clinic_inventory` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clinic_medications_given`
--

LOCK TABLES `clinic_medications_given` WRITE;
/*!40000 ALTER TABLE `clinic_medications_given` DISABLE KEYS */;
/*!40000 ALTER TABLE `clinic_medications_given` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clinic_visits`
--

DROP TABLE IF EXISTS `clinic_visits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clinic_visits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `visit_date` datetime DEFAULT current_timestamp(),
  `reason` text DEFAULT NULL,
  `treatment_given` text DEFAULT NULL,
  `nurse_notes` text DEFAULT NULL,
  `referal_status` int(11) DEFAULT 0,
  `followup_status` int(11) DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `clinic_visits_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clinic_visits`
--

LOCK TABLES `clinic_visits` WRITE;
/*!40000 ALTER TABLE `clinic_visits` DISABLE KEYS */;
INSERT INTO `clinic_visits` VALUES (3,4,'2025-04-14 00:00:00','Recurring stomach ache','Antacid','Referred for further gastro check-up',0,0,'2025-04-14 02:26:43','2025-04-14 02:26:43');
/*!40000 ALTER TABLE `clinic_visits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enrollment`
--

DROP TABLE IF EXISTS `enrollment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enrollment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) DEFAULT NULL,
  `term_id` int(11) DEFAULT NULL,
  `grade_level_id` int(11) DEFAULT NULL,
  `section_id` int(11) DEFAULT NULL,
  `semester_level_id` int(11) DEFAULT NULL,
  `subject_id` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `student_status_id` int(11) DEFAULT 0,
  `is_confirmed_cashier` int(11) DEFAULT 0,
  `is_passed` int(11) DEFAULT 0,
  `is_confirmed_guidance` int(11) DEFAULT NULL,
  `is_confirmed_registrar` int(11) DEFAULT 0,
  `is_enrolled` int(11) DEFAULT 0,
  `is_deleted` int(11) DEFAULT NULL,
  `is_deleted_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `is_deleted_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_id` (`student_id`),
  KEY `course_id` (`course_id`),
  KEY `semester_level_id` (`semester_level_id`),
  KEY `upcomming_grade_level_id` (`grade_level_id`),
  KEY `section_id` (`section_id`),
  KEY `status_id` (`status_id`),
  CONSTRAINT `enrollment_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  CONSTRAINT `enrollment_ibfk_10` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  CONSTRAINT `enrollment_ibfk_12` FOREIGN KEY (`course_id`) REFERENCES `subjects` (`id`),
  CONSTRAINT `enrollment_ibfk_13` FOREIGN KEY (`semester_level_id`) REFERENCES `term` (`id`),
  CONSTRAINT `enrollment_ibfk_16` FOREIGN KEY (`grade_level_id`) REFERENCES `grade_level` (`id`),
  CONSTRAINT `enrollment_ibfk_17` FOREIGN KEY (`section_id`) REFERENCES `sections` (`id`),
  CONSTRAINT `enrollment_ibfk_18` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`),
  CONSTRAINT `enrollment_ibfk_3` FOREIGN KEY (`course_id`) REFERENCES `subjects` (`id`),
  CONSTRAINT `enrollment_ibfk_4` FOREIGN KEY (`semester_level_id`) REFERENCES `term` (`id`),
  CONSTRAINT `enrollment_ibfk_7` FOREIGN KEY (`grade_level_id`) REFERENCES `grade_level` (`id`),
  CONSTRAINT `enrollment_ibfk_8` FOREIGN KEY (`section_id`) REFERENCES `sections` (`id`),
  CONSTRAINT `enrollment_ibfk_9` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enrollment`
--

LOCK TABLES `enrollment` WRITE;
/*!40000 ALTER TABLE `enrollment` DISABLE KEYS */;
INSERT INTO `enrollment` VALUES (2,27,NULL,1,1,NULL,NULL,1,1,1,1,0,1,1,1,0,NULL,NULL,NULL,'2025-04-17 18:47:18','2025-04-27 17:37:05'),(4,29,NULL,1,6,NULL,NULL,1,1,1,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-17 19:05:17','2025-04-17 19:05:17'),(10,35,NULL,1,5,1,NULL,3,1,1,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-19 09:33:17','2025-04-19 09:33:17'),(12,37,NULL,1,5,1,NULL,3,1,1,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-19 09:44:03','2025-04-19 09:44:03'),(13,38,NULL,1,5,1,NULL,3,1,1,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-19 09:44:20','2025-04-23 11:23:16'),(14,39,NULL,1,5,1,NULL,3,1,1,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-19 09:44:42','2025-04-23 11:23:16'),(17,42,NULL,1,5,1,NULL,3,1,1,1,0,0,1,1,0,NULL,NULL,NULL,'2025-04-19 11:40:36','2025-04-27 18:59:20'),(18,43,NULL,1,1,1,1,1,1,1,1,1,1,1,0,0,NULL,NULL,NULL,'2025-04-19 14:28:49','2025-04-27 20:26:47'),(19,44,NULL,1,1,1,1,1,1,1,1,1,1,1,0,0,NULL,NULL,NULL,'2025-04-19 15:01:21','2025-04-27 20:26:47'),(20,45,NULL,1,1,1,1,1,1,1,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-19 15:11:31','2025-04-23 11:23:16'),(21,46,NULL,NULL,NULL,NULL,NULL,NULL,1,0,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-23 18:03:35','2025-04-23 18:03:35'),(22,47,NULL,NULL,NULL,NULL,NULL,NULL,1,0,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-23 18:05:53','2025-04-23 18:05:53'),(32,49,NULL,NULL,NULL,NULL,NULL,NULL,1,0,1,0,0,0,0,0,NULL,NULL,NULL,'2025-04-27 18:37:35','2025-04-27 20:58:05'),(33,50,NULL,NULL,NULL,NULL,NULL,NULL,1,0,1,0,0,0,0,0,NULL,NULL,NULL,'2025-04-27 18:39:31','2025-04-27 20:32:54'),(34,51,NULL,NULL,NULL,NULL,NULL,NULL,1,1,1,0,0,0,0,0,NULL,NULL,NULL,'2025-04-27 18:42:06','2025-04-27 20:58:05'),(35,52,NULL,NULL,NULL,NULL,NULL,NULL,1,3,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-27 20:03:47','2025-04-27 20:03:47'),(36,53,NULL,NULL,NULL,NULL,NULL,NULL,1,1,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-27 20:06:22','2025-04-27 20:06:22'),(37,54,NULL,NULL,NULL,NULL,NULL,NULL,1,1,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-27 20:08:53','2025-04-27 20:08:53'),(38,55,NULL,NULL,6,NULL,NULL,NULL,1,3,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-27 20:11:14','2025-04-27 20:11:14'),(39,56,NULL,0,4,NULL,NULL,NULL,1,3,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-27 20:14:12','2025-04-27 20:14:12'),(40,57,NULL,1,1,NULL,NULL,NULL,1,3,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-27 20:16:55','2025-04-27 20:16:55'),(41,58,NULL,5,9,NULL,NULL,NULL,1,3,0,0,0,0,0,0,NULL,NULL,NULL,'2025-04-27 20:17:52','2025-04-27 20:17:52');
/*!40000 ALTER TABLE `enrollment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enrollment_status`
--

DROP TABLE IF EXISTS `enrollment_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enrollment_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `is_deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enrollment_status`
--

LOCK TABLES `enrollment_status` WRITE;
/*!40000 ALTER TABLE `enrollment_status` DISABLE KEYS */;
INSERT INTO `enrollment_status` VALUES (1,'Pending',0,NULL,'2025-02-12 03:28:23','2025-02-12 03:28:23'),(2,'Enrolled',0,NULL,'2025-02-12 03:28:23','2025-02-12 03:28:23');
/*!40000 ALTER TABLE `enrollment_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `error_log`
--

DROP TABLE IF EXISTS `error_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `error_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `detail` varchar(255) NOT NULL,
  `pointer` varchar(255) NOT NULL,
  `attribute` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `error_log`
--

LOCK TABLES `error_log` WRITE;
/*!40000 ALTER TABLE `error_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `error_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `father`
--

DROP TABLE IF EXISTS `father`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `father` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) DEFAULT NULL,
  `middle_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `suffix_id` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `contact_no` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `occupation` varchar(100) DEFAULT NULL,
  `occ_address` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `father`
--

LOCK TABLES `father` WRITE;
/*!40000 ALTER TABLE `father` DISABLE KEYS */;
INSERT INTO `father` VALUES (11,'Jose','Dela','Cruz',NULL,NULL,'09128889900','123 Rizal St, Danao City',NULL,'Engineer',NULL,'2025-04-11 10:55:13','2025-04-11 10:55:13'),(12,'Jose','Dela','Cruz',NULL,NULL,'09128889900','123 Rizal St, Danao City',NULL,'Engineer',NULL,'2025-04-11 11:00:20','2025-04-11 11:00:20'),(13,'Jose','Dela','Cruz',NULL,NULL,'09128889900','123 Rizal St, Danao City',NULL,'Engineer',NULL,'2025-04-11 11:02:40','2025-04-11 11:02:40'),(14,'Jose','Dela','Cruz',NULL,NULL,'09128889900','123 Rizal St, Danao City',NULL,'Engineer',NULL,'2025-04-11 11:12:49','2025-04-11 11:12:49'),(15,'Jose','Dela','Cruz',NULL,NULL,'09128889900','123 Rizal St, Danao City',NULL,'Engineer',NULL,'2025-04-11 11:14:19','2025-04-11 11:14:19'),(16,'Jose','Dela','Cruz',NULL,NULL,'09128889900','123 Rizal St, Danao City',NULL,'Engineer',NULL,'2025-04-11 11:16:12','2025-04-11 11:16:12'),(17,'Jose','Dela','Cruz',NULL,NULL,'09128889900','123 Rizal St, Danao City',NULL,'Engineer',NULL,'2025-04-11 11:55:12','2025-04-11 11:55:12'),(18,'Jose','Dela','Cruz',NULL,NULL,'09128889900','123 Rizal St, Danao City',NULL,'Engineer',NULL,'2025-04-11 12:03:00','2025-04-11 12:03:00'),(19,'Jose','Dela','Cruz',NULL,NULL,'09128889900','123 Rizal St, Danao City',NULL,'Engineer',NULL,'2025-04-12 02:54:22','2025-04-12 02:54:22'),(22,'Jose','Reyes','Cruz',NULL,NULL,'09996665555','Danao City',NULL,'Mechanic',NULL,'2025-04-12 17:02:39','2025-04-12 17:02:39'),(23,'Jose','Reyes','Cruz',NULL,NULL,'09996665555','Danao City',NULL,'Mechanic',NULL,'2025-04-12 17:08:43','2025-04-12 17:08:43'),(24,'Jose','Reyes','Cruz',NULL,NULL,'09996665555','Danao City',NULL,'Mechanic',NULL,'2025-04-12 17:08:44','2025-04-12 17:08:44'),(27,'John','B','Doe',NULL,NULL,'09184567890','123 Main Street, Sandayong Sur',NULL,'Engineer',NULL,'2025-04-13 22:13:14','2025-04-13 22:13:14'),(28,'John','B','Doe',NULL,NULL,'09184567890','123 Main Street, Sandayong Sur',NULL,'Engineer',NULL,'2025-04-13 22:15:54','2025-04-13 22:15:54'),(29,'John','B','Doe',NULL,NULL,'09184567890','123 Main Street, Sandayong Sur',NULL,'Engineer',NULL,'2025-04-13 22:19:01','2025-04-13 22:19:01'),(31,'Jose','P','Durano',NULL,NULL,'09987654321','Sandayong Sur, Danao City',NULL,'Engineer',NULL,'2025-04-13 22:25:07','2025-04-13 22:25:07'),(33,'Jose','P','Durano',NULL,NULL,'09987654321','Sandayong Sur, Danao City',NULL,'Engineer',NULL,'2025-04-13 22:49:14','2025-04-13 22:49:14'),(35,'Jose','Garcia','Cruz',NULL,NULL,'09113334455','Purok 3, Sandayong Sur, Danao City',NULL,'Carpenter',NULL,'2025-04-17 18:47:18','2025-04-17 18:47:18'),(37,'Jose','Reyes','Dela Rosa',NULL,NULL,'09123456781','Danao City, Cebu',NULL,'Driver',NULL,'2025-04-17 19:05:17','2025-04-17 19:05:17'),(43,'Jose','Reyes','Torre',NULL,NULL,'09111222333','Sandayong Sur, Danao City',NULL,'Tricycle Driver',NULL,'2025-04-19 09:33:17','2025-04-19 09:33:17'),(45,'Jose','Reyes','Torre',NULL,NULL,'09111222333','Sandayong Sur, Danao City',NULL,'Tricycle Driver',NULL,'2025-04-19 09:44:03','2025-04-19 09:44:03'),(46,'Jose','Reyes','Torre',NULL,NULL,'09111222333','Sandayong Sur, Danao City',NULL,'Tricycle Driver',NULL,'2025-04-19 09:44:20','2025-04-19 09:44:20'),(47,'Jose','Reyes','Torre',NULL,NULL,'09111222333','Sandayong Sur, Danao City',NULL,'Tricycle Driver',NULL,'2025-04-19 09:44:42','2025-04-19 09:44:42'),(50,'Jose','Reyes','Torre',NULL,NULL,'09111222333','Sandayong Sur, Danao City',NULL,'Tricycle Driver',NULL,'2025-04-19 11:40:36','2025-04-19 11:40:36'),(51,'Casey','Ezekiel Parks','French',NULL,NULL,'+1 (147) 129-5248','Enim sit cupidatat q',NULL,NULL,NULL,'2025-04-19 14:28:49','2025-04-19 14:28:49'),(52,'Imani','Tanner Stuart','Santos',NULL,NULL,'+1 (974) 338-8229','Itaque exercitatione',NULL,NULL,NULL,'2025-04-19 15:01:21','2025-04-19 15:01:21'),(53,'Charles','Justina Carney','Kramer',NULL,NULL,'+1 (561) 774-6293','Eum enim blanditiis ',NULL,NULL,NULL,'2025-04-19 15:11:31','2025-04-19 15:11:31'),(54,'','','',NULL,NULL,'','',NULL,NULL,NULL,'2025-04-23 18:03:35','2025-04-23 18:03:35'),(55,'','','',NULL,NULL,'','',NULL,NULL,NULL,'2025-04-23 18:05:53','2025-04-23 18:05:53'),(57,'Harlan','Gisela Ortiz','Atkins',NULL,NULL,'+1 (961) 724-4163','Sunt tempora tempore',NULL,NULL,NULL,'2025-04-27 18:37:35','2025-04-27 18:37:35'),(58,'Christian','Kasper Moran','Lambert',NULL,NULL,'+1 (791) 754-7344','Consequuntur ea inci',NULL,NULL,NULL,'2025-04-27 18:39:31','2025-04-27 18:39:31'),(59,'Joan','Dominique Hall','Norman',NULL,NULL,'+1 (942) 244-4304','Hic impedit in dolo',NULL,NULL,NULL,'2025-04-27 18:42:06','2025-04-27 18:42:06'),(60,'Francis','Levi Mcfarland','Wynn',NULL,NULL,'+1 (886) 272-2187','Voluptas nostrud et ',NULL,NULL,NULL,'2025-04-27 20:03:47','2025-04-27 20:03:47'),(61,'Ima','Christine Justice','Zimmerman',NULL,NULL,'+1 (579) 555-2894','Reiciendis deserunt ',NULL,NULL,NULL,'2025-04-27 20:06:22','2025-04-27 20:06:22'),(62,'Hope','Holmes Huffman','Weaver',NULL,NULL,'+1 (849) 184-6698','Molestiae totam eum ',NULL,NULL,NULL,'2025-04-27 20:08:53','2025-04-27 20:08:53'),(63,'Rosalyn','Upton Potts','Doyle',NULL,NULL,'+1 (194) 925-9327','Accusamus ex illo no',NULL,NULL,NULL,'2025-04-27 20:11:14','2025-04-27 20:11:14'),(64,'Britanney','Quamar Moses','Hendricks',NULL,NULL,'+1 (709) 199-2802','Quisquam voluptatem ',NULL,NULL,NULL,'2025-04-27 20:14:12','2025-04-27 20:14:12'),(65,'Silas','Colleen Gould','Petty',NULL,NULL,'+1 (512) 287-9744','Esse est cupiditate',NULL,NULL,NULL,'2025-04-27 20:16:55','2025-04-27 20:16:55'),(66,'Montana','Brendan Hammond','Palmer',NULL,NULL,'+1 (373) 262-6931','Nostrud qui laboris ',NULL,NULL,NULL,'2025-04-27 20:17:52','2025-04-27 20:17:52');
/*!40000 ALTER TABLE `father` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gen_user_announcement`
--

DROP TABLE IF EXISTS `gen_user_announcement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gen_user_announcement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gen_user_id` int(11) DEFAULT NULL,
  `announcement_id` int(11) DEFAULT NULL,
  `user_role_id` int(11) DEFAULT 0,
  `is_read` int(11) DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_announcement_id` (`announcement_id`),
  CONSTRAINT `fk_announcement_id` FOREIGN KEY (`announcement_id`) REFERENCES `announcements` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gen_user_announcement`
--

LOCK TABLES `gen_user_announcement` WRITE;
/*!40000 ALTER TABLE `gen_user_announcement` DISABLE KEYS */;
INSERT INTO `gen_user_announcement` VALUES (1,3,13,0,0,'2025-04-17 16:35:52','2025-04-17 16:35:52'),(2,19,13,0,0,'2025-04-17 16:35:52','2025-04-17 16:35:52'),(3,20,13,0,0,'2025-04-17 16:35:52','2025-04-17 16:35:52'),(4,21,13,0,0,'2025-04-17 16:35:52','2025-04-17 16:35:52'),(5,22,13,0,0,'2025-04-17 16:35:52','2025-04-17 16:35:52'),(6,23,13,0,0,'2025-04-17 16:35:52','2025-04-17 16:35:52'),(7,25,13,0,0,'2025-04-17 16:35:52','2025-04-17 16:35:52'),(8,27,13,0,0,'2025-04-17 16:35:52','2025-04-17 16:35:52'),(9,2,14,2,0,'2025-04-17 16:39:02','2025-04-17 16:39:02'),(10,3,19,12,0,'2025-04-17 16:39:46','2025-04-17 16:39:46'),(11,19,19,12,0,'2025-04-17 16:39:46','2025-04-17 16:39:46'),(12,20,19,12,0,'2025-04-17 16:39:46','2025-04-17 16:39:46'),(13,21,19,12,0,'2025-04-17 16:39:46','2025-04-17 16:39:46'),(14,22,19,12,0,'2025-04-17 16:39:46','2025-04-17 16:39:46'),(15,23,19,12,0,'2025-04-17 16:39:46','2025-04-17 16:39:46'),(16,25,19,12,0,'2025-04-17 16:39:46','2025-04-17 16:39:46'),(17,27,19,12,0,'2025-04-17 16:39:46','2025-04-17 16:39:46'),(18,24,20,13,0,'2025-04-17 16:40:00','2025-04-17 16:40:00'),(19,26,20,13,0,'2025-04-17 16:40:00','2025-04-17 16:40:00'),(20,28,20,13,0,'2025-04-17 16:40:00','2025-04-17 16:40:00'),(21,24,21,13,0,'2025-04-17 16:40:07','2025-04-17 16:40:07'),(22,26,21,13,0,'2025-04-17 16:40:07','2025-04-17 16:40:07'),(23,28,21,13,0,'2025-04-17 16:40:07','2025-04-17 16:40:07'),(24,1,43,1,0,'2025-04-25 11:13:54','2025-04-25 11:13:54'),(25,1,44,1,0,'2025-04-25 11:14:10','2025-04-25 11:14:10'),(26,2,45,2,0,'2025-04-25 11:14:20','2025-04-25 11:14:20'),(27,66,45,2,0,'2025-04-25 11:14:20','2025-04-25 11:14:20'),(28,2,56,2,0,'2025-04-25 11:48:16','2025-04-25 11:48:16'),(29,66,56,2,0,'2025-04-25 11:48:16','2025-04-25 11:48:16'),(30,2,57,2,0,'2025-04-25 11:48:38','2025-04-25 11:48:38'),(31,66,57,2,0,'2025-04-25 11:48:38','2025-04-25 11:48:38'),(32,2,58,2,0,'2025-04-25 11:49:01','2025-04-25 11:49:01'),(33,66,58,2,0,'2025-04-25 11:49:01','2025-04-25 11:49:01'),(34,24,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(35,26,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(36,28,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(37,33,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(38,35,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(39,41,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(40,45,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(41,47,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(42,49,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(43,53,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(44,55,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(45,57,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(46,59,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(47,61,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(48,63,63,13,0,'2025-04-25 12:07:41','2025-04-25 12:07:41'),(49,3,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(50,19,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(51,20,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(52,21,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(53,22,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(54,23,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(55,25,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(56,27,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(57,32,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(58,34,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(59,40,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(60,44,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(61,46,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(62,48,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(63,52,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(64,54,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(65,56,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(66,58,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(67,60,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(68,62,64,12,0,'2025-04-25 12:08:30','2025-04-25 12:08:30'),(69,57,68,9,0,'2025-04-25 12:26:03','2025-04-25 12:26:03'),(70,63,69,3,0,'2025-04-25 12:26:24','2025-04-25 12:26:24');
/*!40000 ALTER TABLE `gen_user_announcement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gen_user_roles`
--

DROP TABLE IF EXISTS `gen_user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gen_user_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gen_user_id` int(11) DEFAULT NULL,
  `user_role_id` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `gen_user_id` (`gen_user_id`),
  KEY `user_role_id` (`user_role_id`),
  CONSTRAINT `gen_user_roles_ibfk_1` FOREIGN KEY (`gen_user_id`) REFERENCES `gen_users` (`id`),
  CONSTRAINT `gen_user_roles_ibfk_2` FOREIGN KEY (`user_role_id`) REFERENCES `user_roles` (`id`),
  CONSTRAINT `gen_user_roles_ibfk_3` FOREIGN KEY (`gen_user_id`) REFERENCES `gen_users` (`id`),
  CONSTRAINT `gen_user_roles_ibfk_4` FOREIGN KEY (`user_role_id`) REFERENCES `user_roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gen_user_roles`
--

LOCK TABLES `gen_user_roles` WRITE;
/*!40000 ALTER TABLE `gen_user_roles` DISABLE KEYS */;
INSERT INTO `gen_user_roles` VALUES (1,1,1,0,'2025-04-05 15:44:17','2025-04-13 22:02:37'),(2,2,2,0,'2025-04-05 15:44:17','2025-04-13 22:02:37'),(3,3,12,0,'2025-04-05 15:44:17','2025-04-13 22:02:37'),(4,19,12,0,'2025-04-13 22:13:14','2025-04-13 22:13:14'),(5,20,12,0,'2025-04-13 22:13:14','2025-04-13 22:13:14'),(6,21,12,0,'2025-04-13 22:15:54','2025-04-13 22:15:54'),(7,22,12,0,'2025-04-13 22:15:54','2025-04-13 22:15:54'),(8,23,12,0,'2025-04-13 22:19:01','2025-04-13 22:19:01'),(9,24,13,0,'2025-04-13 22:19:01','2025-04-13 22:19:01'),(10,25,12,0,'2025-04-13 22:25:07','2025-04-13 22:25:07'),(11,26,13,0,'2025-04-13 22:25:07','2025-04-13 22:25:07'),(12,27,12,0,'2025-04-13 22:49:14','2025-04-13 22:49:14'),(13,28,13,0,'2025-04-13 22:49:14','2025-04-13 22:49:14'),(14,32,12,0,'2025-04-17 18:47:18','2025-04-17 18:47:18'),(15,33,13,0,'2025-04-17 18:47:18','2025-04-17 18:47:18'),(16,34,12,0,'2025-04-17 19:05:17','2025-04-17 19:05:17'),(17,35,13,0,'2025-04-17 19:05:17','2025-04-17 19:05:17'),(18,40,12,0,'2025-04-19 09:33:17','2025-04-19 09:33:17'),(19,41,13,0,'2025-04-19 09:33:17','2025-04-19 09:33:17'),(20,44,12,0,'2025-04-19 09:44:03','2025-04-19 09:44:03'),(21,45,13,0,'2025-04-19 09:44:03','2025-04-19 09:44:03'),(22,46,12,0,'2025-04-19 09:44:20','2025-04-19 09:44:20'),(23,47,13,0,'2025-04-19 09:44:20','2025-04-19 09:44:20'),(24,48,12,0,'2025-04-19 09:44:42','2025-04-19 09:44:42'),(25,49,13,0,'2025-04-19 09:44:42','2025-04-19 09:44:42'),(26,52,14,0,'2025-04-19 11:40:36','2025-04-25 12:25:59'),(27,53,13,0,'2025-04-19 11:40:36','2025-04-19 11:40:36'),(28,54,12,0,'2025-04-19 14:28:49','2025-04-19 14:28:49'),(29,55,11,0,'2025-04-19 14:28:49','2025-04-25 12:25:49'),(30,56,10,0,'2025-04-19 15:01:21','2025-04-25 12:25:49'),(31,57,9,0,'2025-04-19 15:01:21','2025-04-25 12:25:49'),(32,58,8,0,'2025-04-19 15:11:31','2025-04-25 12:25:49'),(33,59,7,0,'2025-04-19 15:11:31','2025-04-25 12:25:49'),(34,60,6,0,'2025-04-23 18:03:35','2025-04-25 12:25:49'),(35,61,5,0,'2025-04-23 18:03:35','2025-04-25 12:25:49'),(36,62,4,0,'2025-04-23 18:05:53','2025-04-25 12:25:49'),(37,63,3,0,'2025-04-23 18:05:53','2025-04-25 12:25:49'),(38,64,NULL,0,'2025-04-24 07:00:38','2025-04-24 07:00:38'),(39,66,2,0,'2025-04-24 07:04:31','2025-04-24 07:04:31'),(40,70,12,0,'2025-04-27 18:37:35','2025-04-27 18:37:35'),(41,71,13,0,'2025-04-27 18:37:35','2025-04-27 18:37:35'),(42,72,12,0,'2025-04-27 18:39:31','2025-04-27 18:39:31'),(43,73,13,0,'2025-04-27 18:39:31','2025-04-27 18:39:31'),(44,74,12,0,'2025-04-27 18:42:06','2025-04-27 18:42:06'),(45,75,13,0,'2025-04-27 18:42:06','2025-04-27 18:42:06'),(46,76,12,0,'2025-04-27 20:03:47','2025-04-27 20:03:47'),(47,77,13,0,'2025-04-27 20:03:47','2025-04-27 20:03:47'),(48,78,12,0,'2025-04-27 20:06:22','2025-04-27 20:06:22'),(49,79,13,0,'2025-04-27 20:06:22','2025-04-27 20:06:22'),(50,80,12,0,'2025-04-27 20:08:53','2025-04-27 20:08:53'),(51,81,13,0,'2025-04-27 20:08:53','2025-04-27 20:08:53'),(52,82,12,0,'2025-04-27 20:11:14','2025-04-27 20:11:14'),(53,83,13,0,'2025-04-27 20:11:14','2025-04-27 20:11:14'),(54,84,12,0,'2025-04-27 20:14:12','2025-04-27 20:14:12'),(55,85,13,0,'2025-04-27 20:14:12','2025-04-27 20:14:12'),(56,86,12,0,'2025-04-27 20:16:55','2025-04-27 20:16:55'),(57,87,13,0,'2025-04-27 20:16:55','2025-04-27 20:16:55'),(58,88,12,0,'2025-04-27 20:17:52','2025-04-27 20:17:52'),(59,89,13,0,'2025-04-27 20:17:52','2025-04-27 20:17:52');
/*!40000 ALTER TABLE `gen_user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gen_users`
--

DROP TABLE IF EXISTS `gen_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gen_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `gen_user_email` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `person_id` int(11) DEFAULT NULL,
  `guardian_id` int(11) DEFAULT NULL,
  `user_role_id` int(11) DEFAULT NULL,
  `change_pass_code` int(11) DEFAULT NULL,
  `last_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status_id` int(11) DEFAULT NULL,
  `is_emailed` tinyint(1) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `is_deleted_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `person_id` (`person_id`),
  KEY `guardian_id` (`guardian_id`),
  KEY `user_role_id` (`user_role_id`),
  KEY `status_id` (`status_id`),
  CONSTRAINT `gen_users_ibfk_1` FOREIGN KEY (`person_id`) REFERENCES `persons` (`id`),
  CONSTRAINT `gen_users_ibfk_2` FOREIGN KEY (`guardian_id`) REFERENCES `student_guardian` (`id`),
  CONSTRAINT `gen_users_ibfk_3` FOREIGN KEY (`user_role_id`) REFERENCES `user_roles` (`id`),
  CONSTRAINT `gen_users_ibfk_4` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`),
  CONSTRAINT `gen_users_ibfk_5` FOREIGN KEY (`person_id`) REFERENCES `persons` (`id`),
  CONSTRAINT `gen_users_ibfk_6` FOREIGN KEY (`guardian_id`) REFERENCES `student_guardian` (`id`),
  CONSTRAINT `gen_users_ibfk_7` FOREIGN KEY (`user_role_id`) REFERENCES `user_roles` (`id`),
  CONSTRAINT `gen_users_ibfk_8` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gen_users`
--

LOCK TABLES `gen_users` WRITE;
/*!40000 ALTER TABLE `gen_users` DISABLE KEYS */;
INSERT INTO `gen_users` VALUES (1,'Master Admin','masteradmin@gmail.com','$2b$10$WGX8xcsF5ih99Tx5By3FC.As.AdYaKjznlbHGVbGSMZVRIwZChw.y',1,NULL,1,NULL,'2025-04-24 04:08:10',1,0,0,NULL,'2025-04-05 05:13:03','2025-04-05 05:13:03'),(2,'Administrator','admin@gmail.com','$2a$10$7ycSa2q/LzhmB2OGzl1dveiTjxdrZGDX.d2Y66M.KHPfmEpsNwTSu',3,NULL,2,NULL,'2025-04-25 02:51:51',1,0,0,NULL,'2025-04-05 05:13:27','2025-04-05 05:13:27'),(3,'student','student@gmail.com','$2b$10$WGX8xcsF5ih99Tx5By3FC.As.AdYaKjznlbHGVbGSMZVRIwZChw.y',3,NULL,12,NULL,'2025-04-25 02:28:58',1,0,0,NULL,'2025-04-05 05:14:03','2025-04-05 05:14:03'),(4,'walay ayu','walayAyu@gmail.com','$2a$10$EDhr4rUzzNeTcQkq.TQ89ud50a74Ut276qg1G9ZJMwVtkdzoN4jpq',NULL,NULL,12,NULL,'2025-04-10 11:16:52',1,0,0,NULL,'2025-04-10 11:16:52','2025-04-10 11:16:52'),(7,'SCLC-202520260003',NULL,'$2a$10$iq347.VmDNRVHyd.p6EPdOgpXN.9D9TtRPnWjmnTQ2Q6PnYdTbF8y',17,8,12,NULL,'2025-04-11 00:25:13',1,0,0,0,'2025-04-11 00:25:13','2025-04-11 00:25:13'),(8,'SCLC-202520260004',NULL,'$2a$10$YdPbJI9Wg5.MeW3Psd8PK.J6pLqPxK.FBK4F.abQKh3Byy.aKpNCK',18,9,12,NULL,'2025-04-11 00:30:20',1,0,0,0,'2025-04-11 00:30:20','2025-04-11 00:30:20'),(9,'SCLC-202520260005',NULL,'$2a$10$aZWVQoU7lqF1bWp1B7RmLe7NU5J0Ldsf1Tu.YE/yt1N7R7k39bwNG',19,10,12,NULL,'2025-04-11 00:32:40',1,0,0,0,'2025-04-11 00:32:40','2025-04-11 00:32:40'),(10,'SCLC-252510006','juan.cruz@student.com','$2a$10$pW5ShB/6E.8ScD23ORRcv.CVfka1D1A2vMEB1Scd36MOFmD9MCNiu',20,11,12,NULL,'2025-04-11 00:42:49',1,0,0,0,'2025-04-11 00:42:49','2025-04-11 00:42:49'),(11,'SCLC-252510007','duranonico@gmail.com','$2a$10$8RdIEHYs422ZJXXGfPBM4eSEkavdahZsDZvawQkT9npoiv/KoriRi',21,12,12,399020,'2025-04-19 09:20:21',1,0,0,0,'2025-04-11 00:44:19','2025-04-11 00:44:19'),(12,'SCLC-25260008','friitzladeera@gmail.com','$2b$10$YXE3K7mcMdmJ4AVyuk3vm.9Rk2yfdYAVJQ6l9cQ0kNQhLmu8oBYN6',22,13,12,854606,'2025-04-20 11:17:18',1,0,0,0,'2025-04-11 00:46:12','2025-04-11 00:46:12'),(13,'SCLC-25260009','juan.cruz@student.com','$2a$10$k0VQdEycc/RoeMUUjvYY..JyS3wMoxVfvoU1II2pM6AO/5vSVzshO',23,14,12,NULL,'2025-04-11 01:25:12',1,0,0,0,'2025-04-11 01:25:12','2025-04-11 01:25:12'),(14,'SCLC-25260010','jeromelizondra0@gmail.com','$2a$10$VBHcZaL5xpKYnpvBmMxX.ut432v6gMm95ZKr8xfHx4CTiSZ3ZMaqe',24,15,12,523762,'2025-04-19 10:02:48',1,0,0,0,'2025-04-11 01:33:00','2025-04-11 01:33:00'),(15,'SCLC-25260011','jenebelbrtri5@gmail.com','$2a$10$Y8Cf06UTZIKEi9ss8D5N4Otg.DOET8BeIdiAmkoaj8iMgDbvDkV3u',25,16,12,687444,'2025-04-19 09:19:56',1,0,0,0,'2025-04-11 16:24:23','2025-04-11 16:24:23'),(16,'SCLC-25260012','juan.cruz@gmail.com','$2a$10$.l.iyRS32AFDaYV9EO1TqeHcjZmiI83heClOE4xbsDTk9E6AC8h3u',28,19,12,NULL,'2025-04-12 06:32:39',1,0,0,0,'2025-04-12 06:32:39','2025-04-12 06:32:39'),(17,'SCLC-25260013','juan.cruz@gmail.com','$2a$10$zV35p0VvFwEQdweGk8gqyOCbFY/Qk.n0v3sYH5tasYm6mN3nVYuli',29,20,12,NULL,'2025-04-12 06:38:43',1,0,0,0,'2025-04-12 06:38:43','2025-04-12 06:38:43'),(18,'SCLC-25260014','charlzermac19@gmail.com','$2b$10$l4YwSq87.By5AjOhMVRpSu7hkmM5pLAGtXq7vX8tPYPKUuV5BDgsy',30,21,12,343682,'2025-04-21 11:29:41',1,0,0,0,'2025-04-12 06:38:44','2025-04-12 06:38:44'),(19,'SCLC-25260015','john.doe@example.com','$2a$10$RjVnsgQmPJRYkclXU1CoGOueZygLo/r1oWWrH.UPYSocKhtWIw6nu',33,24,14,NULL,'2025-04-17 09:41:50',1,0,0,0,'2025-04-13 11:43:14','2025-04-13 11:43:14'),(20,'janedoe-252510015','jane.doe@example.com','$2a$10$RjVnsgQmPJRYkclXU1CoGOueZygLo/r1oWWrH.UPYSocKhtWIw6nu',33,24,14,NULL,'2025-04-17 09:41:50',1,0,0,0,'2025-04-13 11:43:14','2025-04-13 11:43:14'),(21,'SCLC-25260017','john.doe@example.com','$2a$10$cLvqD10IX4zDOAW8YPoo3uYs7FSUNHwtNQi3h7UcbZGl.m8/pOOXK',34,25,12,NULL,'2025-04-13 11:45:54',1,0,0,0,'2025-04-13 11:45:54','2025-04-13 11:45:54'),(22,'janedoe-252510017','jane.doe@example.com','$2a$10$cLvqD10IX4zDOAW8YPoo3uYs7FSUNHwtNQi3h7UcbZGl.m8/pOOXK',34,25,12,NULL,'2025-04-13 11:45:54',1,0,0,0,'2025-04-13 11:45:54','2025-04-13 11:45:54'),(23,'SCLC-25260019','john.doe@example.com','$2a$10$Rny6NHvJZ196HIlwC7fMVe.EVizDgLlFf9LGSQ.VjmEDfowkEkz9G',35,26,12,NULL,'2025-04-13 11:49:01',1,0,0,0,'2025-04-13 11:49:01','2025-04-13 11:49:01'),(24,'janedoe-252510019','jane.doe@example.com','$2a$10$Rny6NHvJZ196HIlwC7fMVe.EVizDgLlFf9LGSQ.VjmEDfowkEkz9G',35,26,13,NULL,'2025-04-13 11:49:01',1,0,0,0,'2025-04-13 11:49:01','2025-04-13 11:49:01'),(25,'SCLC-25260020','nico.durano@email.com','$2a$10$coTSKPldp8zz.9mX/tBUKOcYg1Jy8HHIFkXbhn1yS69g4PAUKecsy',37,28,12,NULL,'2025-04-13 11:55:07',1,0,0,0,'2025-04-13 11:55:07','2025-04-13 11:55:07'),(26,'mariadurano-252510020','maria.guardian@email.com','$2a$10$coTSKPldp8zz.9mX/tBUKOcYg1Jy8HHIFkXbhn1yS69g4PAUKecsy',37,28,13,NULL,'2025-04-13 11:55:07',1,0,0,0,'2025-04-13 11:55:07','2025-04-13 11:55:07'),(27,'SCLC-25260021','nico.durano@email.com','$2a$10$4vJHXXEWO4tlkfe06A0DK.SfVkCGxFdFnvif9FPPTfRdtaosKMgYa',39,30,12,NULL,'2025-04-13 12:19:14',1,0,0,0,'2025-04-13 12:19:14','2025-04-13 12:19:14'),(28,'mariadurano','maria.guardian@email.com','$2a$10$4vJHXXEWO4tlkfe06A0DK.SfVkCGxFdFnvif9FPPTfRdtaosKMgYa',39,30,13,NULL,'2025-04-13 12:19:14',1,0,0,0,'2025-04-13 12:19:14','2025-04-13 12:19:14'),(30,'guidance','registrar@gmail.com','$2a$10$FNtWPy.XIK2WU2X5nXPcYuci2mI/tBrvZ9zwV6Cn3cOgumSACJofu',1,8,9,NULL,'2025-04-13 15:11:55',1,0,0,0,'2025-04-13 15:11:55','2025-04-13 15:11:55'),(32,'SCLC-25260022','juan.delacruz@studentmail.com','$2a$10$cZMBJh3uyAWRR8AKdwb2Jut/qugLrdscEiGGWdcIGF0msALD.vzEK',41,32,12,NULL,'2025-04-17 08:17:18',1,0,0,0,'2025-04-17 08:17:18','2025-04-17 08:17:18'),(33,'mariacruz','maria.cruz@guardianmail.com','$2a$10$cZMBJh3uyAWRR8AKdwb2Jut/qugLrdscEiGGWdcIGF0msALD.vzEK',NULL,32,13,NULL,'2025-04-17 08:17:18',1,0,0,0,'2025-04-17 08:17:18','2025-04-17 08:17:18'),(34,'SCLC-25260023','juan.delarosa@example.com','$2a$10$G1j1HjHFMycP3E8aHMuGeO1J2oESqCt6Y6PfDgh0/MG3Wny3HlYwe',43,34,12,NULL,'2025-04-17 08:35:17',1,0,0,0,'2025-04-17 08:35:17','2025-04-17 08:35:17'),(35,'mariadela rosa','maria.delarosa@example.com','$2a$10$G1j1HjHFMycP3E8aHMuGeO1J2oESqCt6Y6PfDgh0/MG3Wny3HlYwe',NULL,34,13,NULL,'2025-04-17 08:35:17',1,0,0,0,'2025-04-17 08:35:17','2025-04-17 08:35:17'),(40,'SCLC-25260024','juan.torre@example.com','$2a$10$U4ZAg6GWZsgA.wVUvjlIGOPdRu9/KLRAzpwFhFfE2wkov7lmU7dsy',49,40,12,NULL,'2025-04-18 23:03:17',1,0,0,0,'2025-04-18 23:03:17','2025-04-18 23:03:17'),(41,'mariatorre','maria.torre@example.com','$2a$10$U4ZAg6GWZsgA.wVUvjlIGOPdRu9/KLRAzpwFhFfE2wkov7lmU7dsy',NULL,40,13,NULL,'2025-04-18 23:03:17',1,0,0,0,'2025-04-18 23:03:17','2025-04-18 23:03:17'),(44,'SCLC-25260025','juan.torre@example.com','$2a$10$W424//74jU2gHX2jY6GaAOqbt0p98u4OPYhytnFuzVytAUKmY6Xo6',51,42,12,NULL,'2025-04-18 23:14:03',1,0,0,0,'2025-04-18 23:14:03','2025-04-18 23:14:03'),(45,'mariatorre7','maria.torre@example.com','$2a$10$W424//74jU2gHX2jY6GaAOqbt0p98u4OPYhytnFuzVytAUKmY6Xo6',NULL,42,13,NULL,'2025-04-18 23:14:03',1,0,0,0,'2025-04-18 23:14:03','2025-04-18 23:14:03'),(46,'SCLC-25260026','juan.torre@example.com','$2a$10$3r/XjQODRnO1Fg6a8vc9euZC.Q8pbjb41GDqcCXh8B9wtSBNmAPwW',52,43,12,NULL,'2025-04-18 23:14:20',1,0,0,0,'2025-04-18 23:14:20','2025-04-18 23:14:20'),(47,'mariatorre8','maria.torre@example.com','$2a$10$3r/XjQODRnO1Fg6a8vc9euZC.Q8pbjb41GDqcCXh8B9wtSBNmAPwW',NULL,43,15,NULL,'2025-04-25 04:24:17',1,0,0,0,'2025-04-18 23:14:20','2025-04-18 23:14:20'),(48,'SCLC-25260027','juan.torre@example.com','$2a$10$RXJjzCrd4/SrmsWCDYbpqefo8QrQE/2UF0r.TaM2WYoF5A1gOPPHy',53,44,14,NULL,'2025-04-25 04:24:17',1,0,0,0,'2025-04-18 23:14:42','2025-04-18 23:14:42'),(49,'mariatorre9','maria.torre@example.com','$2a$10$RXJjzCrd4/SrmsWCDYbpqefo8QrQE/2UF0r.TaM2WYoF5A1gOPPHy',NULL,44,13,NULL,'2025-04-18 23:14:42',1,0,0,0,'2025-04-18 23:14:42','2025-04-18 23:14:42'),(52,'SCLC-25260028','juan.torre@example.com','$2a$10$FJtPmQPUCLraB3ZIwt23OO8myMG5YVFQGTqvV9Tjm513BrvY4loYm',56,47,12,NULL,'2025-04-19 01:10:36',1,0,0,0,'2025-04-19 01:10:36','2025-04-19 01:10:36'),(53,'mariatorre10','maria.torre@example.com','$2a$10$FJtPmQPUCLraB3ZIwt23OO8myMG5YVFQGTqvV9Tjm513BrvY4loYm',NULL,47,11,NULL,'2025-04-25 04:24:17',1,0,0,0,'2025-04-19 01:10:36','2025-04-19 01:10:36'),(70,'SCLC-25260029','nuxukazu@mailinator.com','$2a$10$ErMO9IUz37C.lQUbJPEqeuxqPUez8.HXPJDeoN.Ez/l0VYoFfJDx2',68,54,12,NULL,'2025-04-27 10:37:35',1,0,0,0,'2025-04-27 10:37:35','2025-04-27 10:37:35'),(71,'9','jytep@mailinator.com','$2a$10$ErMO9IUz37C.lQUbJPEqeuxqPUez8.HXPJDeoN.Ez/l0VYoFfJDx2',NULL,54,13,NULL,'2025-04-27 10:37:35',1,0,0,0,'2025-04-27 10:37:35','2025-04-27 10:37:35'),(72,'SCLC-25260030','jyzyruh@mailinator.com','$2a$10$jEPm5T/Eu0sK3077n4V2DOaTmCDZkgaJ2lcuBiZn1E1F5oJ6xH8FC',69,55,12,NULL,'2025-04-27 10:39:31',1,0,0,0,'2025-04-27 10:39:31','2025-04-27 10:39:31'),(73,'10','xygyqajiwu@mailinator.com','$2a$10$jEPm5T/Eu0sK3077n4V2DOaTmCDZkgaJ2lcuBiZn1E1F5oJ6xH8FC',NULL,55,13,NULL,'2025-04-27 10:39:31',1,0,0,0,'2025-04-27 10:39:31','2025-04-27 10:39:31'),(74,'SCLC-25260031','gewecoh@mailinator.com','$2a$10$F3a.sJ3Y2tUbc08qERNJCeIZ01Xz/zMrWt.IL3Eoj/M/1AQa9USbq',70,56,12,NULL,'2025-04-27 10:42:06',1,0,0,0,'2025-04-27 10:42:06','2025-04-27 10:42:06'),(75,'11','wymuqu@mailinator.com','$2a$10$F3a.sJ3Y2tUbc08qERNJCeIZ01Xz/zMrWt.IL3Eoj/M/1AQa9USbq',NULL,56,13,NULL,'2025-04-27 10:42:06',1,0,0,0,'2025-04-27 10:42:06','2025-04-27 10:42:06'),(76,'SCLC-25260032','corujok@mailinator.com','$2a$10$d4v6f6WrYT80elNkd2zY4epXZRtvawr7lUpRZLHBCtnNL8lnm6R4u',71,57,12,NULL,'2025-04-27 12:03:47',1,0,0,0,'2025-04-27 12:03:47','2025-04-27 12:03:47'),(77,'zahirlucas12','necawijaf@mailinator.com','$2a$10$d4v6f6WrYT80elNkd2zY4epXZRtvawr7lUpRZLHBCtnNL8lnm6R4u',NULL,57,13,NULL,'2025-04-27 12:03:47',1,0,0,0,'2025-04-27 12:03:47','2025-04-27 12:03:47'),(78,'SCLC-25260033','sulibabo@mailinator.com','$2a$10$CyA9vvc2JhyOZqe.Lj3d9.PKNFaIy80eVQ.x04Ui1hpYu7exEmnuq',72,58,12,NULL,'2025-04-27 12:06:22',1,0,0,0,'2025-04-27 12:06:22','2025-04-27 12:06:22'),(79,'13','garijeb@mailinator.com','$2a$10$CyA9vvc2JhyOZqe.Lj3d9.PKNFaIy80eVQ.x04Ui1hpYu7exEmnuq',NULL,58,13,NULL,'2025-04-27 12:06:22',1,0,0,0,'2025-04-27 12:06:22','2025-04-27 12:06:22'),(80,'SCLC-25260034','wipaq@mailinator.com','$2a$10$a/PaDt4bgOS1cJac5f87vehbi311BltizHC4o85mckw6sKzVaO/7.',73,59,12,NULL,'2025-04-27 12:08:53',1,0,0,0,'2025-04-27 12:08:53','2025-04-27 12:08:53'),(81,'14','juluq@mailinator.com','$2a$10$a/PaDt4bgOS1cJac5f87vehbi311BltizHC4o85mckw6sKzVaO/7.',NULL,59,13,NULL,'2025-04-27 12:08:53',1,0,0,0,'2025-04-27 12:08:53','2025-04-27 12:08:53'),(82,'SCLC-25260035','nopovape@mailinator.com','$2a$10$fKjJBp9LGt.MUcrchStWv.tnFLFvXDWkoj5LmIdcKTA6S98Dx7LdW',74,60,12,NULL,'2025-04-27 12:11:14',1,0,0,0,'2025-04-27 12:11:14','2025-04-27 12:11:14'),(83,'15','jyjifoteka@mailinator.com','$2a$10$fKjJBp9LGt.MUcrchStWv.tnFLFvXDWkoj5LmIdcKTA6S98Dx7LdW',NULL,60,13,NULL,'2025-04-27 12:11:14',1,0,0,0,'2025-04-27 12:11:14','2025-04-27 12:11:14'),(84,'SCLC-25260036','bemet@mailinator.com','$2a$10$ioxB/LuE4AYrKh0i7gPgHOLl9xTOlRH3IR1jUUC9QS2K4Iw3o4HGi',75,61,12,NULL,'2025-04-27 12:14:12',1,0,0,0,'2025-04-27 12:14:12','2025-04-27 12:14:12'),(85,'16','sonihuvyq@mailinator.com','$2a$10$ioxB/LuE4AYrKh0i7gPgHOLl9xTOlRH3IR1jUUC9QS2K4Iw3o4HGi',NULL,61,13,NULL,'2025-04-27 12:14:12',1,0,0,0,'2025-04-27 12:14:12','2025-04-27 12:14:12'),(86,'SCLC-25260037','godamin@mailinator.com','$2a$10$qMvX2Vbe1kZZN4BisuG1UO1Noq9VqNYmhcTR.7vyJh7LfxJWjILei',76,62,12,NULL,'2025-04-27 12:16:55',1,0,0,0,'2025-04-27 12:16:55','2025-04-27 12:16:55'),(87,'17','qoka@mailinator.com','$2a$10$qMvX2Vbe1kZZN4BisuG1UO1Noq9VqNYmhcTR.7vyJh7LfxJWjILei',NULL,62,13,NULL,'2025-04-27 12:16:55',1,0,0,0,'2025-04-27 12:16:55','2025-04-27 12:16:55'),(88,'SCLC-25260038','liwulugyje@mailinator.com','$2a$10$TYkAOrsTaeJAD6BlJEcSU.7onfu7WuFR98baZmGNZd3OTb72vmbyi',77,63,12,NULL,'2025-04-27 12:17:52',1,0,0,0,'2025-04-27 12:17:52','2025-04-27 12:17:52'),(89,'mollythornton18','tyqomufa@mailinator.com','$2a$10$TYkAOrsTaeJAD6BlJEcSU.7onfu7WuFR98baZmGNZd3OTb72vmbyi',NULL,63,13,NULL,'2025-04-27 12:17:52',1,0,0,0,'2025-04-27 12:17:52','2025-04-27 12:17:52');
/*!40000 ALTER TABLE `gen_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grade_level`
--

DROP TABLE IF EXISTS `grade_level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grade_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level_name` varchar(100) DEFAULT NULL,
  `classification_id` int(11) DEFAULT NULL,
  `term_id` int(11) DEFAULT NULL,
  `section_id` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `is_current` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `term_id` (`term_id`),
  KEY `fk_grade_classification` (`classification_id`),
  CONSTRAINT `fk_grade_classification` FOREIGN KEY (`classification_id`) REFERENCES `classification` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `grade_level_ibfk_1` FOREIGN KEY (`term_id`) REFERENCES `term` (`id`),
  CONSTRAINT `grade_level_ibfk_2` FOREIGN KEY (`term_id`) REFERENCES `term` (`id`),
  CONSTRAINT `grade_level_ibfk_3` FOREIGN KEY (`term_id`) REFERENCES `term` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grade_level`
--

LOCK TABLES `grade_level` WRITE;
/*!40000 ALTER TABLE `grade_level` DISABLE KEYS */;
INSERT INTO `grade_level` VALUES (1,'Kinder',1,1,NULL,1,0,1,0,0,'2025-04-13 12:58:31','2025-04-13 12:58:31'),(2,'Grade 1',2,1,NULL,1,0,1,0,0,'2025-04-13 12:58:31','2025-04-13 12:58:31'),(3,'Grade 2',2,1,NULL,1,0,1,0,0,'2025-04-13 12:58:31','2025-04-13 12:58:31'),(4,'Grade 3',2,1,NULL,1,0,1,0,0,'2025-04-13 12:58:31','2025-04-13 12:58:31'),(5,'Grade 4',2,1,NULL,1,0,1,0,0,'2025-04-13 12:58:31','2025-04-13 12:58:31'),(6,'Grade 5',2,1,NULL,1,0,1,0,0,'2025-04-13 12:58:31','2025-04-13 12:58:31'),(7,'Grade 6',2,1,NULL,1,0,1,0,0,'2025-04-13 12:58:31','2025-04-13 12:58:31'),(8,'Grade 7',3,1,NULL,1,0,1,0,0,'2025-04-13 12:58:31','2025-04-13 12:58:31'),(9,'Grade 8',3,1,NULL,1,0,1,0,0,'2025-04-13 12:58:31','2025-04-13 12:58:31'),(10,'Grade 9',3,1,NULL,1,0,1,0,0,'2025-04-13 12:58:31','2025-04-13 12:58:31'),(11,'Grade 10',3,1,NULL,1,0,1,0,0,'2025-04-13 12:58:31','2025-04-13 12:58:31');
/*!40000 ALTER TABLE `grade_level` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mother`
--

DROP TABLE IF EXISTS `mother`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mother` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) DEFAULT NULL,
  `middle_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `suffix_id` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `contact_no` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `occupation` varchar(100) DEFAULT NULL,
  `occ_address` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mother`
--

LOCK TABLES `mother` WRITE;
/*!40000 ALTER TABLE `mother` DISABLE KEYS */;
INSERT INTO `mother` VALUES (11,'Luisa','Reyes','Cruz',NULL,NULL,'09125553344','123 Rizal St, Danao City',NULL,'Teacher',NULL,'2025-04-11 10:55:13','2025-04-11 10:55:13'),(12,'Luisa','Reyes','Cruz',NULL,NULL,'09125553344','123 Rizal St, Danao City',NULL,'Teacher',NULL,'2025-04-11 11:00:20','2025-04-11 11:00:20'),(13,'Luisa','Reyes','Cruz',NULL,NULL,'09125553344','123 Rizal St, Danao City',NULL,'Teacher',NULL,'2025-04-11 11:02:40','2025-04-11 11:02:40'),(14,'Luisa','Reyes','Cruz',NULL,NULL,'09125553344','123 Rizal St, Danao City',NULL,'Teacher',NULL,'2025-04-11 11:12:49','2025-04-11 11:12:49'),(15,'Luisa','Reyes','Cruz',NULL,NULL,'09125553344','123 Rizal St, Danao City',NULL,'Teacher',NULL,'2025-04-11 11:14:19','2025-04-11 11:14:19'),(16,'Luisa','Reyes','Cruz',NULL,NULL,'09125553344','123 Rizal St, Danao City',NULL,'Teacher',NULL,'2025-04-11 11:16:12','2025-04-11 11:16:12'),(17,'Luisa','Reyes','Cruz',NULL,NULL,'09125553344','123 Rizal St, Danao City',NULL,'Teacher',NULL,'2025-04-11 11:55:12','2025-04-11 11:55:12'),(18,'Luisa','Reyes','Cruz',NULL,NULL,'09125553344','123 Rizal St, Danao City',NULL,'Teacher',NULL,'2025-04-11 12:03:00','2025-04-11 12:03:00'),(19,'Luisa','Reyes','Cruz',NULL,NULL,'09125553344','123 Rizal St, Danao City',NULL,'Teacher',NULL,'2025-04-12 02:54:22','2025-04-12 02:54:22'),(22,'Maria','Luna','Cruz',NULL,NULL,'09997776666','Danao City',NULL,'Housekeeper',NULL,'2025-04-12 17:02:39','2025-04-12 17:02:39'),(23,'Maria','Luna','Cruz',NULL,NULL,'09997776666','Danao City',NULL,'Housekeeper',NULL,'2025-04-12 17:08:43','2025-04-12 17:08:43'),(24,'Maria','Luna','Cruz',NULL,NULL,'09997776666','Danao City',NULL,'Housekeeper',NULL,'2025-04-12 17:08:44','2025-04-12 17:08:44'),(27,'Jane','A','Doe',NULL,NULL,'09182345678','123 Main Street, Sandayong Sur',NULL,'Teacher',NULL,'2025-04-13 22:13:14','2025-04-13 22:13:14'),(28,'Jane','A','Doe',NULL,NULL,'09182345678','123 Main Street, Sandayong Sur',NULL,'Teacher',NULL,'2025-04-13 22:15:54','2025-04-13 22:15:54'),(29,'Jane','A','Doe',NULL,NULL,'09182345678','123 Main Street, Sandayong Sur',NULL,'Teacher',NULL,'2025-04-13 22:19:01','2025-04-13 22:19:01'),(31,'Maria','G','Durano',NULL,NULL,'09991234567','Sandayong Sur, Danao City',NULL,'Teacher',NULL,'2025-04-13 22:25:07','2025-04-13 22:25:07'),(33,'Maria','G','Durano',NULL,NULL,'09991234567','Sandayong Sur, Danao City',NULL,'Teacher',NULL,'2025-04-13 22:49:14','2025-04-13 22:49:14'),(35,'Maria','Lopez','Cruz',NULL,NULL,'09112223344','Purok 3, Sandayong Sur, Danao City',NULL,'Housewife',NULL,'2025-04-17 18:47:18','2025-04-17 18:47:18'),(37,'Maria','Lopez','Dela Rosa',NULL,NULL,'09123456780','Danao City, Cebu',NULL,'Housewife',NULL,'2025-04-17 19:05:17','2025-04-17 19:05:17'),(43,'Maria','Lopez','Torre',NULL,NULL,'09119876543','Sandayong Sur, Danao City',NULL,'Vendor',NULL,'2025-04-19 09:33:17','2025-04-19 09:33:17'),(45,'Maria','Lopez','Torre',NULL,NULL,'09119876543','Sandayong Sur, Danao City',NULL,'Vendor',NULL,'2025-04-19 09:44:03','2025-04-19 09:44:03'),(46,'Maria','Lopez','Torre',NULL,NULL,'09119876543','Sandayong Sur, Danao City',NULL,'Vendor',NULL,'2025-04-19 09:44:20','2025-04-19 09:44:20'),(47,'Maria','Lopez','Torre',NULL,NULL,'09119876543','Sandayong Sur, Danao City',NULL,'Vendor',NULL,'2025-04-19 09:44:42','2025-04-19 09:44:42'),(50,'Maria','Lopez','Torre',NULL,NULL,'09119876543','Sandayong Sur, Danao City',NULL,'Vendor',NULL,'2025-04-19 11:40:36','2025-04-19 11:40:36'),(51,'Davis','Catherine Coffey','Dillon',NULL,NULL,NULL,'Cupiditate corporis ',NULL,NULL,NULL,'2025-04-19 14:28:49','2025-04-19 14:28:49'),(52,'Alfreda','Luke Woods','Dean',NULL,NULL,'+1 (179) 399-2152','Consectetur est ips',NULL,NULL,NULL,'2025-04-19 15:01:21','2025-04-19 15:01:21'),(53,'Abdul','Martha Heath','Avila',NULL,NULL,NULL,'Dolorem quia ea non ',NULL,NULL,NULL,'2025-04-19 15:11:31','2025-04-19 15:11:31'),(54,'','','',NULL,NULL,NULL,'',NULL,NULL,NULL,'2025-04-23 18:03:35','2025-04-23 18:03:35'),(55,'','','',NULL,NULL,'','',NULL,NULL,NULL,'2025-04-23 18:05:53','2025-04-23 18:05:53'),(57,'Steel','Beau Justice','',NULL,NULL,NULL,'Totam ut amet nulla',NULL,NULL,NULL,'2025-04-27 18:37:35','2025-04-27 18:37:35'),(58,'Paula','Anastasia Freeman','',NULL,NULL,NULL,'Explicabo Ipsa qui',NULL,NULL,NULL,'2025-04-27 18:39:31','2025-04-27 18:39:31'),(59,'Lavinia','Adara Small','',NULL,NULL,NULL,'Minim dolorem volupt',NULL,NULL,NULL,'2025-04-27 18:42:06','2025-04-27 18:42:06'),(60,'Dominique','Matthew Hale','Hawkins',NULL,NULL,'+1 (733) 115-8597','Omnis dolor non repr',NULL,NULL,NULL,'2025-04-27 20:03:47','2025-04-27 20:03:47'),(61,'Rebecca','Gareth Hahn','',NULL,NULL,NULL,'Eligendi voluptate p',NULL,NULL,NULL,'2025-04-27 20:06:22','2025-04-27 20:06:22'),(62,'Tobias','Sara Young','',NULL,NULL,NULL,'Itaque et et et dele',NULL,NULL,NULL,'2025-04-27 20:08:53','2025-04-27 20:08:53'),(63,'Tana','Boris Vaughn','',NULL,NULL,NULL,'A distinctio Qui ve',NULL,NULL,NULL,'2025-04-27 20:11:14','2025-04-27 20:11:14'),(64,'Elaine','Amos Ewing','',NULL,NULL,NULL,'Veritatis magnam in ',NULL,NULL,NULL,'2025-04-27 20:14:12','2025-04-27 20:14:12'),(65,'Kay','Rahim Williams','',NULL,NULL,NULL,'Error hic animi dol',NULL,NULL,NULL,'2025-04-27 20:16:55','2025-04-27 20:16:55'),(66,'Marvin','Aristotle Berry','Ramirez',NULL,NULL,'+1 (376) 861-5141','Ex porro cillum eu p',NULL,NULL,NULL,'2025-04-27 20:17:52','2025-04-27 20:17:52');
/*!40000 ALTER TABLE `mother` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nurse_profile`
--

DROP TABLE IF EXISTS `nurse_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nurse_profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `license_no` varchar(50) DEFAULT NULL,
  `contact_number` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nurse_profile`
--

LOCK TABLES `nurse_profile` WRITE;
/*!40000 ALTER TABLE `nurse_profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `nurse_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `online_payment_transaction`
--

DROP TABLE IF EXISTS `online_payment_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `online_payment_transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_id` int(11) DEFAULT NULL,
  `amount` float(11,2) DEFAULT NULL,
  `fees` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `payment_id` (`payment_id`),
  CONSTRAINT `online_payment_transaction_ibfk_1` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `online_payment_transaction`
--

LOCK TABLES `online_payment_transaction` WRITE;
/*!40000 ALTER TABLE `online_payment_transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `online_payment_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gen_user_id` int(11) DEFAULT NULL,
  `school_fee_id` int(11) DEFAULT NULL,
  `payment_method_id` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `payment_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `gen_user_id` (`gen_user_id`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`gen_user_id`) REFERENCES `gen_users` (`id`),
  CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`gen_user_id`) REFERENCES `gen_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_method`
--

DROP TABLE IF EXISTS `payment_method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_method` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `method_name` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_method`
--

LOCK TABLES `payment_method` WRITE;
/*!40000 ALTER TABLE `payment_method` DISABLE KEYS */;
INSERT INTO `payment_method` VALUES (1,'Paymaya','2025-02-23 07:28:48','2025-02-22 23:28:48'),(2,'G-cash','2025-02-23 07:28:48','2025-02-22 23:28:48'),(3,'Debit Card','2025-02-23 07:28:48','2025-02-22 23:28:48'),(4,'Bank','2025-02-23 07:28:48','2025-02-22 23:28:48'),(5,'Credit Card','2025-03-06 16:31:34','2025-03-06 08:31:34'),(6,'Cash','2025-03-06 17:10:38','2025-03-06 09:10:38');
/*!40000 ALTER TABLE `payment_method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persons`
--

DROP TABLE IF EXISTS `persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `suffix_id` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `place_of_birth` varchar(200) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `citizenship` varchar(200) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `contact_no` varchar(100) DEFAULT NULL,
  `created_by` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_by` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persons`
--

LOCK TABLES `persons` WRITE;
/*!40000 ALTER TABLE `persons` DISABLE KEYS */;
INSERT INTO `persons` VALUES (1,'Master','Administrator',' ',2,18,'2006-05-12','Danao City','Male','Filipino','101','juan.delacruz@example.com','09171234567','2025-04-10 16:46:23','2025-04-10 16:46:23'),(2,'Administrator',' ',' ',3,17,'2007-08-23','Tagbilaran City','Female','Filipino','102','maria.reyes@example.com','09181231234','2025-04-10 16:47:46','2025-04-10 16:47:46'),(3,'James','Tan','Lee',2,19,'2005-03-19','Cebu City','Male','Filipino','103','james.lee@example.com','09183334455','2025-04-09 23:28:43','2025-04-09 23:28:43'),(4,'Ella','Santos','Mae',4,16,'2008-11-05','Lapu-Lapu City','Female','Filipino','104','ella.santos@example.com','09185556677','2025-04-09 23:28:43','2025-04-09 23:28:43'),(5,'Mark','Gutierrez','Andres',1,20,'2004-01-10','Iloilo City','Male','Filipino','105','mark.g@example.com','09187778899','2025-04-09 23:28:43','2025-04-09 23:28:43'),(17,'Juan','Cruz','Dela',NULL,16,'2009-05-12','Cebu City',NULL,NULL,'123 Rizal St, Danao City','juan.cruz@student.com',NULL,'2025-04-11 00:25:13','2025-04-11 00:25:13'),(18,'Juan','Cruz','Dela',NULL,16,'2009-05-12','Cebu City',NULL,NULL,'123 Rizal St, Danao City','juan.cruz@student.com',NULL,'2025-04-11 00:30:20','2025-04-11 00:30:20'),(19,'Juan','Cruz','Dela',NULL,16,'2009-05-12','Cebu City',NULL,NULL,'123 Rizal St, Danao City','juan.cruz@student.com',NULL,'2025-04-11 00:32:40','2025-04-11 00:32:40'),(20,'Juan','Cruz','Dela',NULL,16,'2009-05-12','Cebu City',NULL,NULL,'123 Rizal St, Danao City','juan.cruz@student.com',NULL,'2025-04-11 00:42:49','2025-04-11 00:42:49'),(21,'Juan','Cruz','Dela',NULL,16,'2009-05-12','Cebu City',NULL,NULL,'123 Rizal St, Danao City','juan.cruz@student.com',NULL,'2025-04-11 00:44:19','2025-04-11 00:44:19'),(22,'Juan','Cruz','Dela',NULL,16,'2009-05-12','Cebu City',NULL,NULL,'123 Rizal St, Danao City','juan.cruz@student.com',NULL,'2025-04-11 00:46:12','2025-04-11 00:46:12'),(23,'Juan','Cruz','Dela',NULL,16,'2009-05-12','Cebu City',NULL,NULL,'123 Rizal St, Danao City','juan.cruz@student.com',NULL,'2025-04-11 01:25:12','2025-04-11 01:25:12'),(24,'Juan','Cruz','Dela',NULL,16,'2009-05-12','Cebu City',NULL,NULL,'123 Rizal St, Danao City','juan.cruz@student.com',NULL,'2025-04-11 01:33:00','2025-04-11 01:33:00'),(25,'Juan','Cruz','Dela',NULL,16,'2009-05-12','Cebu City',NULL,NULL,'123 Rizal St, Danao City','juan.cruz@student.com',NULL,'2025-04-11 16:24:22','2025-04-11 16:24:22'),(28,'Juan','Cruz','Santos',NULL,17,'2008-03-22','Danao City',NULL,NULL,'Purok Kalubihan, Sandayong Sur, Danao City','juan.cruz@gmail.com',NULL,'2025-04-12 06:32:39','2025-04-12 06:32:39'),(29,'Juan','Cruz','Santos',NULL,17,'2008-03-22','Danao City',NULL,NULL,'Purok Kalubihan, Sandayong Sur, Danao City','juan.cruz@gmail.com',NULL,'2025-04-12 06:38:43','2025-04-12 06:38:43'),(30,'Juan','Cruz','Santos',NULL,17,'2008-03-22','Danao City',NULL,NULL,'Purok Kalubihan, Sandayong Sur, Danao City','juan.cruz@gmail.com',NULL,'2025-04-12 06:38:44','2025-04-12 06:38:44'),(33,'John','Doe','M',NULL,18,'2006-05-10','Danao City',NULL,NULL,'123 Main Street, Sandayong Sur','john.doe@example.com','09171234567','2025-04-13 11:43:14','2025-04-13 11:43:14'),(34,'John','Doe','M',NULL,18,'2006-05-10','Danao City',NULL,NULL,'123 Main Street, Sandayong Sur','john.doe@example.com','09171234567','2025-04-13 11:45:54','2025-04-13 11:45:54'),(35,'John','Doe','M',NULL,18,'2006-05-10','Danao City',NULL,NULL,'123 Main Street, Sandayong Sur','john.doe@example.com','09171234567','2025-04-13 11:49:01','2025-04-13 11:49:01'),(37,'Nico','Durano','D',NULL,17,'2008-03-01','Cebu City',NULL,NULL,'Sandayong Sur, Danao City','nico.durano@email.com','09123456789','2025-04-13 11:55:07','2025-04-13 11:55:07'),(39,'Nico','Durano','D',NULL,17,'2008-03-01','Cebu City',NULL,NULL,'Sandayong Sur, Danao City','nico.durano@email.com','09123456789','2025-04-13 12:19:14','2025-04-13 12:19:14'),(41,'Juan','Dela Cruz','Santos',1,17,'2008-05-10','Cebu City',NULL,NULL,'Purok 3, Sandayong Sur, Danao City','juan.delacruz@studentmail.com','09123456789','2025-04-17 08:17:18','2025-04-17 08:17:18'),(43,'Juan','Dela Rosa','Cruz',NULL,17,'2007-06-15','Cebu City',NULL,NULL,'Danao City, Cebu','juan.delarosa@example.com','09123456789','2025-04-17 08:35:17','2025-04-17 08:35:17'),(49,'Juan Magdadaro','Dela Torre','Cruz',NULL,15,'2009-03-12','Danao City',NULL,NULL,'Sandayong Sur, Danao City','juan.torre@example.com','09123456789','2025-04-18 23:03:17','2025-04-18 23:03:17'),(51,'Juan Magdadaro','Dela Torre','Cruz',NULL,15,'2009-03-12','Danao City',NULL,NULL,'Sandayong Sur, Danao City','juan.torre@example.com','09123456789','2025-04-18 23:14:03','2025-04-18 23:14:03'),(52,'Juan Magdadaro','Dela Torre','Cruz',NULL,15,'2009-03-12','Danao City',NULL,NULL,'Sandayong Sur, Danao City','juan.torre@example.com','09123456789','2025-04-18 23:14:20','2025-04-18 23:14:20'),(53,'Juan Magdadaro','Dela Torre','Cruz',NULL,15,'2009-03-12','Danao City',NULL,NULL,'Sandayong Sur, Danao City','juan.torre@example.com','09123456789','2025-04-18 23:14:42','2025-04-18 23:14:42'),(56,'Juan Magdadaro','Dela Torre','Cruz',NULL,15,'2009-03-12','Danao City',NULL,NULL,'Sandayong Sur, Danao City','juan.torre@example.com','09123456789','2025-04-19 01:10:36','2025-04-19 01:10:36'),(57,'Adria','Oneil','Colby Gibbs',4,NULL,'1974-11-29','In Nam voluptatem fa',NULL,NULL,'Dicta repudiandae si','posedad@mailinator.com','+1 (249) 367-4749','2025-04-19 03:58:49','2025-04-19 03:58:49'),(58,'Valentine','Lancaster','Joelle Campos',0,NULL,'2002-10-24','Accusamus commodo ad',NULL,NULL,'Sint quia aperiam iu','hedyv@mailinator.com','+1 (407) 188-9304','2025-04-19 04:31:21','2025-04-19 04:31:21'),(59,'Baker','Kirk','Patience Roberts',8,NULL,'1999-07-28','Eum veniam labore o',NULL,NULL,'Labore dolor molesti','jivitok@mailinator.com','+1 (809) 673-1912','2025-04-19 04:41:31','2025-04-19 04:41:31'),(60,'','','',0,NULL,'0000-00-00','',NULL,NULL,'','','+63','2025-04-23 10:03:35','2025-04-23 10:03:35'),(61,'','','',0,NULL,'0000-00-00','',NULL,NULL,'','','','2025-04-23 10:05:53','2025-04-23 10:05:53'),(62,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2025-04-23 23:00:38','2025-04-23 23:00:38'),(64,'Juan','Cruz','Dela',1,30,'1995-01-01','Manila','Male','Filipino','123 Sampaguita St., Quezon City','juan.delacruz@example.com','09171234567','2025-04-23 23:04:31','2025-04-23 23:04:31'),(68,'Octavius','Harrell','Lael Mcmillan',12,NULL,'1995-04-09','Consequatur adipisicing mollit sequi distinctio Q',NULL,NULL,'Ipsam et dignissimos ullam esse dolorem amet reic','nuxukazu@mailinator.com','+63','2025-04-27 10:37:35','2025-04-27 10:37:35'),(69,'Xerxes','Rodgers','Tana Woodard',1,NULL,'2017-10-05','Odio eum sunt et numquam laboriosam corrupti et',NULL,NULL,'Ad a distinctio Odio iure voluptate non ut ut ali','jyzyruh@mailinator.com','+63','2025-04-27 10:39:31','2025-04-27 10:39:31'),(70,'Lesley','Ramos','Venus Price',2,NULL,'2003-11-22','Dolor commodo quo aliquip veritatis qui maiores qu',NULL,NULL,'Non commodo aut in ipsum excepturi ut optio offic','gewecoh@mailinator.com','+63','2025-04-27 10:42:06','2025-04-27 10:42:06'),(71,'Neville','Leach','Ruby Fry',1,NULL,'2005-05-22','Atque culpa amet nihil aut cumque et aliquid natu',NULL,NULL,'Qui assumenda corporis deserunt ut culpa doloribu','corujok@mailinator.com','+1 (698) 327-3613','2025-04-27 12:03:47','2025-04-27 12:03:47'),(72,'Breanna','Davidson','Yvonne Watts',6,NULL,'1982-10-27','Ut aute quisquam libero voluptatem id eligendi nem',NULL,NULL,'Adipisci labore dolore quis provident dolor eveni','sulibabo@mailinator.com','+63','2025-04-27 12:06:22','2025-04-27 12:06:22'),(73,'Zeus','Odonnell','Ferdinand Miranda',8,NULL,'2000-08-26','In ut aut corrupti voluptate omnis ipsum in eos ',NULL,NULL,'Ex velit quos quos nihil quod in consequat Dolor ','wipaq@mailinator.com','+63','2025-04-27 12:08:53','2025-04-27 12:08:53'),(74,'Kellie','Woods','Dacey Phillips',5,NULL,'2009-06-25','Officia sint mollitia aut explicabo',NULL,NULL,'Non et voluptates ad quo modi','nopovape@mailinator.com','+63','2025-04-27 12:11:14','2025-04-27 12:11:14'),(75,'Keaton','Morris','Hadassah Sweeney',5,NULL,'1983-07-18','Qui excepteur adipisci in qui quo doloribus harum ',NULL,NULL,'Commodi quisquam eius consequatur Eligendi non ne','bemet@mailinator.com','+63','2025-04-27 12:14:12','2025-04-27 12:14:12'),(76,'Katelyn','Boone','Brenda Hester',7,NULL,'1980-04-01','Dolore eligendi quo sapiente aute ullamco dicta te',NULL,NULL,'Culpa earum voluptatem quia quisquam eum dolores ','godamin@mailinator.com','+63','2025-04-27 12:16:55','2025-04-27 12:16:55'),(77,'Lacota','Wallace','Sasha Cunningham',10,NULL,'1996-03-04','Vero ut eu enim sequi mollitia nobis fuga Numquam',NULL,NULL,'In error officia pariatur Reprehenderit veniam d','liwulugyje@mailinator.com','+1 (966) 209-8418','2025-04-27 12:17:52','2025-04-27 12:17:52');
/*!40000 ALTER TABLE `persons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gen_user_id` int(11) DEFAULT NULL,
  `user_role_id` int(11) DEFAULT NULL,
  `request_to` int(11) DEFAULT NULL,
  `request_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `quantity` float(12,2) DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `restock_needed` varchar(255) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `gen_user_id` (`gen_user_id`),
  KEY `user_role_id` (`user_role_id`),
  CONSTRAINT `request_ibfk_1` FOREIGN KEY (`gen_user_id`) REFERENCES `gen_users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `request_ibfk_2` FOREIGN KEY (`user_role_id`) REFERENCES `user_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` VALUES (1,1,2,0,'Bandages','Need more bandages for first aid kit',50.00,'pieces','1',1,'2025-04-14 01:49:57','2025-04-14 03:58:31'),(2,1,NULL,NULL,'Printer Ink','Black ink cartridge for HP printer',5.00,'pieces','1',0,'2025-04-14 01:51:37','2025-04-14 01:51:37'),(3,1,NULL,NULL,'Printer Ink','Black ink cartridge for HP printer',5.00,'pieces','1',0,'2025-04-14 01:51:38','2025-04-14 01:51:38'),(4,1,NULL,NULL,'Printer Ink','Black ink cartridge for HP printer',5.00,'pieces','1',0,'2025-04-14 01:55:42','2025-04-14 01:55:42'),(5,2,3,1,'asd','dd',51.00,'asd','2',0,'2025-04-14 03:56:38','2025-04-14 03:59:47'),(6,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'2025-04-14 03:56:42','2025-04-14 03:56:42');
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school_fees`
--

DROP TABLE IF EXISTS `school_fees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `school_fees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fee_name` varchar(200) DEFAULT NULL,
  `grade_level_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `grade_level_id` (`grade_level_id`),
  CONSTRAINT `school_fees_ibfk_1` FOREIGN KEY (`grade_level_id`) REFERENCES `grade_level` (`id`),
  CONSTRAINT `school_fees_ibfk_2` FOREIGN KEY (`grade_level_id`) REFERENCES `grade_level` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school_fees`
--

LOCK TABLES `school_fees` WRITE;
/*!40000 ALTER TABLE `school_fees` DISABLE KEYS */;
/*!40000 ALTER TABLE `school_fees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sections`
--

DROP TABLE IF EXISTS `sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `section_name` varchar(100) DEFAULT NULL,
  `grade_level_id` int(11) DEFAULT NULL,
  `term_id` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `is_current` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `grade_level_id` (`grade_level_id`),
  CONSTRAINT `sections_ibfk_1` FOREIGN KEY (`grade_level_id`) REFERENCES `grade_level` (`id`),
  CONSTRAINT `sections_ibfk_3` FOREIGN KEY (`grade_level_id`) REFERENCES `grade_level` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,'A',1,1,1,1,0,0,0,'2025-04-24 05:47:21','2025-04-24 05:47:21'),(2,'B',1,1,1,1,0,0,0,'2025-04-24 05:47:21','2025-04-24 05:47:21'),(3,'C',1,1,1,1,0,0,0,'2025-04-24 05:47:21','2025-04-24 05:47:21'),(4,'D',1,1,1,1,0,0,0,'2025-04-24 05:47:21','2025-04-24 05:47:21'),(5,'A',2,1,1,1,0,0,0,'2025-04-24 05:47:21','2025-04-24 05:47:21'),(6,'B',2,1,1,1,0,0,0,'2025-04-24 05:47:21','2025-04-24 05:47:21'),(7,'C',2,1,1,1,0,0,0,'2025-04-24 05:47:21','2025-04-24 05:47:21'),(8,'D',2,1,1,1,0,0,0,'2025-04-24 05:47:21','2025-04-24 05:47:21');
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `semester_level`
--

DROP TABLE IF EXISTS `semester_level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semester_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `semester_level_name` varchar(100) DEFAULT NULL,
  `term_id` int(11) DEFAULT NULL,
  `grade_level_id` int(11) DEFAULT NULL,
  `is_current` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `is_deleted_at` datetime DEFAULT current_timestamp(),
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_grade_level` (`grade_level_id`),
  KEY `fk_term` (`term_id`),
  CONSTRAINT `fk_grade_level` FOREIGN KEY (`grade_level_id`) REFERENCES `grade_level` (`id`),
  CONSTRAINT `fk_term` FOREIGN KEY (`term_id`) REFERENCES `term` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semester_level`
--

LOCK TABLES `semester_level` WRITE;
/*!40000 ALTER TABLE `semester_level` DISABLE KEYS */;
INSERT INTO `semester_level` VALUES (1,'1st Semester',1,1,1,1,0,'0000-00-00 00:00:00','2025-04-18 14:07:57','2025-04-18 14:29:50');
/*!40000 ALTER TABLE `semester_level` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status_name` varchar(100) DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `status_name` (`status_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Active','2025-02-05 23:23:19','2025-02-05 23:23:19'),(2,'Inactive','2025-02-05 23:23:55','2025-02-05 23:23:55'),(3,'Drop','2025-02-05 23:23:55','2025-02-05 23:23:55');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_documents`
--

DROP TABLE IF EXISTS `student_documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_documents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `document_name` varchar(100) DEFAULT NULL,
  `document_type` varchar(100) DEFAULT NULL,
  `document_image` varchar(100) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_documents`
--

LOCK TABLES `student_documents` WRITE;
/*!40000 ALTER TABLE `student_documents` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_emergency_contact`
--

DROP TABLE IF EXISTS `student_emergency_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_emergency_contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `relationship` varchar(255) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `contact_no` varchar(200) DEFAULT NULL,
  `email_address` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_emergency_contact`
--

LOCK TABLES `student_emergency_contact` WRITE;
/*!40000 ALTER TABLE `student_emergency_contact` DISABLE KEYS */;
INSERT INTO `student_emergency_contact` VALUES (8,'Pedro Cruz','Uncle','456 Bonifacio Ave, Danao City','09987654321',NULL,'2025-04-11 10:55:13','2025-04-11 10:55:13'),(9,'Pedro Cruz','Uncle','456 Bonifacio Ave, Danao City','09987654321',NULL,'2025-04-11 11:00:20','2025-04-11 11:00:20'),(10,'Pedro Cruz','Uncle','456 Bonifacio Ave, Danao City','09987654321',NULL,'2025-04-11 11:02:40','2025-04-11 11:02:40'),(11,'Pedro Cruz','Uncle','456 Bonifacio Ave, Danao City','09987654321',NULL,'2025-04-11 11:12:49','2025-04-11 11:12:49'),(12,'Pedro Cruz','Uncle','456 Bonifacio Ave, Danao City','09987654321',NULL,'2025-04-11 11:14:19','2025-04-11 11:14:19'),(13,'Pedro Cruz','Uncle','456 Bonifacio Ave, Danao City','09987654321',NULL,'2025-04-11 11:16:12','2025-04-11 11:16:12'),(14,'Pedro Cruz','Uncle','456 Bonifacio Ave, Danao City','09987654321',NULL,'2025-04-11 11:55:12','2025-04-11 11:55:12'),(15,'Pedro Cruz','Uncle','456 Bonifacio Ave, Danao City','09987654321',NULL,'2025-04-11 12:03:00','2025-04-11 12:03:00'),(16,'Pedro Cruz','Uncle','456 Bonifacio Ave, Danao City','09987654321',NULL,'2025-04-12 02:54:22','2025-04-12 02:54:22'),(19,'Carlos Cruz','Uncle','Danao City','09998887777',NULL,'2025-04-12 17:02:39','2025-04-12 17:02:39'),(20,'Carlos Cruz','Uncle','Danao City','09998887777',NULL,'2025-04-12 17:08:43','2025-04-12 17:08:43'),(21,'Carlos Cruz','Uncle','Danao City','09998887777',NULL,'2025-04-12 17:08:44','2025-04-12 17:08:44'),(24,'Emily Doe','Aunt','123 Main Street, Sandayong Sur','09183456789',NULL,'2025-04-13 22:13:14','2025-04-13 22:13:14'),(25,'Emily Doe','Aunt','123 Main Street, Sandayong Sur','09183456789',NULL,'2025-04-13 22:15:54','2025-04-13 22:15:54'),(26,'Emily Doe','Aunt','123 Main Street, Sandayong Sur','09183456789',NULL,'2025-04-13 22:19:01','2025-04-13 22:19:01'),(28,'Pedro Dela Cruz','Uncle','Cebu City','09111111111',NULL,'2025-04-13 22:25:07','2025-04-13 22:25:07'),(30,'Pedro Dela Cruz','Uncle','Cebu City','09111111111',NULL,'2025-04-13 22:49:14','2025-04-13 22:49:14'),(32,'Pedro Cruz','Uncle','Purok 3, Sandayong Sur, Danao City','09335551122',NULL,'2025-04-17 18:47:18','2025-04-17 18:47:18'),(34,'Pedro Dela Rosa','Uncle','Danao City, Cebu','09129876543',NULL,'2025-04-17 19:05:17','2025-04-17 19:05:17'),(40,'Pedro Dela Cruz','Uncle','Tabok, Danao City','09999887766',NULL,'2025-04-19 09:33:17','2025-04-19 09:33:17'),(42,'Pedro Dela Cruz','Uncle','Tabok, Danao City','09999887766',NULL,'2025-04-19 09:44:03','2025-04-19 09:44:03'),(43,'Pedro Dela Cruz','Uncle','Tabok, Danao City','09999887766',NULL,'2025-04-19 09:44:20','2025-04-19 09:44:20'),(44,'Pedro Dela Cruz','Uncle','Tabok, Danao City','09999887766',NULL,'2025-04-19 09:44:42','2025-04-19 09:44:42'),(47,'Pedro Dela Cruz','Uncle','Tabok, Danao City','09999887766',NULL,'2025-04-19 11:40:36','2025-04-19 11:40:36'),(48,'Cade Gardner','Veniam aspernatur n','Eum perspiciatis do',NULL,NULL,'2025-04-19 14:28:49','2025-04-19 14:28:49'),(49,'Graiden Summers','Est quod non ex quod','Quibusdam sunt eiusm',NULL,NULL,'2025-04-19 15:01:21','2025-04-19 15:01:21'),(50,'Jaden Hoffman','Minima quisquam cupi','Ipsam occaecat dolor',NULL,NULL,'2025-04-19 15:11:31','2025-04-19 15:11:31'),(51,'','','',NULL,NULL,'2025-04-23 18:03:35','2025-04-23 18:03:35'),(52,'','','',NULL,NULL,'2025-04-23 18:05:53','2025-04-23 18:05:53'),(54,'Rachel Harper','Sed perferendis ipsu','Labore non tempore ',NULL,NULL,'2025-04-27 18:37:35','2025-04-27 18:37:35'),(55,'Thor Singleton','Sit nisi excepturi a','Distinctio Quia ver',NULL,NULL,'2025-04-27 18:39:31','2025-04-27 18:39:31'),(56,'Candace Hayden','Esse dolores quo ex','Iusto et eius elit ',NULL,NULL,'2025-04-27 18:42:06','2025-04-27 18:42:06'),(57,'Serina Alexander','Et est facilis conse','Sit assumenda porro ',NULL,NULL,'2025-04-27 20:03:47','2025-04-27 20:03:47'),(58,'Hollee Atkins','Sit laboriosam ad c','Error in amet elige',NULL,NULL,'2025-04-27 20:06:22','2025-04-27 20:06:22'),(59,'Genevieve Kennedy','Accusantium ea perfe','Officia amet aliqua',NULL,NULL,'2025-04-27 20:08:53','2025-04-27 20:08:53'),(60,'Derek Cortez','Perferendis voluptas','Nihil cumque aut qui',NULL,NULL,'2025-04-27 20:11:14','2025-04-27 20:11:14'),(61,'Leandra Emerson','Sequi ex minus sint','Adipisci eu at quae ',NULL,NULL,'2025-04-27 20:14:12','2025-04-27 20:14:12'),(62,'Rhoda Bridges','Rerum quidem quisqua','Et vero voluptatibus',NULL,NULL,'2025-04-27 20:16:55','2025-04-27 20:16:55'),(63,'Burke Hale','Laudantium sunt vel','Accusamus voluptatem',NULL,NULL,'2025-04-27 20:17:52','2025-04-27 20:17:52');
/*!40000 ALTER TABLE `student_emergency_contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_guardian`
--

DROP TABLE IF EXISTS `student_guardian`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_guardian` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) DEFAULT NULL,
  `middle_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `suffix_id` int(11) DEFAULT NULL,
  `relationship` varchar(255) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `contact_no` varchar(200) DEFAULT NULL,
  `email_address` varchar(200) DEFAULT NULL,
  `occupation` varchar(100) DEFAULT NULL,
  `occ_address` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_guardian`
--

LOCK TABLES `student_guardian` WRITE;
/*!40000 ALTER TABLE `student_guardian` DISABLE KEYS */;
INSERT INTO `student_guardian` VALUES (8,'Maria','Santos','Cruz',NULL,'Aunt','123 Rizal St, Danao City','09123451234','maria.cruz@gmail.com','Businesswoman',NULL,'2025-04-11 10:55:13','2025-04-11 10:55:13'),(9,'Maria','Santos','Cruz',NULL,'Aunt','123 Rizal St, Danao City','09123451234','maria.cruz@gmail.com','Businesswoman',NULL,'2025-04-11 11:00:20','2025-04-11 11:00:20'),(10,'Maria','Santos','Cruz',NULL,'Aunt','123 Rizal St, Danao City','09123451234','maria.cruz@gmail.com','Businesswoman',NULL,'2025-04-11 11:02:40','2025-04-11 11:02:40'),(11,'Maria','Santos','Cruz',NULL,'Aunt','123 Rizal St, Danao City','09123451234','maria.cruz@gmail.com','Businesswoman',NULL,'2025-04-11 11:12:49','2025-04-11 11:12:49'),(12,'Maria','Santos','Cruz',NULL,'Aunt','123 Rizal St, Danao City','09123451234','maria.cruz@gmail.com','Businesswoman',NULL,'2025-04-11 11:14:19','2025-04-11 11:14:19'),(13,'Maria','Santos','Cruz',NULL,'Aunt','123 Rizal St, Danao City','09123451234','maria.cruz@gmail.com','Businesswoman',NULL,'2025-04-11 11:16:12','2025-04-11 11:16:12'),(14,'Maria','Santos','Cruz',NULL,'Aunt','123 Rizal St, Danao City','09123451234','maria.cruz@gmail.com','Businesswoman',NULL,'2025-04-11 11:55:12','2025-04-11 11:55:12'),(15,'Maria','Santos','Cruz',NULL,'Aunt','123 Rizal St, Danao City','09123451234','maria.cruz@gmail.com','Businesswoman',NULL,'2025-04-11 12:03:00','2025-04-11 12:03:00'),(16,'Maria','Santos','Cruz',NULL,'Aunt','123 Rizal St, Danao City','09123451234','maria.cruz@gmail.com','Businesswoman',NULL,'2025-04-12 02:54:22','2025-04-12 02:54:22'),(19,'Rosa','M','Delos Reyes',NULL,'Aunt','Danao City','09187654321','rosa.reyes@gmail.com','Farmer',NULL,'2025-04-12 17:02:39','2025-04-12 17:02:39'),(20,'Rosa','M','Delos Reyes',NULL,'Aunt','Danao City','09187654321','rosa.reyes@gmail.com','Farmer',NULL,'2025-04-12 17:08:43','2025-04-12 17:08:43'),(21,'Rosa','M','Delos Reyes',NULL,'Aunt','Danao City','09187654321','rosa.reyes@gmail.com','Farmer',NULL,'2025-04-12 17:08:44','2025-04-12 17:08:44'),(24,'Jane','A','Doe',NULL,'Mother','123 Main Street, Sandayong Sur','09182345678','jane.doe@example.com','Teacher',NULL,'2025-04-13 22:13:14','2025-04-13 22:13:14'),(25,'Jane','A','Doe',NULL,'Mother','123 Main Street, Sandayong Sur','09182345678','jane.doe@example.com','Teacher',NULL,'2025-04-13 22:15:54','2025-04-13 22:15:54'),(26,'Jane','A','Doe',NULL,'Mother','123 Main Street, Sandayong Sur','09182345678','jane.doe@example.com','Teacher',NULL,'2025-04-13 22:19:01','2025-04-13 22:19:01'),(28,'Maria','G','Durano',NULL,'Mother','Sandayong Sur, Danao City','09991234567','maria.guardian@email.com','Teacher',NULL,'2025-04-13 22:25:07','2025-04-13 22:25:07'),(30,'Maria','G','Durano',NULL,'Mother','Sandayong Sur, Danao City','09991234567','maria.guardian@email.com','Teacher',NULL,'2025-04-13 22:49:14','2025-04-13 22:49:14'),(32,'Maria','Lopez','Cruz',NULL,'Mother','Purok 3, Sandayong Sur, Danao City','09987654321','maria.cruz@guardianmail.com','Housewife',NULL,'2025-04-17 18:47:18','2025-04-17 18:47:18'),(34,'Maria','Lopez','Dela Rosa',NULL,'Mother','Danao City, Cebu','09123456780','maria.delarosa@example.com','Housewife',NULL,'2025-04-17 19:05:17','2025-04-17 19:05:17'),(40,'Maria','Lopez','Torre',NULL,'Mother','Sandayong Sur, Danao City','09119876543','maria.torre@example.com','Vendor',NULL,'2025-04-19 09:33:17','2025-04-19 09:33:17'),(42,'Maria','Lopez','Torre',NULL,'Mother','Sandayong Sur, Danao City','09119876543','maria.torre@example.com','Vendor',NULL,'2025-04-19 09:44:03','2025-04-19 09:44:03'),(43,'Maria','Lopez','Torre',NULL,'Mother','Sandayong Sur, Danao City','09119876543','maria.torre@example.com','Vendor',NULL,'2025-04-19 09:44:20','2025-04-19 09:44:20'),(44,'Maria','Lopez','Torre',NULL,'Mother','Sandayong Sur, Danao City','09119876543','maria.torre@example.com','Vendor',NULL,'2025-04-19 09:44:42','2025-04-19 09:44:42'),(47,'Maria','Lopez','Torre',NULL,'Mother','Sandayong Sur, Danao City','09119876543','maria.torre@example.com','Vendor',NULL,'2025-04-19 11:40:36','2025-04-19 11:40:36'),(48,'Allen','Stone Dejesus','Medina',0,'Itaque fuga Minus q','Vero corrupti et eo','+1 (461) 275-7876','xaroty@mailinator.com','Harum nulla consecte',NULL,'2025-04-19 14:28:49','2025-04-19 14:28:49'),(49,'Veda','Arsenio Blake','Mckee',0,NULL,'Itaque qui excepturi','+1 (909) 248-4012','monysipat@mailinator.com','Deserunt atque repud',NULL,'2025-04-19 15:01:21','2025-04-19 15:01:21'),(50,'Fletcher','Daria Harrington','Dominguez',0,'Et error ad magnam n','Perspiciatis saepe ','+1 (764) 728-4583','fijeqily@mailinator.com','Nostrum ducimus tot',NULL,'2025-04-19 15:11:31','2025-04-19 15:11:31'),(51,'','','',0,'','',NULL,'','',NULL,'2025-04-23 18:03:35','2025-04-23 18:03:35'),(52,'','','',0,NULL,'',NULL,'','',NULL,'2025-04-23 18:05:53','2025-04-23 18:05:53'),(54,'','','',0,'Ea velit odio eiusmo','Eos cumque corrupti','+1 (192) 498-9909','jytep@mailinator.com','Eu placeat velit ul',NULL,'2025-04-27 18:37:35','2025-04-27 18:37:35'),(55,'','','',0,'Perspiciatis volupt','Aperiam et quasi vol','+1 (516) 778-6822','xygyqajiwu@mailinator.com','Tenetur hic sit sit',NULL,'2025-04-27 18:39:31','2025-04-27 18:39:31'),(56,'','','',0,'Vel reiciendis duis ','Itaque quas recusand','+1 (738) 592-7885','wymuqu@mailinator.com','Numquam ad voluptate',NULL,'2025-04-27 18:42:06','2025-04-27 18:42:06'),(57,'Zahir','Cullen Hammond','Lucas',0,NULL,'','+1 (936) 135-8388','necawijaf@mailinator.com','Aut eos ipsa accusa',NULL,'2025-04-27 20:03:47','2025-04-27 20:03:47'),(58,'','','',0,'Ea fugiat quisquam e','Excepturi pariatur ','+1 (804) 271-1304','garijeb@mailinator.com','Quia sapiente ducimu',NULL,'2025-04-27 20:06:22','2025-04-27 20:06:22'),(59,'','','',0,'Aut fuga Quia vel r','Qui vitae doloribus ','+1 (954) 281-4786','juluq@mailinator.com','Repudiandae laborios',NULL,'2025-04-27 20:08:53','2025-04-27 20:08:53'),(60,'','','',0,'Et lorem quae adipis','Est consectetur eu ','+1 (411) 287-4741','jyjifoteka@mailinator.com','Quia quaerat cillum ',NULL,'2025-04-27 20:11:14','2025-04-27 20:11:14'),(61,'','','',0,'Illo ducimus quo in','Corrupti non culpa ','+1 (535) 471-1978','sonihuvyq@mailinator.com','Ea vero voluptatem ',NULL,'2025-04-27 20:14:12','2025-04-27 20:14:12'),(62,'','','',0,'Aute in quia exercit','Placeat perspiciati','+1 (191) 715-7865','qoka@mailinator.com','Tenetur aliquam poss',NULL,'2025-04-27 20:16:55','2025-04-27 20:16:55'),(63,'Molly','Ava Woods','Thornton',0,NULL,'','+1 (868) 292-5402','tyqomufa@mailinator.com','Ut enim animi incid',NULL,'2025-04-27 20:17:52','2025-04-27 20:17:52');
/*!40000 ALTER TABLE `student_guardian` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_health_profiles`
--

DROP TABLE IF EXISTS `student_health_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_health_profiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `allergies` text DEFAULT NULL,
  `existing_conditions` text DEFAULT NULL,
  `emergency_contact_name` varchar(100) DEFAULT NULL,
  `emergency_contact_number` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `student_health_profiles_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_health_profiles`
--

LOCK TABLES `student_health_profiles` WRITE;
/*!40000 ALTER TABLE `student_health_profiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_health_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_ledgers`
--

DROP TABLE IF EXISTS `student_ledgers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_ledgers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `payment_id` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `fees` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  KEY `payment_id` (`payment_id`),
  CONSTRAINT `student_ledgers_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  CONSTRAINT `student_ledgers_ibfk_2` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`id`),
  CONSTRAINT `student_ledgers_ibfk_3` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  CONSTRAINT `student_ledgers_ibfk_4` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_ledgers`
--

LOCK TABLES `student_ledgers` WRITE;
/*!40000 ALTER TABLE `student_ledgers` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_ledgers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_medical_history`
--

DROP TABLE IF EXISTS `student_medical_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_medical_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `blood_type` varchar(100) DEFAULT NULL,
  `illness` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `student_medical_history_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  CONSTRAINT `student_medical_history_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_medical_history`
--

LOCK TABLES `student_medical_history` WRITE;
/*!40000 ALTER TABLE `student_medical_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_medical_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_status`
--

DROP TABLE IF EXISTS `student_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_status_name` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_status`
--

LOCK TABLES `student_status` WRITE;
/*!40000 ALTER TABLE `student_status` DISABLE KEYS */;
INSERT INTO `student_status` VALUES (1,'New','2025-02-05 23:14:23','2025-02-05 23:14:23'),(2,'Old','2025-02-05 23:14:23','2025-02-05 23:14:23'),(3,'Returnee','2025-02-05 23:14:23','2025-02-05 23:14:23'),(4,'Drop-out','2025-04-24 02:07:24','2025-04-24 02:07:24'),(5,'Graduated','2025-04-24 02:07:24','2025-04-24 02:07:24');
/*!40000 ALTER TABLE `student_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `person_id` int(11) DEFAULT NULL,
  `mother_id` int(11) DEFAULT NULL,
  `father_id` int(11) DEFAULT NULL,
  `student_guardian_id` int(11) DEFAULT NULL,
  `student_emergency_contact_id` int(11) DEFAULT NULL,
  `student_medical_history_id` int(11) DEFAULT NULL,
  `student_document_id` int(11) DEFAULT NULL,
  `student_no` varchar(50) DEFAULT NULL,
  `lrn_no` varchar(50) DEFAULT NULL,
  `term_id` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT 0,
  `created_by` int(11) DEFAULT 0,
  `updated_by` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `person_id` (`person_id`),
  KEY `mother_id` (`mother_id`),
  KEY `father_id` (`father_id`),
  KEY `student_guardian_id` (`student_guardian_id`),
  KEY `student_emergency_contact_id` (`student_emergency_contact_id`),
  KEY `student_medical_history_id` (`student_medical_history_id`),
  KEY `status_id` (`status_id`),
  KEY `student_document_id` (`student_document_id`),
  KEY `fk_students_term` (`term_id`),
  CONSTRAINT `fk_students_term` FOREIGN KEY (`term_id`) REFERENCES `term` (`id`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`person_id`) REFERENCES `persons` (`id`),
  CONSTRAINT `students_ibfk_11` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`),
  CONSTRAINT `students_ibfk_12` FOREIGN KEY (`student_document_id`) REFERENCES `student_documents` (`id`),
  CONSTRAINT `students_ibfk_2` FOREIGN KEY (`mother_id`) REFERENCES `mother` (`id`),
  CONSTRAINT `students_ibfk_3` FOREIGN KEY (`father_id`) REFERENCES `father` (`id`),
  CONSTRAINT `students_ibfk_4` FOREIGN KEY (`student_guardian_id`) REFERENCES `student_guardian` (`id`),
  CONSTRAINT `students_ibfk_5` FOREIGN KEY (`student_emergency_contact_id`) REFERENCES `student_emergency_contact` (`id`),
  CONSTRAINT `students_ibfk_6` FOREIGN KEY (`student_medical_history_id`) REFERENCES `student_medical_history` (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (4,17,11,11,8,8,NULL,NULL,NULL,NULL,NULL,1,0,0,0,'2025-04-12 15:19:18','2025-04-12 15:19:18'),(5,18,12,12,9,9,NULL,NULL,NULL,NULL,NULL,1,0,0,0,'2025-04-12 15:19:18','2025-04-12 15:19:18'),(6,19,13,13,10,10,NULL,NULL,NULL,NULL,NULL,1,0,0,0,'2025-04-12 15:19:18','2025-04-12 15:19:18'),(7,20,14,14,11,11,NULL,NULL,NULL,NULL,NULL,1,0,0,0,'2025-04-12 15:19:18','2025-04-12 15:19:18'),(8,21,15,15,12,12,NULL,NULL,NULL,NULL,NULL,1,0,0,0,'2025-04-12 15:19:18','2025-04-12 15:19:18'),(9,22,16,16,13,13,NULL,NULL,NULL,NULL,NULL,1,0,0,0,'2025-04-12 15:19:18','2025-04-12 15:19:18'),(10,23,17,17,14,14,NULL,NULL,NULL,NULL,NULL,1,0,0,0,'2025-04-12 15:19:18','2025-04-12 15:19:18'),(11,24,18,18,15,15,NULL,NULL,NULL,NULL,1,1,0,0,0,'2025-04-18 02:16:57','2025-04-18 02:16:57'),(12,25,19,19,16,16,NULL,NULL,NULL,NULL,1,1,0,0,0,'2025-04-18 02:16:57','2025-04-18 02:16:57'),(14,28,22,22,19,19,NULL,NULL,NULL,NULL,1,1,0,0,0,'2025-04-18 02:16:57','2025-04-18 02:16:57'),(15,29,23,23,20,20,NULL,NULL,NULL,NULL,1,1,0,0,0,'2025-04-18 02:16:57','2025-04-18 02:16:57'),(16,30,24,24,21,21,NULL,NULL,NULL,NULL,1,1,0,0,0,'2025-04-18 02:16:57','2025-04-18 02:16:57'),(19,33,27,27,24,24,NULL,NULL,'SCLC-202401234','123456789012',1,1,0,0,0,'2025-04-18 02:16:57','2025-04-18 02:16:57'),(20,34,28,28,25,25,NULL,NULL,'SCLC-202401234','123456789012',1,1,0,0,0,'2025-04-18 02:16:57','2025-04-18 02:16:57'),(21,35,29,29,26,26,NULL,NULL,'SCLC-202401234','123456789012',1,1,0,0,0,'2025-04-18 02:16:57','2025-04-18 02:16:57'),(23,37,31,31,28,28,NULL,NULL,'STU-2025-0001','123456789012',1,1,0,0,0,'2025-04-18 02:16:57','2025-04-18 02:16:57'),(25,39,33,33,30,30,NULL,NULL,'STU-2025-0001','123456789012',1,1,0,0,0,'2025-04-18 02:16:57','2025-04-18 02:16:57'),(27,41,35,35,32,32,NULL,NULL,'SCLC-2024-0001','123456789000',1,1,0,0,0,'2025-04-18 02:16:57','2025-04-18 02:16:57'),(29,43,37,37,34,34,NULL,NULL,'SCLC-0001','123456789000',1,1,0,0,0,'2025-04-17 08:35:17','2025-04-17 08:35:17'),(35,49,43,43,40,40,NULL,NULL,'SCLC001','123456789012',1,1,0,0,0,'2025-04-18 23:03:17','2025-04-18 23:03:17'),(37,51,45,45,42,42,NULL,NULL,'SCLC001','123456789012',1,1,0,0,0,'2025-04-18 23:14:03','2025-04-18 23:14:03'),(38,52,46,46,43,43,NULL,NULL,'SCLC001','123456789012',1,1,0,0,0,'2025-04-18 23:14:20','2025-04-18 23:14:20'),(39,53,47,47,44,44,NULL,NULL,'SCLC001','123456789012',1,1,0,0,0,'2025-04-18 23:14:42','2025-04-18 23:14:42'),(42,56,50,50,47,47,NULL,NULL,'SCLC-25260028','123456789012',1,1,0,0,0,'2025-04-19 01:10:36','2025-04-19 01:10:36'),(49,68,57,57,54,54,NULL,NULL,'SCLC-25260029','976',NULL,1,0,0,0,'2025-04-27 10:37:35','2025-04-27 10:37:35'),(50,69,58,58,55,55,NULL,NULL,'SCLC-25260030','271',NULL,1,0,0,0,'2025-04-27 10:39:31','2025-04-27 10:39:31'),(51,70,59,59,56,56,NULL,NULL,'SCLC-25260031','576',NULL,1,0,0,0,'2025-04-27 10:42:06','2025-04-27 10:42:06'),(52,71,60,60,57,57,NULL,NULL,'SCLC-25260032','829',NULL,1,0,0,0,'2025-04-27 12:03:47','2025-04-27 12:03:47'),(53,72,61,61,58,58,NULL,NULL,'SCLC-25260033','69',NULL,1,0,0,0,'2025-04-27 12:06:22','2025-04-27 12:06:22'),(54,73,62,62,59,59,NULL,NULL,'SCLC-25260034','244',NULL,1,0,0,0,'2025-04-27 12:08:53','2025-04-27 12:08:53'),(55,74,63,63,60,60,NULL,NULL,'SCLC-25260035','882',NULL,1,0,0,0,'2025-04-27 12:11:14','2025-04-27 12:11:14'),(56,75,64,64,61,61,NULL,NULL,'SCLC-25260036','318',NULL,1,0,0,0,'2025-04-27 12:14:12','2025-04-27 12:14:12'),(57,76,65,65,62,62,NULL,NULL,'SCLC-25260037','383',NULL,1,0,0,0,'2025-04-27 12:16:55','2025-04-27 12:16:55'),(58,77,66,66,63,63,NULL,NULL,'SCLC-25260038','789',NULL,1,0,0,0,'2025-04-27 12:17:52','2025-04-27 12:17:52');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject_name` varchar(100) DEFAULT NULL,
  `subject_code` varchar(100) DEFAULT NULL,
  `term_id` int(11) DEFAULT NULL,
  `grade_level_id` int(11) DEFAULT NULL,
  `is_current` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `is_deleted_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'English','Eng101',1,1,1,1,0,0,0,0,'2025-04-18 03:32:36','2025-04-18 03:32:36');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suffix`
--

DROP TABLE IF EXISTS `suffix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suffix` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `suffix_name` varchar(50) DEFAULT NULL,
  `created_by` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_by` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suffix`
--

LOCK TABLES `suffix` WRITE;
/*!40000 ALTER TABLE `suffix` DISABLE KEYS */;
INSERT INTO `suffix` VALUES (1,'Jr.','2025-02-05 12:52:25','2025-02-05 12:52:25'),(2,'Sr.','2025-02-05 12:52:25','2025-02-05 12:52:25'),(3,'I','2025-02-05 12:52:25','2025-02-05 12:52:25'),(4,'II','2025-02-05 12:52:25','2025-02-05 12:52:25'),(5,'III','2025-02-05 12:52:25','2025-02-05 12:52:25'),(6,'IV','2025-02-05 12:52:25','2025-02-05 12:52:25'),(7,'V','2025-02-05 12:52:25','2025-02-05 12:52:25'),(8,'VI','2025-02-05 12:52:25','2025-02-05 12:52:25'),(9,'VII','2025-02-05 12:52:25','2025-02-05 12:52:25'),(10,'VIII','2025-02-05 12:52:25','2025-02-05 12:52:25'),(11,'IX','2025-02-05 12:52:25','2025-02-05 12:52:25'),(12,'X','2025-02-05 12:52:25','2025-02-05 12:52:25');
/*!40000 ALTER TABLE `suffix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `term`
--

DROP TABLE IF EXISTS `term`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `term` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `term_name` varchar(50) DEFAULT NULL,
  `date_start` varchar(50) DEFAULT NULL,
  `date_end` varchar(50) DEFAULT NULL,
  `is_current` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `is_deleted_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `is_deleted_by` int(11) DEFAULT NULL,
  `created_by` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `term`
--

LOCK TABLES `term` WRITE;
/*!40000 ALTER TABLE `term` DISABLE KEYS */;
INSERT INTO `term` VALUES (1,'2025-2026','2025-06-01','2026-03-31',1,1,0,'2025-04-27 12:18:10',NULL,'2025-04-27 12:18:10',2,'2025-04-27 12:18:10','2025-04-27 12:18:10'),(2,'2025-2026','2025-06-01','2026-03-31',0,1,0,'2025-04-19 04:36:48',NULL,'2025-04-19 04:36:48',2,'2025-04-19 04:36:48','2025-04-19 04:36:48'),(3,'2024-2025','2025-06-01','2026-03-31',0,1,0,'2025-04-19 04:36:48',NULL,'2025-04-19 04:36:48',3,'2025-04-19 04:36:48','2025-04-19 04:36:48'),(4,'2023-2024','2025-06-01','2026-03-31',0,1,0,'2025-04-19 04:36:48',NULL,'2025-04-19 04:36:48',NULL,'2025-04-19 04:36:48','2025-04-19 04:36:48'),(5,'2022-2023','2025-06-01','2026-03-31',0,1,0,'2025-04-27 12:18:10',NULL,'2025-04-27 12:18:10',NULL,'2025-04-27 12:18:10','2025-04-27 12:18:10'),(6,'2021-2023','2025-06-01','2026-03-31',0,1,1,'2025-04-19 04:36:48',2,'2025-04-19 04:36:48',NULL,'2025-04-19 04:36:48','2025-04-19 04:36:48');
/*!40000 ALTER TABLE `term` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `last_name` varchar(50) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `extension` varchar(20) DEFAULT NULL,
  `dob` varchar(50) DEFAULT NULL,
  `citizemship` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `contact_number` varchar(30) DEFAULT NULL,
  `permanent_address` varchar(100) DEFAULT NULL,
  `present_address` varchar(100) DEFAULT NULL,
  `brgy` varchar(100) DEFAULT NULL,
  `purok` varchar(100) DEFAULT NULL,
  `municipality` varchar(100) DEFAULT NULL,
  `zipcode` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_details`
--

LOCK TABLES `user_details` WRITE;
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT NULL,
  `is_deleted_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,'Admin',1,0,NULL,NULL,NULL,'2025-04-12 17:58:10','2025-04-12 17:58:10'),(2,'Owner',1,0,NULL,NULL,NULL,'2025-04-12 17:58:10','2025-04-12 17:58:10'),(3,'Principal',1,0,NULL,NULL,NULL,'2025-04-12 17:58:10','2025-04-12 17:58:10'),(4,'Assistant Principal',1,0,NULL,NULL,NULL,'2025-04-12 17:58:10','2025-04-12 17:58:10'),(5,'Registrar',1,0,NULL,NULL,NULL,'2025-04-12 17:58:10','2025-04-12 17:58:10'),(6,'Assistant Registrar',1,0,NULL,NULL,NULL,'2025-04-12 17:58:10','2025-04-12 17:58:10'),(7,'Accountancy',1,0,0,NULL,NULL,'2025-04-12 18:18:20','2025-04-12 18:18:20'),(8,'Assistant Accountancy',1,0,0,NULL,NULL,'2025-04-12 18:18:20','2025-04-12 18:18:20'),(9,'Guidance Counselor',1,0,0,NULL,NULL,'2025-04-12 18:18:20','2025-04-12 18:18:20'),(10,'Assistant Guidance Counselor',1,0,0,NULL,NULL,'2025-04-12 18:18:20','2025-04-12 18:18:20'),(11,'Nurse',1,0,0,NULL,NULL,'2025-04-12 18:18:20','2025-04-12 18:18:20'),(12,'Student',1,0,0,NULL,NULL,'2025-04-12 18:18:20','2025-04-12 18:18:20'),(13,'Guadian',1,0,0,NULL,NULL,'2025-04-12 18:18:20','2025-04-12 18:18:20'),(14,'Teacher',1,0,0,NULL,NULL,'2025-04-12 18:18:20','2025-04-12 18:18:20'),(15,'Guest',1,1,0,NULL,NULL,'2025-03-21 05:13:26','2025-03-21 05:13:26'),(16,'USERS',1,1,0,NULL,NULL,'2025-04-12 18:18:20','2025-04-12 18:18:20');
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-27 20:58:28
