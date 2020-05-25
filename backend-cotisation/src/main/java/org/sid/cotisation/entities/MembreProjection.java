package org.sid.cotisation.entities;

import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

@Projection(name = "M", types = Membre.class)
public interface MembreProjection {
    public int getId();
    public String getNom();
    public String getPrenom();
    public String getDateNaissance();
    public String getAnneeAdhesion();
    public String getProfession();
    public String getTelephone();
    public String getMail();
    public String getLieuResidence();
    public Categorie getCategorie();
    public List<AdresseProjection> getAdresses();
}
