import { Categorie } from './categorie';
import { RegionP } from './regionP';

export class MembreP {
    id: number;
    nom: string;
    prenom: string;
    dateNaissance: string;
    anneeAdhesion: string;
    profession: string;
    telephone: string;
    mail: string;
    lieuResidence: string;
    quartierOrigine: string;
    concession: string;
    categorie: Categorie;
    region: RegionP;
}