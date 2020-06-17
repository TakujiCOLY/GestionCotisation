package org.sid.cotisation.dao;

import org.sid.cotisation.entities.Categorie;
import org.sid.cotisation.entities.PromoteurCotisation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource
public interface PromoteurCotisationRepository extends JpaRepository<PromoteurCotisation, Long> {
    @RestResource(path = "/byNom")
    public List<PromoteurCotisation> findByNomContainsAndLieuContainsAndSiegeContainsOrderByNomAsc(@Param("nom") String nom, @Param("lieu") String lieu, @Param("siege") String siege);

    @RestResource(path = "/tri")
    public List<PromoteurCotisation> findByOrderByNomAsc();
}
