-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 12, 2023 at 08:16 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pharam`
--

-- --------------------------------------------------------

--
-- Table structure for table `accountants`
--

CREATE TABLE `accountants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `disable` tinyint(1) DEFAULT 0,
  `phone` int(11) DEFAULT NULL,
  `photo` varchar(500) DEFAULT 'profile-img.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `accountants`
--

INSERT INTO `accountants` (`id`, `first_name`, `last_name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `disable`, `phone`, `photo`) VALUES
(1, 'Abeer', 'Aly', 'abeeraly239@gmail.com', '2023-06-01 02:57:57', '$2y$10$T0MvtNHpaUOIZmVNfaMsH.OJotsQB2r76YaJB5C9SjbNzcltyZFzS', NULL, '2023-06-01 02:57:57', NULL, 0, NULL, 'profile-img.jpg'),
(2, 'Ola', 'Fawzi', 'olafawzii80@gmail.com', '2023-06-01 02:57:57', '$2y$10$svQOnaZSn9ixghL/16DGkerOGxu0ZLkL82g3n6YULzuF0WJXqlGkS', NULL, '2023-06-01 02:57:57', NULL, 0, NULL, 'profile-img.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `photo` varchar(500) NOT NULL DEFAULT 'profile-img.jpg',
  `disabled` tinyint(2) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `first_name`, `last_name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `phone`, `photo`, `disabled`) VALUES
(1, 'amr', 'ahmed', 'amr@gmail.com', '2023-05-12 21:23:33', '$2y$10$cpVoRyaBXDXGgjb2P7RU5uAO084qnxIsfaIm7UJpkHFCWaPSnnPua', NULL, NULL, '2023-06-12 13:07:31', NULL, 'Admins/profile-img.jpg', 0),
(2, 'basmala', 'awad', 'bosi@gmail.com', '2023-05-05 07:04:11', '$2y$10$/Is8Zxjnfz9vGREB2um9a.GYWXvIQyolxMw5BlJIwuTmlCfhR3WKa', NULL, '2023-05-05 07:04:11', '2023-06-12 13:07:34', NULL, 'Admins/profile-img.jpg', 1),
(3, 'ola', 'fawzi', 'olafawzii80@gmail.com', '2023-05-05 07:04:11', '$2y$10$svQOnaZSn9ixghL/16DGkerOGxu0ZLkL82g3n6YULzuF0WJXqlGkS', NULL, NULL, '2023-05-13 05:28:33', NULL, 'Admins/profile-img.jpg', 0),
(4, 'Ibrahim Ahmed', 'Elassal', 'ibrahimelassal662@gmail.com', '2023-05-05 07:04:11', '$2y$10$45mCwvYk3Bv6aYeI40Dw8.cdUcQHw7u8fc1Tyzj0lW9vLhHDPfOMm', NULL, NULL, NULL, '', 'Admins/profile-img.jpg', 0),
(5, 'Abeer', 'Aly', 'abeeraly239@gmail.com', '2023-05-31 20:46:06', '$2y$10$T0MvtNHpaUOIZmVNfaMsH.OJotsQB2r76YaJB5C9SjbNzcltyZFzS', NULL, '2023-05-13 05:28:33', '2023-05-31 20:46:06', NULL, 'Admins/profile-img.jpg', 0),
(6, 'ahmed', 'omar', 'ahmed@gmail.com', NULL, '$2y$10$LHjh5HXcEJ4gWkATfsysxeeIcpY1Q2mDFDYydz0bIkWctISUcg.fm', NULL, '2023-06-12 10:29:56', '2023-06-12 10:29:56', NULL, 'profile-img.jpg', 0),
(8, 'ahmed', 'omar', 'ahmed12@gmail.com', NULL, '$2y$10$qeqpBFGgeUiodyrwzMFu5e/OuQMnWl4koFthhKfh0W3/Mg4ngSwJ6', NULL, '2023-06-12 13:08:26', '2023-06-12 13:08:26', NULL, 'profile-img.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `announcements`
--

CREATE TABLE `announcements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `head` varchar(255) NOT NULL,
  `details` text NOT NULL,
  `photo` varchar(500) NOT NULL DEFAULT 'profile-img.jpg',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`id`, `head`, `details`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'BLANC DE LAMER', 'Maximum deep and long-lasting hydration', 'Announcements/23-02-10_01-59-05-395.jpg', '2023-03-04 22:52:22', '2023-03-04 22:52:22'),
(2, 'BLANC DE LAMER', 'Maximum deep and long-lasting hydration', 'Announcements/23-02-10_02-05-56-662.jpg', '2023-03-04 22:54:07', '2023-03-04 22:54:07'),
(3, 'BLANC DE LAMER', 'Maximum deep and long-lasting hydration', 'Announcements/23-02-10_02-35-23-309.jpg', '2023-03-04 22:54:07', '2023-03-04 22:54:07'),
(4, 'BLANC DE LAMER', 'Maximum deep and long-lasting hydration', 'Announcements/23-02-10_03-06-29-176.jpg', '2023-03-04 22:57:23', '2023-03-04 22:57:23');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `qty` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `session_id` bigint(20) UNSIGNED NOT NULL,
  `contant` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `delivered_orders`
--

CREATE TABLE `delivered_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_left_id` bigint(20) UNSIGNED NOT NULL,
  `accountant_id` bigint(20) UNSIGNED DEFAULT NULL,
  `canceled_quantity` int(11) DEFAULT 0,
  `delivered_quantity` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

CREATE TABLE `discounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `presentage_Discount` decimal(8,2) NOT NULL,
  `discount_price` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `discounts`
--

INSERT INTO `discounts` (`id`, `product_id`, `presentage_Discount`, `discount_price`, `created_at`, `updated_at`) VALUES
(1, 1, '3.00', '97.00', '2023-03-03 22:34:23', '2023-03-03 22:34:23'),
(2, 2, '5.00', '125.00', '2023-03-04 22:34:23', '2023-03-04 22:34:23'),
(3, 3, '4.00', '130.00', '2023-03-04 22:46:53', '2023-03-04 22:46:53'),
(4, 4, '3.30', '145.00', '2023-03-04 22:46:53', '2023-03-04 22:46:53'),
(5, 5, '3.00', '193.99', '2023-03-04 22:50:52', '2023-03-04 22:50:57');

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `specialize` varchar(255) NOT NULL,
  `appointment` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `residential_area` varchar(255) NOT NULL,
  `street` text NOT NULL,
  `phone` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `photo` varchar(500) NOT NULL DEFAULT 'profile-img.jpg',
  `time` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `name`, `specialize`, `appointment`, `city`, `residential_area`, `street`, `phone`, `created_at`, `updated_at`, `photo`, `time`) VALUES
