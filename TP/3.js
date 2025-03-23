/*3. Ecrire une fonction pour calculer la somme des chiffres dans un entier donné.
    • Exemple: 12345 → 15*/

function sommeChiffres(nombre) {
    nombre = Math.abs(nombre); // Gère les nombres négatifs
    let somme = 0;
    const chiffres = nombre.toString();
    for (let i = 0; i < chiffres.length; i++) {
        somme += parseInt(chiffres[i], 10);
    }
    return somme;
}

// Saisie de l'entier
let nombre = Number(prompt("Entrez un entier :"));
if (isNaN(nombre) || !Number.isInteger(nombre)) {
    alert("Veuillez entrer un entier valide.");
} else {
    alert(`La somme des chiffres de ${nombre} est ${sommeChiffres(nombre)}.`);
}
