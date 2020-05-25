package org.sid.cotisation.services;

import org.sid.cotisation.dao.MembreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
public class MembreController {
    @Autowired
    private MembreRepository membreRepository;
}
