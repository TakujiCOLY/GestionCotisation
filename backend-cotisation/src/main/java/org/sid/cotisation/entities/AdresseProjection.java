package org.sid.cotisation.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "Adr", types = Adresse.class)
public interface AdresseProjection {
    public int getId();
    public String getQuartierOrigine();
    public String getConcession();
    public DepartementProjection getDepartement();
}
