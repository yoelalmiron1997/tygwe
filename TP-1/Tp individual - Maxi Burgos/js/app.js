function getRandom () { // eslint-disable-line
  const sentences = ['Ser profundamente amado te da fuerzas, mientras que amar profundamente a alguien te da coraje.', 'La felicidad de tu vida depende de la calidad de tus pensamientos.', 'El mayor enemigo del conocimiento no es la ignorancia, sino la ilusion del conocimiento.']
  const styles = ['2px 2px 8px #FF0000', '2px 2px #FF0000', '0 0 3px #FF0000, 0 0 5px #0000FF']
  const sentenceIndex = Math.floor(Math.random() * sentences.length)
  const styleIndex = Math.floor(Math.random() * styles.length)
  const p = document.getElementById('sentence')
  p.innerHTML = sentences[sentenceIndex]
  p.style.textShadow = styles[styleIndex]
}
