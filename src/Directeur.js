import { Employe } from "./Employe.js";

export class Directeur extends Employe { //on fait hériter la classe Directeur des méthodes et propriétés de Employe grâce à "extends". Il s'agit du principe d'héritage
    
    calculPrime() { //on redéfinie la méthode calculPrime, ainsi elle va remplacer celle de sa classe parente
        const primeAnnuelle = this.salaire * 0.07 // on passe de 5% à 7%
        const primeAnciennete = this.salaire * 0.03 * this.calculAnciennete() // de 2% à 3%
        const primeTotale = primeAnnuelle + primeAnciennete
        return primeTotale
    }
}