import { CotisationAnnuelleP } from './cotisationAnnuelleP';

export class CotisationP {
    id: number;
    montant: number;
    detailDonMateriel: String;
    dateCotisation: Date;
    cotisationAnnuelle: CotisationAnnuelleP;
    membreId: number; 
}