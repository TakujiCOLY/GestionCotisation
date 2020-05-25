package org.sid.cotisation.dao;

import org.sid.cotisation.entities.Categorie;
import org.sid.cotisation.entities.CotisationAnnuelle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource
public interface CotisationAnnuelleRepository extends JpaRepository<CotisationAnnuelle, Integer> {
    @RestResource(path = "/tri")
    public List<CotisationAnnuelle> findByOrderByAnneeDesc();

    @RestResource(path = "/byAnneeCategoriePromoteur")
    public List<CotisationAnnuelle> findByAnneeContainsAndCategorieNomContainsAndPromoteurCotisationNomContainsOrderByAnneeDesc(@Param("annee") String annee, @Param("categorie") String categorie, @Param("promoteur") String promoteur);
}
