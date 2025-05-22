import { Employe } from "./Employe.js";

export class Directeur extends Employe {
    calculPrime() {
        const primeAnnuelle = this.salaire * 0.07 //12.5
        const primeAnciennete = this.salaire * 0.03 * this.calculAnciennete() //150
        const primeTotale = primeAnnuelle + primeAnciennete
        return primeTotale
    }
}