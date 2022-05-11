-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2022 at 06:59 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `multimedia`
--

-- --------------------------------------------------------

--
-- Table structure for table `songdata`
--

CREATE TABLE `songdata` (
  `id` int(11) NOT NULL,
  `songName` varchar(250) DEFAULT NULL,
  `filePath` varchar(280) DEFAULT NULL,
  `coverPath` varchar(280) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `songdata`
--

INSERT INTO `songdata` (`id`, `songName`, `filePath`, `coverPath`) VALUES
(1, 'Arijit Singh -khairiyat', 'https://cdn.discordapp.com/attachments/958287122895339540/958296137805201419/r0.mp3', 'https://media.discordapp.net/attachments/960040901261004830/960041574258065448/r0.jpg'),
(2, 'Arijit Singh -Enna Sona', 'https://cdn.discordapp.com/attachments/958287122895339540/958296138501460008/r1.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041574492942396/r1.jpg'),
(3, 'Arijit Singh -Soch Na Sake', 'https://cdn.discordapp.com/attachments/958287122895339540/958296210542825542/r2.mp3', 'https://media.discordapp.net/attachments/960040901261004830/960041574685876254/r2.jpg'),
(4, 'Arijit Singh -Hawayein', 'https://cdn.discordapp.com/attachments/958287122895339540/960039023383035954/r4.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041574924947526/r4.jpg'),
(5, 'Arijit Singh -Hamdard', 'https://cdn.discordapp.com/attachments/958287122895339540/960039145378553917/r6.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041575155646525/r6.jpg'),
(6, 'Arijit Singh -Phir Kabhi', 'https://cdn.discordapp.com/attachments/958287122895339540/960039204103012362/r7.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041575537336340/r7.jpg'),
(7, 'DJ Gimi-O x habibi', 'https://cdn.discordapp.com/attachments/958287122895339540/960039573319217232/h0.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041933395345528/h0.jpg'),
(8, 'French Montana -Unforgettable', 'https://cdn.discordapp.com/attachments/958287122895339540/960039613613875200/h1.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041933634416660/h1.jpg'),
(9, 'LSD -Genius', 'https://cdn.discordapp.com/attachments/958287122895339540/960039665463861258/h2.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041933839945768/h2.jpg'),
(10, 'Sean Paul -No Lie', 'https://cdn.discordapp.com/attachments/958287122895339540/960039729150189588/h3.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041934049673267/h3.jpg'),
(11, 'Sean Paul -Go down deh', 'https://cdn.discordapp.com/attachments/958287122895339540/960039761651843112/h4.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041934271963156/h4.jpg'),
(12, 'Danger twins -Thing of Beauty', 'https://cdn.discordapp.com/attachments/958287122895339540/960039831919034509/h5.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041934494253086/h5.jpg'),
(13, 'Tick Tick Boom', 'https://cdn.discordapp.com/attachments/958287122895339540/960039864307441674/h6.mp3', 'https://media.discordapp.net/attachments/960040901261004830/960042132171784262/h6.jpg?width=941&height=588'),
(14, 'Burak Yeter - Tuesday', 'https://cdn.discordapp.com/attachments/958287122895339540/960039919911337994/h7.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960042207233081374/h7.jpg'),
(15, 'Dua Lipa - Love Again', 'https://cdn.discordapp.com/attachments/958287122895339540/960040023175102474/h8.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960044951910105098/images.jpeg'),
(16, 'Angetenar -Rompasso', 'https://cdn.discordapp.com/attachments/958287122895339540/960040140712071228/h9.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960053769108860968/h9.jpg'),
(17, 'She-NCS Release', 'https://cdn.discordapp.com/attachments/775740994595323954/775741544149549096/Andromedik_-_SHE_NCS_ReleaseMP3_160K.mp3', 'https://i.scdn.co/image/ab67616d0000b2737b8d8ca1a8e14506c8f35233'),
(18, 'Fade-NCS Release', 'https://cdn.discordapp.com/attachments/775740994595323954/775741536591806484/Alan_Walker_-_Fade_NCS_ReleaseMP3_160K.mp3', 'https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a'),
(19, 'Invincible [NCS Release]', 'https://cdn.discordapp.com/attachments/775740994595323954/775741667210035220/DEAF_KEV_-_Invincible_NCS_ReleaseMP3_160K.mp3', 'https://i.scdn.co/image/ab67616d0000b27362a57823eced1cb4fd93b2c1'),
(20, 'On & On (feat. Daniel Levi) [NCS Release]', 'https://cdn.discordapp.com/attachments/775740994595323954/775741549177995264/Cartoon_-_On___On_feat._Daniel_Levi_NCS_ReleaseMP3_160K.mp3', 'https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc'),
(21, 'Sky High [NCS Release]', 'https://cdn.discordapp.com/attachments/775740994595323954/775741836152668201/Elektronomia_-_Sky_High_NCS_ReleaseMP3_160K.mp3', 'https://i.scdn.co/image/ab67616d0000b27394ae8395433c0c7521ac25ba'),
(22, 'Savannah (feat. Philly K)', 'https://cdn.discordapp.com/attachments/775740994595323954/775741669626085426/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3', 'https://i.scdn.co/image/ab67616d0000b273b536cfb98c74558db48f8a46'),
(23, 'Ariana Grande -34+35', 'https://cdn.discordapp.com/attachments/958287122895339540/958287887877681162/n0.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041361904652358/n0.jpg'),
(24, 'Where\'d You Go(feat.Luna Lark)', 'https://cdn.discordapp.com/attachments/775740994595323954/775741837642170382/Julius_Dreisig_-_Where_d_You_Go_feat._Luna_LarkMP3_160K.mp3', 'https://i.scdn.co/image/ab67616d0000b273100fb4649eae80922bf1acbf'),
(25, 'Neha kakkar -Dilbar', 'https://cdn.discordapp.com/attachments/958287122895339540/958289464118083594/n2.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041362324070400/n2.jpg'),
(26, 'Doja cat -Kiss me more', 'https://cdn.discordapp.com/attachments/958287122895339540/958289463795130398/n1.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041362101768202/n1.jpg'),
(27, 'Ariana Grande -Position', 'https://cdn.discordapp.com/attachments/958287122895339540/958290761055604796/n4.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041362684805160/n4.jpg'),
(28, 'Aastha Gill -Kamariya', 'https://cdn.discordapp.com/attachments/958287122895339540/958290760350978088/n3.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041362512830514/n3.jpg'),
(29, 'Badshaah -Garmi', 'https://cdn.discordapp.com/attachments/958287122895339540/958291263319314432/n6.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041363225845780/n6.jpg'),
(30, 'Honey singh -Chaar Botal', 'https://cdn.discordapp.com/attachments/958287122895339540/958291262883115018/n5.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041362873528400/n5.jpg'),
(31, 'Cool for the Summer', 'https://paglasongs.com/files/download/type/320/id/7278', 'https://paglasongs.com/uploads/thumb/sft15/7278_4.jpg'),
(32, 'Doja cat -Need to know', 'https://cdn.discordapp.com/attachments/958287122895339540/958292533996318770/n7.mp3', 'https://cdn.discordapp.com/attachments/960040901261004830/960041363439771678/n7.jpg'),
(33, 'Na Na Re KGF', 'https://pwdown.com/113622/Na%20Na%20Re%20Kgf.mp3', 'https://www.pagalworld.pw/GpE34Kg9Gq/113622/149337-na-na-re-kgf-mp3-song-300.jpg'),
(34, 'Sulthan - KGF 2', 'https://pwdown.com/113622/Sulthan%20-%20KGF%202.mp3', 'https://www.pagalworld.pw/GpE34Kg9Gq/113622/149273-sulthan-kgf-2-mp3-song-300.jpg'),
(35, 'On & On (feat. Daniel Levi) [NCS Release]', 'https://cdn.discordapp.com/attachments/775740994595323954/775741549177995264/Cartoon_-_On___On_feat._Daniel_Levi_NCS_ReleaseMP3_160K.mp3', 'https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc'),
(36, 'Invisible [NCS Release]', 'https://cdn.discordapp.com/attachments/775740994595323954/775741873582899230/Julius_Dreisig___Zeus_X_Crona_-_Invisible_NCS_RelMP3_160K.mp3', 'https://i.scdn.co/image/ab67616d0000b27391b709ced968e29e8f00dfe3'),
(37, 'Fearless pt.II (feat. Chris Linton) [NCS Release]', 'https://cdn.discordapp.com/attachments/775740994595323954/775741949998399572/Lost_Sky_-_Fearless_pt.II_feat._Chris_Linton_NCMP3_160K.mp3', 'https://i.scdn.co/image/ab67616d0000b2733be40769b1c2361cea9f0843'),
(38, 'Where We Started (feat. Jex) [NCS Release]', 'https://cdn.discordapp.com/attachments/775740994595323954/775741989177524264/Lost_Sky_-_Where_We_Started_feat._Jex_NCS_ReleaMP3_160K.mp3', 'https://i.scdn.co/image/ab67616d0000b273a61f22690660bd5264495524'),
(39, 'Look At Her Now', 'https://cdn.discordapp.com/attachments/775740994595323954/782128984070029322/Selena_Gomez_-_Look_At_Her_Now_Official_Music_VidMP3_128K.mp3', 'https://i.scdn.co/image/ab67616d0000b2732abcc266597eb46f897a8666'),
(40, 'Let Me Love You', 'https://cdn.discordapp.com/attachments/775740994595323954/782129492180860928/DJ_Snake_-_Let_Me_Love_You_ft._Justin_Bieber_OffiMP3_128K.mp3', 'https://i.scdn.co/image/ab67616d0000b273212d776c31027c511f0ee3bc'),
(41, 'Slow Down', 'https://cdn.discordapp.com/attachments/775740994595323954/782129669578424330/Selena_Gomez_-_Slow_Down_OfficialMP3_128K.mp3', 'https://i.scdn.co/image/ab67616d0000b273da513d25e8b3cdd4f43f7512'),
(42, 'On my Way', 'https://cdn.discordapp.com/attachments/775740994595323954/782129671055605760/Alan_Walker__Sabrina_Carpenter___Farruko_-_On_MyMP3_128K.mp3', 'https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc'),
(43, 'Baby', 'https://cdn.discordapp.com/attachments/775740994595323954/782129781373272084/Justin_Bieber_-_Baby_ft._Ludacris_Official_MusicMP3_128K.mp3', 'https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a'),
(44, 'Despacito', 'https://cdn.discordapp.com/attachments/775740994595323954/782129852181381121/Justin_Bieber_Despacito_Lyrics_--_ft._Luis_FonMP3_128K.mp3', 'https://i.scdn.co/image/ab67616d0000b273ef0d4234e1a645740f77d59c'),
(45, 'Alone pt II/2', 'https://cdn.discordapp.com/attachments/775740994595323954/782129915348385822/Alan_Walker___Ava_Max_-_Alone__Pt._IIMP3_128K.mp3', 'https://i.scdn.co/image/ab67616d0000b273c7870db6e559380bbc80fee8'),
(46, 'Senorita', 'https://cdn.discordapp.com/attachments/775740994595323954/782129973439102986/Shawn_Mendes__Camila_Cabello_-_Senorita_LyricsMP3_160K.mp3', 'https://i.scdn.co/image/ab67616d0000b273e6095c382c2853667c1623eb'),
(47, 'Closer', 'https://cdn.discordapp.com/attachments/775740994595323954/782130132722384907/The_Chainsmokers_-_Closer_Lyric_ft._HalseyMP3_128K.mp3', 'https://i.scdn.co/image/ab67616d0000b273495ce6da9aeb159e94eaa453'),
(48, 'Intentions', 'https://cdn.discordapp.com/attachments/775740994595323954/782130437514067998/Justin_Bieber_-_Intentions_ft._Quavo_Official_VidMP3_160K.mp3', 'https://i.scdn.co/image/ab67616d0000b27308e30ab6a058429303d75876');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `songdata`
--
ALTER TABLE `songdata`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
