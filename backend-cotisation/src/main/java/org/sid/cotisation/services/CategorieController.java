package org.sid.cotisation.services;

import org.sid.cotisation.dao.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/categories")
public class CategorieController {
    @Autowired
    private CategorieRepository categorieRepository;
}
