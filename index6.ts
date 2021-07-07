// destructuration of object

const voiture = {
  marque: "Audi",
  modele: "A1",
  prix: 2100,
};

const { modele, prix, marque } = voiture;
console.table({ marque, modele, prix });

const { prixVoiture, modeleVoiture } = {
  prixVoiture: voiture.prix,
  modeleVoiture: voiture.modele,
};
console.table({ prixVoiture, modeleVoiture });

const [fruit1, fruit2] = ["Pomme", "Banane", "Pêche"];
console.table([fruit1, fruit2]);

// affecter une valeur par default aux variables

// objet
const { titre, datDeSortie = new Date() } = {
  titre: "Mon oncle Charlie",
};
console.table([titre, datDeSortie.toLocaleString()]);

// tableau
const [titre1, chapitre1 = "Chapitre 1"] = [
  "Apprendre le Typescript",
  "Le premier chapitre",
];
console.table([titre1, chapitre1]);

// donner un alias aux variables
const { codeArticle: code } = { codeArticle: "1234" };
console.log(code);

// ignorer des valeurs (tableau)
const [, , nom1] = ["Pierre", "Paul", "Jacques"]; // => 1 virgule : on ignore le 1er, 2: on ignore the 2 first
console.log(nom1);

// structure complexe

// objet

const {
  utilisateur: {
    role: { roleId, roleName },
  },
} = {
  utilisateur: {
    role: {
      roleId: 2,
      roleName: "Administrateur",
    },
  },
};
console.table([roleId, roleName]);

const [[userName1], userName2] = [["Pedri"], "Dani"];
console.table([userName1, userName2]);

// inverser avec de nouvelles données
let name1 = "Pierre";
let name2 = "Camille";

[name1, name2] = [name2, name1];
console.table([name1, name2]);
