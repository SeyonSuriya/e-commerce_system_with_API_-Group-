-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 30, 2023 at 08:47 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `TechWorld`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `adminid` int(11) NOT NULL,
  `active_status` tinyint(4) DEFAULT '0',
  `adminname` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`adminid`, `active_status`, `adminname`, `email`, `mobile`, `password`) VALUES
(1, 0, 'Hiran Sanjeewa', 'abc@gmail.com', '1232321312', '$2a$10$0w/n6C5HkxF92MTBAOn2VO2knrMib.WuQc7mjLeybV28E1WcPkHAy');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `password`) VALUES
(1, 'admin', 'password');

-- --------------------------------------------------------

--
-- Table structure for table `admin_seq`
--

CREATE TABLE `admin_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin_seq`
--

INSERT INTO `admin_seq` (`next_val`) VALUES
(51);

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `book_id` int(11) NOT NULL,
  `author` varchar(30) NOT NULL,
  `book_price` int(11) NOT NULL,
  `book_title` varchar(30) NOT NULL,
  `category` varchar(50) NOT NULL,
  `isbn` varchar(25) NOT NULL,
  `long_description` varchar(500) NOT NULL,
  `num_of_orders` int(11) NOT NULL,
  `num_of_units` int(11) NOT NULL,
  `publisher` varchar(30) NOT NULL,
  `weight` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`book_id`, `author`, `book_price`, `book_title`, `category`, `isbn`, `long_description`, `num_of_orders`, `num_of_units`, `publisher`, `weight`) VALUES
