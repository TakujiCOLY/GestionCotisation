package org.sid.cotisation.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Cotisation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int montant;
    private String detailDonMateriel;
    private Date dateCotisation;
    @ManyToOne
    private Membre membre;
    @ManyToOne
    private CotisationAnnuelle cotisationAnnuelle;
}
