import { doc, updateDoc, getDoc, arrayUnion, serverTimestamp } from 'firebase/firestore'
import { db } from './config'

export const saveModuleScore = async (userId, moduleId, score, scoreCompat) => {
  const ref = doc(db, 'users', userId)
  await updateDoc(ref, {
    [`scores.${moduleId}`]: {
      connaissance: score,
      compatibilite: scoreCompat,
      completedAt: serverTimestamp()
    },
    completedModules: arrayUnion(moduleId)
  })
}

export const getUserProfile = async (userId) => {
  const snap = await getDoc(doc(db, 'users', userId))
  return snap.exists() ? snap.data() : null
}
