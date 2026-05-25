export const module9 = {
  id: 'module9',
  titre: 'Les piliers de la prière (Salat)',
  description: 'Piliers, obligations et sunnas de la prière selon l\'école malékite',
  icone: '🕌',
  questions: [

    {
      id: 'm9q1',
      type: 'connaissance',
      categorie: 'Piliers de la prière',
      question: 'Combien y a-t-il de piliers (arkane) de la prière selon l\'école malékite ?',
      options: [
        { texte: '8 piliers', correct: false },
        { texte: '13 piliers', correct: false },
        { texte: '14 piliers', correct: true },
        { texte: '18 piliers', correct: false },
      ],
      source: 'Mudawwana de Sahnun + Risala d\'Ibn Abi Zayd al-Qayrawani',
      explication: 'Les 14 piliers de la prière selon l\'école malékite : 1) Intention (niyyah) 2) Takbirat al-Ihram (Allahu Akbar d\'ouverture) 3) Récitation d\'Al-Fatiha 4) Debout (Qiyam) pour celui qui peut 5) Ruku\' (inclination) 6) Redressement après le Ruku\' 7) Sujud (prosternation) — 2 fois par rakat 8) Relèvement entre les 2 prosternations 9) Tashahud final 10) Position assise pour le Tashahud 11) Salat sur le Prophète ﷺ 12) Salam final 13) Ordre des actes 14) Continuité (Muwalat).',
    },

    {
      id: 'm9q2',
      type: 'connaissance',
      categorie: 'Faraidh de la prière',
      question: 'Qu\'est-ce que la "Takbirat al-Ihram" dans la prière ?',
      options: [
        { texte: 'Le salam de fin de prière', correct: false },
        { texte: 'Le premier "Allahu Akbar" qui ouvre la prière', correct: true },
        { texte: 'Les takbirat supplémentaires dans la prière de l\'Aïd', correct: false },
        { texte: 'Le Takbir entre les prosternations', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la prière',
      explication: 'La Takbirat al-Ihram est le premier "Allahu Akbar" qui ouvre officiellement la prière. C\'est un pilier (rukn) de la prière — sans lui, la prière n\'existe pas. Selon l\'imam Malik, elle doit être prononcée debout, à voix haute par l\'imam, en levant les mains à hauteur des épaules (ou plus bas selon l\'imam Malik — une particularité malékite).',
    },

    {
      id: 'm9q3',
      type: 'connaissance',
      categorie: 'Sunnas de la prière',
      question: 'Selon l\'école malékite, lever les mains au début de la prière (raf\' al-yadayn) est-il ?',
      options: [
        { texte: 'Un pilier obligatoire de la prière', correct: false },
        { texte: 'Une sunna — recommandé mais non obligatoire', correct: true },
        { texte: 'Interdit — innovation blâmable', correct: false },
        { texte: 'Obligatoire uniquement pour l\'imam', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la prière',
      explication: 'Selon l\'imam Malik, le Raf\' al-Yadayn (lever les mains) se fait UNIQUEMENT au début de la prière (Takbirat al-Ihram) — et non à chaque mouvement comme dans l\'école Shafi\'i ou Hanbali. C\'est pourquoi les imams sénégalais ne lèvent les mains qu\'une seule fois. C\'est un trait distinctif du malékisme pratiqué au Sénégal.',
    },

    {
      id: 'm9q4',
      type: 'connaissance',
      categorie: 'Piliers de la prière',
      question: 'Selon l\'école malékite, croiser les mains sur la poitrine pendant la prière est-il ?',
      options: [
        { texte: 'Obligatoire', correct: false },
        { texte: 'Sunna recommandée', correct: false },
        { texte: 'Les mains sont laissées le long du corps selon l\'imam Malik', correct: true },
        { texte: 'Interdit', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la prière',
      explication: 'C\'est l\'une des particularités les plus visibles du malékisme : selon l\'imam Malik, les mains sont LAISSÉES LE LONG DU CORPS pendant la prière (Sadl). On ne les croise pas sur la poitrine comme dans les écoles Hanafi, Shafi\'i et Hanbali. C\'est pourquoi les Sénégalais prient les mains ouvertes — c\'est conforme à l\'imam Malik.',
    },

    {
      id: 'm9q5',
      type: 'connaissance',
      categorie: 'Conditions de la prière',
      question: 'Quelles sont les conditions (shurut) de validité de la prière ?',
      options: [
        { texte: 'Uniquement le Wudu et la direction de La Mecque', correct: false },
        { texte: 'Islam, discernement, purification, couverture des parties intimes, direction de la Qibla, entrée du temps, intention', correct: true },
        { texte: 'Uniquement la purification et l\'intention', correct: false },
        { texte: 'Uniquement être en état de Wudu', correct: false },
      ],
      source: 'Mudawwana de Sahnun + Risala d\'Ibn Abi Zayd al-Qayrawani',
      explication: 'Les conditions de validité de la prière selon l\'école malékite : 1) Être musulman 2) Avoir le discernement (aql) 3) Être en état de pureté (Wudu ou Ghusl) 4) Couvrir la awra (parties intimes) 5) Être dans la direction de la Qibla 6) L\'entrée du temps de la prière 7) L\'intention (niyyah). Sans l\'une de ces conditions, la prière est invalide.',
    },

    {
      id: 'm9q6',
      type: 'connaissance',
      categorie: 'Sunnas de la prière',
      question: 'Selon l\'école malékite, l\'Iqama (appel intérieur) est-elle sunna ou obligatoire ?',
      options: [
        { texte: 'Obligatoire — la prière est invalide sans elle', correct: false },
        { texte: 'Sunna muakkada — fortement recommandée', correct: true },
        { texte: 'Facultative — on peut prier sans Iqama', correct: false },
        { texte: 'Obligatoire uniquement pour la prière du vendredi', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la prière',
      explication: 'Selon l\'imam Malik, l\'Iqama est une sunna muakkada (fortement recommandée) pour les hommes en congrégation. Elle n\'est pas une condition de validité de la prière — si on l\'omet, la prière reste valide. Elle est recommandée même pour la prière individuelle. L\'imam Malik prescrit une Iqama simple sans répétition des phrases.',
    },

    {
      id: 'm9q7',
      type: 'connaissance',
      categorie: 'Sujud sahw',
      question: 'Qu\'est-ce que le Sujud Sahw (prosternation d\'oubli) selon l\'école malékite ?',
      options: [
        { texte: 'Une prière de rattrapage obligatoire', correct: false },
        { texte: 'Deux prosternations pour compenser les erreurs dans la prière', correct: true },
        { texte: 'Une invocation à la fin de la prière', correct: false },
        { texte: 'Le recommencement complet de la prière', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la prière',
      explication: 'Le Sujud Sahw est 2 prosternations supplémentaires pour corriger les erreurs involontaires dans la prière. Spécificité malékite : le Sujud Sahw se fait TOUJOURS AVANT le salam final (qabli) en cas d\'omission et APRÈS le salam en cas d\'ajout. C\'est différent des autres écoles. Il est wajib quand on omet un élément obligatoire.',
    },

    {
      id: 'm9q8',
      type: 'connaissance',
      categorie: 'Prière — Qunut',
      question: 'Selon l\'école malékite, dans quelle prière récite-t-on le Qunut ?',
      options: [
        { texte: 'Dans toutes les prières obligatoires', correct: false },
        { texte: 'Uniquement dans la prière du Witr', correct: false },
        { texte: 'Dans la prière du Fajr après le Ruku\' du deuxième rakat', correct: true },
        { texte: 'Le Qunut n\'existe pas en malékisme', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la prière',
      explication: 'Selon l\'imam Malik, le Qunut se récite dans la prière du FAJR uniquement — après le Ruku\' du deuxième rakat. C\'est une sunna du Fajr selon l\'école malékite. Le Qunut est l\'invocation : "Allahumma ihdini fiman hadayt..." C\'est une particularité malékite que les imams sénégalais pratiquent fidèlement.',
    },

    {
      id: 'm9q9',
      type: 'connaissance',
      categorie: 'Prière — posture',
      question: 'Selon l\'école malékite, comment s\'assoit-on dans le Tashahud ?',
      options: [
        { texte: 'En Tawarruk (sur la fesse gauche) uniquement', correct: false },
        { texte: 'En Iftirash (assis sur le pied gauche replié, droit pointé) pour tous les Tashahud', correct: true },
        { texte: 'En Tawarruk pour le dernier Tashahud uniquement', correct: false },
        { texte: 'La posture n\'a pas d\'importance selon l\'imam Malik', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la prière',
      explication: 'Selon l\'imam Malik, on s\'assoit en Iftirash (sur le pied gauche replié, le pied droit planté) pour TOUS les Tashahud — premier et dernier. C\'est différent des écoles Shafi\'i et Hanbali qui distinguent le Tashahud intermédiaire (Iftirash) du dernier (Tawarruk).',
    },

    {
      id: 'm9q10',
      type: 'connaissance',
      categorie: 'Prière — Tashahud',
      question: 'Selon l\'école malékite, la Salat sur le Prophète ﷺ (Salawat) dans le Tashahud est-elle obligatoire ?',
      options: [
        { texte: 'Non — uniquement le Tashahud est obligatoire', correct: false },
        { texte: 'Oui — la Salawat fait partie des piliers de la prière selon l\'imam Malik', correct: true },
        { texte: 'Oui — uniquement dans le dernier Tashahud', correct: false },
        { texte: 'Non — c\'est une sunna facultative', correct: false },
      ],
      source: 'Mudawwana de Sahnun — Livre de la prière',
      explication: 'Selon l\'école malékite, la Salawat sur le Prophète ﷺ (Allahumma salli ala Muhammad...) est un PILIER de la prière dans le Tashahud final. Sans elle, la prière est invalide. C\'est une particularité malékite — d\'autres écoles ne la considèrent pas comme un pilier mais comme une obligation ou une sunna.',
    },

    {
      id: 'm9q11',
      type: 'connaissance',
      categorie: 'Prière — Awra',
      question: 'Quelle est la awra (parties intimes) de la femme devant les femmes non-mahram ?',
      options: [
        { texte: 'Le corps entier', correct: false },
        { texte: 'De la taille aux genoux uniquement', correct: false },
        { texte: 'Le corps entier sauf le visage et les mains selon l\'école malékite', correct: false },
        { texte: 'Ce que l\'homme voit de l\'homme — de la taille aux genoux', correct: true },
      ],
      source: 'Mudawwana de Sahnun — Livre de la pureté',
      explication: 'Selon l\'école malékite, la awra d\'une femme devant une autre femme est la même que celle d\'un homme devant un homme : de la taille aux genoux. Devant les hommes étrangers : tout le corps sauf le visage et les mains (avis dominant malékite). Dans la prière : tout le corps sauf le visage et les mains pour la femme.',
    },

    {
      id: 'm9q12',
      type: 'connaissance',
      categorie: 'Prière manquée',
      question: 'Selon l\'école malékite, doit-on rattraper les prières manquées par oubli ou sommeil ?',
      options: [
        { texte: 'Non — les prières manquées par oubli sont pardonnées', correct: false },
        { texte: 'Oui — on les rattrape dès qu\'on s\'en souvient', correct: true },
        { texte: 'Non — uniquement si c\'était intentionnel', correct: false },
        { texte: 'Oui — mais uniquement dans le jour même', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la prière',
      explication: '"Celui qui oublie une prière doit la faire quand il s\'en souvient." (Hadith Sahih Muslim + Muwatta). Selon l\'imam Malik, les prières manquées (qada) doivent être rattrapées dans l\'ordre. Si on en a manqué beaucoup, on les rattrape progressivement. Les prières manquées intentionnellement sont un péché grave — l\'imam Malik exigeait leur rattrapage également.',
    },

    {
      id: 'm9q13',
      type: 'connaissance',
      categorie: 'Prière en voyage',
      question: 'Selon l\'école malékite, le voyageur peut-il raccourcir ses prières (Qasr) ?',
      options: [
        { texte: 'Non — le raccourcissement est interdit selon l\'imam Malik', correct: false },
        { texte: 'Oui — c\'est une sunna pour le voyageur', correct: false },
        { texte: 'Oui — c\'est une obligation pour le voyageur selon l\'imam Malik', correct: true },
        { texte: 'Oui — mais uniquement si le voyage dépasse 3 jours', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre du voyage',
      explication: 'Spécificité malékite : le Qasr (raccourcissement des 4 rakats à 2) est une OBLIGATION pour le voyageur selon l\'imam Malik — pas une option. Si le voyageur prie 4 rakats alors qu\'il devrait en prier 2, sa prière est valide mais il a péché en n\'appliquant pas la concession (rukhsa). La distance minimale de voyage : 80 km environ selon l\'imam Malik.',
    },

    {
      id: 'm9q14',
      type: 'connaissance',
      categorie: 'Sunnas de la prière',
      question: 'Selon l\'école malékite, réciter une sourate après Al-Fatiha est-elle sunna ou obligatoire ?',
      options: [
        { texte: 'Obligatoire dans les 2 premiers rakats', correct: false },
        { texte: 'Sunna muakkada dans les 2 premiers rakats', correct: true },
        { texte: 'Obligatoire dans tous les rakats', correct: false },
        { texte: 'Facultative — Al-Fatiha seule suffit toujours', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la prière',
      explication: 'Selon l\'imam Malik, réciter une sourate après Al-Fatiha est une sunna muakkada dans les deux premiers rakats des prières obligatoires. L\'omettre exige le Sujud Sahw. Dans les deux derniers rakats, seule Al-Fatiha est récitée. La sourate doit être récitée à voix haute dans Fajr, Maghreb et Isha et silencieusement dans Dhuhr et Asr.',
    },

    {
      id: 'm9q15',
      type: 'connaissance',
      categorie: 'Prière collective',
      question: 'Selon l\'école malékite, la prière en congrégation est-elle sunna ou obligatoire ?',
      options: [
        { texte: 'Fard ayn — obligation individuelle', correct: false },
        { texte: 'Fard kifaya — obligation collective', correct: false },
        { texte: 'Sunna muakkada pour les hommes', correct: true },
        { texte: 'Facultative pour tous', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la prière',
      explication: 'Selon l\'imam Malik, la prière en congrégation est une sunna muakkada (fortement recommandée) pour les hommes — pas une obligation individuelle comme dans l\'école Hanbali. Cependant l\'abandonner sans raison est fortement blâmable. Pour les femmes, la prière à domicile est préférable selon l\'imam Malik.',
    },

    {
      id: 'm9q16',
      type: 'connaissance',
      categorie: 'Invocations de la prière',
      question: 'Selon l\'école malékite, existe-t-il une invocation d\'ouverture (Istiftah) après la Takbirat al-Ihram ?',
      options: [
        { texte: 'Oui — "Subhanakallahumma wa bihamdika..."', correct: false },
        { texte: 'Non — on commence directement par Al-Fatiha selon l\'imam Malik', correct: true },
        { texte: 'Oui — une invocation spécifique de l\'imam Malik', correct: false },
        { texte: 'Oui — mais uniquement dans la prière du Fajr', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la prière',
      explication: 'C\'est une particularité malékite : selon l\'imam Malik, on commence DIRECTEMENT par Al-Fatiha après la Takbirat al-Ihram — sans invocation d\'ouverture (Istiftah). Les autres écoles (Hanafi, Shafi\'i, Hanbali) récitent une invocation silencieuse avant Al-Fatiha. C\'est pourquoi les imams sénégalais commencent immédiatement la récitation après le premier Takbir.',
    },

    {
      id: 'm9q17',
      type: 'connaissance',
      categorie: 'Prière — "Amin"',
      question: 'Selon l\'école malékite, dit-on "Amin" à voix haute ou basse après Al-Fatiha ?',
      options: [
        { texte: 'À voix haute — comme l\'imam', correct: false },
        { texte: 'À voix basse — le Amin est dit silencieusement selon l\'imam Malik', correct: true },
        { texte: 'On ne dit pas Amin en malékisme', correct: false },
        { texte: 'À voix haute uniquement dans le Fajr', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la prière',
      explication: 'Selon l\'imam Malik, le "Amin" après Al-Fatiha se dit SILENCIEUSEMENT — ni l\'imam ni les fidèles ne le disent à voix haute. C\'est différent des écoles Shafi\'i et Hanbali qui recommandent de le dire à voix haute dans les prières vocales. Cette règle malékite explique pourquoi dans les mosquées sénégalaises on n\'entend pas de "Amin" collectif.',
    },

    {
      id: 'm9q18',
      type: 'connaissance',
      categorie: 'Prière — Sujud Tilawa',
      question: 'Qu\'est-ce que le Sujud Tilawa dans la prière ?',
      options: [
        { texte: 'La prosternation de remerciement', correct: false },
        { texte: 'La prosternation à la récitation de certains versets du Coran', correct: true },
        { texte: 'La prosternation d\'oubli', correct: false },
        { texte: 'Une prosternation supplémentaire dans le Fajr', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre du Coran',
      explication: 'Le Sujud Tilawa est la prosternation lors de la récitation de versets de prosternation (sajda) dans le Coran. Il y a 11 positions de prosternation dans le Coran selon l\'imam Malik. Selon lui, c\'est sunna — pas obligatoire. Le Sujud Tilawa se fait en état de pureté, dans la direction de la Qibla, avec l\'intention.',
    },

    {
      id: 'm9q19',
      type: 'connaissance',
      categorie: 'Prière — rattrapage',
      question: 'Selon l\'école malékite, comment rattrape-t-on les rakats manqués en rejoignant l\'imam en retard ?',
      options: [
        { texte: 'On recommence la prière depuis le début', correct: false },
        { texte: 'On prie avec l\'imam puis on rattrape les rakats manqués après le salam de l\'imam', correct: true },
        { texte: 'On attend que l\'imam termine puis on prie seul', correct: false },
        { texte: 'On n\'est pas obligé de rattraper les rakats manqués', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la prière',
      explication: 'Selon l\'imam Malik : si tu rejoins l\'imam en cours de prière, tu pries avec lui jusqu\'à son salam final. Ensuite tu te lèves et rattrapes les rakats manqués. Ce que tu as prié avec l\'imam est le "début" de ta prière — ce que tu rattrapes est sa "fin". Le Prophète ﷺ a dit : "Ce que vous attrapez, priez-le, et ce que vous avez manqué, complétez-le."',
    },

    {
      id: 'm9q20',
      type: 'connaissance',
      categorie: 'Prière — Khushu\'',
      question: 'Qu\'est-ce que le Khushu\' dans la prière ?',
      options: [
        { texte: 'La vitesse de la prière', correct: false },
        { texte: 'Le recueillement, l\'humilité et la présence du cœur dans la prière', correct: true },
        { texte: 'La récitation parfaite du Coran', correct: false },
        { texte: 'La durée minimale de la prière', correct: false },
      ],
      source: 'Sourate Al-Mu\'minun 23:1-2 + Muwatta, Imam Malik',
      explication: '"Les croyants ont réussi — ceux qui sont humbles dans leur prière." (Al-Mu\'minun 23:1-2). Le Khushu\' est la présence du cœur, le recueillement et l\'humilité dans la prière. L\'imam Malik en faisait une priorité absolue. Il disait : "Prends le temps de bien prier plutôt que de prier beaucoup sans présence du cœur."',
    }
  ]
}
