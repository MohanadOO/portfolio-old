const texts = ['مطور', 'مهندس الكترونيات', 'مطور ويب']
let count = 0
let index = 0
let currentText = ''
let letter = ''

;(function type() {
  if (count === texts.length) {
    count = 0
  }

  currentText = texts[count]
  letter = currentText.slice(0, ++index)

  document.querySelector('.typing').textContent = letter

  if (index - 1 === currentText.length) {
    count++
    index = 0
  }
  setTimeout(type, 250)
})()

function sleep(milliseconds) {
  const date = Date.now()
  let currentDate = null
  do {
    currentDate = Date.now()
  } while (currentDate - date < milliseconds)
}
