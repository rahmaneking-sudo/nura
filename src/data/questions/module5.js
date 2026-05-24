export const module5 = {
  id: 'module5',
  titre: 'Coran et Sunna',
  description: 'La place du Coran et de la tradition dans le couple',
  questions: [
    {
      id: 'm5q1',
      type: 'connaissance',
      categorie: 'La Sunna',
      question: 'Lequel de ces recueils est le plus ancien et la base de l\'école malékite ?',
      options: [
        { texte: 'Sahih Al-Boukhari', correct: false },
        { texte: 'Sahih Muslim', correct: false },
        { texte: 'Al-Muwatta', correct: true },
        { texte: 'Sunan Abu Dawud', correct: false },
      ],
      source: 'Histoire du Fiqh Islamique',
      explication: 'Al-Muwatta a été compilé par l\'Imam Malik ibn Anas à Médine bien avant Al-Boukhari et Muslim. C\'est le recueil fondateur de notre école juridique.',
    },
    {
      id: 'm5c1',
      type: 'compatibilite',
      categorie: 'Lecture',
      question: 'À quelle fréquence lisez-vous le Coran ?',
      options: [
        { texte: 'Chaque jour', poids: 3 },
        { texte: 'Quelques fois par semaine', poids: 2 },
        { texte: 'Seulement pendant le Ramadan', poids: 1 },
        { texte: 'Très rarement', poids: 0 },
      ],
      source: 'Sunna',
      explication: 'Le Coran apporte la bénédiction (Baraka) dans la maison et éloigne les mauvaises ondes et les démons.',
    }
  ]
}
