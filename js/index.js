// let octopusAlienStripeRise = anime({
//   targets: '#octoAlienStripe',
//   targets: '.line-drawing-demo .lines path',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 1500,
// })
//
// let targetsPlay01 =
// document.querySelector('.rectButton')


  let tlOcto = anime.timeline({
  autoplay: false
})

tlOcto
.add({
  targets: '#octotarget',
  width: '-10vw',
  duration: 800,
  easing: 'easeInOutBack' ,
})
.add({
  targets: '#octotarget',
  begin: function () {
    document.querySelector('#octotarget').style.display = 'none'}
})
.add({
  targets: '#insecttarget',
  width: '-10vw',
  duration: 800,
  easing: 'easeInOutBack',
}, 1000)
.add({
  targets: '#insecttarget',
  begin: function () {
    document.querySelector('#insecttarget').style.display = 'none'}
}, 1000)
.add({
  targets: '#poisontarget',
  width: '-10vw',
  duration: 800,
  easing: 'easeInOutBack',
  transformorigin: 'center',
}, 1000)
.add({
  targets: '#poisontarget',
  begin: function () {
    document.querySelector('#poisontarget').style.display = 'none'}
}, 1000)
.add({
  targets: '#destoyedtarget',
  width: '-10vw',
  duration: 800,
  easing: 'easeInOutBack',
  transformorigin: 'center',
}, 1000)
.add({
  targets: '#destoyedtarget',
  begin: function () {
    document.querySelector('#destoyedtarget').style.display = 'none'}
}, 1000)

.add({
  targets: '.insect-planet',
  width: '22vw',
  easing: 'easeOutSine',
  duration: 700,
}, 1500)
.add({
  targets: '.poison-planet',
  width: '22vw',
  easing: 'easeOutSine',
  duration: 700,
}, 1500)
.add({
  targets: '.destroyed-planet',
  width: '22vw',
  easing: 'easeOutSine',
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
  targets: '.planet-text-name',
  easing: 'easeOutSine',
  top:'65vw',
  begin: function () {
    document.querySelector('.planet-text-name').style.display = 'block'}
}, 2200)
.add({
  targets: '.planet-name',
  easing: 'easeOutSine',
  opacity: ['0%','100%'],
  duration: 700,
  begin: function () {
    document.querySelector('.planet-name').style.display = 'block'}
}, 2200)
.add({
  targets: '.planet-decr',
  easing: 'easeOutSine',
  opacity: ['0%','100%'],
  duration: 700,
  begin: function () {
    document.querySelector('.planet-decr').style.display = 'block'}
}, 2200)


.add({
  targets: '#octotargetchar',
  easing: 'easeOutSine',
  duration: 1000,
  zindex: 3,
  width: ['-10vw','13vw'],
  begin: function () {
    document.querySelector('#octotargetchar').style.display = 'block'
  },
  }, 3000)

let targetsoctoPlay =
document.querySelector('#octotarget')

targetsoctoPlay.onclick = tlOcto.play






let tlOctoChar = anime.timeline({
autoplay: false
})

tlOctoChar
.add({
  targets: '#octotargetchar',
  width: ['13vw','-10vw'],
  duration: 800,
  easing: 'easeInOutBack' ,
})
.add({
  targets: '#octotargetchar',
  begin: function () {
    document.querySelector('#octotargetchar').style.display = 'none'}
})
.add({
  targets: '.octocirclechar',
  easing: 'easeOutSine',
  duration: 600,
  width: '3vw',
  zindex: 5,
  begin: function () {
    document.querySelector('.octocirclechar').style.display = 'block'
  },
})
.add({
  targets: '#octoAlienStripe',
  begin: function () {
    document.querySelector('#octoAlienStripe').style.display = 'block'},
}, 1200)
.add({
  targets: '.octopuslinechar',
  zindex: 5,
  strokeDashoffset: [anime.setDashoffset, 745],
  easing: 'easeOutSine',
  duration: 600,
  delay: function(el, i) { return i * 0 },
}, 1200)


.add({
  targets: '.planet-text',
  easing: 'easeOutSine',
  top: '36vw',
  begin: function () {
    document.querySelector('.planet-text').style.display = 'block'}
}, 1800)
.add({
  targets: '.planet-land-name',
  easing: 'easeOutSine',
  opacity: ['0%','100%'],
  duration: 700,
  begin: function () {
    document.querySelector('.planet-land-name').style.display = 'block'}
}, 1800)
.add({
  targets: '.planet-land-decr',
  easing: 'easeOutSine',
  opacity: ['0%','100%'],
  duration: 700,
  begin: function () {
    document.querySelector('.planet-land-decr').style.display = 'block'}
}, 1800)
.add({
  targets: '.planet-land-decr2',
  easing: 'easeOutSine',
  opacity: ['0%','100%'],
  duration: 700,
  begin: function () {
    document.querySelector('.planet-land-decr2').style.display = 'block'}
}, 1800)
.add({
  targets: '.octopuslandimg',
  easing: 'easeOutSine',
  opacity: ['0%','100%'],
  top: '15vw',
  duration: 700,
  begin: function () {
    document.querySelector('.octopuslandimg').style.display = 'block'}
}, 1800)


let targetsOctoCharPlay =
document.querySelector('#octotargetchar')

targetsOctoCharPlay.onclick = tlOctoChar.play
