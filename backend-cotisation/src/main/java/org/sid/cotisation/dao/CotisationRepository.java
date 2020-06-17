package org.sid.cotisation.dao;

import org.sid.cotisation.entities.Cotisation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource
public interface CotisationRepository extends JpaRepository<Cotisation, Long> {
    @RestResource(path = "/byMembre")
    List<Cotisation> findByMembreIdOrderByDateCotisationDesc(@Param("membre") Long id);
}
