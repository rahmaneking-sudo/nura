export const module7 = {
  id: 'module7',
  titre: 'Spiritualité Sénégalaise',
  description: 'Confréries, Daaras et événements religieux',
  questions: [
    {
      id: 'm7q1',
      type: 'connaissance',
      categorie: 'Événements',
      question: 'Au Sénégal, que célèbre le "Gamou" (Mawlid) ?',
      options: [
        { texte: 'Le départ en exil', correct: false },
        { texte: 'La naissance du Prophète Mouhammad (PSL)', correct: true },
        { texte: 'La fin du Ramadan', correct: false },
        { texte: 'L\'Achoura', correct: false },
      ],
      source: 'Tradition Islamique Sénégalaise',
      explication: 'Le Gamou est la célébration nocturne (Chants, Zikr, Rappels) de la naissance du Prophète (PSL). Il a été fortement vulgarisé par Seydi El Hadji Malick Sy.',
    },
    {
      id: 'm7c1',
      type: 'compatibilite',
      categorie: 'Affiliation',
      question: 'Quelle place accordes-tu aux confréries religieuses dans la vie de famille ?',
      options: [
        { texte: 'C\'est notre pilier éducatif principal', poids: 3 },
        { texte: 'On respecte tous les marabouts sans y être très attachés', poids: 2 },
        { texte: 'Chacun gère son affiliation de son côté', poids: 1 },
        { texte: 'Je n\'y accorde aucune importance', poids: 0 },
      ],
      source: 'Culture Sénégalaise',
      explication: 'Comprendre l\'attachement de l\'autre à une Tariqa (Mouridiyya, Tijaniyya, Qadiriyya, Layeni) est crucial pour l\'harmonie du foyer au Sénégal.',
    }
  ]
}
