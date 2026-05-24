export const module6 = {
  id: 'module6',
  titre: 'Droits et Devoirs',
  description: 'Équilibre, Shura conjugale et intimité',
  questions: [
    {
      id: 'm6q1',
      type: 'connaissance',
      categorie: 'Shura',
      question: 'Qu\'est-ce que la "Shura" dans le contexte conjugal ?',
      options: [
        { texte: 'La concertation mutuelle avant de prendre une décision', correct: true },
        { texte: 'Le silence de la femme', correct: false },
        { texte: 'La dictature de l\'homme', correct: false },
        { texte: 'La prière de la nuit', correct: false },
      ],
      source: 'Sourate Al-Baqarah 2:233',
      explication: 'L\'islam demande au couple de se concerter (Tashawur/Shura) pour les décisions importantes, comme le sevrage de l\'enfant. Le chef de famille tranche après avoir consulté.',
    },
    {
      id: 'm6c1',
      type: 'compatibilite',
      categorie: 'Gestion des conflits',
      question: 'En cas de grave dispute, comment réagissez-vous ?',
      options: [
        { texte: 'On discute calmement en se rappelant Allah', poids: 3 },
        { texte: 'On demande l\'arbitrage d\'une personne sage', poids: 2 },
        { texte: 'Je boude et j\'attends', poids: 1 },
        { texte: 'Je crie plus fort pour avoir raison', poids: 0 },
      ],
      source: 'Sourate An-Nisa 4:35',
      explication: 'Le Coran préconise l\'envoi d\'un arbitre de la famille de l\'homme et un de la famille de la femme si la réconciliation est difficile.',
    }
  ]
}
