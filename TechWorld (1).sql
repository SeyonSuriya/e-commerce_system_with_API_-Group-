-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 07, 2023 at 08:13 PM
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
(1, 'Danielle Steel', 10, 'FLYING ANGELS', 'Romance', '9781529021783', 'Flying Angels is a compelling and inspirational story of women of courage in the Second World War, by the worlds number one bestselling author, Danielle Steel. It is 1941 and the devastating loss of life following the Japanese attack on Pearl Harbor leaves best friends Audrey and Lizzie distraught and bereft as they lose someone they both love deeply. As they come to terms with their grief, their resolve to play a worthwhile role towards the war effort is strengthened.\r\n', 3, 94, 'MACMILLAN', 1),
(2, 'Danielle Steel', 11, 'The Affair', 'Romance', '9781529021486', 'In this riveting novel set in Paris, the worlds favourite storyteller, Danielle Steel, explores a high-profile affair that reverberates throughout an entire family ', 20, 170, 'MACMILLAN', 0),
(3, 'Danielle Steel', 15, 'The Butler', 'Romance', '9781529021721', 'The Butler is an extraordinary tale of family, difficult decisions and destiny, from the worlds favourite storyteller, Danielle Steel.', 15, 0, 'Pan Macmillan', 1),
(4, 'Swarna Gurusinghe', 3, 'THEORY OF MUSIC ', 'Arts&Music', '9790900644824', 'Having covered basic theory in the first two volumes, the third tackles more complex issues such as chord structures and compound time, chapters that act as a revision for work from earlier grades, as well as the topics required to sit the ABRSM Grade 3 Theory Exam. Contents: Demisemiquaver;', 3, 35, 'Swarna Gurusinghe', 0),
(5, 'Devar Surya Sena', 7, 'MUSIC OF SRI LANKA', 'Arts&Music', '9789556650099', 'Major Keys With Four Sharps Or Flats; Tonic Triads; Beyond 2 Ledger Lines; Transposition; Compound Time (6/8, 9/8, 12/8); Rules of Compound Time; Minor Keys with Four Sharps Or Flats; Grouping Notes And Rests In Compound Time; Scales And Key Signature (Revision); Four-Bar Rhythm; Intervals; Simple Phrase Structure; Performance Directions; General Exercises; Revision.', 5, 40, 'Vijitha Yapa Publications', 1),
(6, 'Maya Abeywickrama', 3, 'APE SANGEETHAYE SULAMULA', 'Arts&Music', '9789556653304', 'What does music mean? Can it be more than the sum of its notes and melodies? Can it truly change you? Rob, a musician turned reluctant music critic, poses these questions as everything important in his life appears to be fading—memories of lost love, songs from his old bands, even his hearing.', 2, 50, 'VIJITHA YAPA PUBLICATIONS', 0),
(7, 'Maya Abeywickrama', 4, 'REMINISCENCES OF A MUSIC', 'Arts&Music', '9789556653328', 'In this book Dr. Maya Abeywickrama, a highly qualified consultant in Western Music demonstrates clearly and authoritatively the pervasive beneficent influence Western music has had on the Music of Sri Lanka ever since the Portuguese invaded Sri Lanka some 500 years ago.\r\n', 4, 45, 'VIJITHA YAPA PUBLICATIONS', 0),
(8, 'nadine vanniasinkam', 2, 'MUSIC AND SONG TRADITIONS', 'Arts&Music', '9786245502035', 'This article draws from personal interviews with individuals from the Muslim community and secondary sources and outlines the devotional, cultural, and popular music and song traditions of the Muslims of Sri Lanka. ', 5, 56, 'Ethnic Studies Centre', 0),
(9, 'Chandresh Narayanan', 4, 'SANATH JAYASURIYA', 'Biographs', '9789556653960', 'This is the first biography of the controversial cricketer Sanath Jayasuriya. Very rarely in history does one man shape the sporting fortunes of a nation. Sanath Jayasuriya did just that with the magic of his power packed hands. ', 40, 100, 'VIJITHA YAPA PUBLICATIONS', 0),
(10, 'Ananda Pilimatalavuva', 4, 'KANDYAN CHIEFTAINS', 'Biographs', '955-1131-01-0', 'In this book the author tries to place before the reader, biographicaldetails of the more important Kandyan Chieftains highlighting the significant role they played in the fall of Kandy in 1815 and in the war of liberation of 1817. With personal jealousies and rivalry to gain royal favour amongst these familes, the situation became more complex in the 18th century with a foreigner on the throne and an European power ruiling the western seaboard.\r\n', 10, 60, 'Stamford Lake Publication', 1),
(11, 'Raine Wickrematunge', 13, 'LASANTHA WICKREMATUNGE', 'Biographs', '9786249454705', 'Lasantha Wickrematunge editor of the Sunday Leader was murdered in cold blood in 2009 by unknown assasins.He was a lone crusader who campaigned against nefarious governments and shady leaders and the rotten culture of corruption, cronyism, racism and impunity.A moving literary work ', 10, 45, 'Raine Wickrematunge', 1),
(12, 'GAMINI DISSANAYAKE', 10, 'ARCHITECTURAL PERSPECTIVE', 'Biographs', '9786249948303', 'This book is the collation of Gamini Dissanayakes masterworks deriving from decades of his unorthodox design directive. The book explores anything from unbuildable lands that were transformed into forever homes and initial sketches that presented the first of glimpses of his designs', 20, 100, 'GAMINI DISSANAYAKE', 1),
(13, 'Senaka Weeraratna', 4, 'C. R. DE SILVA', 'Biographs', '9789556653205', 'Chitta Ranjan de Silva, the former Attorney – General of Sri Lanka, has left a remarkable legacy of high achievement and success in law, sports, national harmony, animal rights and welfare among others, in a manner that many would find it difficult to match. He led an unique life and inspired others with his own brand of leadership and altruism to both humans and non - human sentient beings. ', 40, 34, 'VIJITHA YAPA PUBLICATIONS', 2),
(14, 'Sterling', 1, 'SUPERMAN : RIDDLE ME THIS', 'Comics', '9788120770355', 'Superman was born on the fictional planet Krypton and was named Kal-El. When he was a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm.', 23, 45, 'Sterling', 0),
(15, 'Sterling', 2, 'BATMAN MY BIG BOOK', 'Comics', '9788120759831', 'The Dark Knight, the protector of Gotham City, always keeps the evil at bay. When the Bat-signal radars across the night sky, it is time for BATMAN to leap into action!', 35, 10, 'Sterling', 0),
(16, 'Terry Pratchett', 12, 'SNUFF', 'Comics', '9780552163361', 'It is a truth universally acknowledged that a policeman taking a holiday would barely have had time to open his suitcase before he finds his first corpse. And Commander Sam Vimes of the Ankh-Morpork City Watch is on holiday in the pleasant and innocent countryside, but not for him a mere body in the wardrobe.', 23, 54, 'Corgi Books', 1),
(17, 'Terry Pratchett', 13, 'DODGER', 'Comics', '9780385619271', 'Dodger is a tosher - a sewer scavenger living in the squalor of Dickensian London. Everyone who is nobody knows him. Anyone who is anybody doesn\'t. He used to know his future; it involved a lot of brick-lined tunnels and plenty of filth. But when he rescues a young girl from a beating things start to get really messy. Now everyone who is anyone wants to get their hands on Dodger.', 32, 67, 'Doubleday Childrens', 1),
(18, 'Terry Pratchett', 12, 'STRATA', 'Comics', '9780552133258', 'THE COMPANY BUILDS PLANETS. Kin Arad is a high-ranking official of the Company. After twenty-one decades of living, and with the help of memory surgery, she is at the top of her profession. Discovering two of her ', 12, 67, 'Corgi Books', 1),
(19, 'Reid Hoffman', 3, 'MASTERS OF SCALE', 'Business', '', 'On his podcast Masters of Scale, Silicon Valley legend Reid Hoffman (founder of LinkedIn, investor at Greylock) sits down with the leaders of the world\'s most iconic companies,', 23, 57, 'Bantam Press', 0),
(20, 'Sukhinder Singh Cassidy', 15, 'CHOOSE POSSIBILITY', 'Business', '9781529066432', 'Learn how to take risks, thrive and build your dream career. Each one of us dreams of possibility â€“ in our careers and in our personal lives. But our pursuit of possibility is hamstrung by a single myth that looms large over us time and time again.', 23, 65, 'Macmillan', 0),
(21, 'Colin Bryar', 14, 'WORKING BACKWARDS', 'Business', '9781529033830', 'Working Backwards gives an insider\'s account of Amazon\'s approach to culture, leadership, and best practices from two long-time, top-level Amazon executives. In 2018 Amazon became the worldâ€™s second trillion dollar company after Apple: a remarkable success story for a company launched out of a garage in 1994.', 23, 67, 'Macmillan', 1),
(22, 'Stephen M.R. Covey', 8, 'SMART TRUST', 'Business', '9780857207920', 'Trust continues to be the most pivotal element needed in successful relationships-from personal to political to business. Smart Trust shows how to develop optimal trust relationships', 23, 34, 'Simon & Schuster Ltd', 2),
(23, 'Robert C. Martain', 40, 'Clean Code', 'Computer&Tech', '978-0132350884', 'What kind of work will you be doing? You’ll be reading code―lots of code. And you will be challenged to think about what’s right about that code, and what’s wrong with it. More importantly you will be challenged to reassess your professional values and your commitment to your craft.  \r\n\r\nClean Codeis divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case stud', 3, 60, ' Pearson; 1st edition (August ', 0),
(24, 'OccypyTheWeb', 30, 'Linux Basics for Hackers: Gett', 'Computer&Tech', ' 978-1593278557', 'This practical, tutorial-style book uses the Kali Linux distribution to teach Linux basics with a focus on how hackers would use them. Topics include Linux command line basics, filesystems, networking, BASH basics, package management, logging, and the Linux kernel and drivers.\r\n\r\nIf you\'re getting started along the exciting path of hacking, cybersecurity, and pentesting, Linux Basics for Hackers is an excellent first step. Using Kali Linux, an advanced penetration testing distribution of Linux, ', 7, 78, ' No Starch Press; Illustrated ', 0),
(25, 'Jeff Geerling', 20, 'Ansible for DevOps', 'Computer&Tech', '978-0986393426', 'Ansible is a simple, but powerful, server and configuration management tool (with a few other tricks up its sleeve). This book will help those familiar with the command line and basic shell scripting start using Ansible to provision and manage anywhere from one to thousands of servers.\r\n', 2, 56, 'Midwestern Mac, LLC (August 5,', 1),
(26, 'Sam Siewert', 72, 'Real-Time Embedded Components ', 'Computer&Tech', ' 978-1942270041', 'This book is intended to provide a senior undergraduate or graduate student in electrical engineering or computer science with a balance of fundamental theory, review of industry practice, and hands-on experience to prepare for a career in the real-time embedded system industries. It is also intended to provide the practicing engineer with the necessary background to apply real-time theory to the design of embedded components and systems. Typical industries include aerospace, medical diagnostic ', 1, 89, 'Mercury Learning and Informati', 1),
(27, 'Andy Rathbone', 17, 'Windows 11 For Dummies', 'Computer&Tech', '‎ 978-1119846475', 'Need Windows help? Find the latest tips and tricks in this perennial favorite on Windows\r\nWindows 11 promises to be the fastest, most secure, and most flexible version of the Microsoft operating system yet. With a promise like that, of course you want to start using it, as quickly as possible! Windows 11 For Dummies gives you that speed, security, and flexibility by getting you up to date with the latest in Windows. Windows expert and bestselling author Andy Rathbone gives you a helping hand by ', 10, 90, 'For Dummies; 1st edition (Nove', 1),
(28, 'Nick Trenton', 14, 'Stop Overthinking', 'Education', '979-8715048394', 'Stop Overthinking is a book that understands where you’ve been through,the exhausting situation you’ve put yourself into, and how you lose your mind in the trap of anxiety and stress. Acclaimed author Nick Trenton will walk you through the obstacles with detailed and proven techniques to help you rewire your brain, control your thoughts, and change your mental habits. What’s more, the book will provide you scientific approaches to completely change the way you think and feel about yourself by en', 43, 145, 'Independently published (March', 0),
(29, 'Zondervan', 18, 'NIV Adventure Bible', 'Education', '978-0310727477', 'Take your young explorer on an adventure through God’s Word with the #1 Bible for kids!\r\n\r\nThe bestselling NIV Adventure Bible® will get kids excited about reading the Scriptures! Your kids will be captivated with the full-color features that make it fun and engaging to read the Bible and memorize their favorite verses. Along the way they will meet all types of people, see all sorts of places, and learn all kinds of things about the Bible. Most importantly, they will grow closer in their relatio', 13, 80, 'ZonderKidz; Revised edition (J', 1),
(30, 'Diane Alber', 54, 'A Little spot of Emotion', 'Education', '978-1951287139', 'This box set includes 8 Emotion Books:\r\nA Little SPOT of Anger\r\nA Little SPOT of Anxiety\r\nA Little SPOT of Happiness\r\nA Little SPOT of Sadness\r\nA Little SPOT of Love\r\nA Little SPOT of Confidence\r\nA Little Peaceful SPOT\r\nA Little Scribble SPOT', 2, 67, 'Diane Alber Art LLC (May 15, 2', 0),
(31, 'Crystal Radke', 5, 'My First Learn-to-Write Workbo', 'Education', '978-1641526272', 'Help your little one build communication skills with the ultimate writing workbook for kids ages 3 to 5.\r\n\r\nSet kids up to succeed in school with a learn to write for kids guide that teaches them letters, shapes, and numbers―and makes it fun. My First Learn-to-Write Workbook introduces early writers to proper pen control, line tracing, and more with dozens of handwriting exercises that engage their minds and boost their reading and writing comprehension.\r\n\r\nThis handwriting activity book include', 30, 100, 'Rockridge Press; Workbook edit', 0),
(32, 'Alexandra Robbins', 26, 'The Teachers', 'Education', '978-1101986752', 'A riveting, must-read, year-in-the-life account of three teachers, combined with reporting that reveals what’s really going on behind school doors, by New York Times bestselling author and education expert Alexandra Robbins.\r\n \r\nAlexandra Robbins goes behind the scenes to tell the true, sometimes shocking, always inspirational stories of three teachers as they navigate a year in the classroom. She follows Penny, a southern middle school math teacher who grappled with a toxic staff clique at the ', 22, 90, 'Dutton (March 14, 2023)', 1),
(33, 'Maya Kaimal', 14, 'Indian Flavor Every Day', 'Cooking', 'B0B5C579FZ', 'In Indian Flavor Every Day, Indian cooking authority Maya Kaimal proves it’s possible to experience the joy of this cuisine with minimal time and just a handful of essential ingredients like spices, ghee, and dried chilies. She distills foundational flavor-building methods, like creating spice blends and sizzling whole seeds in oil to release their essence, and applies them to accessible, versatile ingredients any home cook has on hand.\r\n \r\nThese adaptable techniques open a world of possibility ', 3, 77, 'Clarkson Potter (March 28, 202', 1),
(34, 'Danielle Brown', 29, 'HealthyGirl Kitchen', 'Cooking', ' 978-0744078077', 'An accessible plant-based cookbook from a non-judgmental vegan featuring delicious and easy recipes that will make you feel your best\r\n\r\nWhether you’re a practicing vegan or just interested in trying out more plant-based meals, HealthyGirl Kitchen is the go-to cookbook for insanely easy, out-of-this-world delicious recipes that will help you become the best version of yourself.\r\n\r\nDanielle Brown is the wildly popular vegan influencer behind HealthyGirl Kitchen, having created hundreds of recipes', 23, 90, ' Alpha (May 16, 2023)', 1),
(35, 'Carleigh Bodrug', 16, 'Plant You', 'Cooking', '978-0306923043', 'Plant-based eating doesn\'t have to be complicated! The delicious recipes in this easy-to-follow cookbook are guaranteed to keep you inspired and motivated.\r\n\r\nEnter PlantYou, the ridiculously easy plant-based, oil-free cookbook with over 140+ healthy vegan recipes for breakfast, lunch, dinner, cheese sauces, salad dressings, dessert and more!\r\n\r\nIn her eagerly anticipated debut cookbook, Carleigh Bodrug, the Founder of the wildly popular social media community PlantYou, provides readers with the', 34, 134, 'Hachette Go (February 15, 2022', 1),
(36, 'Kathryne Taylor', 24, 'Love real Food', 'Cooking', '978-1623367411', 'Learn to eat well with more than 100 approachable and delicious meatless recipes designed for everyone—vegetarians, vegans, and meat-eaters alike—with substitutions to make meals special diet–friendly (gluten-free, dairy-free, and egg-free) whenever possible. \r\n\r\nThe path to a healthy body and happy belly is paved with real food—fresh, wholesome, sustainable food—and it doesn’t need to be so difficult. No one knows this more than Kathryne Taylor of America’s most popular vegetarian food blog, Co', 8, 56, 'Rodale Books (May 16, 2017)', 1),
(37, 'Jordan Moore', 13, 'Interesting Facts for Curious ', 'Entertainment', '979-8887680026', 'Interesting Facts For Curious Minds gives you the answer to all these and many, many more questions that I know have crossed your mind from time to time. This book is divided into 63 chapters by topic for your convenience, bringing you a nice mix of science, history, pop culture, and all sorts of stuff in between. Each chapter contains 25 concise yet engaging factoids that are sure to make you think and at times laugh.\r\nHow you read this book is entirely up to you. I’m sure most of you will read', 25, 78, 'Red Panda Press (July 18, 2022', 0),
(38, 'Nintendo', 25, 'Zelda', 'Entertainment', ' 978-1506706382', 'This 320-page book is an exhaustive guide to The Legend of Zelda from the original The Legend of Zelda to Twilight Princess HD. Make sure to check out the other installments in this unparalleled collection of historical information on The Legend of Zelda franchise with the New York Times best selling The Legend of Zelda: Hyrule Historia and The Legend of Zelda: Art & Artifacts. Also look for The Legend of Zelda: Breath of the Wild -- Creating a Champion for an indepth look at the art, lore, and ', 23, 80, 'Dark Horse Books; Illustrated ', 0),
(39, 'Silly Bear', 5, 'Unicorn coloring book', 'Entertainment', '978-1999896966', 'This children’s coloring book is full of happy, smiling, beautiful unicorns. For anyone who loves unicorns, this book makes a nice gift for ages 4 to 8 years.\r\nPlease note: This is not an adult coloring book and the style is that of an ordinary child\'s coloring book, with a matte cover to finish.', 1, 40, ' On The Hop Books Ltd; 1st edi', 0),
(40, 'Bobby Fischer ', 9, 'Bobby Fischer Teaches Chess', 'Entertainment', ' 978-0553263152', 'A one-of-a-kind masterclass in chess from the greatest player of all time.\r\n\r\nLearn how to play chess the Bobby Fischer way with the fastest, most efficient, most enjoyable method ever devised. Whether you’re just learning the game or looking for more complex strategies, these practice problems and exercises will help you master the art of the checkmate. \r\n\r\nThis book teaches through a programmed learning method: It asks you a question. If you give the right answer, it goes on to the next questi', 56, 160, 'Bantam; NO-VALUE edition (July', 0),
(41, 'Aaron Reynolds', 10, 'Creepy Carrots', 'Kids', '9781529022020', 'In this Caldecott Honor–winning picture book, The Twilight Zone comes to the carrot patch as a rabbit fears his favorite treats are out to get him.', 12, 60, 'Simon and Schuster', 1),
(42, 'Erin Hunter', 13, 'Warriors', 'Kids', '9781529022021', 'The warrior code now allows a cat to formally change Clans, but ShadowClan’s newest arrival feels increasingly unwelcome—and though ShadowClan warrior Sunbeam thinks every cat deserves a chance, one of the loudest voices of opposition is her own mother.', 13, 61, 'HarperCollins', 0),
(43, 'Kelly Leigh Miller', 6, 'Avatar', 'Kids', '9781529022022', 'Celebrated children\'s author Kelly Leigh Miller (I am a Wolf; I Love My Fangs) teams with Avatar fandom favorite artist Diana Sim to bring young Avatar fans and their families this heartwarming tale of love, celebration, and friendship,', 14, 62, 'Dark Horse Comics', 22),
(44, 'Betty C. Tang', 8, 'Parachute Kids', 'Kids', '9781529022023', 'From New York Times bestselling comic artist Betty C. Tang comes a funny, fast-paced, and heartrending story about three siblings living on their own as undocumented new immigrants, inspired by the author\'s own childhood as a parachute kid.', 20, 50, 'Scholastic Inc.', 0),
(45, 'Kayla Miller · Jeffrey Canino', 11, 'Besties', 'Kids', '9781529022024', 'A fun and fresh spin-off of the New York Times bestselling Click graphic novels. With the school dance around the corner, fashionistas Beth and Chanda are ready to dazzle!\r\nWith their first formal school dance around the corner, Beth and Chanda are on a mission to make it the best night ever.', 22, 53, ' HarperCollins', 0),
(46, 'Francine Pascal', 8, 'Sweet Valley Twins', 'Kids', '9781529022025', 'Jessica and Elizabeth are ready to take on middle school . . . but are they ready to take on each other? The New York Times bestselling world of Sweet Valley Twins returns in these all-new graphic novel adaptations!\r\n', 15, 55, 'Random House Graphic', 1),
(47, 'Varian Johnson', 2, 'Twins', 'Kids', '9781529022026', 'Coretta Scott King Honor author Varian Johnson teams up with rising cartoonist Shannon Wright for a delightful middle-grade graphic novel!\r\nMaureen and Francine Carter are twins and best friends. They participate in the same clubs, enjoy the same foods, and are partners on all their school projects', 10, 50, 'Scholastic Inc.', 0),
(48, 'Kristen Gudsnuk', 8, 'Making Friends', 'Kids', '9781529022027', 'Sometimes making a friend is a lot easier than keeping one!\r\n\r\nSixth grade was SO much easier for Dany. All her friends were in the same room and she knew exactly what to expect out of life. Now that she\'s in seventh grade, she\'s in a new middle school, her friends are in different classes and forming new cliques.', 30, 62, 'Scholastic Inc.', 1),
(49, 'Dennis Greenberger', 18, 'Mind Over Mood', 'Medicine', '9781529022031', 'Discover simple yet powerful steps you can take to overcome emotional distress--and feel happier, calmer, and more confident. This life-changing book has already helped more than 1,200,000 readers use cognitive-behavioral therapy--one of today\'s most effective forms of psychotherapy.', 38, 70, 'Guilford Publications', 1),
(50, 'Sam Kaddoura', 19, 'Echo Made Easy E-Book', 'Medicine', '9781529022029', 'Echocardiography (echo), the use of ultrasound to examine the heart, is a powerful and safe technique which is now widely available for cardiovascular investigation.It aims to explain the echo techniques available, outlines what they are most suitable for, and most importantly puts echo into a clinical perspective', 55, 65, 'Elsevier Health Sciences', 1),
(51, 'Bill Bryson', 7, 'The Body', 'Medicine', '9781529022030', 'A must-read owner’s manual for every body. Take a head-to-toe tour of the marvel that is the human body in this “delightful, anecdote-propelled read” (The Boston Globe) from the author of A Short History of Nearly Everything. With a new Afterword.', 42, 80, 'Anchor', 1),
(52, 'Rosemary Gladstar', 3, 'Rosemary Gladstar\'s', 'Medicine', '9781529022028', 'Herbalist Rosemary Gladstar – author of dozens of books, including Herbs for Children\'s Health, Herbs for Stress & Anxiety, and Fire Cider! – now offers wellness expertise specifically for men. Dozens of delicious and simple formulas address men’s most common health concerns, including sexual vitality.', 55, 15, ' Storey Publishing, LLC', 0),
(53, 'Michael Gershon', 13, 'The Second Brain', 'Medicine', '9781529022032', 'Dr. Gershon’s groundbreaking book fills the gap between what you need to know—and what your doctor has time to tell you.\r\n\r\nDr. Michael Gershon has devoted his career to understanding the human bowel (the stomach, esophagus, small intestine, and colon).', 32, 68, 'HarperCollins', 1),
(54, 'Rosemary Gladstar', 11, 'Herbal Recipes ', 'Medicine', '9781529022033', 'Promote vibrant health and radiant beauty, soothe everyday ailments, and ease persistent stress with these simple, natural cures for everything from dry skin and infant colic to cold symptoms and insomnia.', 12, 52, 'Storey Publishing, LLC', 0),
(55, 'Dr. Jason Fung', 19, 'The Cancer Code', 'Medicine', '9781529022034', 'Author of the international bestsellers The Diabetes Code and The Obesity Code Dr. Jason Fung returns with an eye-opening biography of cancer in which he offers a radical new paradigm for understanding cancer—and issues a call to action for reducing risk moving forward.\r\n', 48, 72, ' HarperCollins', 1),
(56, 'Matthew A. Butkus', 49, 'Biomedical Ethics and Decision', 'Medicine', '9781529022035', 'Drawing from clinical experience, philosophy, psychology, and current health law and policy, Biomedical Ethics and Decision-Making is a detailed survey of persistent issues in health care ethics, emphasizing the complexities and nuances of practical decision-making and yielding a multifaceted and systematic approach to solving problems', 34, 59, 'Gegensatz Press', 0),
(57, 'Jonathan Stroud', 8, 'The Screaming Staircase', 'Mysteries', '9781529022036', 'Dive into the first book of this frightfully fun series and join the ghost-hunting gang as they defend our world from the most fearsome phantoms!\r\n\r\nA sinister Problem has occurred in London: all nature of ghosts, haunts, spirits.', 33, 78, 'Brown Books ', 0),
(58, 'C. L. Stone', 1, 'Sean', 'Mysteries', '9781529022039', 'The Academy: Ghost Bird series in a different look at the very beginning. Read Introductions with a whole new perspective--the boys\'.\r\nAs a doctor at a young age, Sean Green’s life in the realm of healing has meant long and grueling hours, which has left little room for much else. He’s exhausted and overwhelmed but with the high school project.', 37, 95, 'Meeting Sang ', 0),
(59, 'Jonathan Stroud', 8, 'Lockwood & Co.', 'Mysteries', '9781529022037', 'In this spine-tingling sequel of the Lockwood & Co series, the ghost-hunting gang take on terrifying new challenges.\r\n\r\nAfter leaving Lockwood & Co. at the end of The Hollow Boy.', 27, 78, 'Little, Brown Books', 1),
(60, 'Michael Buckley', 7, 'Once Upon a Crime', 'Mysteries', '9781529022038', 'n the long-awaited fourth book in the New York Times bestselling series, the Grimms take on New York City!\r\n\r\nSurprises abound for Sabrina and Daphne Grimm, fairy-tale detectives extraordinaire. When they venture into the big city, they stumble upon a murder, face betrayal by a friend, and discover an amazing secret about their mother.', 39, 97, 'Abrams', 1),
(61, 'Nathan L. Henry', 10, 'Good Behavior', 'Mysteries', '9781529022040', 'ailed at age sixteen for armed robbery, Nathan Henry was the kind of teenager most parents and teachers have nightmares about. His crime was the culmination of a life lived on the edge: guns and drugs, sex and violence, all set against the ordinary backdrop of a one-stop light town in rural Indiana. Nate\'s personal history is both disturbing and fascinating', 36, 100, 'Bloomsbury Publishing USA', 0),
(62, 'Clare Vanderpool', 8, 'Moon Over Manifest', 'Mysteries', '9781529022041', 'The movement of the train rocked me like a lullaby. I closed my eyes to the dusty countryside and imagined the sign I’d seen only in Gideon’s stories: Manifest—A Town with a rich past and a bright future.', 43, 120, 'Delacorte Press', 1),
(63, 'Delacorte Press', 8, 'The Secret of White Stone Gate', 'Mysteries', '9781529022042', 'About this eBook\r\nEmmy and her friends battle the Order of Black Hollow Lane in the exciting sequel to the bestselling mystery series, perfect for fans of The Mysterious Benedict Society and The Blackthorn Key series.\r\nWhen Lola is framed for a crime she didn\'t commit, the Order wants Emmy to give up her secrets about her father.', 29, 110, 'Sourcebooks, Inc.', 0),
(64, 'Mary Downing Hahn', 6, 'The Ghost of Crutchfield Hall', 'Mysteries', '9781529022043', 'When twelve-year-old Florence boards the crowded horse-drawn coach in London, she looks forward to a new life with her great uncle and aunt at Crutchfield Hall, an old manor house in the English countryside. Anything will be better, she thinks, than the grim London orphanage where she has lived since her parents\' death.', 30, 75, 'HarperCollins', 0),
(65, 'Valerie Keogh', 3, 'The Widow', 'parenting', '9781529022044', '‘Keogh is the queen of compelling narratives and twisty plots’ Jenny O\'BrienThe brilliant new psychological thriller from bestseller Valerie Keogh.\r\n\'A wonderful book, I can’t rate this one highly enough. If only there were ten stars, it’s that good. Valerie Keogh is a master story-teller, and this is a masterful performance.\' Bestselling author Anita Waller.\r\n', 41, 142, 'Valerie Keogh', 0),
(66, 'Melissa Foster', 5, 'Then Came Love', 'parenting', '9781529022051', 'Blazing heat, laugh-out-loud humor, and an abundance of swoon-worthy moments make this sexy new standalone romance by New York Times and Wall Street Journal bestselling author Melissa Foster unputdownable. No cheating, no cliffhangers, and guaranteed to leave you breathlessly in love with the fiercely loyal and wickedly naughty Bradens.\r\n', 34, 111, 'World Literary Press', 0),
(67, 'June Francis', 3, 'Hers to Have and to Hold', 'parenting', '9781529022045', 'How much does she truly know about her husband?\r\nEliza Jones and her husband Bryn had a whirlwind romance and married shortly after meeting, but he was soon sent off to fight. In the midst of a Blitz attack on Liverpool, which leaves Eliza with amnesia, she gives birth to their baby son, Alfie. Still struggling with the aftermath of the birth', 21, 53, 'Canelo', 0),
(68, 'Anne-Marie Meyer', 4, 'The Shop Around the Corner', 'parenting', '9781529022046', ' finally got Shelby back into my life and I\'ll be damned if I lose her again.\r\nI\'ll find a way to make everyone happy...I have to.\r\n\r\nShelby\r\n\r\nI thought I was getting stronger, but now, I\'m not so sure. Tamara is back in Miles\' life and I want to say that it doesn\'t affect us--that he loves me and that is all that should matter--but every time I see Belle, I see myself.', 23, 58, 'Sweet Tea', 0),
(69, 'Keri Beevis', 2, 'The Sleepover', 'parenting', '9781529022047', 'All NEW from bestselling psychological thriller writer Keri Beevis\r\nWhen you’re a kid, you imagine monsters to have horns and fangs. That they hide under the bed or in the wardrobe. And you believe they can only come after you when it’s dark', 17, 100, 'Keri Beevis', 0),
(70, 'John Gottman, PhD · Nan Silver', 13, 'Seven Principles for  Marriage', 'parenting', '9781529022048', 'NEW YORK TIMES BESTSELLER • Over a million copies sold! “An eminently practical guide to an emotionally intelligent—and long-lasting—marriage.”—Daniel Goleman, author of Emotional Intelligence\r\n\r\nThe Seven Principles for Making Marriage Work has revolutionized the way we understand, repair, and strengthen marriages. ', 22, 55, 'Harmony', 1),
(71, 'Maura Cullen', 10, '35 Dumb Things', 'parenting', '9781529022049', '“The go-to guide on diversity. . . . A must-read book for [anyone] who wants to understand what it takes to respect and work with today’s global workforce.” —Brendon Burchard, #1 New York Times–bestselling author of High Performance Habits\r\n\r\nA powerful diversity training tool from one of the most respected diversity trainers.', 32, 98, 'Morgan James Publishing', 1),
(72, 'Theresa Paolo', 5, 'Dreaming of Daisy', 'parenting', '9781529022050', 'She left him once to live her dream, but can she do it again?\r\n\r\n\r\nWith big dreams of seeing her name in lights on Broadway, Daisy Hayes left behind her small town, family, and the only boy she ever loved. Six years later, broke,unsuccessful, and on the brink of being homeless, she refuses to accept that she failed. But when she receives a phone call from home, she has no choice.', 47, 142, ' TMP Books Inc.', 1);

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
(1, 'dasd', 1, 432, 23, 'placed', 1, 1),
(2, 'No 40,wewa kotasa, puhulwatta, maussagolla, passara, badulla, uva, 0766475517', 2, 55, 5, 'Placed', 2, 1956),
(3, 'No 40,wewa kotasa, puhulwatta, maussagolla, passara, badulla, uva, 0766475517', 3, 150, 10, 'Placed', 2, 1956),
(4, 'No 40,wewa kotasa, puhulwatta, maussagolla, passara, badulla, uva, 0766475517', 2, 55, 5, 'Placed', 3, 1956),
(5, 'No 40,wewa kotasa, puhulwatta, maussagolla, passara, badulla, uva, 0766475517', 3, 150, 10, 'Placed', 3, 1956),
(6, 'Hiran  Sanjeewa,<br> No 40, Wewa Kotasa,Puhulwatta,<br> Maussagolla, Passara,<br> Badulla, Uva,<br> 90500', 1, 20, 2, 'Placed', 4, 1956),
(7, 'Hiran  Sanjeewa,<br> No 40, Wewa Kotasa,Puhulwatta,<br> Maussagolla, Passara,<br> Badulla, Uva,<br> 90500', 2, 22, 2, 'Placed', 4, 1956),
(8, 'Hiran  Sanjeewa,<br> No 40, Wewa Kotasa,Puhulwatta,<br> Maussagolla, Passara,<br> Badulla, Uva,<br> 90500', 3, 30, 2, 'Placed', 4, 1956),
(9, 'Hiran  Sanjeewa,<br> No 40, Wewa Kotasa,Puhulwatta,<br> Maussagolla, Passara,<br> Badulla, Uva,<br> 90500', 1, 20, 2, 'Placed', 5, 1956),
(10, 'Hiran  Sanjeewa,<br> No 40, Wewa Kotasa,Puhulwatta,<br> Maussagolla, Passara,<br> Badulla, Uva,<br> 90500', 2, 22, 2, 'Placed', 5, 1956),
(11, 'Hiran  Sanjeewa,<br> No 40, Wewa Kotasa,Puhulwatta,<br> Maussagolla, Passara,<br> Badulla, Uva,<br> 90500', 3, 30, 2, 'Placed', 5, 1956),
(12, 'Hiran  Sanjeewa,<br> No 40, Wewa Kotasa,Puhulwatta,<br> Maussagolla, Passara,<br> Badulla, Uva,<br> 90500', 1, 10, 1, 'Placed', 6, 1956),
(13, 'Hiran  Sanjeewa,<br> No 40, Wewa Kotasa,Puhulwatta,<br> Maussagolla, Passara,<br> Badulla, Uva,<br> 90500', 2, 11, 1, 'Placed', 6, 1956),
(14, 'Hiran  Sanjeewa,<br> No 40, Wewa Kotasa,Puhulwatta,<br> Maussagolla, Passara,<br> Badulla, Uva,<br> 90500', 3, 15, 1, 'Placed', 6, 1956),
(15, 'No 40,wewa kotasa, puhulwatta, maussagolla, passara, badulla, uva, 0766475517', 2, 55, 5, 'Placed', 7, 1956),
(16, 'No 40,wewa kotasa, puhulwatta, maussagolla, passara, badulla, uva, 0766475517', 3, 150, 10, 'Placed', 7, 1956),
(17, 'No 40,wewa kotasa, puhulwatta, maussagolla, passara, badulla, uva, 0766475517', 2, 55, 5, 'Placed', 8, 1956),
(18, 'No 40,wewa kotasa, puhulwatta, maussagolla, passara, badulla, uva, 0766475517', 3, 150, 10, 'Placed', 8, 1956),
(19, 'Hiran  Sanjeewa,<br> No 40, Wewa Kotasa,Puhulwatta,<br> Maussagolla, Passara,<br> Badulla, Uva,<br> 90500', 1, 10, 1, 'Placed', 9, 1956),
(20, 'Hiran  Sanjeewa,<br> No 40, Wewa Kotasa,Puhulwatta,<br> Maussagolla, Passara,<br> Badulla, Uva,<br> 90500', 3, 45, 3, 'Placed', 10, 1956);

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

--
-- Dumping data for table `otps`
--

INSERT INTO `otps` (`email`, `otp`) VALUES
('hiransanjeewaa@gmail.com', 8253);

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
(1956, 1, 'asdfasd', 'asdads', 'asdasd', 'hiransanjeewaa@gmail.com', 'Hiran', '2426482342', '$2a$10$EozUKPLWZ0JJ9WHDiOvTheYfc.gIXCsDUYKUCsdOw9g3dUJ48qgsq', '90500', 'asdasd', 'Sanjeewa');

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
(2201);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `wishno` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

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
