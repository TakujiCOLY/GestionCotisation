package org.sid.cotisation.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class CotisationAnnuelle implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String libelle;
    private String annee;
    private int montant;
    private Boolean donMateriel;
    @ManyToOne
    private Categorie categorie;
    @OneToMany(mappedBy = "cotisationAnnuelle")
    private Collection<Cotisation> cotisations;
    @ManyToOne
    private PromoteurCotisation promoteurCotisation;
}
