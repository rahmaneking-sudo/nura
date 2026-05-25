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
      questionWo: 'Kan moo am sàs dundal kër gi ci wàllu xaalis ?',
      options: [
        { texte: 'Le mari exclusivement', texteWo: 'Jëkkër ji rekk', correct: true },
        { texte: 'Les deux partenaires à 50/50', texteWo: 'Ñaari way-sëy yi ñoo koo bokk', correct: false },
        { texte: 'Celui qui gagne le plus', texteWo: 'Ki gëna am xaalis', correct: false },
        { texte: 'L\'état', texteWo: 'Ngur gi', correct: false },
      ],
      source: 'Sourate An-Nisa 4:34',
      explication: 'L\'islam rend le mari entièrement responsable de la pension alimentaire (Nafaqa) du foyer, même si la femme est plus riche que lui. C\'est ce qui justifie en partie la Qawwama.',
      explicationWo: 'Lislaam jëkkër ji la sàs dundal gi yépp, doonte jabar ji gën na koo am alal.',
    },
    {
      id: 'm4c1',
      type: 'compatibilite',
      categorie: 'Gestion budgétaire',
      question: 'Si la femme travaille et gagne sa vie, comment participe-t-elle aux frais ?',
      questionWo: 'Su fekkee jigeen ji dafay liggéey di am alal, naka lay jàppee ci kër gi ?',
      options: [
        { texte: 'Son argent lui appartient, sa participation est une Sadaqa', texteWo: 'Alalam moom a ko moom, lu mu ciy def sarax la', poids: 3 },
        { texte: 'Elle participe aux frais secondaires', texteWo: 'Dafay jàpp ci yeneen soxla yi', poids: 2 },
        { texte: 'Elle doit payer 50% de tout', texteWo: 'Dafa war a fey xaaj bu nekk', poids: 1 },
        { texte: 'Elle paie toutes les dépenses de la maison', texteWo: 'Moom mooy fey lépp ci kër gi', poids: 0 },
      ],
      source: 'Fiqh Maliki',
      explication: 'La femme n\'est pas obligée de dépenser son propre argent pour le foyer. Toute participation de sa part est considérée comme une aumône (Sadaqa) récompensée par Allah.',
      explicationWo: 'Jigeen ji warul def alalam ci kër gi. Lu mu ci def, sarax la bu Yàlla di fey.',
    }
  ]
}
