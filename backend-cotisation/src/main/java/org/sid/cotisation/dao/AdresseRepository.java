package org.sid.cotisation.dao;

import org.sid.cotisation.entities.Adresse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource
public interface AdresseRepository extends JpaRepository<Adresse, Integer> {
    @RestResource(path = "/byMembre")
    public List<Adresse> findByMembreId(@Param("membre") int id);
}
