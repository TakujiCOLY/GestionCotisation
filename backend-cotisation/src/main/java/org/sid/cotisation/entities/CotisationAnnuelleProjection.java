package org.sid.cotisation.entities;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "CA", types = CotisationAnnuelle.class)
public interface CotisationAnnuelleProjection {
    public Long getId();
    public String getLibelle();
    public String getAnnee();
    public int getMontant();
    public Boolean getDonMateriel();
    public Categorie getCategorie();
    public PromoteurCotisation getPromoteurCotisation();
}
