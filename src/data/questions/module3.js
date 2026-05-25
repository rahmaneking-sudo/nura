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
      questionWo: 'Ñata xar lañu digle ci ngéntewu gune gu goor ci lawu maalik ?',
      options: [
        { texte: 'Un seul mouton, comme pour la fille', texteWo: 'Benn xar rekk, ni jigeen ji', correct: true },
        { texte: 'Deux moutons', texteWo: 'Ñaari xar', correct: false },
        { texte: 'Un veau', texteWo: 'Benn seel', correct: false },
        { texte: 'Aucun sacrifice n\'est recommandé', texteWo: 'Diglewuñu am xar', correct: false },
      ],
      source: 'Muwatta de l\'Imam Malik',
      explication: 'C\'est une particularité très célèbre de l\'école malékite : l\'imam Malik recommande un seul mouton pour le garçon et un seul pour la fille. Les autres écoles recommandent deux moutons pour le garçon.',
      explicationWo: 'Lii mbir mu siiw la ci lawu maalik: imam Malik dafa digle benn xar ci goor gi ak benn ci jigeen ji. Yeneen law yi dañuy digle ñaari xar ci goor gi.',
    },
    {
      id: 'm3c1',
      type: 'compatibilite',
      categorie: 'Education',
      question: 'Comment vois-tu l\'éducation islamique des enfants aujourd\'hui ?',
      questionWo: 'Naka nga gise yarug diine ci xale yi tey jii ?',
      options: [
        { texte: 'L\'apprentissage du Coran et des valeurs est la priorité absolue', texteWo: 'Jàng Alxuraan ak jikko yu rafet mooy li gëna am solo', poids: 3 },
        { texte: 'Un bon équilibre entre l\'école et la religion', texteWo: 'Yamale ekool bu bees bi ak diine ji', poids: 2 },
        { texte: 'Ils apprendront la religion quand ils seront plus grands', texteWo: 'Dañuy jàng diine suñu maggee', poids: 1 },
        { texte: 'L\'école moderne est la seule vraie priorité', texteWo: 'Ekool bu bees bi rekk moo am solo', poids: 0 },
      ],
      source: 'Hadith : "Chacun de vous est un berger..."',
      explication: 'L\'éducation religieuse des enfants est une responsabilité première des parents devant Allah.',
      explicationWo: 'Yarug diine ci xale yi mooy sàs bu jëkk bi Yàlla teg wajur yi.',
    }
  ]
}
