export const module2 = {
  id: 'module2',
  titre: 'Le Mariage Islamique',
  description: 'Nikah, Wali, Mahr, Consentement et autres conditions de validité',
  questions: [
    {
      id: 'm2q1',
      type: 'connaissance',
      categorie: 'Conditions du mariage',
      question: 'Selon l\'école malékite, quelle est la valeur minimale de la dot (Mahr) pour que le mariage soit valide ?',
      questionWo: 'Ci lawu maalik, ban natt la may (Mahr) war a mat ba sëy bi baxx ?',
      options: [
        { texte: '100 dirhams', texteWo: 'Téeméeri dërëm', correct: false },
        { texte: '3 dirhams d\'argent', texteWo: 'Ñetti dërëmu xaalis', correct: true },
        { texte: 'Il n\'y a pas de minimum', texteWo: 'Amuñu natt bu ñu yamale', correct: false },
        { texte: 'Une bague en fer', texteWo: 'Jaaroy weñ', correct: false },
      ],
      source: 'Muwatta de l\'Imam Malik — Livre du Mariage',
      explication: 'L\'école malékite fixe un minimum de 3 dirhams d\'argent pur ou 1/4 de dinar d\'or pour que la dot soit valide. Cela garantit une valeur minimale pour sécuriser l\'acte, même si elle est modeste.',
      explicationWo: 'Lawu maalik dafa yamale may gi ci ñetti dërëmu xaalis wala ñeenteelu dinar wurus. Loolu moo koy dëgëral, doonte lu tuuti la.',
    },
    {
      id: 'm2q2',
      type: 'connaissance',
      categorie: 'Le Tuteur (Wali)',
      question: 'La présence et le consentement du Wali (tuteur) de la mariée sont-ils obligatoires pour la validité du mariage ?',
      questionWo: 'Ndax tewu ak nanguwul Wali (kilifa) jigeen ji farata la ci baaxug sëy bi ?',
      options: [
        { texte: 'Seulement pour le premier mariage', texteWo: 'Ci sëy bu jëkk bi rekk', correct: false },
        { texte: 'Non, ce n\'est que recommandé', texteWo: 'Déedéet, lu ñu sopp rekk la', correct: false },
        { texte: 'Oui, aucun mariage n\'est valide sans tuteur', texteWo: 'Waaw, amul sëy bu baax lu dul ak kilifa', correct: true },
        { texte: 'Seulement si la mariée a moins de 18 ans', texteWo: 'Su fekkee jigeen ji amagul fukk ak juróom ñetti at rekk', correct: false },
      ],
      source: 'Muwatta de l\'Imam Malik — Livre du Mariage',
      explication: 'Selon l\'imam Malik, reprenant le hadith authentique "Pas de mariage sans Wali", le tuteur est une condition de validité stricte du mariage pour la femme, quel que soit son âge ou son statut matrimonial antérieur.',
      explicationWo: 'Imam Malik dafa sukkandiku ci hadith bi nane "Amul sëy lu dul ak Wali". Wali farata la ci jigeen ji, loolu mooy lawu diine, lu mu man a am ci at wala lu mu man a jëkk a sëy.',
    },
    {
      id: 'm2c1',
      type: 'compatibilite',
      categorie: 'Vision du Mariage',
      question: 'Quelle est pour toi la principale raison de te marier ?',
      questionWo: 'Lan moo gëna am solo ci sa yéeney sëy ?',
      options: [
        { texte: 'Trouver un partenaire de spiritualité pour avancer vers Allah', texteWo: 'Am ku ma jàppale ci sama diine ngir gëna jege Yàlla', poids: 3 },
        { texte: 'Bâtir une famille stable et respectée', texteWo: 'Tabax njaboot gu dëgër te am teraanga', poids: 2 },
        { texte: 'Ne plus être seul(e) au quotidien', texteWo: 'Baña nekk sama bopp bés bu nekk', poids: 1 },
        { texte: 'Répondre aux attentes sociales et familiales', texteWo: 'Wuyu ci li mbooloo mi ak mbokk yi bëgg', poids: 0 },
      ],
      source: 'Sourate Ar-Rum 30:21',
      explication: 'L\'objectif premier du mariage en islam est de trouver la tranquillité (Sakinah), l\'affection (Mawaddah) et la miséricorde (Rahmah) en ayant Allah au centre de la relation.',
      explicationWo: 'Li gëna am solo ci sëy ci lislaam mooy am dal (Sakinah), mbëggeel (Mawaddah) ak yërmande (Rahmah) te teg Yàlla ci diggante bi.',
    }
  ]
}
