import { Employe } from './src/Employe.js';
import { Directeur } from './src/Directeur.js';

const employes = [
    {
    "nom": "Wayne",
    "prénom": "Bruce",
    "dateEmbauche": "2010-06-15",
    "fonction": "PDG",
    "salaire": 250000,
    "service": "Direction"
  },
  {
    "nom": "Stark",
    "prénom": "Tony",
    "dateEmbauche": "2008-09-01",
    "fonction": "Ingénieur en chef",
    "salaire": 300000,
    "service": "R&D"
  },
  {
    "nom": "Drummer",
    "prénom": "Camina",
    "dateEmbauche": "2012-03-12",
    "fonction": "Responsable sécurité",
    "salaire": 95000,
    "service": "Sécurité"
  },
  {
    "nom": "Kent",
    "prénom": "Clark",
    "dateEmbauche": "2011-01-10",
    "fonction": "Journaliste",
    "salaire": 85000,
    "service": "Communication"
  },
  {
    "nom": "Parker",
    "prénom": "Peter",
    "dateEmbauche": "2015-09-01",
    "fonction": "Développeur web",
    "salaire": 68000,
    "service": "Informatique"
  }
]

let employe1 = new Directeur("Wayne", "Bruce", '1995-12-01', 'directeur', 250000, 'direction')

let employe2 = new Employe("Stark", "Tony", '1990-05-25', 'ingénieur sénior', 180000, 'R&D')

console.log(employe1)