(1, 'Danielle Steel', 10, 'FLYING ANGELS', 'Romance', '9781529021783', 'Flying Angels is a compelling and inspirational story of women of courage in the Second World War, by the worlds number one bestselling author, Danielle Steel. It is 1941 and the devastating loss of life following the Japanese attack on Pearl Harbor leaves best friends Audrey and Lizzie distraught and bereft as they lose someone they both love deeply. As they come to terms with their grief, their resolve to play a worthwhile role towards the war effort is strengthened.\r\n', 3, 100, 'MACMILLAN', 1),
(2, 'Danielle Steel', 11, 'The Affair', 'Romance', '9781529021486', 'In this riveting novel set in Paris, the worlds favourite storyteller, Danielle Steel, explores a high-profile affair that reverberates throughout an entire family ', 20, 200, 'MACMILLAN', 0),
(3, 'Danielle Steel', 15, 'The Butler', 'Romance', '9781529021721', 'The Butler is an extraordinary tale of family, difficult decisions and destiny, from the worlds favourite storyteller, Danielle Steel.', 15, 50, 'Pan Macmillan', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `item_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `item_id`, `quantity`, `userid`) VALUES
(1, 3, 5, 1),
(2, 2, 3, 1),
(8, 1, 11, 1);

-- --------------------------------------------------------

--
-- Table structure for table `cart_seq`
--

CREATE TABLE `cart_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cart_seq`
--

INSERT INTO `cart_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `confirmation_token`
--

CREATE TABLE `confirmation_token` (
  `token_id` bigint(20) NOT NULL,
  `confirmation_token` varchar(255) DEFAULT NULL,
  `created_date` datetime(6) DEFAULT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `confirmation_token_seq`
--

CREATE TABLE `confirmation_token_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `confirmation_token_seq`
--

INSERT INTO `confirmation_token_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `number` varchar(12) NOT NULL,
  `message` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `reference` int(11) NOT NULL,
  `address` varchar(150) NOT NULL,
  `book_id` int(11) DEFAULT NULL,
  `book_price` int(11) DEFAULT NULL,
  `item_units` int(11) DEFAULT NULL,
  `order_status` varchar(30) DEFAULT NULL,
  `orderid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`reference`, `address`, `book_id`, `book_price`, `item_units`, `order_status`, `orderid`, `userid`) VALUES
(1, 'fsdfsd', 1, 123, 2, 'Dilivering', 1, 1),
(2, 'adasdas', 23, 213, 12, 'Dilivering', 1, 1),
(3, 'sdfsfd', 5, 23, 2, 'Dilivering', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders_seq`
--

CREATE TABLE `orders_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders_seq`
--

INSERT INTO `orders_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `otps`
--

CREATE TABLE `otps` (
  `email` varchar(30) NOT NULL,
  `otp` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(11) NOT NULL,
  `active_status` tinyint(4) DEFAULT '0',
  `address_line1` varchar(70) DEFAULT NULL,
  `address_line2` varchar(70) DEFAULT NULL,
  `district` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `password` varchar(100) NOT NULL,
  `postal_code` varchar(10) NOT NULL,
  `province` varchar(20) NOT NULL,
  `second_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `active_status`, `address_line1`, `address_line2`, `district`, `email`, `first_name`, `mobile`, `password`, `postal_code`, `province`, `second_name`) VALUES
(1956, 0, ' No 40, Wewa Kotasa,Puhulwatta', ' Maussagolla, Passara', ' Badulla', 'hiransanjeewaa@gmail.com', 'Hiran', '0213213123', '$2a$10$mbqQmYW6T3v2Cg3zlGzH9.GF4lwwY0Xg2e73YNchn1ll4wm.eNPeu', ' 90500', ' Uva', ' Sanjeewa');

-- --------------------------------------------------------

--
-- Table structure for table `users_seq`
--

CREATE TABLE `users_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users_seq`
--

INSERT INTO `users_seq` (`next_val`) VALUES
(2051);

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `wishno` int(5) NOT NULL,
  `userid` int(5) NOT NULL,
  `item_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`wishno`, `userid`, `item_id`) VALUES
(4, 1, 3),
(12, 1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`adminid`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `confirmation_token`
--
ALTER TABLE `confirmation_token`
  ADD PRIMARY KEY (`token_id`),
  ADD KEY `FK42o07fxd9qphx6c9j91g7x99d` (`userid`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`reference`);

--
-- Indexes for table `otps`
--
ALTER TABLE `otps`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`wishno`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `wishno` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `confirmation_token`
--
ALTER TABLE `confirmation_token`
  ADD CONSTRAINT `FK42o07fxd9qphx6c9j91g7x99d` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

INSERT INTO `books` (`book_id`, `author`, `book_price`, `book_title`, `category`, `isbn`, `long_description`, `num_of_orders`, `num_of_units`, `publisher`, `weight`) VALUES
(1, 'Danielle Steel', 10, 'FLYING ANGELS', 'Romance', '9781529021783', 'Flying Angels is a compelling and inspirational story of women of courage in the Second World War, by the worlds number one bestselling author, Danielle Steel. It is 1941 and the devastating loss of life following the Japanese attack on Pearl Harbor leaves best friends Audrey and Lizzie distraught and bereft as they lose someone they both love deeply. As they come to terms with their grief, their resolve to play a worthwhile role towards the war effort is strengthened.\r\n', 3, 100, 'MACMILLAN', 1),
(2, 'Danielle Steel', 11, 'The Affair', 'Romance', '9781529021486', 'In this riveting novel set in Paris, the worlds favourite storyteller, Danielle Steel, explores a high-profile affair that reverberates throughout an entire family ', 20, 200, 'MACMILLAN', 0),
(3, 'Danielle Steel', 15, 'The Butler', 'Romance', '9781529021721', 'The Butler is an extraordinary tale of family, difficult decisions and destiny, from the worlds favourite storyteller, Danielle Steel.', 15, 50, 'Pan Macmillan', 1),
(4, 'Robert C. Martain', 40, 'Clean Code', 'Computer&Tech', '978-0132350884', 'What kind of work will you be doing? You’ll be reading code―lots of code. And you will be challenged to think about what’s right about that code, and what’s wrong with it. More importantly you will be challenged to reassess your professional values and your commitment to your craft.  \r\n\r\nClean Codeis divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case stud', 3, 60, ' Pearson; 1st edition (August ', 0),
(5, 'OccypyTheWeb', 30, 'Linux Basics for Hackers: Gett', 'Computer&Tech', ' 978-1593278557', 'This practical, tutorial-style book uses the Kali Linux distribution to teach Linux basics with a focus on how hackers would use them. Topics include Linux command line basics, filesystems, networking, BASH basics, package management, logging, and the Linux kernel and drivers.\r\n\r\nIf you\'re getting started along the exciting path of hacking, cybersecurity, and pentesting, Linux Basics for Hackers is an excellent first step. Using Kali Linux, an advanced penetration testing distribution of Linux, ', 7, 78, ' No Starch Press; Illustrated ', 0),
(6, 'Jeff Geerling', 20, 'Ansible for DevOps', 'Computer&Tech', '978-0986393426', 'Ansible is a simple, but powerful, server and configuration management tool (with a few other tricks up its sleeve). This book will help those familiar with the command line and basic shell scripting start using Ansible to provision and manage anywhere from one to thousands of servers.\r\n', 2, 56, 'Midwestern Mac, LLC (August 5,', 1),
(7, 'Sam Siewert', 72, 'Real-Time Embedded Components ', 'Computer&Tech', ' 978-1942270041', 'This book is intended to provide a senior undergraduate or graduate student in electrical engineering or computer science with a balance of fundamental theory, review of industry practice, and hands-on experience to prepare for a career in the real-time embedded system industries. It is also intended to provide the practicing engineer with the necessary background to apply real-time theory to the design of embedded components and systems. Typical industries include aerospace, medical diagnostic ', 1, 89, 'Mercury Learning and Informati', 1),
(8, 'Andy Rathbone', 17, 'Windows 11 For Dummies', 'Computer&Tech', '‎ 978-1119846475', 'Need Windows help? Find the latest tips and tricks in this perennial favorite on Windows\r\nWindows 11 promises to be the fastest, most secure, and most flexible version of the Microsoft operating system yet. With a promise like that, of course you want to start using it, as quickly as possible! Windows 11 For Dummies gives you that speed, security, and flexibility by getting you up to date with the latest in Windows. Windows expert and bestselling author Andy Rathbone gives you a helping hand by ', 10, 90, 'For Dummies; 1st edition (Nove', 1);
COMMIT;
