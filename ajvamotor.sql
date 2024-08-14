-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 07, 2024 at 01:28 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ajvamotor`
--

-- --------------------------------------------------------

--
-- Table structure for table `autoslider`
--

CREATE TABLE `autoslider` (
  `id` int(100) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autoslider`
--

INSERT INTO `autoslider` (`id`, `image`) VALUES
(4, 'image-1695904049636.90-removebg-preview.png'),
(5, 'image-1695904061592.87-removebg-preview.png'),
(6, 'image-1695904079860.84-removebg-preview.png'),
(7, 'image-1695904092852.86-removebg-preview.png'),
(8, 'image-1695904103336.83-removebg-preview.png'),
(9, 'image-1695904113715.82-removebg-preview.png'),
(10, 'image-1695904123986.81-removebg-preview.png'),
(11, 'image-1695904142243.78-removebg-preview (1).png'),
(12, 'image-1695904160300.60-removebg-preview (2).png'),
(13, 'image-1695904172076.61-removebg-preview (2).png'),
(14, 'image-1695904184653.62-removebg-preview (1).png'),
(15, 'image-1695904194094.63-removebg-preview (1).png'),
(16, 'image-1695904206354.64-removebg-preview.png'),
(17, 'image-1695904214995.77-removebg-preview.png'),
(18, 'image-1695904226334.66-removebg-preview.png'),
(19, 'image-1695904239893.71-removebg-preview.png'),
(20, 'image-1695904248652.70-removebg-preview.png'),
(21, 'image-1695904257871.74-removebg-preview.png'),
(22, 'image-1695904265660.75-removebg-preview.png'),
(23, 'image-1695904276926.76-removebg-preview.png'),
(24, 'image-1695904298456.67-removebg-preview.png');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_title` varchar(200) NOT NULL,
  `category_image` varchar(200) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_title`, `category_image`, `status`) VALUES
(1, 'Eicher', 'image-1706769151295.eicher.png', 1),
(2, 'ford', 'image-1706769064800.ford.png', 1),
(3, 'hmt', 'image-1706693399526.hmt.png', 1),
(6, 'Massey', 'image-1706768830462.massey.png', 1),
(7, 'Swaraj', 'image-1695815658975.swaraj.jpg', 1),
(8, 'mahindra', 'image-1695815672791.mahindra.jpg', 1),
(9, 'John Deere', 'image-1695815691168.JohnDeere.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(5) NOT NULL,
  `cate_id` int(5) NOT NULL,
  `description` varchar(30) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `cate_id`, `description`, `image`) VALUES
(2, 6, 'sjsjjsjsjjsjs', 'image-1706939636516.67-removebg-preview.png'),
(3, 2, 'sdsdsd', 'image-1706686979435.68-removebg-preview.png'),
(4, 2, 'travctor', 'image-1706692132890.74-removebg-preview.png'),
(5, 1, 'tractor', 'image-1706692663065.60-removebg-preview (2).png'),
(6, 1, 'tractor', 'image-1706692731155.61-removebg-preview (1).png');

-- --------------------------------------------------------

--
-- Table structure for table `slider_image`
--

CREATE TABLE `slider_image` (
  `id` int(200) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slider_image`
--

INSERT INTO `slider_image` (`id`, `image`) VALUES
(1, 'image-1695906507628.slider0.jpg'),
(2, 'image-1695906558725.slider1.jpg'),
(3, 'image-1695906569646.slider2.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `autoslider`
--
ALTER TABLE `autoslider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_ibfk_1` (`cate_id`);

--
-- Indexes for table `slider_image`
--
ALTER TABLE `slider_image`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `autoslider`
--
ALTER TABLE `autoslider`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `slider_image`
--
ALTER TABLE `slider_image`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=464;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`cate_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
