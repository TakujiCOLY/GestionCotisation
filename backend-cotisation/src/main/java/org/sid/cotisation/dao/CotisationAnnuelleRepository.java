package org.sid.cotisation.dao;

import org.sid.cotisation.entities.CotisationAnnuelle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource
public interface CotisationAnnuelleRepository extends JpaRepository<CotisationAnnuelle, Long> {
    @RestResource(path = "/tri")
    public List<CotisationAnnuelle> findByOrderByAnneeDesc();

    @RestResource(path = "/byAnneeCategoriePromoteur")
    public List<CotisationAnnuelle> findByAnneeContainsAndCategorieNomContainsAndPromoteurCotisationNomContainsOrderByAnneeDesc(@Param("annee") String annee, @Param("categorie") String categorie, @Param("promoteur") String promoteur);

    @RestResource(path = "/byCotisation")
    public List<CotisationAnnuelle> findByAnneeAndCategorieIdAndPromoteurCotisationId(@Param("annee") String annee, @Param("categorie") int id_cat, @Param("promoteur") int id_promo);

    @Query("select distinct c.annee from CotisationAnnuelle c")
    public List<String> findDistinctAnnee();

    @Query("select ca.annee, p.nom, ca.montant, sum(c.montant) as montant_cotise from CotisationAnnuelle ca JOIN PromoteurCotisation p ON ca.promoteurCotisation.id = p.id JOIN Cotisation c ON ca.id = c.cotisationAnnuelle.id where c.membre.id = :membre GROUP BY ca.promoteurCotisation.nom ORDER BY ca.annee")
    public List<Object> chercher(@Param("membre") Long membre_id);
}
