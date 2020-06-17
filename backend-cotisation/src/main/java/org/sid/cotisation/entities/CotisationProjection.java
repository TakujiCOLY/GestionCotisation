package org.sid.cotisation.entities;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;

@Projection(name = "Ct", types = Cotisation.class)
public interface CotisationProjection {
    public Long getId();
    public int getMontant();
    public String getDetailDonMateriel();
    public Date getDateCotisation();
    public CotisationAnnuelleProjection getCotisationAnnuelle();
}
