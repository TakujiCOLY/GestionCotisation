package org.sid.cotisation.dao;

import org.sid.cotisation.entities.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource
public interface CategorieRepository extends JpaRepository<Categorie, Integer> {
    @RestResource(path = "/byNom")
    public List<Categorie> findByNomContains(@Param("nom") String nom);

    @RestResource(path = "/tri")
    public List<Categorie> findByOrderByNomDesc();
}
