export const shareResults = async ({ nom, score, module }) => {
  const text = `🌟 J'ai obtenu ${score}/20 au quiz Nura sur "${module}" ! Teste tes connaissances islamiques sur nura.sn`
  if (navigator.share) {
    await navigator.share({ title: 'Nura — Quiz islamique', text, url: 'https://nura.sn' })
  } else {
    await navigator.clipboard.writeText(text)
  }
}
