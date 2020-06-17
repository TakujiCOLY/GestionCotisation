package org.sid.cotisation.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HistoCotisationAnnuelles implements Serializable {
    private String annee;
    private String nom;
    private int montant;
    private int montantCotise;
}
