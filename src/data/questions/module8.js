export const module8 = {
  id: 'module8',
  titre: 'Les ablutions (Wudu)',
  description: 'Piliers, obligations et sunnas des ablutions selon l\'école malékite',
  icone: '💧',
  questions: [

    // ============================================================
    // PARTIE A — 20 QUESTIONS DE CONNAISSANCE
    // ============================================================

    {
      id: 'm8q1',
      type: 'connaissance',
      categorie: 'Piliers du Wudu',
      question: 'Combien y a-t-il de piliers (arkane) du Wudu selon l\'école malékite ?',
      options: [
        { texte: '4 piliers', correct: false },
        { texte: '6 piliers', correct: false },
        { texte: '7 piliers', correct: true },
        { texte: '10 piliers', correct: false },
      ],
      source: 'Mudawwana de Sahnun — Livre de la pureté',
      explication: 'Les 7 piliers du Wudu selon l\'école malékite sont : 1) L\'intention (niyyah) 2) Laver le visage 3) Laver les deux mains jusqu\'aux coudes 4) Essuyer la tête en entier 5) Laver les deux pieds jusqu\'aux chevilles 6) La continuité (muwalat — enchaîner les actes sans pause excessive) 7) Le frottement (dalk — frotter la peau avec la main). Ce sont des conditions sans lesquelles le Wudu est invalide.',
    },

    {
      id: 'm8q2',
      type: 'connaissance',
      categorie: 'Fard du Wudu',
      question: 'Selon l\'école malékite, essuyer toute la tête dans le Wudu est-il obligatoire ?',
      options: [
        { texte: 'Non, un quart suffit', correct: false },
        { texte: 'Non, la moitié suffit', correct: false },
        { texte: 'Oui, toute la tête doit être essuyée', correct: true },
        { texte: 'Non, quelques cheveux suffisent', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la pureté',
      explication: 'Spécificité malékite importante : l\'imam Malik exige l\'essuyage de TOUTE la tête — de la racine des cheveux jusqu\'à la nuque. C\'est différent des écoles Hanafi (un quart) et Shafi\'i (une mèche). Cette règle s\'applique dans les mosquées sénégalaises. Pour les femmes, essuyer l\'avant de la tête suffit selon l\'imam Malik.',
    },

    {
      id: 'm8q3',
      type: 'connaissance',
      categorie: 'Sunnas du Wudu',
      question: 'Lequel de ces actes est une SUNNA (recommandé) du Wudu selon l\'école malékite ?',
      options: [
        { texte: 'Laver le visage', correct: false },
        { texte: 'Se rincer la bouche (madmada)', correct: true },
        { texte: 'L\'intention (niyyah)', correct: false },
        { texte: 'Laver les pieds', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la pureté',
      explication: 'Les sunnas du Wudu selon l\'école malékite incluent : 1) Se rincer la bouche (madmada) 2) Aspirer de l\'eau dans le nez (istinshaq) 3) Passer les doigts entre les orteils (khilal) 4) Commencer par le côté droit 5) Le siwak avant le Wudu 6) Réciter la Basmala 7) Laver 3 fois. Les omettre ne rend pas le Wudu invalide mais réduit la récompense.',
    },

    {
      id: 'm8q4',
      type: 'connaissance',
      categorie: 'Ce qui annule le Wudu',
      question: 'Selon l\'école malékite, le contact direct avec une femme non-mahram annule-t-il le Wudu ?',
      options: [
        { texte: 'Non — uniquement les grandes impuretés annulent le Wudu', correct: false },
        { texte: 'Oui — le contact direct sans barrière annule le Wudu', correct: true },
        { texte: 'Uniquement si c\'est un contact intentionnel', correct: false },
        { texte: 'Uniquement pour les hommes, pas pour les femmes', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la pureté',
      explication: 'C\'est une spécificité majeure de l\'école malékite : le contact direct peau contre peau avec une femme non-mahram annule le Wudu de l\'homme, même sans plaisir. C\'est pourquoi les imams sénégalais ne serrent pas la main aux femmes — cela leur évite de refaire les ablutions avant la prière.',
    },

    {
      id: 'm8q5',
      type: 'connaissance',
      categorie: 'Ce qui annule le Wudu',
      question: 'Lequel de ces actes N\'annule PAS le Wudu selon l\'école malékite ?',
      options: [
        { texte: 'Le sommeil profond allongé', correct: false },
        { texte: 'Manger de la viande de chameau', correct: true },
        { texte: 'Les selles', correct: false },
        { texte: 'L\'urine', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la pureté',
      explication: 'Manger de la viande de chameau N\'annule PAS le Wudu selon l\'école malékite (contrairement à l\'école Hanbali). Ce qui annule le Wudu selon l\'imam Malik : selles, urine, pet, vomissement abondant, sang abondant, sommeil profond, perte de conscience, contact avec femme non-mahram, toucher le sexe directement.',
    },

    {
      id: 'm8q6',
      type: 'connaissance',
      categorie: 'Piliers du Wudu',
      question: 'Qu\'est-ce que la "Muwalat" dans les ablutions selon l\'école malékite ?',
      options: [
        { texte: 'Laver trois fois chaque partie', correct: false },
        { texte: 'Enchaîner les actes du Wudu sans pause excessive', correct: true },
        { texte: 'Commencer par le côté droit', correct: false },
        { texte: 'Réciter les invocations pendant le Wudu', correct: false },
      ],
      source: 'Mudawwana de Sahnun — Livre de la pureté',
      explication: 'La Muwalat (continuité) est un pilier du Wudu spécifique à l\'école malékite — les autres écoles ne le considèrent pas comme obligatoire. Cela signifie enchaîner les parties du Wudu sans laisser sécher la partie précédente. Si le temps entre deux parties est trop long sans raison valable, le Wudu doit être recommencé.',
    },

    {
      id: 'm8q7',
      type: 'connaissance',
      categorie: 'Piliers du Wudu',
      question: 'Qu\'est-ce que le "Dalk" dans les ablutions selon l\'école malékite ?',
      options: [
        { texte: 'Verser de l\'eau sur les membres', correct: false },
        { texte: 'Réciter la Shahada après le Wudu', correct: false },
        { texte: 'Frotter la peau avec la paume pendant le lavage', correct: true },
        { texte: 'Recommencer le Wudu 3 fois', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la pureté',
      explication: 'Le Dalk (frottement) est un pilier du Wudu propre à l\'école malékite — il ne suffit pas de verser de l\'eau, il faut frotter la peau avec la paume de la main. C\'est pour s\'assurer que l\'eau atteint bien toute la surface. C\'est une des particularités les plus connues du fiqh malékite appliqué au Sénégal.',
    },

    {
      id: 'm8q8',
      type: 'connaissance',
      categorie: 'Invocation du Wudu',
      question: 'Quelle invocation dit-on APRÈS avoir terminé le Wudu ?',
      options: [
        { texte: 'Bismillah uniquement', correct: false },
        { texte: 'Alhamdulillah uniquement', correct: false },
        { texte: '"Ashhadu an la ilaha illa Allah wa ashhadu anna Muhammadan abduhu wa rasuluh" + douaa spécifique', correct: true },
        { texte: 'Il n\'y a pas d\'invocation après le Wudu', correct: false },
      ],
      source: 'Sahih Muslim + Sunan Abu Dawud',
      explication: 'Après le Wudu, on récite la Shahada puis : "Allahumma j\'alni minat-tawwabina waj\'alni minal-mutatahhirin" (Ô Allah, fais de moi quelqu\'un qui se repent beaucoup et quelqu\'un qui se purifie beaucoup). Le Prophète ﷺ a dit que celui qui dit cela après le Wudu, les 8 portes du paradis lui seront ouvertes.',
    },

    {
      id: 'm8q9',
      type: 'connaissance',
      categorie: 'Tayammum',
      question: 'Selon l\'école malékite, combien de piliers a le Tayammum (purification par la terre) ?',
      options: [
        { texte: '2 piliers', correct: false },
        { texte: '3 piliers', correct: true },
        { texte: '5 piliers', correct: false },
        { texte: '7 piliers', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la pureté',
      explication: 'Les 3 piliers du Tayammum selon l\'école malékite : 1) L\'intention (niyyah) 2) Essuyer le visage avec la terre pure 3) Essuyer les deux mains jusqu\'aux poignets. Le Tayammum est permis en absence d\'eau ou en cas de maladie qui interdit l\'usage de l\'eau. Il remplace le Wudu ET le Ghusl.',
    },

    {
      id: 'm8q10',
      type: 'connaissance',
      categorie: 'Ghusl',
      question: 'Combien y a-t-il de piliers du Ghusl (grande ablution) selon l\'école malékite ?',
      options: [
        { texte: '2 piliers', correct: false },
        { texte: '3 piliers', correct: true },
        { texte: '5 piliers', correct: false },
        { texte: '7 piliers', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la pureté',
      explication: 'Les 3 piliers du Ghusl selon l\'école malékite : 1) L\'intention (niyyah) 2) Faire couler l\'eau sur tout le corps y compris la bouche et le nez 3) Le frottement (Dalk) de tout le corps. Ce qui oblige le Ghusl : les relations conjugales, l\'éjaculation, les règles, le post-partum, la mort (pour celui qui lave le mort).',
    },

    {
      id: 'm8q11',
      type: 'connaissance',
      categorie: 'Causes du Ghusl',
      question: 'Lequel de ces actes OBLIGE le Ghusl selon l\'école malékite ?',
      options: [
        { texte: 'Manger de la viande', correct: false },
        { texte: 'Le sommeil', correct: false },
        { texte: 'La fin des règles (hayd)', correct: true },
        { texte: 'Toucher un chien', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la pureté',
      explication: 'Les causes obligatoires du Ghusl : 1) La pénétration conjugale même sans éjaculation 2) L\'éjaculation avec plaisir 3) La fin des règles (hayd) 4) La fin du post-partum (nifas) 5) La mort 6) La conversion à l\'islam selon certains oulémas malékites. Le Ghusl de la mort du vendredi est sunna selon l\'imam Malik.',
    },

    {
      id: 'm8q12',
      type: 'connaissance',
      categorie: 'Sunnas du Wudu',
      question: 'Selon l\'école malékite, est-il sunna de laver chaque partie du Wudu 3 fois ?',
      options: [
        { texte: 'Non — 1 fois suffit, 3 fois est sunna', correct: true },
        { texte: 'Oui — 3 fois est obligatoire', correct: false },
        { texte: 'Non — 2 fois est obligatoire, 3 fois est sunna', correct: false },
        { texte: 'Oui — 3 fois est obligatoire pour les mains uniquement', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la pureté',
      explication: 'Selon l\'imam Malik, laver une seule fois est obligatoire (fard) et suffit pour la validité. Laver 2 fois est recommandé. Laver 3 fois est une sunna du Prophète ﷺ mais pas une obligation. Laver plus de 3 fois est une innovation (bid\'a) déconseillée selon l\'imam Malik.',
    },

    {
      id: 'm8q13',
      type: 'connaissance',
      categorie: 'Wudu — ordre',
      question: 'Selon l\'école malékite, l\'ordre des membres dans le Wudu est-il obligatoire ?',
      options: [
        { texte: 'Oui — l\'ordre est un pilier du Wudu', correct: false },
        { texte: 'Non — l\'ordre est une sunna selon l\'imam Malik', correct: true },
        { texte: 'Oui — uniquement pour les pieds et les mains', correct: false },
        { texte: 'Non — l\'ordre n\'a aucune importance', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la pureté',
      explication: 'Spécificité malékite : l\'ordre des membres n\'est PAS obligatoire selon l\'imam Malik — c\'est une sunna. On peut donc laver les pieds avant les mains par exemple et le Wudu reste valide. C\'est différent des écoles Shafi\'i et Hanbali qui considèrent l\'ordre comme obligatoire.',
    },

    {
      id: 'm8q14',
      type: 'connaissance',
      categorie: 'Wudu — chaussettes',
      question: 'Selon l\'école malékite, peut-on essuyer les chaussettes (khuffayn) au lieu de laver les pieds ?',
      options: [
        { texte: 'Non — jamais permis selon l\'imam Malik', correct: false },
        { texte: 'Oui — permis pour le voyageur et le sédentaire selon certains malékites', correct: true },
        { texte: 'Uniquement en voyage', correct: false },
        { texte: 'Uniquement s\'il fait froid', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la pureté',
      explication: 'L\'imam Malik reconnaît le Masah ala al-Khuffayn (essuyer les chaussettes de cuir) comme permis sur la base des hadiths authentiques. Durée : 1 jour/nuit pour le sédentaire, 3 jours/nuits pour le voyageur. Condition : les khuffayn doivent être mis en état de pureté.',
    },

    {
      id: 'm8q15',
      type: 'connaissance',
      categorie: 'Wudu — doutes',
      question: 'Selon l\'école malékite, si on doute d\'avoir fait le Wudu, que doit-on faire ?',
      options: [
        { texte: 'Recommencer immédiatement le Wudu', correct: false },
        { texte: 'Se baser sur la certitude — si on était en état de Wudu, on est toujours pur', correct: true },
        { texte: 'Faire un nouveau Wudu par précaution', correct: false },
        { texte: 'Demander à quelqu\'un', correct: false },
      ],
      source: 'Muwatta, Imam Malik + principe islamique de certitude',
      explication: 'Principe islamique fondamental : "La certitude n\'est pas levée par le doute." Si tu avais la certitude d\'être en état de Wudu, un doute simple ne l\'annule pas. Mais si le doute est fort et récurrent, l\'imam Malik recommande de refaire le Wudu. Cela protège contre le Waswas (obsession du doute) qui est un stratagème de Shaytan.',
    },

    {
      id: 'm8q16',
      type: 'connaissance',
      categorie: 'Invocation — entrée toilettes',
      question: 'Quelle invocation dit-on en ENTRANT dans les toilettes selon la Sunna ?',
      options: [
        { texte: 'Bismillah uniquement', correct: false },
        { texte: '"Allahumma inni a\'udhu bika minal khubuthi wal khaba\'ith"', correct: true },
        { texte: '"A\'udhu billahi minash-shaytanir-rajim"', correct: false },
        { texte: 'Il n\'y a pas d\'invocation pour les toilettes', correct: false },
      ],
      source: 'Sahih Boukhari + Muwatta, Imam Malik',
      explication: '"Allahumma inni a\'udhu bika minal khubuthi wal khaba\'ith" — Ô Allah, je me réfugie en Toi contre les démons mâles et femelles. On entre du pied GAUCHE. Cette invocation se dit en PENSÉE dans les toilettes modernes (pas à voix haute). En sortant : on sort du pied DROIT en disant "Ghufranaka" (je Te demande pardon).',
    },

    {
      id: 'm8q17',
      type: 'connaissance',
      categorie: 'Invocation — sortie toilettes',
      question: 'Quelle invocation dit-on en SORTANT des toilettes selon la Sunna ?',
      options: [
        { texte: 'Bismillah', correct: false },
        { texte: '"Ghufranaka" (Je Te demande Ton pardon)', correct: true },
        { texte: '"Alhamdulillah"', correct: false },
        { texte: '"As-salamu alaykum"', correct: false },
      ],
      source: 'Sunan Abu Dawud + Sunan At-Tirmidhi',
      explication: '"Ghufranaka" — Ô Allah, je Te demande Ton pardon. Cette invocation se dit en sortant du pied DROIT. Le Prophète ﷺ la disait en sortant des toilettes. Les oulémas expliquent qu\'on demande pardon car on s\'est retrouvé dans un endroit où Allah n\'est pas glorifié pendant cette période.',
    },

    {
      id: 'm8q18',
      type: 'connaissance',
      categorie: 'Istinja',
      question: 'Qu\'est-ce que l\'Istinja selon l\'école malékite ?',
      options: [
        { texte: 'Le Wudu complet', correct: false },
        { texte: 'Se purifier avec de l\'eau après les selles ou l\'urine', correct: true },
        { texte: 'Le Tayammum', correct: false },
        { texte: 'La prière de purification', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la pureté',
      explication: 'L\'Istinja est la purification des parties intimes après les selles ou l\'urine. Selon l\'imam Malik, l\'eau est obligatoire si l\'impureté dépasse l\'ouverture naturelle. On peut utiliser des pierres ou du papier (Istijmar) si l\'impureté ne dépasse pas. L\'idéal est de combiner les deux. Condition : nombre impair minimum de 3.',
    },

    {
      id: 'm8q19',
      type: 'connaissance',
      categorie: 'Wudu — sang',
      question: 'Selon l\'école malékite, un peu de sang qui coule du corps annule-t-il le Wudu ?',
      options: [
        { texte: 'Oui — tout saignement annule le Wudu', correct: false },
        { texte: 'Non — selon l\'imam Malik, le sang seul n\'annule pas le Wudu', correct: true },
        { texte: 'Oui — uniquement si le saignement est abondant', correct: false },
        { texte: 'Oui — uniquement pour les femmes', correct: false },
      ],
      source: 'Muwatta, Imam Malik — Livre de la pureté',
      explication: 'Position malékite importante : selon l\'imam Malik, le sang qui coule du corps (blessure, coupure, prise de sang) N\'annule PAS le Wudu. C\'est différent des écoles Hanafi et Hanbali. Seul le sang des règles (hayd) et du post-partum (nifas) oblige le Ghusl. Cette position facilite la pratique religieuse des malades et des personnes qui font des analyses médicales.',
    },

    {
      id: 'm8q20',
      type: 'connaissance',
      categorie: 'Wudu — versets',
      question: 'Dans quelle sourate Allah décrit-Il les actes du Wudu ?',
      options: [
        { texte: 'Sourate Al-Baqara', correct: false },
        { texte: 'Sourate An-Nisa', correct: false },
        { texte: 'Sourate Al-Maida 5:6', correct: true },
        { texte: 'Sourate Al-A\'raf', correct: false },
      ],
      source: 'Sourate Al-Maida 5:6 + Muwatta, Imam Malik',
      explication: '"Ô croyants, quand vous vous levez pour la prière, lavez vos visages et vos mains jusqu\'aux coudes, essuyez vos têtes et lavez vos pieds jusqu\'aux chevilles." (Al-Maida 5:6). Ce verset est la base coranique du Wudu. L\'imam Malik l\'interprète en exigeant l\'essuyage de TOUTE la tête, contrairement à d\'autres imams.',
    },

    // ============================================================
    // PARTIE B — 10 QUESTIONS DE COMPATIBILITÉ
    // ============================================================

    {
      id: 'm8c1',
      type: 'compatibilite',
      categorie: 'Pureté dans le foyer',
      question: 'Quelle importance accordes-tu à la pureté rituielle dans ton quotidien ?',
      options: [
        { texte: 'Fondamentale — je maintiens toujours mon Wudu', poids: 3 },
        { texte: 'Très importante — je fais le Wudu avant chaque prière', poids: 2 },
        { texte: 'Importante — j\'essaie de rester en état de pureté', poids: 1 },
        { texte: 'Je fais le Wudu uniquement pour prier', poids: 0 },
      ],
      source: 'Al-Maida 5:6 + Muwatta, Imam Malik',
      explication: 'L\'imam Malik enseignait que rester en état de Wudu entre les prières est une sunna très recommandée. Certains compagnons ne se couchaient jamais sans être en état de pureté.',
    },

    {
      id: 'm8c2',
      type: 'compatibilite',
      categorie: 'Enseignement aux enfants',
      question: 'À quel âge envisages-tu d\'apprendre le Wudu à tes enfants ?',
      options: [
        { texte: 'Dès 4-5 ans — apprentissage par imitation', poids: 3 },
        { texte: 'À 7 ans — en même temps que la prière', poids: 2 },
        { texte: 'À 10 ans quand ils comprennent', poids: 1 },
        { texte: 'Quand ils en expriment le désir', poids: 0 },
      ],
      source: 'Sunan Abu Dawud — éducation à la prière',
      explication: 'L\'imam Malik recommandait d\'habituer les enfants à la pureté rituelle dès leur jeune âge par imitation des parents.',
    },

    {
      id: 'm8c3',
      type: 'compatibilite',
      categorie: 'Salle de bain islamique',
      question: 'Comment envisages-tu l\'aménagement de la salle de bain dans ton foyer ?',
      options: [
        { texte: 'Avec tout le nécessaire pour le Wudu et le Ghusl islamique (pichet, séparation, etc.)', poids: 3 },
        { texte: 'Fonctionnelle pour la purification islamique', poids: 2 },
        { texte: 'Une salle de bain normale suffit', poids: 1 },
        { texte: 'Pas de considération particulière', poids: 0 },
      ],
      source: 'Tradition islamique',
      explication: 'Un foyer islamique bien organisé facilite la purification rituelle quotidienne.',
    }
  ]
}
