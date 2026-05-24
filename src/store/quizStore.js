import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useQuizStore = create(
  devtools(
    persist(
      (set, get) => ({
        moduleActuel: null,
        questionActuelle: 0,
        scoreConnaissance: 0,
        scoreCompatibilite: 0,
        tentatives: 0,
        reponsesUtilisateur: [],
        estTermine: false,

        setModule: (moduleId) => set({ moduleActuel: moduleId, questionActuelle: 0, scoreConnaissance: 0, scoreCompatibilite: 0, reponsesUtilisateur: [], estTermine: false }),
        nextQuestion: () => set(s => ({ questionActuelle: s.questionActuelle + 1, tentatives: 0 })),
        addTentative: () => set(s => ({ tentatives: s.tentatives + 1 })),
        addScore: (type, points) => set(s => ({
          scoreConnaissance: type === 'connaissance' ? s.scoreConnaissance + points : s.scoreConnaissance,
          scoreCompatibilite: type === 'compatibilite' ? s.scoreCompatibilite + points : s.scoreCompatibilite,
        })),
        addReponse: (reponse) => set(s => ({ reponsesUtilisateur: [...s.reponsesUtilisateur, reponse] })),
        terminer: () => set({ estTermine: true }),
        reset: () => set({ moduleActuel: null, questionActuelle: 0, scoreConnaissance: 0, scoreCompatibilite: 0, tentatives: 0, reponsesUtilisateur: [], estTermine: false }),
      }),
      { name: 'nura-quiz', partialize: s => ({ reponsesUtilisateur: s.reponsesUtilisateur }) }
    )
  )
)
