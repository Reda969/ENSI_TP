/*4. Ecrire un programme en javascript en mode console, qui contient plusieurs fonctions concernant
les opérations sur les matrices du même taille n*n, exemple « Addition, soustraction, multiplication
, transposé, etc. ».*/

// Génère une matrice n×n avec des nombres aléatoires entre 0 et 9
function genererMatrice(n) {
    const matrice = [];
    for (let i = 0; i < n; i++) {
        matrice[i] = [];
        for (let j = 0; j < n; j++) {
            matrice[i][j] = Math.floor(Math.random() * 10);
        }
    }
    return matrice;
}

// Affiche une matrice dans la console
function afficherMatrice(matrice) {
    console.log(matrice.map(ligne => ligne.join('\t')).join('\n'));
}

// Addition de deux matrices
function additionMatrices(m1, m2) {
    const n = m1.length;
    const resultat = [];
    for (let i = 0; i < n; i++) {
        resultat[i] = [];
        for (let j = 0; j < n; j++) {
            resultat[i][j] = m1[i][j] + m2[i][j];
        }
    }
    return resultat;
}

// Soustraction de deux matrices
function soustractionMatrices(m1, m2) {
    const n = m1.length;
    const resultat = [];
    for (let i = 0; i < n; i++) {
        resultat[i] = [];
        for (let j = 0; j < n; j++) {
            resultat[i][j] = m1[i][j] - m2[i][j];
        }
    }
    return resultat;
}

// Multiplication de deux matrices
function multiplicationMatrices(m1, m2) {
    const n = m1.length;
    const resultat = [];
    for (let i = 0; i < n; i++) {
        resultat[i] = [];
        for (let j = 0; j < n; j++) {
            let somme = 0;
            for (let k = 0; k < n; k++) {
                somme += m1[i][k] * m2[k][j];
            }
            resultat[i][j] = somme;
        }
    }
    return resultat;
}

// Transposée d'une matrice
function transposeeMatrice(m) {
    const n = m.length;
    const resultat = [];
    for (let i = 0; i < n; i++) {
        resultat[i] = [];
        for (let j = 0; j < n; j++) {
            resultat[i][j] = m[j][i];
        }
    }
    return resultat;
}

// Programme principal
const n = parseInt(prompt("Entrez la taille des matrices (n x n) :"), 10);
if (isNaN(n) || n <= 0) {
    console.log("Veuillez entrer un entier positif valide.");
} else {
    const matriceA = genererMatrice(n);
    const matriceB = genererMatrice(n);

    console.log("Matrice A:");
    afficherMatrice(matriceA);
    
    console.log("\nMatrice B:");
    afficherMatrice(matriceB);

    console.log("\nAddition A + B:");
    afficherMatrice(additionMatrices(matriceA, matriceB));

    console.log("\nSoustraction A - B:");
    afficherMatrice(soustractionMatrices(matriceA, matriceB));

    console.log("\nMultiplication A × B:");
    afficherMatrice(multiplicationMatrices(matriceA, matriceB));

    console.log("\nTransposée de A:");
    afficherMatrice(transposeeMatrice(matriceA));
}
