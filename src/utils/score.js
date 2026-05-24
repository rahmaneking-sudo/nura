export const getConnaissanceLevel = (score, total = 20) => {
  const pct = score / total
  if (pct >= 0.85) return { label: 'Excellent', color: 'text-emerald-primary', emoji: '🌟' }
  if (pct >= 0.60) return { label: 'Bien', color: 'text-blue-600', emoji: '👍' }
  if (pct >= 0.35) return { label: 'Moyen', color: 'text-amber-600', emoji: '📚' }
  return { label: 'En construction', color: 'text-gray-500', emoji: '🌱' }
}

export const getCompatibiliteProfile = (score, total = 30) => {
  const pct = score / total
  if (pct >= 0.80) return { label: 'Profil très engagé islamiquement', description: 'Tu cherches un conjoint du même niveau d\'engagement.', color: 'text-emerald-primary' }
  if (pct >= 0.53) return { label: 'Profil équilibré', description: 'Tu combines valeurs islamiques solides et ouverture moderne.', color: 'text-blue-600' }
  if (pct >= 0.27) return { label: 'Profil flexible', description: 'Clarifie tes attentes dès le début pour éviter les malentendus.', color: 'text-amber-600' }
  return { label: 'Profil en construction', description: 'Définis tes valeurs islamiques avant de chercher ton conjoint.', color: 'text-gray-500' }
}
