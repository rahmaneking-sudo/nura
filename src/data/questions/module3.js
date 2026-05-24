export const module3 = {
  id: 'module3',
  titre: 'Famille et Enfants',
  description: 'Fitra, Allaitement, Aqiqa et Hadana',
  questions: [
    {
      id: 'm3q1',
      type: 'connaissance',
      categorie: 'La Naissance',
      question: 'Combien de moutons sont recommandés pour la \'Aqiqa (sacrifice de naissance) d\'un garçon selon l\'école malékite ?',
      options: [
        { texte: 'Un seul mouton, comme pour la fille', correct: true },
        { texte: 'Deux moutons', correct: false },
        { texte: 'Un veau', correct: false },
        { texte: 'Aucun sacrifice n\'est recommandé', correct: false },
      ],
      source: 'Muwatta de l\'Imam Malik',
      explication: 'C\'est une particularité très célèbre de l\'école malékite : l\'imam Malik recommande un seul mouton pour le garçon et un seul pour la fille. Les autres écoles recommandent deux moutons pour le garçon.',
    },
    {
      id: 'm3c1',
      type: 'compatibilite',
      categorie: 'Education',
      question: 'Comment vois-tu l\'éducation islamique des enfants aujourd\'hui ?',
      options: [
        { texte: 'L\'apprentissage du Coran et des valeurs est la priorité absolue', poids: 3 },
        { texte: 'Un bon équilibre entre l\'école et la religion', poids: 2 },
        { texte: 'Ils apprendront la religion quand ils seront plus grands', poids: 1 },
        { texte: 'L\'école moderne est la seule vraie priorité', poids: 0 },
      ],
      source: 'Hadith : "Chacun de vous est un berger..."',
      explication: 'L\'éducation religieuse des enfants est une responsabilité première des parents devant Allah.',
    }
  ]
}
