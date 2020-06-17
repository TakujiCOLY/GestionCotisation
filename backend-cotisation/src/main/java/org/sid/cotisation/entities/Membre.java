package org.sid.cotisation.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.Date;


@Data
@ToString
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Membre implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    private String dateNaissance;
    private String anneeAdhesion;
    private String profession;
    private String telephone;
    private String mail;
    private String lieuResidence;
    private String quartierOrigine;
    private String concession;
    @ManyToOne
    private Categorie categorie;
    @ManyToOne
    private Region region;
    @OneToMany(mappedBy = "membre")
    private Collection<Cotisation> cotisations;
}
