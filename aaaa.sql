-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        5.7.19-log - MySQL Community Server (GPL)
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- project 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `project` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `project`;

-- 테이블 project.board_free 구조 내보내기
CREATE TABLE IF NOT EXISTS `board_free` (
  `b_no` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `b_title` varchar(100) NOT NULL,
  `b_content` text NOT NULL,
  `b_date` datetime NOT NULL,
  `b_hit` int(10) unsigned NOT NULL DEFAULT '0',
  `u_id` varchar(50) NOT NULL,
  `b_imgname` varchar(100) DEFAULT NULL,
  `b_imgw` int(11) DEFAULT NULL,
  `b_imgh` int(11) DEFAULT NULL,
  PRIMARY KEY (`b_no`),
  KEY `FK_board_free_user` (`u_id`),
  CONSTRAINT `FK_board_free_user` FOREIGN KEY (`u_id`) REFERENCES `user` (`u_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 테이블 데이터 project.board_free:~3 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board_free` DISABLE KEYS */;
INSERT INTO `board_free` (`b_no`, `b_title`, `b_content`, `b_date`, `b_hit`, `u_id`, `b_imgname`, `b_imgw`, `b_imgh`) VALUES
	(59, 'qwer', 'ggggasdf', '2017-11-05 01:45:29', 0, 'abccom1', NULL, NULL, NULL),
	(73, 'zz', 'tt', '2017-11-05 11:11:29', 0, 'abccom1', NULL, NULL, NULL),
	(74, 'zz', 'tt', '2017-11-05 11:11:45', 0, 'abccom1', NULL, NULL, NULL),
	(75, 'ㅇㅇㅋㅋ', 'ㅅㅅㅋㅋ', '2017-11-05 11:15:06', 0, 'abccom1', NULL, NULL, NULL);
/*!40000 ALTER TABLE `board_free` ENABLE KEYS */;

-- 테이블 project.budget 구조 내보내기
CREATE TABLE IF NOT EXISTS `budget` (
  `u_id` varchar(50) NOT NULL,
  `c_idx` int(11) NOT NULL,
  `b_quantity` double DEFAULT '0',
  PRIMARY KEY (`u_id`,`c_idx`),
  KEY `c_id` (`c_idx`),
  CONSTRAINT `c_id` FOREIGN KEY (`c_idx`) REFERENCES `coin` (`c_idx`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `u_id` FOREIGN KEY (`u_id`) REFERENCES `user` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='보유 자산.\r\n코인 양.';

-- 테이블 데이터 project.budget:~5 rows (대략적) 내보내기
/*!40000 ALTER TABLE `budget` DISABLE KEYS */;
INSERT INTO `budget` (`u_id`, `c_idx`, `b_quantity`) VALUES
	('abccom1', 0, 78),
	('abccom1', 1, 79),
	('abccom1', 2, 10),
	('bbbb', 0, 0),
	('bbbb', 1, 0),
	('bbbb', 2, 0);
/*!40000 ALTER TABLE `budget` ENABLE KEYS */;

-- 테이블 project.coin 구조 내보내기
CREATE TABLE IF NOT EXISTS `coin` (
  `c_idx` int(11) NOT NULL,
  `c_name` varchar(20) NOT NULL,
  `c_price` int(11) NOT NULL,
  PRIMARY KEY (`c_idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 project.coin:~2 rows (대략적) 내보내기
/*!40000 ALTER TABLE `coin` DISABLE KEYS */;
INSERT INTO `coin` (`c_idx`, `c_name`, `c_price`) VALUES
	(0, 'bitcoin', 8000000),
	(1, 'bitcoin_cash', 740000),
	(2, 'ethereum', 336400);
/*!40000 ALTER TABLE `coin` ENABLE KEYS */;

-- 테이블 project.comments_free 구조 내보내기
CREATE TABLE IF NOT EXISTS `comments_free` (
  `b_no` int(10) unsigned NOT NULL COMMENT '게시판번호',
  `c_idx` int(10) unsigned NOT NULL COMMENT '댓글번호',
  `u_id` varchar(100) NOT NULL COMMENT '댓글쓴이',
  `c_content` text NOT NULL COMMENT '내용',
  `c_date` date NOT NULL COMMENT '댓글쓴날짜',
  KEY `b_no` (`b_no`),
  CONSTRAINT `comments_free_ibfk_1` FOREIGN KEY (`b_no`) REFERENCES `board_free` (`b_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 테이블 데이터 project.comments_free:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `comments_free` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments_free` ENABLE KEYS */;

-- 테이블 project.exchange 구조 내보내기
CREATE TABLE IF NOT EXISTS `exchange` (
  `e_idx` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` varchar(50) NOT NULL,
  `c_idx` int(11) NOT NULL,
  `sell_buy` tinyint(1) NOT NULL,
  `e_price` int(11) NOT NULL,
  `e_quantity` double unsigned zerofill NOT NULL,
  `e_date` date NOT NULL,
  PRIMARY KEY (`e_idx`),
  KEY `user_id` (`u_id`),
  KEY `coin_id` (`c_idx`),
  CONSTRAINT `coin_id` FOREIGN KEY (`c_idx`) REFERENCES `coin` (`c_idx`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `user_id` FOREIGN KEY (`u_id`) REFERENCES `user` (`u_id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='거래 내역 기록';

-- 테이블 데이터 project.exchange:~7 rows (대략적) 내보내기
/*!40000 ALTER TABLE `exchange` DISABLE KEYS */;
INSERT INTO `exchange` (`e_idx`, `u_id`, `c_idx`, `sell_buy`, `e_price`, `e_quantity`, `e_date`) VALUES
	(1, 'abccom1', 0, 0, 50000, 0000000000000000000001, '2017-11-04'),
	(2, 'abccom1', 0, 1, 40000, 0000000000000000000001, '2017-11-04'),
	(3, 'abccom1', 1, 1, 1000, 0000000000000000000055, '2017-11-04'),
	(4, 'abccom1', 1, 0, 2000, 0000000000000000000066, '2017-10-30'),
	(5, 'abccom1', 2, 1, 10000, 0000000000000000000010, '2017-11-05'),
	(6, 'abccom1', 2, 0, 1000, 0000000000000000000010, '2017-11-05'),
	(7, 'abccom1', 0, 0, 100000, 0000000000000000000001, '2017-10-05');
/*!40000 ALTER TABLE `exchange` ENABLE KEYS */;

-- 테이블 project.notification 구조 내보내기
CREATE TABLE IF NOT EXISTS `notification` (
  `n_no` int(11) NOT NULL,
  `u_id` varchar(50) NOT NULL,
  `c_idx` int(11) NOT NULL,
  `n_taget_price` int(11) NOT NULL,
  `n_greater_less` bit(1) NOT NULL,
  PRIMARY KEY (`n_no`),
  KEY `FK_notification_user` (`u_id`),
  KEY `coin_idx` (`c_idx`),
  CONSTRAINT `FK_notification_user` FOREIGN KEY (`u_id`) REFERENCES `user` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `coin_idx` FOREIGN KEY (`c_idx`) REFERENCES `coin` (`c_idx`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 project.notification:~2 rows (대략적) 내보내기
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
INSERT INTO `notification` (`n_no`, `u_id`, `c_idx`, `n_taget_price`, `n_greater_less`) VALUES
	(0, 'abccom1', 0, 9000000, b'0'),
	(1, 'abccom1', 0, 8000000, b'0'),
	(2, 'abccom1', 1, 700000, b'0');
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;

-- 테이블 project.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `u_id` varchar(50) NOT NULL COMMENT '아이디',
  `u_password` varchar(100) NOT NULL COMMENT '비밀번호',
  `u_name` varchar(20) NOT NULL COMMENT '이름',
  `u_auth` varchar(20) NOT NULL COMMENT '유저권한',
  `u_phonenum` varchar(20) NOT NULL COMMENT '전화번호',
  `u_date` date NOT NULL COMMENT '가입일',
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 project.user:~3 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`u_id`, `u_password`, `u_name`, `u_auth`, `u_phonenum`, `u_date`) VALUES
	('aaaa', '0000', 'aaa', '3', '01012341234', '2017-11-04'),
	('abccom1', '0000', 'ykh', '1', '01031939914', '2017-11-03'),
	('bbbb', '0000', 'bbb', '3', '01022221111', '2017-11-05');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 트리거 project.make_budget 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `make_budget` AFTER INSERT ON `user` FOR EACH ROW begin
insert into	budget values(new.u_id, 0, 0);
insert into	budget values(new.u_id, 1, 0);
insert into	budget values(new.u_id, 2, 0);
end//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- 트리거 project.remove_bad_bi 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `remove_bad_bi` BEFORE INSERT ON `board_free` FOR EACH ROW BEGIN
set new.b_content = replace(new.b_content, "ㅇㅇ", "ㅅㅅ");
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- 트리거 project.remove_bad_ci 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `remove_bad_ci` BEFORE INSERT ON `comments_free` FOR EACH ROW BEGIN
set new.c_content = replace(new.c_content, "ㅇㅇ", "ㅅㅅ");
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- 트리거 project.remove_bad_cu 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `remove_bad_cu` BEFORE UPDATE ON `comments_free` FOR EACH ROW BEGIN
set new.c_content = replace(new.c_content, "ㅇㅇ", "ㅅㅅ");
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- 트리거 project.result_of_exchange 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `result_of_exchange` AFTER INSERT ON `exchange` FOR EACH ROW BEGIN
	if(NEW.sell_buy = 0) then
		UPDATE budget SET b_quantity = b_quantity + NEW.e_quantity WHERE budget.u_id = NEW.u_id AND budget.c_idx = NEW.c_idx;
	else
		UPDATE budget SET b_quantity = b_quantity - NEW.e_quantity WHERE budget.u_id = NEW.u_id AND budget.c_idx = NEW.c_idx;
	end if;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
