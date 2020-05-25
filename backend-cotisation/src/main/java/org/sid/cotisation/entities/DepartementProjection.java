package org.sid.cotisation.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "Dpt", types = Departement.class)
public interface DepartementProjection {
    public int getId();
    public String getNom();
    public RegionProjection getRegion();
}
