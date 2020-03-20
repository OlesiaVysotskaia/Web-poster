let numberOfStars = 10

for (let i = 0; i < numberOfStars; i += 1) {
  let stars = document.querySelector('star')

  if (anime.random(0,1) % 2 === 0) {
    let size = `${anime.random(3,4)}px`
    stars.style.width = size
  } else {
    stars.style.width = `${anime.random(4,3)}px`
  }

  let tl = anime.timeline({
  autoplay: false
})

tl
.add({
  targets: '#octotarget',
  width: '-10vw',
  duration: 800,
  easing: 'easeInOutBack' ,
  display: 'none',
})
.add({
  targets: '#insecttarget',
    width: '-10vw',
    easing: 'easeInOutBack',
    duration: 800,
    display: 'none',
}, 1000)
.add({
  targets: '#poisontarget',
    width: '-10vw',
    easing: 'easeInOutBack',
    duration: 800,
    display: 'none',
}, 1000)
.add({
  targets: '#destoyedtarget',
    width: '-10vw',
    easing: 'easeInOutBack',
    duration: 800,
    display: 'none',
}, 1000)

.add({
  targets: '.insect-planet',
    width: '22vw',
    easing: 'easeInOutBack',
    duration: 700,
}, 1500)
.add({
  targets: '.poison-planet',
    width: '22vw',
    easing: 'easeInOutBack',
    duration: 700,
}, 1500)
.add({
  targets: '.destroyed-planet',
    width: '22vw',
    easing: 'easeInOutBack',
    duration: 700,
}, 1500)

.add({
  targets: '.octopus-planet',
    width: '40vw',
    left: '30vw',
    top: '14vw',
    easing: 'easeOutSine',
    duration: 700,
    zindex: 2,
})

.add({
    targets: '#octotargetland',
    easing: 'easeOutSine',
    duration: 1000,
    zindex: 3,
    width: '13vw',
    begin: function () {
      document.querySelector('#octotargetland').style.display = 'block'
    },
  }, 2100)
.add({
    targets: '#octotargetchar',
    easing: 'easeOutSine',
    duration: 1000,
    zindex: 3,
    width: '13vw',
    begin: function () {
      document.querySelector('#octotargetchar').style.display = 'block'
    },
  }, 2100)

let targetsoctoPlay =
document.querySelector('#octotarget')

targetsoctoPlay.onclick = tl.play
