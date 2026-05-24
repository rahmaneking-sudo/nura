export const module4 = {
  id: 'module4',
  titre: 'Finances',
  description: 'Nafaqa, Zakat et indépendance financière',
  questions: [
    {
      id: 'm4q1',
      type: 'connaissance',
      categorie: 'La Nafaqa',
      question: 'Qui a l\'obligation légale de subvenir aux besoins financiers du foyer (Nafaqa) ?',
      options: [
        { texte: 'Le mari exclusivement', correct: true },
        { texte: 'Les deux partenaires à 50/50', correct: false },
        { texte: 'Celui qui gagne le plus', correct: false },
        { texte: 'L\'état', correct: false },
      ],
      source: 'Sourate An-Nisa 4:34',
      explication: 'L\'islam rend le mari entièrement responsable de la pension alimentaire (Nafaqa) du foyer, même si la femme est plus riche que lui. C\'est ce qui justifie en partie la Qawwama.',
    },
    {
      id: 'm4c1',
      type: 'compatibilite',
      categorie: 'Gestion budgétaire',
      question: 'Si la femme travaille et gagne sa vie, comment participe-t-elle aux frais ?',
      options: [
        { texte: 'Son argent lui appartient, sa participation est une Sadaqa', poids: 3 },
        { texte: 'Elle participe aux frais secondaires', poids: 2 },
        { texte: 'Elle doit payer 50% de tout', poids: 1 },
        { texte: 'Elle paie toutes les dépenses de la maison', poids: 0 },
      ],
      source: 'Fiqh Maliki',
      explication: 'La femme n\'est pas obligée de dépenser son propre argent pour le foyer. Toute participation de sa part est considérée comme une aumône (Sadaqa) récompensée par Allah.',
    }
  ]
}
