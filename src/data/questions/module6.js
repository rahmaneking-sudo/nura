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
      questionWo: 'Lan mooy "Shura" ci diggante way-sëy yi ?',
      options: [
        { texte: 'La concertation mutuelle avant de prendre une décision', texteWo: 'Waxtaan ba déggoo laata ñuy jël dogal', correct: true },
        { texte: 'Le silence de la femme', texteWo: 'Noppig jigeen ji', correct: false },
        { texte: 'La dictature de l\'homme', texteWo: 'Nottélug goor gi', correct: false },
        { texte: 'La prière de la nuit', texteWo: 'Julli guddi', correct: false },
      ],
      source: 'Sourate Al-Baqarah 2:233',
      explication: 'L\'islam demande au couple de se concerter (Tashawur/Shura) pour les décisions importantes, comme le sevrage de l\'enfant. Le chef de famille tranche après avoir consulté.',
      explicationWo: 'Lislaam dafa sàkku ci way-sëy yi ñu waxtaan ci mbir yu am solo, niki doggal xale bi. Boroom kër gi mooy dogal su ñu waxtaanee ba noppi.',
    },
    {
      id: 'm6c1',
      type: 'compatibilite',
      categorie: 'Gestion des conflits',
      question: 'En cas de grave dispute, comment réagissez-vous ?',
      questionWo: 'Su amee xuloo bu réy, naka ngay def ?',
      options: [
        { texte: 'On discute calmement en se rappelant Allah', texteWo: 'Nu waxtaan ci dal di fàttaliku Yàlla', poids: 3 },
        { texte: 'On demande l\'arbitrage d\'une personne sage', texteWo: 'Nu woo ku am xel mu waxtaan ak ñun', poids: 2 },
        { texte: 'Je boude et j\'attends', texteWo: 'Dama koy mer di xaar', poids: 1 },
        { texte: 'Je crie plus fort pour avoir raison', texteWo: 'Damay wax ci kaw ngir am dëgg', poids: 0 },
      ],
      source: 'Sourate An-Nisa 4:35',
      explication: 'Le Coran préconise l\'envoi d\'un arbitre de la famille de l\'homme et un de la famille de la femme si la réconciliation est difficile.',
      explicationWo: 'Alxuraan dafa digle ñu jël ab àttekat ci mbokki goor gi ak beneen ci mbokki jigeen ji ngir ñu waxtaan.',
    }
  ]
}
