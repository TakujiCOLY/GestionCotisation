import { Categorie } from './categorie';
import { PromoteurCotisation } from './promoteurCotisation';

export class CotisationAnnuelleP {
    id: number;
    libelle: String;
    annee: String;
    montant: number;
    donMateriel: Boolean;
    categorie: Categorie;
    promoteurCotisation: PromoteurCotisation;
}