(2, 'ahmed', 'Dentist', 'Mon To Fri', 'Cairo', 'Madina Nasr', 'st 9', '0103015552', '2023-04-26 00:09:16', '2023-04-26 00:09:16', 'Doctors/profile-img.jpg', NULL),
(3, 'ahmed', 'Dentist', 'Mon To Fri', 'Cairo', 'Madina Nasr', 'st 9', '0103015552', '2023-04-26 00:09:18', '2023-04-26 00:09:18', 'Doctors/profile-img.jpg', NULL),
(4, 'ahmed', 'Dentist', 'Mon To Fri', 'Cairo', 'Madina Nasr', 'st 9', '0103015552', '2023-04-26 00:09:19', '2023-04-26 00:09:19', 'Doctors/profile-img.jpg', NULL),
(5, 'ahmed', 'Dentist', 'Mon To Fri', 'Cairo', 'Madina Nasr', 'st 9', '0103015552', '2023-04-26 00:09:19', '2023-04-26 00:09:19', 'Doctors/profile-img.jpg', NULL),
(6, 'ahmed', 'Dentist', 'Mon To Fri', 'Cairo', 'Madina Nasr', 'st 9', '0103015552', '2023-04-26 00:09:20', '2023-04-26 00:09:20', 'Doctors/profile-img.jpg', NULL),
(7, 'ahmed', 'Dentist', 'Mon To Fri', 'Cairo', 'Madina Nasr', 'st 9', '0103015552', '2023-04-26 00:09:20', '2023-04-26 00:09:20', 'Doctors/profile-img.jpg', NULL),
(8, 'Elassal', 'Dentist', 'Mon To Fri', 'Cairo', 'Madina Nasr', 'st 9', '0103015552', '2023-04-26 00:09:57', '2023-04-26 00:09:57', 'Doctors/profile-img.jpg', NULL),
(9, 'Omar', 'Dentist', 'Mon To Fri', 'Cairo', 'Madina Nasr', 'st 9', '0103015552', '2023-04-26 00:10:04', '2023-04-26 00:10:04', 'Doctors/profile-img.jpg', NULL),
(10, 'Mohamed', 'Dentist', 'Mon To Fri', 'Cairo', 'Madina Nasr', 'st 9', '0103015552', '2023-04-26 00:10:12', '2023-04-26 00:10:12', 'Doctors/profile-img.jpg', NULL),
(11, 'Mostafa', 'Dentist', 'Mon To Fri', 'Cairo', 'Madina Nasr', 'st 9', '0103015552', '2023-04-26 00:10:22', '2023-04-26 00:10:22', 'Doctors/profile-img.jpg', NULL),
(12, 'Ahmed', 'Pharmacy', 'Mon To Fri', 'Cairo', 'Madina Nasr', 'st 9', '0103015552', '2023-04-26 00:11:05', '2023-04-26 00:11:05', 'Doctors/profile-img.jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `dose_of_products`
--

CREATE TABLE `dose_of_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `indication_id` bigint(20) UNSIGNED NOT NULL,
  `min_age` int(11) DEFAULT NULL,
  `max_age` int(11) DEFAULT NULL,
  `min_weight` int(11) DEFAULT NULL,
  `max_weight` int(11) DEFAULT NULL,
  `dose` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `dose_of_products`
--

INSERT INTO `dose_of_products` (`id`, `indication_id`, `min_age`, `max_age`, `min_weight`, `max_weight`, `dose`, `created_at`, `updated_at`) VALUES
(3, 3, 12, 15, 40, 55, 'give 1 tablet dissolved in water, up to 4 times daily. do not give more frequently than every 4 hours . maximum 4 tablets in 24 hours', '2023-04-26 08:11:30', '2023-04-26 08:11:30'),
(4, 3, 16, NULL, 55, NULL, 'give 2 tablet dissolved in water, up to 4 times daily. do not give more frequently than every 4 hours . maximum 8 tablets in 24 hours', '2023-04-26 08:13:10', '2023-04-26 08:13:10'),
(5, 5, 2, 3, 4, NULL, '2.5 ml. if necessary after 4-6 hours give a seconf 2.5 ml dose', '2023-04-26 08:49:58', '2023-04-26 08:49:58'),
(6, 4, 2, 3, 5, 6, '3 ml / 4 times', '2023-04-26 08:52:38', '2023-04-26 08:52:38'),
(7, 4, 3, 4, 6, 7, '3.5 ml / 4 times', '2023-04-26 08:55:09', '2023-04-26 08:55:09'),
(8, 4, 4, 6, 7, 8, '4 ml / 4 times', '2023-04-26 08:59:10', '2023-04-26 08:59:10'),
(9, 4, 6, 8, 8, 9, '5 ml / 4 times', '2023-04-26 08:59:51', '2023-04-26 08:59:51'),
(10, 4, 8, 12, 9, 10, '5.5  ml / 4 times', '2023-04-26 09:00:33', '2023-04-26 09:00:33'),
(11, 4, 1, 2, 10, 12, '6 ml / 4 times', '2023-04-26 09:01:10', '2023-04-26 09:01:10'),
(12, 4, 2, 3, 12, 14, '7.5 ml / 4 times', '2023-04-26 09:08:03', '2023-04-26 09:08:03'),
(13, 4, 3, 4, 14, 16, '8.5 ml / 4 times', '2023-04-26 09:08:48', '2023-04-26 09:08:48'),
(14, 4, 4, 5, 16, 18, '10 ml / 4 times', '2023-04-26 09:09:21', '2023-04-26 09:09:21'),
(15, 4, 5, 8, 18, 21, '10 ml / 4 times', '2023-04-26 09:11:01', '2023-04-26 09:11:01'),
(16, 4, 8, 10, 21, 24, '10 ml   5 ml / 4 times', '2023-04-26 09:11:36', '2023-04-26 09:11:36'),
(17, 4, 10, 12, 24, 27, '10 ml   10 ml / 4 times', '2023-04-26 09:11:59', '2023-04-26 09:11:59'),
(26, 6, 10, NULL, 45, NULL, '2 tabs q 12 hr', '2023-05-15 08:35:25', '2023-05-15 08:35:25'),
(27, 7, 10, NULL, 45, NULL, '2 tabs q 6 hr', '2023-05-15 08:36:52', '2023-05-15 08:36:52'),
(28, 8, 10, NULL, 45, NULL, '2 tabs at bedtime', '2023-05-15 08:37:33', '2023-05-15 08:37:33');

-- --------------------------------------------------------

--
-- Table structure for table `employee_old_emails`
--

CREATE TABLE `employee_old_emails` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin_id` bigint(20) UNSIGNED DEFAULT NULL,
  `orderCoordinator_id` bigint(20) UNSIGNED DEFAULT NULL,
  `accountant_id` bigint(20) UNSIGNED DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employee_old_emails`
--

INSERT INTO `employee_old_emails` (`id`, `admin_id`, `orderCoordinator_id`, `accountant_id`, `email`, `email_verified_at`, `created_at`, `updated_at`) VALUES
(1, 3, NULL, NULL, 'olafawzi111@gmail.com', NULL, '2023-05-30 13:16:40', '2023-05-30 13:16:40');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `user_id`, `product_id`, `created_at`, `updated_at`) VALUES
(13, 21, 7, '2023-05-03 17:51:23', '2023-05-03 17:51:23'),
(14, 22, 3, '2023-05-31 23:40:09', '2023-05-31 23:40:09'),
(15, 22, 2, '2023-05-31 23:40:10', '2023-05-31 23:40:10');

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `contents` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`id`, `user_id`, `contents`, `created_at`, `updated_at`) VALUES
(1, 14, 'first feedback', '2023-04-28 19:21:12', '2023-04-28 19:21:12'),
(2, 14, 'first feedback in here', '2023-04-28 22:19:28', '2023-04-28 22:19:28'),
(3, 14, 'first feedback', '2023-04-28 22:25:23', '2023-04-28 22:25:23'),
(4, 14, 'first feedback', '2023-04-28 22:26:57', '2023-04-28 22:26:57');

-- --------------------------------------------------------

--
-- Table structure for table `labs`
--

CREATE TABLE `labs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `type_of_medical_analyses` text NOT NULL,
  `appointment` varchar(255) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `residential_area` varchar(255) NOT NULL,
  `street` text NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `photo` varchar(500) NOT NULL DEFAULT 'profile-img.jpg',
  `time` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `labs`
--

INSERT INTO `labs` (`id`, `name`, `type_of_medical_analyses`, `appointment`, `city`, `residential_area`, `street`, `phone`, `created_at`, `updated_at`, `photo`, `time`) VALUES
(2, 'AL borg', 'test', 'Mon To Fri', 'Cairo', 'Madina Nasr', 'st 9', '0103015552', '2023-04-26 00:13:08', '2023-04-26 00:13:08', 'Labs/profile-img.jpg', NULL),
(3, 'MNA', 'test', 'Mon To Fri', 'Cairo', 'Madina Nasr', 'st 9', '0103015552', '2023-04-26 00:13:20', '2023-04-26 00:13:20', 'Labs/profile-img.jpg', NULL),
(4, 'AL Mokhtabar', 'test', 'Mon To Fri', 'Cairo', 'Madina Nasr', 'st 9', '0103015552', '2023-04-26 00:13:42', '2023-04-26 00:13:42', 'Labs/profile-img.jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(124, '2014_10_12_100000_create_password_resets_table', 1),
(125, '2019_08_19_000000_create_failed_jobs_table', 1),
(126, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(127, '2023_03_01_002733_create_products_table', 1),
(128, '2023_03_01_010347_create_discounts_table', 1),
(129, '2023_03_04_064725_create_types_table', 1),
(130, '2023_03_04_203236_add_type_to_products', 2),
(131, '2023_03_04_204424_create_announcements_table', 3),
(132, '2019_05_11_000000_create_otps_table', 4),
(133, '2023_03_10_181059_create_doctors_table', 4),
(134, '2023_03_10_224226_create_labs_table', 4),
(136, '2014_10_12_000000_create_users_table', 5),
(138, '2023_03_14_182435_create_carts_table', 7),
(139, '2023_03_30_021307_create_orders_table', 8),
(140, '2023_03_30_023355_create_pendings_table', 9),
(141, '2023_03_30_040523_add_address_and_phone_to_users', 10),
(142, '2023_03_30_062936_create_news_table', 11),
(143, '2023_03_30_230120_add_details_to_products', 12),
(144, '2023_04_10_014209_create_images_table', 13),
(147, '2014_10_12_000000_create_owners_table', 14),
(148, '2023_04_19_040834_create_product_cases_table', 14),
(149, '2023_04_19_042056_create_product_indications_table', 14),
(150, '2023_04_19_045818_create_dose_of_products_table', 14),
(151, '2023_04_20_142730_create_old_emails_table', 14),
(152, '2023_03_11_025938_create_feedbacks_table', 15),
(154, '2023_05_01_201608_create_new_users_table', 16),
(155, '2023_05_01_233210_create_favorites_table', 17),
(157, '2023_04_28_084740_add_points_to_products', 19),
(158, '2023_04_29_011847_add_disable_to_products', 20),
(162, '2014_10_12_000000_create_accountants_table', 21),
(163, '2014_10_12_000000_create_admins_table', 22),
(164, '2023_05_07_202247_add_disable_to_accountants', 23),
(165, '2023_05_07_204049_create_order_cordinators_table', 24),
(166, '2023_05_12_035329_add_phone_to_order_cordinators', 25),
(167, '2023_05_12_042253_create_order_lefts_table', 26),
(169, '2023_05_15_081230_add_phone_and_photo_to_accountants', 28),
(170, '2023_05_15_085445_add_total_price_to_orders', 29),
(171, '2023_05_15_095457_create_delivered_orders_table', 30),
(172, '2023_05_15_211656_create_sessions_table', 31),
(173, '2023_05_15_231040_create_comments_table', 32),
(174, '2023_05_29_090053_create_employee_old_emails_table', 32),
(175, '2023_05_29_233424_create_watting_emails_table', 32),
(176, '2023_06_07_152113_add_disabled_to_admins', 33);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `photo` varchar(500) NOT NULL DEFAULT 'profile-img.jpg',
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `photo`, `description`, `created_at`, `updated_at`) VALUES
(1, 'cream', 'Announcements/23-02-10_02-35-23-309.jpg', 'Lorem ipsem dolor sit amet consectetur adipisicing elit .facere saepe reprehenderit sequi cupiditate autem neque voluptate ,impedit', '2023-05-16 01:44:51', '2023-05-16 01:44:51');

-- --------------------------------------------------------

--
-- Table structure for table `new_users`
--

CREATE TABLE `new_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `new_users`
--

INSERT INTO `new_users` (`id`, `first_name`, `last_name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(8, 'ahmed', 'omar', 'ahmed12@gmail.com', '123456789', '2023-05-16 15:04:37', '2023-05-16 15:04:37');

-- --------------------------------------------------------

--
-- Table structure for table `old_emails`
--

CREATE TABLE `old_emails` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `delivery_status` tinyint(1) DEFAULT 0,
  `canceled` tinyint(1) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `totalPrice` decimal(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `product_id`, `quantity`, `price`, `delivery_status`, `canceled`, `created_at`, `updated_at`, `totalPrice`) VALUES
(19, 1, 1, 1, '97', 0, 1, '2022-07-06 04:12:22', '2022-07-06 04:12:22', '97.00'),
(20, 1, 2, 1, '125', 1, 0, '2022-07-15 04:12:23', '2022-07-15 04:12:23', '125.00'),
(21, 1, 3, 2, '130', 1, 0, '2023-04-03 05:12:24', '2023-04-03 05:12:24', '260.00'),
(26, 2, 1, 1, '97', 0, 1, '2023-01-12 06:07:57', '2023-01-12 06:07:57', '97.00'),
(27, 2, 2, 1, '125', 0, 0, '2023-05-12 05:10:33', '2023-05-12 05:10:33', '125.00'),
(28, 2, 1, 1, '97', 0, 0, '2023-05-12 05:13:03', '2023-05-12 05:13:03', '97.00'),
(29, 1, 4, 1, '145', 0, 1, '2023-06-01 05:17:14', '2023-06-01 05:17:14', '145.00'),
(30, 1, 2, 1, '125', 0, 0, '2023-06-12 05:25:10', '2023-06-12 05:25:10', '125.00'),
(31, 2, 2, 1, '125', 1, 0, '2022-11-18 06:31:06', '2022-11-18 06:31:06', '125.00'),
(32, 2, 6, 1, '75', 0, 0, '2023-05-12 05:33:59', '2023-05-12 05:33:59', '75.00'),
(33, 2, 6, 1, '193', 1, 0, '2022-09-07 05:35:30', '2022-09-07 05:35:30', '193.00'),
(34, 1, 6, 1, '75', 0, 0, '2023-05-12 05:46:30', '2023-05-12 05:46:30', '75.00'),
(35, 1, 6, 1, '75', 1, 0, '2023-01-02 07:00:52', '2023-01-02 07:00:52', '75.00'),
(36, 2, 4, 2, '145', 1, 0, '2022-11-19 07:01:55', '2022-11-19 07:01:55', '290.00'),
(37, 2, 6, 1, '75', 0, 0, '2023-05-12 06:03:51', '2023-05-12 06:03:51', '75.00'),
(38, 2, 4, 1, '145', 1, 0, '2023-04-12 07:52:15', '2023-04-12 07:52:15', '145.00'),
(39, 2, 6, 1, '75', 0, 0, '2023-05-12 06:53:07', '2023-05-12 06:53:07', '75.00'),
(40, 2, 4, 1, '145', 0, 0, '2023-05-12 06:53:52', '2023-05-12 06:53:52', '145.00'),
(41, 2, 4, 1, '145', 0, 0, '2022-11-16 08:49:38', '2022-11-11 08:49:38', '145.00'),
(42, 2, 4, 2, '145', 0, 0, '2023-05-15 07:51:44', '2023-05-15 07:51:44', '290.00'),
(43, 22, 1, 8, '97', 0, 0, '2023-05-31 23:41:39', '2023-05-31 23:41:39', '776.00'),
(44, 22, 2, 3, '125', 1, 0, '2022-10-11 23:41:43', '2022-10-11 23:41:43', '375.00'),
(45, 22, 3, 5, '130', 0, 0, '2023-05-31 23:41:46', '2023-05-31 23:41:46', '650.00'),
(46, 28, 7, 3, '175', 1, 0, '2023-06-05 01:57:45', '2023-06-05 01:57:45', '525.00'),
(47, 28, 6, 3, '75', 0, 0, '2023-06-05 02:00:16', '2023-06-05 02:00:16', '225.00'),
(50, 21, 4, 1, '145', 1, 0, '2023-02-15 03:02:36', '2023-02-15 03:02:36', '145.00'),
(51, 25, 4, 2, '145', 1, 0, '2023-03-01 03:02:36', '2023-03-01 03:02:36', '290.00');

-- --------------------------------------------------------

--
-- Table structure for table `order_cordinators`
--

CREATE TABLE `order_cordinators` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `photo` varchar(500) NOT NULL DEFAULT 'profile-img.jpg',
  `disable` tinyint(1) DEFAULT 0,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `phone` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_cordinators`
--

INSERT INTO `order_cordinators` (`id`, `first_name`, `last_name`, `email`, `email_verified_at`, `password`, `photo`, `disable`, `remember_token`, `created_at`, `updated_at`, `phone`) VALUES
(1, 'bosi', 'ibrahim', 'bsmalaibrahim8@gmail.com', '2023-05-14 12:21:36', '$2y$10$e7TiLSoOXIfgqFlq8PxjG./QhPLwGVsc5os/KmeREbhsZ74fSsNiu', 'profile-img.jpg\r\n', 0, NULL, '2023-05-14 13:32:34', '2023-05-14 12:39:07', 1256897),
(2, 'amr', 'ahmed', 'amr@gmail.com', '2023-05-12 15:17:58', '$2y$10$cpVoRyaBXDXGgjb2P7RU5uAO084qnxIsfaIm7UJpkHFCWaPSnnPua', 'profile-img.jpg\r\n', 0, NULL, '2023-06-12 13:32:53', '2023-06-12 13:32:53', 1055654899),
(3, 'hams', 'awad', 'hams@gmail.com', '2023-05-12 05:33:35', '$2y$10$cpVoRyaBXDXGgjb2P7RU5uAO084qnxIsfaIm7UJpkHFCWaPSnnPua', 'profile-img.jpg', 0, NULL, '2022-11-09 14:33:16', '2022-12-07 14:33:16', 1254887569),
(4, 'ola', 'fawzi', 'olafawzii80@gmail.com', '2023-05-12 05:33:35', '$2y$10$svQOnaZSn9ixghL/16DGkerOGxu0ZLkL82g3n6YULzuF0WJXqlGkS', 'profile-img.jpg', 0, NULL, NULL, NULL, NULL),
(5, 'ibrahim Ahmed', 'Elassal', 'ibrahimelassal662@gmail.com', '2023-05-12 05:33:35', '$2y$10$45mCwvYk3Bv6aYeI40Dw8.cdUcQHw7u8fc1Tyzj0lW9vLhHDPfOMm', 'profile-img.jpg', 0, NULL, NULL, NULL, NULL),
(6, 'Abeer', 'Aly', 'abeeraly239@gmail.com', '2023-05-31 23:55:08', '$2y$10$T0MvtNHpaUOIZmVNfaMsH.OJotsQB2r76YaJB5C9SjbNzcltyZFzS', 'profile-img.jpg', 0, NULL, NULL, '2023-05-31 23:55:08', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `order_lefts`
--

CREATE TABLE `order_lefts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_cordinator_id` bigint(20) UNSIGNED DEFAULT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `left` tinyint(1) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_lefts`
--

INSERT INTO `order_lefts` (`id`, `order_cordinator_id`, `order_id`, `left`, `created_at`, `updated_at`) VALUES
(7, 1, 19, 0, '2023-05-12 04:12:23', '2023-05-14 13:17:43'),
(8, 1, 20, 0, '2023-05-12 04:12:23', '2023-05-14 13:18:05'),
(9, 1, 21, 0, '2023-05-12 04:12:24', '2023-05-14 13:18:05'),
(17, 1, 29, 0, '2023-05-12 05:17:14', '2023-05-12 05:17:14'),
(22, 3, 34, 0, '2023-05-12 05:46:30', '2023-05-12 05:46:30'),
(23, 2, 35, 1, '2023-05-12 06:00:52', '2023-05-15 08:12:43'),
(26, 2, 30, 1, NULL, '2023-05-15 08:13:09'),
(27, 3, 38, 0, '2023-05-12 06:52:15', '2023-05-12 06:52:15'),
(28, 3, 39, 0, '2023-05-12 06:53:07', '2023-05-12 06:53:07'),
(29, 2, 40, 0, '2023-05-12 06:53:52', '2023-05-13 03:20:41'),
(30, 2, 41, 0, '2023-05-15 07:49:38', '2023-05-15 07:49:38'),
(31, 2, 42, 0, '2023-05-15 07:51:45', '2023-05-15 07:51:45');

-- --------------------------------------------------------

--
-- Table structure for table `otps`
--

CREATE TABLE `otps` (
  `id` int(10) UNSIGNED NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `validity` int(11) NOT NULL,
  `valid` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `otps`
--

INSERT INTO `otps` (`id`, `identifier`, `token`, `validity`, `valid`, `created_at`, `updated_at`) VALUES
(1, 'bosi@gmail.com', '4393', 60, 1, '2023-05-12 01:22:04', '2023-05-12 01:22:04'),
(2, 'amr@gmail.com', '5273', 60, 1, '2023-05-14 12:15:05', '2023-05-14 12:15:05'),
(3, 'bsmalaibrahim8@gmail.com', '4094', 60, 0, '2023-05-14 12:18:34', '2023-05-14 12:21:36'),
(4, 'bsmalaibrahim8@gmail.com', '334797', 60, 0, '2023-05-14 12:23:38', '2023-05-14 12:25:48'),
(9, 'ahmed13@gmail.com', '5267', 60, 0, '2023-05-16 13:41:16', '2023-05-16 13:43:25'),
(10, 'ahmed12@gmail.com', '2669', 60, 1, '2023-05-16 15:04:37', '2023-05-16 15:04:37'),
(11, 'olafawzi111@gmail.com', '7648', 60, 1, '2023-05-30 13:16:41', '2023-05-30 13:16:41'),
(12, 'abeeraly239@gmail.com', '1633', 60, 0, '2023-05-31 23:37:44', '2023-05-31 23:38:16'),
(13, 'abeeraly239@gmail.com', '0887', 60, 0, '2023-05-31 23:45:14', '2023-05-31 23:46:05'),
(14, 'abeeraly239@gmail.com', '8031', 60, 0, '2023-05-31 23:54:41', '2023-05-31 23:55:08');

-- --------------------------------------------------------

--
-- Table structure for table `owners`
--

CREATE TABLE `owners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `disabled` tinyint(2) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `owners`
--

INSERT INTO `owners` (`id`, `first_name`, `last_name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `disabled`) VALUES
(1, 'Abeer', 'Aly', 'abeeraly239@gmail.com', '2023-06-08 18:40:28', '$2y$10$T0MvtNHpaUOIZmVNfaMsH.OJotsQB2r76YaJB5C9SjbNzcltyZFzS', NULL, '2023-06-08 18:40:28', NULL, 0),
(2, 'Ola', 'Fawzi', 'olafawzii80@gmail.com', '2023-06-08 18:40:28', '$2y$10$qaIUiPUdHP2qEhTCHutJfeZc57xgkgUQesRFD6oIdgTTeL9kcak7u', NULL, '2023-06-08 18:40:28', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pendings`
--

CREATE TABLE `pendings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pendings`
--

INSERT INTO `pendings` (`id`, `order_id`, `created_at`, `updated_at`) VALUES
(10, 19, '2023-05-12 04:12:23', '2023-05-12 04:12:23'),
(11, 20, '2023-05-12 04:12:23', '2023-05-12 04:12:23'),
(12, 21, '2023-05-12 04:12:24', '2023-05-12 04:12:24'),
(17, 26, '2023-05-12 05:07:57', '2023-05-12 05:07:57'),
(18, 27, '2023-05-12 05:10:33', '2023-05-12 05:10:33'),
(19, 28, '2023-05-12 05:13:03', '2023-05-12 05:13:03'),
(20, 29, '2023-05-12 05:17:14', '2023-05-12 05:17:14'),
(21, 30, '2023-05-12 05:25:10', '2023-05-12 05:25:10'),
(22, 31, '2023-05-12 05:31:07', '2023-05-12 05:31:07'),
(23, 32, '2023-05-12 05:33:59', '2023-05-12 05:33:59'),
(24, 33, '2023-05-12 05:35:30', '2023-05-12 05:35:30'),
(25, 34, '2023-05-12 05:46:30', '2023-05-12 05:46:30'),
(26, 35, '2023-05-12 06:00:52', '2023-05-12 06:00:52'),
(27, 36, '2023-05-12 06:01:55', '2023-05-12 06:01:55'),
(28, 37, '2023-05-12 06:03:52', '2023-05-12 06:03:52'),
(29, 38, '2023-05-12 06:52:15', '2023-05-12 06:52:15'),
(30, 39, '2023-05-12 06:53:07', '2023-05-12 06:53:07'),
(31, 40, '2023-05-12 06:53:52', '2023-05-12 06:53:52'),
(32, 41, '2023-05-15 07:49:38', '2023-05-15 07:49:38'),
(33, 42, '2023-05-15 07:51:45', '2023-05-15 07:51:45'),
(34, 43, '2023-05-31 23:41:39', '2023-05-31 23:41:39'),
(35, 44, '2023-05-31 23:41:43', '2023-05-31 23:41:43'),
(36, 45, '2023-05-31 23:41:46', '2023-05-31 23:41:46');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `qrCode` int(11) NOT NULL,
  `name` varchar(400) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `currency` varchar(255) NOT NULL,
  `photo` varchar(500) NOT NULL DEFAULT 'profile-img.jpg',
  `quantity` int(11) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type_id` bigint(20) UNSIGNED NOT NULL,
  `ingredients` text NOT NULL,
  `howToUSe` text NOT NULL,
  `brandCountry` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `characteristics` text NOT NULL,
  `app_area` varchar(255) NOT NULL,
  `for_whom` varchar(255) NOT NULL,
  `purpose` varchar(255) NOT NULL,
  `production_date` date DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `disable` tinyint(4) NOT NULL DEFAULT 0,
  `reorder_point` int(11) NOT NULL DEFAULT 0,
  `photo_1` varchar(500) DEFAULT NULL,
  `photo_2` varchar(500) DEFAULT NULL,
  `photo_3` varchar(500) DEFAULT NULL,
  `photo_4` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `qrCode`, `name`, `price`, `currency`, `photo`, `quantity`, `description`, `created_at`, `updated_at`, `type_id`, `ingredients`, `howToUSe`, `brandCountry`, `company_name`, `characteristics`, `app_area`, `for_whom`, `purpose`, `production_date`, `expiry_date`, `disable`, `reorder_point`, `photo_1`, `photo_2`, `photo_3`, `photo_4`) VALUES
(1, 50, 'Vichy aqualia', '100.00', 'eg', 'Products/image19.jpg', 20, 'zalecany przez Dermedic zalecany przez', '2023-03-04 19:57:41', '2023-06-12 11:15:46', 1, 'LaH micro-exfliates and gently liftsdead skin cells , refinig pores for a smoother complexion> LHA works with other ingrediens o visibility improve existing pimples and reduce future breakouts', 'apply to freshly cleansed skin . apply 2-3 drops anti-ance serum and gently messsage onto the skin follow with the effaclar Duo(+)Moisturiser for targeted results and added hydration avoid  the eye area . in case of contact with eyes rinse throughly this serum can increase skin;s sensitivity to sun light . use in association with a daily photopotection product', 'Egypt', 'Oreal S.A', 'eleminates skin imprefections\r\nreduces sebum production\r\ntightns visible pores\r\nsoftlers and cleares the skin\r\nhas soothing effects\r\nlight and non sticky tecture', 'face', 'unisex', 'against imperfections', '2022-06-12', '2024-06-12', 0, 0, 'Products/image19.jpg', 'Products/image19.jpg', 'Products/image19.jpg', 'Products/image19.jpg'),
(2, 51, 'Dermedic', '130.00', 'eg', 'Products/image25.jpg', 13, 'for ance prone skin and wrinkies', '2023-03-04 20:00:52', '2023-06-12 11:17:04', 2, 'exfollates surface  cells and helps reduce sebum production for visibility clearer skin . salicylic acid works to unclog pores o clear existing imperfections , as well as simultaneously helping o prevent new breakouts from forming', 'apply to freshly cleansed skin . apply 2-3 drops anti-ance serum and gently messsage onto the skin follow with the effaclar Duo(+)Moisturiser for targeted results and added hydration avoid  the eye area . in case of contact with eyes rinse throughly this serum can increase skin;s sensitivity to sun light . use in association with a daily photopotection product', 'American', 'Oreal S.A', 'eleminates skin imprefections\r\nreduces sebum production\r\ntightns visible pores\r\nsoftlers and cleares the skin\r\nhas soothing effects\r\nlight and non sticky tecture', 'face', 'unisex', 'against imperfections', '2023-01-12', '2023-03-12', 0, 0, 'Products/image25.jpg', 'Products/image25.jpg', 'Products/image25.jpg', 'Products/image25.jpg'),
(3, 52, 'Uriage Facial', '145.50', 'eg', 'Products/image21.jpg', 13, 'reduce appearance of breakouts', '2023-03-04 20:02:48', '2023-06-12 11:18:07', 3, 'LaH micro-exfliates and gently liftsdead skin cells , refinig pores for a smoother complexion> LHA works with other ingrediens o visibility improve existing pimples and reduce future breakouts exfollates surface  cells and helps reduce sebum production for visibility clearer skin . salicylic acid works to unclog pores o clear existing imperfections , as well as simultaneously helping o prevent new breakouts from forming', 'apply to freshly cleansed skin . apply 2-3 drops anti-ance serum and gently messsage onto the skin follow with the effaclar Duo(+)Moisturiser for targeted results and added hydration avoid  the eye area . in case of contact with eyes rinse throughly this serum can increase skin;s sensitivity to sun light . use in association with a daily photopotection product', 'Egypt', 'Oreal S.A', 'eleminates skin imprefections\r\nreduces sebum production\r\ntightns visible pores\r\nsoftlers and cleares the skin\r\nhas soothing effects\r\nlight and non sticky tecture', 'face', 'unisex', 'against imperfections', '2022-12-28', '2023-12-28', 0, 0, 'Products/image21.jpg', 'Products/image21.jpg', 'Products/image21.jpg', 'Products/image21.jpg'),
(4, 53, 'clinique Anti-blemish', '150.00', 'eg', 'Products/image22.jpg', 7, 'zalecany przez Dermedic zalecany przez', '2023-03-04 20:04:38', '2023-06-12 11:19:04', 4, 'LaH micro-exfliates and gently liftsdead skin cells , refinig pores for a smoother complexion> LHA works with other ingrediens o visibility improve existing pimples and reduce future breakouts', 'apply to freshly cleansed skin . apply 2-3 drops anti-ance serum and gently messsage onto the skin follow with the effaclar Duo(+)Moisturiser for targeted results and added hydration avoid  the eye area . in case of contact with eyes rinse throughly this serum can increase skin;s sensitivity to sun light . use in association with a daily photopotection product', 'France', 'Oreal S.A', 'eleminates skin imprefections\r\nreduces sebum production\r\ntightns visible pores\r\nsoftlers and cleares the skin\r\nhas soothing effects\r\nlight and non sticky tecture', 'face', 'unisex', 'against imperfections', '2021-07-10', '2024-08-10', 0, 0, 'Products/image22.jpg', 'Products/image22.jpg', 'Products/image22.jpg', 'Products/image22.jpg'),
(5, 54, 'Vichy aqualia', '200.00', 'eg', 'Products/image19.jpg', 13, 'help to soften drying .zalecany przez Dermedic zalecany przez', '2023-03-04 20:17:43', '2023-06-12 11:21:44', 5, 'exfollates surface  cells and helps reduce sebum production for visibility clearer skin . salicylic acid works to unclog pores o clear existing imperfections , as well as simultaneously helping o prevent new breakouts from forming', 'apply to freshly cleansed skin . apply 2-3 drops anti-ance serum and gently messsage onto the skin follow with the effaclar Duo(+)Moisturiser for targeted results and added hydration avoid  the eye area . in case of contact with eyes rinse throughly this serum can increase skin;s sensitivity to sun light . use in association with a daily photopotection product', 'Brazil', 'Oreal S.A', 'eleminates skin imprefections\r\nreduces sebum production\r\ntightns visible pores\r\nsoftlers and cleares the skin\r\nhas soothing effects\r\nlight and non sticky tecture', 'face', 'unisex', 'against imperfections', '2023-03-26', '2023-11-26', 0, 0, 'Products/image19.jpg', 'Products/image19.jpg', 'Products/image19.jpg', 'Products/image19.jpg'),
(6, 55, 'clinique', '75.00', 'eg', 'Products/image6.jpg', 0, 'help prevent further environment damage', '2023-03-04 20:21:21', '2023-06-12 11:22:32', 6, 'LaH micro-exfliates and gently liftsdead skin cells , refinig pores for a smoother complexion> LHA works with other ingrediens o visibility improve existing pimples and reduce future breakouts exfollates surface  cells and helps reduce sebum production for visibility clearer skin . salicylic acid works to unclog pores o clear existing imperfections , as well as simultaneously helping o prevent new breakouts from forming', 'apply to freshly cleansed skin . apply 2-3 drops anti-ance serum and gently messsage onto the skin follow with the effaclar Duo(+)Moisturiser for targeted results and added hydration avoid  the eye area . in case of contact with eyes rinse throughly this serum can increase skin;s sensitivity to sun light . use in association with a daily photopotection product', 'American', 'Oreal S.A', 'eleminates skin imprefections\r\nreduces sebum production\r\ntightns visible pores\r\nsoftlers and cleares the skin\r\nhas soothing effects\r\nlight and non sticky tecture', 'face', 'unisex', 'against imperfections', '2023-06-12', '2024-12-12', 1, 0, 'Products/image6.jpg', 'Products/image6.jpg', 'Products/image6.jpg', 'Products/image6.jpg'),
(7, 56, 'MN foundation', '175.50', 'eg', 'Products/image9.jpg', 98, 'zalecany przez Dermedic zalecany przez', '2023-03-04 20:27:55', '2023-06-12 11:20:11', 7, 'LaH micro-exfliates and gently liftsdead skin cells , refinig pores for a smoother complexion> LHA works with other ingrediens o visibility improve existing pimples and reduce future breakouts', 'apply to freshly cleansed skin . apply 2-3 drops anti-ance serum and gently messsage onto the skin follow with the effaclar Duo(+)Moisturiser for targeted results and added hydration avoid  the eye area . in case of contact with eyes rinse throughly this serum can increase skin;s sensitivity to sun light . use in association with a daily photopotection product', 'Egypt', 'Oreal S.A', 'eleminates skin imprefections\r\nreduces sebum production\r\ntightns visible pores\r\nsoftlers and cleares the skin\r\nhas soothing effects\r\nlight and non sticky tecture', 'face', 'unisex', 'against imperfections', '2022-10-12', '2023-02-12', 0, 0, 'Products/image9.jpg', 'Products/image9.jpg', 'Products/image9.jpg', 'Products/image9.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product_cases`
--

CREATE TABLE `product_cases` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ProductName` varchar(255) NOT NULL,
  `composition` varchar(255) NOT NULL,
  `pregnancy` varchar(255) NOT NULL,
  `lactation` varchar(255) NOT NULL,
  `more_trade_names` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_cases`
--

INSERT INTO `product_cases` (`id`, `ProductName`, `composition`, `pregnancy`, `lactation`, `more_trade_names`, `created_at`, `updated_at`) VALUES
(2, 'Panadol Extra', '500 mg paracetamol   65 mg caffeine', 'should not be used', 'should not be used', NULL, '2023-04-26 07:30:05', '2023-04-26 07:30:05'),
(3, 'Panadol Baby', '120 mg/5 ml oral suspension', 'should not be used', 'should not be used', NULL, '2023-04-26 08:31:10', '2023-04-26 08:31:10'),
(4, 'Aciloc 57 tab', 'Ranitidine 75 mg', 'category B', 'use with caution', 'acilight 75', '2023-05-15 08:28:25', '2023-05-15 08:28:25');

-- --------------------------------------------------------

--
-- Table structure for table `product_indications`
--

CREATE TABLE `product_indications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `indication` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_indications`
--

INSERT INTO `product_indications` (`id`, `product_id`, `indication`, `created_at`, `updated_at`) VALUES
(3, 2, 'headache / muscle pain / arthritis / Rheumatic pain / back pain / toothache', '2023-04-26 07:35:42', '2023-04-26 07:35:42'),
(4, 3, 'Teething pain/ store throat, toothache/ fever associated with cold and flu / childhood infections / helps lower temperature', '2023-04-26 08:36:04', '2023-04-26 08:36:04'),
(5, 3, 'post vaccination ferver', '2023-04-26 08:40:18', '2023-04-26 08:40:18'),
(6, 4, 'GERD/Gastric Uicer Treatment / conditions', '2023-05-15 08:32:08', '2023-05-15 08:32:08'),
(7, 4, 'Erosive Esophagitis treatment', '2023-05-15 08:33:15', '2023-05-15 08:33:15'),
(8, 4, 'Gastric ulcer maintenance', '2023-05-15 08:34:02', '2023-05-15 08:34:02');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `url` text DEFAULT NULL,
  `title` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `disable` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `url`, `title`, `description`, `date`, `time`, `disable`, `created_at`, `updated_at`) VALUES
(3, 'https://www.youtube.com/embed/FCAU4D-uG8Q', 'What is Medicine?', 'But there is so much to this, like what are th...', '2023-06-12', '8:00 Pm', 0, '2023-06-12 15:32:49', '2023-06-12 15:32:49'),
(4, 'https://www.youtube.com/embed/ZnBEVsZSqIk', 'Should YOU study Biomedical Engineering? What is B...', 'Today we will go over 9 reasons...', '2023-06-12', '10:00 pm', 0, '2023-06-11 15:32:49', '2023-06-11 15:32:49');

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `photo` varchar(500) NOT NULL DEFAULT 'profile-img.jpg',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `type`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'Beauty and care', 'Types/img1.jpg', '2023-03-04 21:36:10', '2023-03-04 21:36:10'),
(2, 'Vitamins and Supplements', 'Types/img2.jpg', '2023-03-04 21:38:37', '2023-03-04 21:38:42'),
(3, 'Medicinal and prophylactic means', 'Types/img3.jpg', '2023-03-05 23:41:18', '2023-03-05 23:41:24'),
(4, 'Optics', 'Types/img5.jpg', '2023-03-04 21:38:49', '2023-03-04 21:38:49'),
(5, 'Hygiene', 'Types/img06.jpg', '2023-03-04 21:40:41', '2023-03-04 21:40:41'),
(6, 'COVID-19', 'Types/img7.jpg', '2023-03-04 21:40:41', '2023-03-04 21:40:41'),
(7, 'Perfumes', 'Types/img8.jpg', '2023-03-04 21:42:34', '2023-03-04 21:42:34'),
(8, 'Mother and child', 'Types/img4.jpg', '2023-03-05 23:48:57', '2023-03-05 23:48:57');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `photo` varchar(500) NOT NULL DEFAULT 'profile-img.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `city`, `street`, `phone`, `photo`) VALUES
(1, 'bosi', 'awad', 'bosi@gmail.com', '2023-06-02 05:36:19', '$2y$10$cpVoRyaBXDXGgjb2P7RU5uAO084qnxIsfaIm7UJpkHFCWaPSnnPua', NULL, '2023-06-02 01:49:26', '2023-06-02 05:17:14', 'ghbf', 'fwag', 1256897, 'profile-img.jpg'),
(2, 'amr', 'ahmed', 'amr@gmail.com', '2023-05-12 08:04:18', '$2y$10$cpVoRyaBXDXGgjb2P7RU5uAO084qnxIsfaIm7UJpkHFCWaPSnnPua', NULL, '2023-06-06 01:48:42', '2023-06-06 07:51:44', 'ghbf', 'fwag', 1256897, 'profile-img.jpg'),
(3, 'ahmed', 'omar', 'ahmed13@gmail.com', '2023-05-16 13:43:25', '$2y$10$t/xfFHxJqJx.RdEv83qtr.w8otj3IuzZpHgGQTSXwFfsSl7P6dzi6', NULL, '2023-05-16 13:43:25', '2023-05-16 13:43:25', NULL, NULL, NULL, 'profile-img.jpg'),
(6, 'ahmed', 'omar', 'ali@gmail.com', '2023-04-09 23:16:49', '$2y$10$sZadE/XpMSMKVCS1/FM/FO/K2V6YkKNv8BipXVJHa2sggye5wz/U6', NULL, '2023-04-09 21:16:30', '2023-04-09 21:16:30', NULL, NULL, NULL, 'profile-img.jpg'),
(14, 'ola', 'fawzi', 'olafawzii80@gmail.com', '2023-04-25 03:01:49', '$2y$10$svQOnaZSn9ixghL/16DGkerOGxu0ZLkL82g3n6YULzuF0WJXqlGkS', NULL, '2023-04-25 00:35:20', '2023-04-28 16:35:20', 'giza', 'octoper', 1100348219, 'profile-img.jpg'),
(15, 'Ibrahim Ahmed', 'Elassal', 'ibrahimelassal662@gmail.com', '2023-04-25 22:03:02', '$2y$10$45mCwvYk3Bv6aYeI40Dw8.cdUcQHw7u8fc1Tyzj0lW9vLhHDPfOMm', NULL, '2023-04-25 22:02:40', '2023-04-25 22:03:02', NULL, NULL, NULL, 'profile-img.jpg'),
(21, 'ahmed', 'omar', 'ahmed@gmail.com', '2022-11-08 22:02:18', '$2y$10$CLbnFfXcODHXu08uM2DOeuXUl8cUv38Epv/QuBiIW6.3Is5on8OJi', NULL, '2022-11-08 22:02:18', '2022-11-08 22:02:18', NULL, NULL, NULL, 'profile-img.jpg'),
(22, 'Abeer', 'Aly', 'abeeraly239@gmail.com', '2023-05-31 23:38:17', '$2y$10$T0MvtNHpaUOIZmVNfaMsH.OJotsQB2r76YaJB5C9SjbNzcltyZFzS', NULL, '2023-05-31 23:38:17', '2023-05-31 23:41:46', 'cairo', 'cairo', 1022345685, 'profile-img.jpg'),
(23, 'hassan', 'ali', 'hassan1232gmail.com', '2022-12-07 02:30:51', '$2y$10$t/xfFHxJqJx.RdEv83qtr.w8otj3IuzZpHgGQTSXwFfsSl7P6dzi6', NULL, '2022-12-06 02:30:51', '2022-12-07 02:30:51', NULL, NULL, NULL, 'profile-img.jpg'),
(24, 'menna', 'ahmed', 'menna@gmail.com', '2022-10-12 01:34:43', '$2y$10$t/xfFHxJqJx.RdEv83qtr.w8otj3IuzZpHgGQTSXwFfsSl7P6dzi6', NULL, '2022-10-09 01:34:43', '2022-10-09 01:34:43', NULL, NULL, NULL, 'profile-img.jpg'),
(25, 'mohammed', 'hassam', 'mohammed657@gmail.com', '2022-08-01 01:37:31', '$2y$10$t/xfFHxJqJx.RdEv83qtr.w8otj3IuzZpHgGQTSXwFfsSl7P6dzi6', NULL, '2022-08-01 01:37:31', '2022-08-01 01:37:31', NULL, NULL, NULL, 'profile-img.jpg'),
(26, 'fatama', 'ali', 'fatamaali1254@gmail.com', '2022-07-12 01:37:31', '$2y$10$t/xfFHxJqJx.RdEv83qtr.w8otj3IuzZpHgGQTSXwFfsSl7P6dzi6', NULL, '2022-07-12 01:37:31', '2022-07-12 01:37:31', NULL, NULL, NULL, 'profile-img.jpg'),
(27, 'omar', 'mohammed', 'om1125468@gmail.com', '2022-10-22 01:43:42', '$2y$10$t/xfFHxJqJx.RdEv83qtr.w8otj3IuzZpHgGQTSXwFfsSl7P6dzi6', NULL, '2022-10-22 01:43:42', '2022-10-22 01:43:42', NULL, NULL, NULL, 'profile-img.jpg'),
(28, 'tarek', 'noor', 'tito475@gmail.com', '2022-06-21 01:43:42', '', NULL, '2022-06-16 01:43:42', '2022-06-24 01:43:42', NULL, NULL, NULL, 'profile-img.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `watting_emails`
--

CREATE TABLE `watting_emails` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accountants`
--
ALTER TABLE `accountants`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `accountants_email_unique` (`email`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_user_id_foreign` (`user_id`),
  ADD KEY `comments_session_id_foreign` (`session_id`);

--
-- Indexes for table `delivered_orders`
--
ALTER TABLE `delivered_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `delivered_orders_order_left_id_foreign` (`order_left_id`),
  ADD KEY `delivered_orders_accountant_id_foreign` (`accountant_id`);

--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `discounts_product_id_foreign` (`product_id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dose_of_products`
--
ALTER TABLE `dose_of_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `indication_id` (`indication_id`);

--
-- Indexes for table `employee_old_emails`
--
ALTER TABLE `employee_old_emails`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `employee_old_emails_email_unique` (`email`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `favorites_product_id_foreign` (`product_id`),
  ADD KEY `favorites_user_id_foreign` (`user_id`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `feedbacks_user_id_foreign` (`user_id`);

--
-- Indexes for table `labs`
--
ALTER TABLE `labs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `new_users`
--
ALTER TABLE `new_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `new_users_email_unique` (`email`);

--
-- Indexes for table `old_emails`
--
ALTER TABLE `old_emails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `old_emails_user_id_foreign` (`user_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `order_cordinators`
--
ALTER TABLE `order_cordinators`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `order_cordinators_email_unique` (`email`);

--
-- Indexes for table `order_lefts`
--
ALTER TABLE `order_lefts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_lefts_order_cordinator_id_foreign` (`order_cordinator_id`),
  ADD KEY `order_lefts_order_id_foreign` (`order_id`);

--
-- Indexes for table `otps`
--
ALTER TABLE `otps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `owners`
--
ALTER TABLE `owners`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `owners_email_unique` (`email`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `pendings`
--
ALTER TABLE `pendings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `products_qrcode_unique` (`qrCode`),
  ADD KEY `products_type_id_foreign` (`type_id`);

--
-- Indexes for table `product_cases`
--
ALTER TABLE `product_cases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_indications`
--
ALTER TABLE `product_indications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `types_type_unique` (`type`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `watting_emails`
--
ALTER TABLE `watting_emails`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `watting_emails_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accountants`
--
ALTER TABLE `accountants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `delivered_orders`
--
ALTER TABLE `delivered_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `dose_of_products`
--
ALTER TABLE `dose_of_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `employee_old_emails`
--
ALTER TABLE `employee_old_emails`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `labs`
--
ALTER TABLE `labs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `new_users`
--
ALTER TABLE `new_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `old_emails`
--
ALTER TABLE `old_emails`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `order_cordinators`
--
ALTER TABLE `order_cordinators`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `order_lefts`
--
ALTER TABLE `order_lefts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `otps`
--
ALTER TABLE `otps`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `owners`
--
ALTER TABLE `owners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pendings`
--
ALTER TABLE `pendings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `product_cases`
--
ALTER TABLE `product_cases`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product_indications`
--
ALTER TABLE `product_indications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `watting_emails`
--
ALTER TABLE `watting_emails`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_session_id_foreign` FOREIGN KEY (`session_id`) REFERENCES `sessions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `delivered_orders`
--
ALTER TABLE `delivered_orders`
  ADD CONSTRAINT `delivered_orders_accountant_id_foreign` FOREIGN KEY (`accountant_id`) REFERENCES `accountants` (`id`),
  ADD CONSTRAINT `delivered_orders_order_left_id_foreign` FOREIGN KEY (`order_left_id`) REFERENCES `order_lefts` (`id`);

--
-- Constraints for table `discounts`
--
ALTER TABLE `discounts`
  ADD CONSTRAINT `discounts_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `dose_of_products`
--
ALTER TABLE `dose_of_products`
  ADD CONSTRAINT `dose_of_products_ibfk_1` FOREIGN KEY (`indication_id`) REFERENCES `product_indications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `order_lefts`
--
ALTER TABLE `order_lefts`
  ADD CONSTRAINT `order_lefts_order_cordinator_id_foreign` FOREIGN KEY (`order_cordinator_id`) REFERENCES `order_cordinators` (`id`),
  ADD CONSTRAINT `order_lefts_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Constraints for table `pendings`
--
ALTER TABLE `pendings`
  ADD CONSTRAINT `pendings_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`);

--
-- Constraints for table `product_indications`
--
ALTER TABLE `product_indications`
  ADD CONSTRAINT `product_indications_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product_cases` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
