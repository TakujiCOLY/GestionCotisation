package org.sid.cotisation.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
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
    private int id;
    private String nom;
    private String prenom;
    private String dateNaissance;
    private String anneeAdhesion;
    private String profession;
    private String telephone;
    private String mail;
    private String lieuResidence;
    @ManyToOne
    private Categorie categorie;
    @OneToMany(mappedBy = "membre")
    private Collection<Cotisation> cotisations;
    @OneToMany(mappedBy = "membre")
    private Collection<Adresse> adresses;
}
