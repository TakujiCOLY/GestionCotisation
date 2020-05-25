package org.sid.cotisation.dao;

import org.sid.cotisation.entities.Categorie;
import org.sid.cotisation.entities.Departement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource
public interface DepartementRepository extends JpaRepository<Departement, Integer> {
    @RestResource(path = "/tri")
    public List<Departement> findByOrderByNom();

    @RestResource(path = "/byRegion")
    public List<Departement> findByNomContainsAndRegionNomContainsOrderByNom(@Param("nom") String nom, @Param("region") String region);
}
