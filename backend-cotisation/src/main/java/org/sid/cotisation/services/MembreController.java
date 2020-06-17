package org.sid.cotisation.services;

import org.sid.cotisation.dao.CotisationAnnuelleRepository;
import org.sid.cotisation.dao.MembreRepository;
import org.sid.cotisation.entities.CotisationAnnuelle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api/membres/search")
public class MembreController {
    @Autowired
    private MembreRepository membreRepository;
    @Autowired
    private CotisationAnnuelleRepository cotisationAnnuelleRepository;

    @RequestMapping(value = "/anneeAdhesions", method = RequestMethod.GET)
    public List<String> findDistinctAnneeAdhesion() {
        return membreRepository.findDistinctAnneeAdhesion();
    }

    @RequestMapping(value = "/histoCotAnnuelles/{membre_id}", method = RequestMethod.GET)
    public List<Object> findHistoCotAnnuelles(@PathVariable Long membre_id) {
        return cotisationAnnuelleRepository.chercher(membre_id);
    }
}
