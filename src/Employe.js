export class Employe {
    constructor(nom, prenom, dateEmbauche, poste, salaire, service) {
        this.nom = nom
        this.prenom = prenom
        this.dateEmbauche = dateEmbauche
        this.poste = poste
        this.salaire = salaire
        this.service = service  
    }

    calculAnciennete() {
        //Au plus simple, diff entre aujourd'hui et l'embauche
        const today = new Date().getFullYear()
        const embauche = new Date(this.dateEmbauche).getFullYear()
        const anciennete = today - embauche
        return anciennete
    }

    calculPrime() {
        const primeAnnuelle = this.salaire * 0.05 //12.5
        const primeAnciennete = this.salaire * 0.02 * this.calculAnciennete() //150
        const primeTotale = primeAnnuelle + primeAnciennete
        return primeTotale
    }

    verserPrime() {
        //elle doit être versée le 30/11 de chaque année
        const today = new Date();
        const month = today.getMonth() //attention ça commence à 0
        const day = today.getDate()
        if(month === 10 && day === 30){
            console.log("Verser la prime d'un montant de " + this.calculPrime() +"k € pour Mr " + this.nom)
        }
    }

}

