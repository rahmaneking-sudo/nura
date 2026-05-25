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
      questionWo: 'Ci Sénégal, lan lañuy màggal ci "Gàmmu" gi (Mawlid) ?',
      options: [
        { texte: 'Le départ en exil', texteWo: 'Gàdday gi', correct: false },
        { texte: 'La naissance du Prophète Mouhammad (PSL)', texteWo: 'Juddug Yónnent bi (PSL)', correct: true },
        { texte: 'La fin du Ramadan', texteWo: 'Korite gi', correct: false },
        { texte: 'L\'Achoura', texteWo: 'Tamxarit gi', correct: false },
      ],
      source: 'Tradition Islamique Sénégalaise',
      explication: 'Le Gamou est la célébration nocturne (Chants, Zikr, Rappels) de la naissance du Prophète (PSL). Il a été fortement vulgarisé par Seydi El Hadji Malick Sy.',
      explicationWo: 'Gàmmu mooy guddi gi ñuy màggal juddug Yónnent bi (PSL) ak yéte ak njàng. Seydi El Hadji Malick Sy moo ko yaatal ci Sénégal.',
    },
    {
      id: 'm7c1',
      type: 'compatibilite',
      categorie: 'Affiliation',
      question: 'Quelle place accordes-tu aux confréries religieuses dans la vie de famille ?',
      questionWo: 'Ban taxaway nga jox tariixa yi ci sa mbirum kër ?',
      options: [
        { texte: 'C\'est notre pilier éducatif principal', texteWo: 'Mooy suñu ponk yar bi gëna am solo', poids: 3 },
        { texte: 'On respecte tous les marabouts sans y être très attachés', texteWo: 'Nu ngi naw kilifa yépp te amunu genn gërëm', poids: 2 },
        { texte: 'Chacun gère son affiliation de son côté', texteWo: 'Ku nekk ak sa tariixa, nuy jàmmante', poids: 1 },
        { texte: 'Je n\'y accorde aucune importance', texteWo: 'Sama yoon nekk ci', poids: 0 },
      ],
      source: 'Culture Sénégalaise',
      explication: 'Comprendre l\'attachement de l\'autre à une Tariqa (Mouridiyya, Tijaniyya, Qadiriyya, Layeni) est crucial pour l\'harmonie du foyer au Sénégal.',
      explicationWo: 'Xam ak naw tariixay moroom ma (Mouridiyya, Tijaniyya, Qadiriyya, Layeni) dafa am solo ngir jàmmu kër gi ci Sénégal.',
    }
  ]
}
