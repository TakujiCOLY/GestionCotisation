package org.sid.cotisation.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "Rg", types = Region.class)
public interface RegionProjection {
    public Long getId();
    public String getNom();
    public Pays getPays();
}
