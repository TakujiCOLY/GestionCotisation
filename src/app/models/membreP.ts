import { Categorie } from './categorie';
import { AdresseP } from './adresseP';
import { CotisationP } from './cotisationP';

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
    categorie: Categorie;
    adresses: AdresseP[];
}