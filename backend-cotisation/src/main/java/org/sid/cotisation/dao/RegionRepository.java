package org.sid.cotisation.dao;

import org.sid.cotisation.entities.Categorie;
import org.sid.cotisation.entities.Region;
import org.sid.cotisation.entities.RegionProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource
public interface RegionRepository extends JpaRepository<Region, Long> {
    @RestResource(path = "/tri")
    public List<Region> findByOrderByNomAsc();

    @RestResource(path = "/byPays")
    public List<Region> findByNomContainsAndPaysNomContainsOrderByNomAsc(@Param("nom") String nom, @Param("pays") String pays);
}
