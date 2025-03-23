/*5. Ecrire une fonction javascript pour convertir un nombre décimal en binaire en utilisant la
récursivité.*/

function decimalEnBinaire(n) {
    n = Math.abs(n); // Gère les nombres négatifs
    if (n === 0) return '0';
    if (n === 1) return '1';
    return decimalEnBinaire(Math.floor(n / 2)) + (n % 2).toString();
}

// Saisie et validation
let nombre = Number(prompt("Entrez un nombre décimal :"));
if (isNaN(nombre) || !Number.isInteger(nombre)) {
    alert("Veuillez entrer un entier valide.");
} else {
    alert(`Le binaire de ${nombre} est ${decimalEnBinaire(nombre)}.`);
}

