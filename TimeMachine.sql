-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.6-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando datos para la tabla time_machine.equipos: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `equipos` DISABLE KEYS */;
INSERT INTO `equipos` (`id`, `nombre`, `descripcion`, `imagen`, `lider`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
	(1, 'Primer Equipo', 'Equipo de Muestra', 'http://138.197.196.196/api/imagenes/50.jpg', 1, '2020-03-10 22:27:41', '2020-03-10 22:27:43', NULL),
	(2, 'Segundo Equipo', 'Segundo equipo de muestra', 'http://138.197.196.196/api/imagenes/60.jpg', 5, '2020-03-10 22:41:19', '2020-03-10 22:41:20', NULL);
/*!40000 ALTER TABLE `equipos` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.equipos_usuarios: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `equipos_usuarios` DISABLE KEYS */;
INSERT INTO `equipos_usuarios` (`createdAt`, `updatedAt`, `usuario`, `equipo`) VALUES
	('2020-03-10 22:29:50', '2020-03-10 22:29:52', 1, 1),
	('2020-03-10 22:29:14', '2020-03-10 22:29:16', 2, 1),
	('2020-03-10 22:41:33', '2020-03-10 22:41:33', 5, 2),
	('2020-03-10 22:41:48', '2020-03-10 22:41:49', 8, 2);
/*!40000 ALTER TABLE `equipos_usuarios` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.estados: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `estados` DISABLE KEYS */;
/*!40000 ALTER TABLE `estados` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.estados_proyectos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `estados_proyectos` DISABLE KEYS */;
/*!40000 ALTER TABLE `estados_proyectos` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.estados_tareas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `estados_tareas` DISABLE KEYS */;
/*!40000 ALTER TABLE `estados_tareas` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.menus: ~13 rows (aproximadamente)
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` (`id`, `titulo`, `icono`, `link`, `subtitulo`, `createdAt`, `updatedAt`, `deletedAt`, `grupo`) VALUES
	(1, 'Dashboard', 'fas fa-fw fa-tachometer-alt', '/dashboard', NULL, '2020-03-10 21:46:41', '2020-03-10 21:46:41', NULL, 1),
	(3, 'Proyectos', 'fas fa-fw fa-chart-pie', '', 'Operaciones', '2020-03-10 22:28:31', '2020-03-10 22:28:31', NULL, 3),
	(4, 'Nuevo', NULL, 'proyectos/nuevo', NULL, '2020-03-10 22:28:31', '2020-03-10 22:28:31', NULL, NULL),
	(5, 'Avances', NULL, 'proyectos/avances', NULL, '2020-03-10 22:28:31', '2020-03-10 22:28:31', NULL, NULL),
	(6, 'Tareas', NULL, 'proyectos/tareas', NULL, '2020-03-10 22:28:31', '2020-03-10 22:28:31', NULL, NULL),
	(7, 'Equipos', 'fas fa-fw fa-users', '', 'Operaciones', '2020-03-11 00:08:46', '2020-03-11 00:08:46', NULL, 3),
	(8, 'Tareas', 'fas fa-fw fa-users', '', 'Operaciones', '2020-03-11 00:08:46', '2020-03-11 00:08:46', NULL, 3),
	(9, 'Ver', NULL, 'equipos', NULL, '2020-03-11 00:08:46', '2020-03-11 00:08:46', NULL, NULL),
	(10, 'Nuevo', NULL, 'equipos/nuevo', NULL, '2020-03-11 00:08:46', '2020-03-11 00:08:46', NULL, NULL),
	(11, 'Tareas', NULL, 'equipos/tareas', NULL, '2020-03-11 00:08:46', '2020-03-11 00:08:46', NULL, NULL),
	(12, 'Ver', NULL, 'tareas', NULL, '2020-03-11 00:08:46', '2020-03-11 00:08:46', NULL, NULL),
	(13, 'Nueva', NULL, 'tareas/nueva', NULL, '2020-03-11 00:08:46', '2020-03-11 00:08:46', NULL, NULL),
	(14, 'Subtareas', NULL, 'tareas/subtareas', NULL, '2020-03-11 00:08:46', '2020-03-11 00:08:46', NULL, NULL);
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.menu_grupos: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `menu_grupos` DISABLE KEYS */;
INSERT INTO `menu_grupos` (`id`, `titulo`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
	(1, '', '2020-03-10 21:46:41', '2020-03-10 21:46:41', NULL),
	(3, 'Principal', '2020-03-10 22:28:31', '2020-03-10 22:28:31', NULL);
/*!40000 ALTER TABLE `menu_grupos` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.menu_submenus: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `menu_submenus` DISABLE KEYS */;
INSERT INTO `menu_submenus` (`createdAt`, `updatedAt`, `menu`, `submenu`) VALUES
	('2020-03-10 22:28:31', '2020-03-10 22:28:31', 3, 4),
	('2020-03-10 22:28:31', '2020-03-10 22:28:31', 3, 5),
	('2020-03-10 22:28:31', '2020-03-10 22:28:31', 3, 6),
	('2020-03-11 00:08:46', '2020-03-11 00:08:46', 7, 9),
	('2020-03-11 00:08:46', '2020-03-11 00:08:46', 7, 10),
	('2020-03-11 00:08:46', '2020-03-11 00:08:46', 7, 11),
	('2020-03-11 00:08:46', '2020-03-11 00:08:46', 8, 12),
	('2020-03-11 00:08:46', '2020-03-11 00:08:46', 8, 13),
	('2020-03-11 00:08:46', '2020-03-11 00:08:46', 8, 14);
/*!40000 ALTER TABLE `menu_submenus` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.modelos: ~16 rows (aproximadamente)
/*!40000 ALTER TABLE `modelos` DISABLE KEYS */;
INSERT INTO `modelos` (`id`, `modelo`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
	(1, 'equipos', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(2, 'equpos_usuarios', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(3, 'estados', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(4, 'estados_proyectos', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(5, 'estados_tareas', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(6, 'menu_grupos', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(7, 'menus', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(8, 'menu_submenu', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(9, 'modelos', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(10, 'permisos', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(11, 'proyectos', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(12, 'roles', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(13, 'roles_menus', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(14, 'tareas', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(15, 'tareas_subtareas', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL),
	(16, 'usuarios', '2020-03-10 04:32:05', '2020-03-10 04:32:05', NULL);
/*!40000 ALTER TABLE `modelos` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.permisos: ~56 rows (aproximadamente)
/*!40000 ALTER TABLE `permisos` DISABLE KEYS */;
INSERT INTO `permisos` (`id`, `nivel`, `rol`, `modelo`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
	(1, 31, 1, 1, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(2, 31, 1, 2, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(3, 31, 1, 3, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(4, 31, 1, 4, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(5, 31, 1, 5, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(6, 31, 1, 6, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(7, 31, 1, 7, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(8, 31, 1, 8, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(9, 31, 1, 9, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(10, 31, 1, 10, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(11, 31, 1, 11, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(12, 31, 1, 12, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(13, 31, 1, 13, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(14, 31, 1, 14, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(15, 31, 1, 15, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(16, 31, 1, 16, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(17, 31, 2, 1, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(18, 31, 2, 2, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(19, 23, 2, 3, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(20, 23, 2, 4, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(21, 23, 2, 5, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(22, 23, 2, 6, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(23, 23, 2, 7, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(24, 23, 2, 8, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(25, 1, 2, 9, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(26, 1, 2, 10, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(27, 31, 2, 11, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(28, 17, 2, 12, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(29, 17, 2, 13, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(30, 31, 2, 14, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(31, 31, 2, 15, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(32, 31, 2, 16, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(33, 23, 3, 1, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(34, 23, 3, 2, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(35, 21, 3, 4, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(36, 21, 3, 5, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(37, 31, 3, 11, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(38, 31, 3, 14, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(39, 31, 3, 15, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(40, 31, 3, 16, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(41, 3, 4, 1, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(42, 7, 4, 2, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(43, 5, 4, 4, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(44, 5, 4, 5, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(45, 7, 4, 11, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(46, 15, 4, 14, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(47, 15, 4, 15, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(48, 15, 4, 16, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(49, 1, 5, 1, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(50, 1, 5, 2, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(51, 5, 5, 4, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(52, 5, 5, 5, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(53, 1, 5, 11, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(54, 15, 5, 14, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(55, 15, 5, 15, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL),
	(56, 15, 5, 16, '2020-03-10 04:32:16', '2020-03-10 04:32:16', NULL);
/*!40000 ALTER TABLE `permisos` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.proyectos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `proyectos` DISABLE KEYS */;
/*!40000 ALTER TABLE `proyectos` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.roles: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`, `rol`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
	(1, 'Gerente', '2020-03-10 04:32:11', '2020-03-10 04:32:11', NULL),
	(2, 'Super Administrador', '2020-03-10 04:32:11', '2020-03-10 04:32:11', NULL),
	(3, 'Administrador', '2020-03-10 04:32:11', '2020-03-10 04:32:11', NULL),
	(4, 'Lider de Equipo', '2020-03-10 04:32:11', '2020-03-10 04:32:11', NULL),
	(5, 'Usuario', '2020-03-10 04:32:11', '2020-03-10 04:32:11', NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.roles_menus: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `roles_menus` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles_menus` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.tareas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tareas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tareas` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.tareas_subtareas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tareas_subtareas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tareas_subtareas` ENABLE KEYS */;

-- Volcando datos para la tabla time_machine.usuarios: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `correo`, `imagen`, `password`, `rol`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
	(1, 'Daniel', 'Boggiano', 'coach@danielboggiano.com', NULL, '$2b$10$BbStsCtfE.KiCCpJffHooeSnWmFO.UhfLKz2LZ1ZD/vKzLLPJqkry', 1, '2020-03-10 15:36:54', '2020-03-10 15:36:54', NULL),
	(2, 'Daniel', 'Boggiano', 'dboggiano@samberperu.com', NULL, '$2b$10$u85uFUcuaHVK/KEK4Mz/NudtzVYddfCNmXlk5ySXYi1Jo1P3LuwOK', 5, '2020-03-10 16:10:53', '2020-03-10 16:10:53', NULL),
	(5, 'Daniel', 'Boggiano', 'dboggiano@panacea.com', 'http://138.197.196.196/api/imagenes/18.jpg', '$2b$10$ImmXlW/9sOAJOHMaqA9rAuxyQTwP78xqltAWPRyi4E0ZC7pNG1aH.', 5, '2020-03-10 16:22:03', '2020-03-10 16:22:03', NULL),
	(8, 'Daniel', 'Boggiano', 'dboggiano@panacea.como', 'http://138.197.196.196/api/imagenes/18.jpg', '$2b$10$hVFN2mnfnhwPTBzqFQ8O3Oa643XBL2fO2koWDwe/i95Ro7aLYvh0C', 5, '2020-03-10 16:27:11', '2020-03-10 16:27:11', NULL),
	(11, 'Daniel', 'Boggiano', 'danielboggianos@gmail.com', 'http://138.197.196.196/api/imagenes/18.jpg', '$2b$10$JhM69E2zYuoZTZn9Qtn4VeEhVUR.dqhMfyNFzGSXXl8xLKtcbdbuO', 5, '2020-03-10 18:38:31', '2020-03-10 18:38:31', NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
