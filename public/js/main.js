// Exercice 3 

//1 
// let mot = prompt('entrez un mot?');
// let lettre = prompt('entez une lettre ?')

// mot = mot.replace(lettre, "");
// mot = mot.replace(mot.charAt(mot.indexOf(lettre)), "");

//2
// let mot2 = prompt('Entrez un mot?');
// let longMax = mot2.length; 

// let random = Math.round(Math.random() * longMax); 

// mot2 = mot2.replace(mot2.charAt(random), "");

// console.log(mot2);

//3
let prenom = prompt("Entrez votre prénom");
let nom = prompt('Entrez votre nom').toLowerCase();
let age = parseInt(prompt('Entrez votre âge?'));
let taille = prompt('Entre votre taille ? ex:1m78');

// nom MAJUSCULE

// nom = nom.charAt(0).toUpperCase() + nom.substr(1).replace(nom.substr(-1), nom.substr(-1).toUpperCase());
// nom = nom.charAt(0).toUpperCase() + nom.slice(1, -1) + nom.substr(nom.length -1).toUpperCase();
nom = nom.charAt(0).toUpperCase() + nom.substr(1).replace(nom.charAt(nom.length -1), nom.charAt(nom.length -1).toUpperCase() );

// 1er lettre en MAJ + 2 lettres supp en ramdom
let prenomDel = prenom.replace(prenom.charAt(Math.round(Math.random() * prenom.length)), "");
prenomDel = prenomDel.replace(prenomDel.charAt(Math.round(Math.random() * prenomDel.length)), "");
prenomDel = prenomDel.charAt(0).toUpperCase() + prenomDel.substring(1).toLowerCase();

console.log(prenomDel);

// age traduis en mois
let ageMois = age * 12;
console.log(ageMois);

// Convertir taille
let tailleCm = taille.replace('m', '');
console.log(`${tailleCm} cm`);

// Conclusion
let conclusion = `Bonjour ${prenomDel} ${nom}, ton prenom comporte ${prenom.length} lettres, mais malheureusement j'ai eu un petit creux et il te manque ${prenom.length - prenomDel.length} lettres. Tu es agés de ${ageMois} mois, concernant ta taille, elle est de ${tailleCm} cm`
console.log(conclusion);