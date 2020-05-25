package org.sid.cotisation.dao;

import org.sid.cotisation.entities.Categorie;
import org.sid.cotisation.entities.Pays;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource
public interface PaysRepository extends JpaRepository<Pays, Integer> {
    @RestResource(path = "/byNom")
    public List<Pays> findByNomContains(@Param("nom") String nom);

    @RestResource(path = "/tri")
    public List<Pays> findByOrderByNom();
}
