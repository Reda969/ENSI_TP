/*2. Ecrire une fonction javascript qui calcule le plus grand commun diviseur (PGCD) de deux
entiers, les deux entiers doivent être saisie par l’utilisateur (Utiliser les promptes).*/

function pgcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let nombre1 = Number(prompt("Entrez le premier entier :"));
let nombre2 = Number(prompt("Entrez le deuxième entier :"));

if (isNaN(nombre1) || isNaN(nombre2) || !Number.isInteger(nombre1) || !Number.isInteger(nombre2)) {
    alert("Veuillez entrer deux entiers valides.");
} else {
    let resultat = pgcd(nombre1, nombre2);
    alert(`Le PGCD de ${nombre1} et ${nombre2} est ${resultat}.`);
}
