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
      questionWo: 'Ban téré hadith moo gëna màgg te doon mbàq ci lawu maalik ?',
      options: [
        { texte: 'Sahih Al-Boukhari', texteWo: 'Sahiih Al-Buxaari', correct: false },
        { texte: 'Sahih Muslim', texteWo: 'Sahiih Muslim', correct: false },
        { texte: 'Al-Muwatta', texteWo: 'Al-Muwatta', correct: true },
        { texte: 'Sunan Abu Dawud', texteWo: 'Sunan Abu Dawud', correct: false },
      ],
      source: 'Histoire du Fiqh Islamique',
      explication: 'Al-Muwatta a été compilé par l\'Imam Malik ibn Anas à Médine bien avant Al-Boukhari et Muslim. C\'est le recueil fondateur de notre école juridique.',
      explicationWo: 'Imam Malik moo bind Muwatta bi ca Madiina lu yàgg laata Buxaari ak Muslim. Mooy téré bi suñu law bi sukkandiku.',
    },
    {
      id: 'm5c1',
      type: 'compatibilite',
      categorie: 'Lecture',
      question: 'À quelle fréquence lisez-vous le Coran ?',
      questionWo: 'Yàgg-yàgg ban ngay jàng Alxuraan ?',
      options: [
        { texte: 'Chaque jour', texteWo: 'Bés bu nekk', poids: 3 },
        { texte: 'Quelques fois par semaine', texteWo: 'Ay yoon ci ayubés bi', poids: 2 },
        { texte: 'Seulement pendant le Ramadan', texteWo: 'Ci weeru koor rekk', poids: 1 },
        { texte: 'Très rarement', texteWo: 'Lék-lék rekk', poids: 0 },
      ],
      source: 'Sunna',
      explication: 'Le Coran apporte la bénédiction (Baraka) dans la maison et éloigne les mauvaises ondes et les démons.',
      explicationWo: 'Alxuraan dafay indi barke ci kër gi, tey dàq saytaane.',
    }
  ]
}
