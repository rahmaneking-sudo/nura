export const module2 = {
  id: 'module2',
  titre: 'Le Mariage Islamique',
  description: 'Nikah, Wali, Mahr, Consentement et autres conditions de validité',
  questions: [
    {
      id: 'm2q1',
      type: 'connaissance',
      categorie: 'Conditions du mariage',
      question: 'Selon l\'école malékite, quelle est la valeur minimale de la dot (Mahr) pour que le mariage soit valide ?',
      options: [
        { texte: '100 dirhams', correct: false },
        { texte: '3 dirhams d\'argent', correct: true },
        { texte: 'Il n\'y a pas de minimum', correct: false },
        { texte: 'Une bague en fer', correct: false },
      ],
      source: 'Muwatta de l\'Imam Malik — Livre du Mariage',
      explication: 'L\'école malékite fixe un minimum de 3 dirhams d\'argent pur ou 1/4 de dinar d\'or pour que la dot soit valide. Cela garantit une valeur minimale pour sécuriser l\'acte, même si elle est modeste.',
    },
    {
      id: 'm2q2',
      type: 'connaissance',
      categorie: 'Le Tuteur (Wali)',
      question: 'La présence et le consentement du Wali (tuteur) de la mariée sont-ils obligatoires pour la validité du mariage ?',
      options: [
        { texte: 'Seulement pour le premier mariage', correct: false },
        { texte: 'Non, ce n\'est que recommandé', correct: false },
        { texte: 'Oui, aucun mariage n\'est valide sans tuteur', correct: true },
        { texte: 'Seulement si la mariée a moins de 18 ans', correct: false },
      ],
      source: 'Muwatta de l\'Imam Malik — Livre du Mariage',
      explication: 'Selon l\'imam Malik, reprenant le hadith authentique "Pas de mariage sans Wali", le tuteur est une condition de validité stricte du mariage pour la femme, quel que soit son âge ou son statut matrimonial antérieur.',
    },
    {
      id: 'm2c1',
      type: 'compatibilite',
      categorie: 'Vision du Mariage',
      question: 'Quelle est pour toi la principale raison de te marier ?',
      options: [
        { texte: 'Trouver un partenaire de spiritualité pour avancer vers Allah', poids: 3 },
        { texte: 'Bâtir une famille stable et respectée', poids: 2 },
        { texte: 'Ne plus être seul(e) au quotidien', poids: 1 },
        { texte: 'Répondre aux attentes sociales et familiales', poids: 0 },
      ],
      source: 'Sourate Ar-Rum 30:21',
      explication: 'L\'objectif premier du mariage en islam est de trouver la tranquillité (Sakinah), l\'affection (Mawaddah) et la miséricorde (Rahmah) en ayant Allah au centre de la relation.',
    }
  ]
}
