
// Question 1: Qu'est-ce qu'un objet en JavaScript ?
/*
Un objet en JavaScript est une collection de propriétés, 
où chaque propriété est une association entre un nom (clé) et une valeur.
*/

// Question 2: Quelle est la différence entre la notation par point 
//et la notation par crochets pour accéder aux propriétés d'un objet ?
/*
La notation par point est utilisée pour accéder à une propriété dont le nom est une chaîne de caractères valide.
La notation par crochets est utilisée pour accéder à une propriété avec un nom dynamique, 
une chaîne avec des espaces, ou des caractères spéciaux.
*/

// Exemple:
let personne = { nom: "Diallo", age: 30 };
console.log(personne.nom); // Accès avec notation par point
console.log(personne["age"]); // Accès avec notation par crochets

// Question 3: Comment parcourez-vous les propriétés d'un objet en JavaScript ?
/*
Vous pouvez parcourir les propriétés d'un objet en utilisant une boucle for...in.
*/

// Exemple:
for (let propriete in personne) {
    console.log(propriete + ": " + personne[propriete]);
}

// Question 4: Quelle est la différence entre un objet et un tableau en JavaScript ?
/*
Un objet est une collection de propriétés non ordonnées, accessibles par des clés (noms de propriétés).
Un tableau est une collection ordonnée d'éléments, accessible par des indices numériques.
*/

// Question 5: Écrivez une fonction JavaScript pour convertir un objet en une liste de paires [clé, valeur].
function objetEnPaires(obj) {
    return Object.entries(obj);
}

// Exemple:
console.log(objetEnPaires(personne)); // Affiche [['nom', 'Alice'], ['age', 30]]

// Question 6: Écrivez une fonction qui prend un objet représentant une personne et retourne son nom complet.
function nomComplet(person) {
    return person.prenom + " " + person.nom;
}

// Exemple:
let person = { prenom: "Souleymane", nom: "Diallo" };
console.log(nomComplet(person)); // Affiche "Souleymane Diallo"

// Question 7: Créez un objet avec vos détails personnels. Imprimez maintenant toutes les clés de l'objet dans l'ordre croissant.
let detailsPersonnels = { nom: "Diallo", prenom: "Souleymane", age: 25, ville: "Conakry" };
let clesTriees = Object.keys(detailsPersonnels).sort();
console.log(clesTriees); // Affiche les clés dans l'ordre croissant: ['age', 'nom', 'prenom', 'ville']

// Question 8: Créez un objet avec vos détails personnels. Filtrez maintenant toutes les valeurs de l'objet et affichez-les dans l'ordre décroissant.
let valeursTriees = Object.values(detailsPersonnels).sort().reverse();
console.log(valeursTriees); // Affiche les valeurs dans l'ordre décroissant

// Question 9: Créez un objet pour contenir des informations sur votre recette préférée.
// Il doit avoir des propriétés pour le titre (une chaîne de caractères), les portions (un nombre) et les ingrédients (un tableau de chaînes de caractères).
let recette = {
    titre: "Mole",
    portions: 2,
    ingredients: ["cannelle", "cumin", "cacao"]
};

// Afficher les informations de la recette
console.log(recette.titre); // Affiche "Mole"
console.log("Portions : " + recette.portions); // Affiche "Portions : 2"
console.log("Ingrédients :"); // Affiche "Ingrédients :"
recette.ingredients.forEach(ingredient => console.log(ingredient)); // Affiche chaque ingrédient sur une ligne séparée

// Question 10: Créez une fonction JavaScript à l'intérieur d'un objet qui trouve le maximum de 3 nombres.
let calculs = {
    trouverMax: function(a, b, c) {
        return Math.max(a, b, c);
    }
};

// Appeler la fonction et imprimer le nombre maximum
console.log(calculs.trouverMax(10, 20, 5)); // Affiche 20
