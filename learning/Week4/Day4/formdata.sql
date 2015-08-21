-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 30, 2015 at 09:44 AM
-- Server version: 5.6.14
-- PHP Version: 5.5.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `subscription`
--

-- --------------------------------------------------------

--
-- Table structure for table `formdata`
--

CREATE TABLE IF NOT EXISTS `formdata` (
  `name` varchar(200) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `mobileno` varchar(10) NOT NULL,
  `interest` varchar(200) NOT NULL,
  `favorites` varchar(200) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `formdata`
--

INSERT INTO `formdata` (`name`, `sex`, `email`, `country`, `state`, `address`, `mobileno`, `interest`, `favorites`) VALUES
('ASD', 'male', 'as0@gmail.com', 'usa', 'LosAngeles', 'nmn', '8967990945', 'football', ''),
('ASD', 'female', 'asd@gmail.com', 'india', 'Bihar', 'jkj', '8967990945', 'movie', 'Historical'),
('ASD', 'female', 'ronojit@gmail.com', 'india', 'ArunachalPradesh', 'sdakjkkj', '8967990945', 'movie,reading', 'Romantic');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
