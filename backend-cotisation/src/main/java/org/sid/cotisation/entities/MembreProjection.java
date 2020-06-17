package org.sid.cotisation.entities;

import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

@Projection(name = "M", types = Membre.class)
public interface MembreProjection {
    public Long getId();
    public String getNom();
    public String getPrenom();
    public String getDateNaissance();
    public String getAnneeAdhesion();
    public String getProfession();
    public String getTelephone();
    public String getMail();
    public String getLieuResidence();
	public String getQuartierOrigine();
	public String getConcession();
    public Categorie getCategorie();
    public RegionProjection getRegion();
}
