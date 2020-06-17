package org.sid.cotisation.dao;

import org.sid.cotisation.entities.Membre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource
public interface MembreRepository extends JpaRepository<Membre, Long> {
    @RestResource(path = "tri")
    public List<Membre> findByOrderByNom();

    @RestResource(path = "/byName")
    public List<Membre> findByNomContainsAndPrenomContainsAndCategorieNomContainsAndAnneeAdhesionContainsAndRegionPaysNomContainsAndRegionNomContains(@Param("nom") String nom, @Param("prenom") String prenom, @Param("categorie") String categorie, @Param("anneeAdhesion") String annee, @Param("pays") String pays, @Param("region") String region);

    @Query("select distinct m.anneeAdhesion from Membre m")
    public List<String> findDistinctAnneeAdhesion();
}
