-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mer. 17 juin 2020 à 19:22
-- Version du serveur :  10.1.38-MariaDB
-- Version de PHP :  7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `gestion_cotisation`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id` bigint(8) NOT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id`, `nom`) VALUES
(1, 'travailleur'),
(2, 'retraité'),
(3, 'non travailleur'),
(4, 'étudiant'),
(5, 'élève'),
(6, 'femme'),
(7, 'jhdejdiekdpfkdf'),
(8, 'kffjjofe'),
(9, 'fhfhf'),
(10, 'efknefe');

-- --------------------------------------------------------

--
-- Structure de la table `cotisation`
--

CREATE TABLE `cotisation` (
  `id` bigint(8) NOT NULL,
  `montant` int(11) DEFAULT NULL,
  `detail_don_materiel` varchar(255) DEFAULT NULL,
  `date_cotisation` date DEFAULT NULL,
  `Membre_id` bigint(8) NOT NULL,
  `Cotisation_Annuelle_id` bigint(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `cotisation`
--

INSERT INTO `cotisation` (`id`, `montant`, `detail_don_materiel`, `date_cotisation`, `Membre_id`, `Cotisation_Annuelle_id`) VALUES
(1, 5000, NULL, '2020-05-12', 1, 1),
(2, 5000, NULL, '2020-05-19', 1, 1),
(4, 5000, NULL, '2020-05-18', 1, 3),
(5, 5000, NULL, '2020-05-04', 1, 4),
(6, 2000, NULL, '2020-05-21', 1, 4),
(7, 5000, NULL, '2017-01-10', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `cotisation_annuelle`
--

CREATE TABLE `cotisation_annuelle` (
  `id` bigint(8) NOT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `annee` varchar(255) DEFAULT NULL,
  `montant` int(11) DEFAULT NULL,
  `don_materiel` tinyint(4) DEFAULT NULL,
  `Promoteur_Cotisation_id` bigint(8) NOT NULL,
  `Categorie_id` bigint(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `cotisation_annuelle`
--

INSERT INTO `cotisation_annuelle` (`id`, `libelle`, `annee`, `montant`, `don_materiel`, `Promoteur_Cotisation_id`, `Categorie_id`) VALUES
(1, 'libelle', '2020', 10000, 0, 1, 1),
(2, 'libelle', '2020', 5000, 0, 1, 3),
(3, 'Participation pour la caisse du village', '2020', 5000, 1, 2, 1),
(4, NULL, '2020', 7000, 1, 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `membre`
--

CREATE TABLE `membre` (
  `id` bigint(8) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `date_naissance` date DEFAULT NULL,
  `annee_adhesion` varchar(255) DEFAULT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `lieu_residence` varchar(255) DEFAULT NULL,
  `quartier_origine` varchar(255) DEFAULT NULL,
  `concession` varchar(255) DEFAULT NULL,
  `Categorie_id` bigint(8) NOT NULL,
  `Region_id` bigint(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `membre`
--

INSERT INTO `membre` (`id`, `nom`, `prenom`, `date_naissance`, `annee_adhesion`, `profession`, `telephone`, `mail`, `lieu_residence`, `quartier_origine`, `concession`, `Categorie_id`, `Region_id`) VALUES
(1, 'DIATTA', 'Fabacary', '2018-05-23', '2015', 'BusinessMan', '77 523 35 69', 'fabi@hotmail.fr', 'Keur Mbaye Fall', 'Bourombone', 'Kabel', 1, 1),
(2, 'DIATTA', 'Mouhamed', '2020-06-01', '2010', 'Banquier', '77 545 18 52', 'amethdiatta@hotmail.fr', 'Keur Mbaye Fall', 'Bourombone', 'Kabel', 1, 1),
(3, 'fhoefhefo', 'fjeofeooej', '2020-06-02', '2020', 'dkzdzkd', 'fkpefpe', 'ffkfpefkepk', 'jfoejfoejf', NULL, 'fheihfeifhe', 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE `pays` (
  `id` bigint(8) NOT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pays`
--

INSERT INTO `pays` (`id`, `nom`) VALUES
(1, 'Sénégal'),
(2, 'Gambie'),
(3, 'Guinée');

-- --------------------------------------------------------

--
-- Structure de la table `promoteur_cotisation`
--

CREATE TABLE `promoteur_cotisation` (
  `id` bigint(8) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `lieu` varchar(255) DEFAULT NULL,
  `siege` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `promoteur_cotisation`
--

INSERT INTO `promoteur_cotisation` (`id`, `nom`, `lieu`, `siege`) VALUES
(1, 'Honoro', 'Tendouck', 'Dakar'),
(2, 'Erisiber', 'Tendouck', 'Tendouck'),
(3, 'Cons. Maison', 'Tendouck', 'Tendouck');

-- --------------------------------------------------------

--
-- Structure de la table `region`
--

CREATE TABLE `region` (
  `id` bigint(8) NOT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `Pays_id` bigint(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `region`
--

INSERT INTO `region` (`id`, `nom`, `Pays_id`) VALUES
(1, 'Dakar', 1),
(2, 'Banjul', 2),
(3, 'Kédougou', 1),
(4, 'Sérékunda', 2),
(5, 'Tetete', 1),
(6, 'test', 3);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `cotisation`
--
ALTER TABLE `cotisation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Cotisation_Membre1_idx` (`Membre_id`),
  ADD KEY `fk_Cotisation_Cotisation_Annuelle1_idx` (`Cotisation_Annuelle_id`);

--
-- Index pour la table `cotisation_annuelle`
--
ALTER TABLE `cotisation_annuelle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Cotisation_Annuelle_Promoteur_Cotisation1_idx` (`Promoteur_Cotisation_id`),
  ADD KEY `fk_Cotisation_Annuelle_Categorie1_idx` (`Categorie_id`);

--
-- Index pour la table `membre`
--
ALTER TABLE `membre`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Membre_Categorie1_idx` (`Categorie_id`),
  ADD KEY `fk_Membre_Region1_idx` (`Region_id`);

--
-- Index pour la table `pays`
--
ALTER TABLE `pays`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `promoteur_cotisation`
--
ALTER TABLE `promoteur_cotisation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Region_Pays1_idx` (`Pays_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cotisation`
--
ALTER TABLE `cotisation`
  MODIFY `id` bigint(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `cotisation_annuelle`
--
ALTER TABLE `cotisation_annuelle`
  MODIFY `id` bigint(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `membre`
--
ALTER TABLE `membre`
  MODIFY `id` bigint(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `cotisation`
--
ALTER TABLE `cotisation`
  ADD CONSTRAINT `FKap2xjbq6v0pi5o1fg9qdhrl4o` FOREIGN KEY (`Membre_id`) REFERENCES `membre` (`id`),
  ADD CONSTRAINT `FKiysydo2uxfpoxyvxfdbj37fcw` FOREIGN KEY (`Cotisation_Annuelle_id`) REFERENCES `cotisation_annuelle` (`id`),
  ADD CONSTRAINT `fk_Cotisation_Cotisation_Annuelle1` FOREIGN KEY (`Cotisation_Annuelle_id`) REFERENCES `cotisation_annuelle` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cotisation_Membre1` FOREIGN KEY (`Membre_id`) REFERENCES `membre` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `cotisation_annuelle`
--
ALTER TABLE `cotisation_annuelle`
  ADD CONSTRAINT `FKe1r76j0apvtsogr3acgglsl64` FOREIGN KEY (`Categorie_id`) REFERENCES `categorie` (`id`),
  ADD CONSTRAINT `FKnpg0n6yb64blyd8u6q3wln3n2` FOREIGN KEY (`Promoteur_Cotisation_id`) REFERENCES `promoteur_cotisation` (`id`),
  ADD CONSTRAINT `fk_Cotisation_Annuelle_Categorie1` FOREIGN KEY (`Categorie_id`) REFERENCES `categorie` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cotisation_Annuelle_Promoteur_Cotisation1` FOREIGN KEY (`Promoteur_Cotisation_id`) REFERENCES `promoteur_cotisation` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `membre`
--
ALTER TABLE `membre`
  ADD CONSTRAINT `FKb6cp3teilmw853iqvqbjecqgp` FOREIGN KEY (`Region_id`) REFERENCES `region` (`id`),
  ADD CONSTRAINT `FKmqn9sh4wx4h7cn0ijep5jkoro` FOREIGN KEY (`Categorie_id`) REFERENCES `categorie` (`id`),
  ADD CONSTRAINT `fk_Membre_Categorie1` FOREIGN KEY (`Categorie_id`) REFERENCES `categorie` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Membre_Region1` FOREIGN KEY (`Region_id`) REFERENCES `region` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `region`
--
ALTER TABLE `region`
  ADD CONSTRAINT `FK3ypxrvo06oogq5orufss0bxdt` FOREIGN KEY (`Pays_id`) REFERENCES `pays` (`id`),
  ADD CONSTRAINT `fk_Region_Pays1` FOREIGN KEY (`Pays_id`) REFERENCES `pays` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
