/*1. Ecrire une fonction javascript qui affiche la table de multiplication d’une valeur donnée en
paramètre. Avant l’appel `a la fonction la valeur doit être saisie par l’intermédiaire d’une fenêtre de
dialogue.*/
            
function afficherTable(nombre) {
    let resultat = `Table de multiplication de ${nombre}:\n`;
    for (let i = 1; i <= 10; i++) {
        resultat += `${i} x ${nombre} = ${i * nombre}\n`;
    }
    return resultat;
}

let nombre = Number(prompt("Entrez un nombre pour afficher sa table de multiplication :"));
if (isNaN(nombre)) {
    alert("Veuillez entrer un nombre valide.");
} else {
    alert(afficherTable(nombre));
}
