package org.sid.cotisation.services;

import org.sid.cotisation.dao.CotisationAnnuelleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/cotisationAnnuelles/search")
public class VersementController {
    @Autowired
    private CotisationAnnuelleRepository cotisationAnnuelleRepository;

    @GetMapping(value = "/annees")
    public List<String> findDistinctAnnee() {
        return cotisationAnnuelleRepository.findDistinctAnnee();
    }
}
