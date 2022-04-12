//Mobile Container Function
const navSlide = () => {
  const burger = document.querySelector('.mobile-container')
  const nav = document.querySelector('.nav-links')
  const navLinks = document.querySelectorAll('.nav-links a')

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 6 + 0.4
        }s`
      }
    })

    burger.classList.toggle('toggle')
  })
}
navSlide()

//Form Function
function sendEmail() {
  Email.send({
    SecureToken: 'c12d23ac-1eb7-4880-8808-cc73580ecdc4',
    To: 'mohanad.alrwaihy@gmail.com',
    From: document.getElementById('email').value,
    Subject: document.getElementById('subject').value,
    Body: document.getElementById('message').value,
  }).then((message) => alert(message))
}
