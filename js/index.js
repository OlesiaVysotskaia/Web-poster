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

// ПРИБЛИЗИТЬ ПЛАНЕТУ

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
}, 800)
.add({
  targets: '#insecttarget',
  begin: function () {
    document.querySelector('#insecttarget').style.display = 'none'}
}, 800)
.add({
  targets: '#poisontarget',
  width: '-10vw',
  duration: 800,
  easing: 'easeInOutBack',
  transformorigin: 'center',
}, 800)
.add({
  targets: '#poisontarget',
  begin: function () {
    document.querySelector('#poisontarget').style.display = 'none'}
}, 800)
.add({
  targets: '#destoyedtarget',
  width: '-10vw',
  duration: 800,
  easing: 'easeInOutBack',
  transformorigin: 'center',
}, 800)
.add({
  targets: '#destoyedtarget',
  begin: function () {
    document.querySelector('#destoyedtarget').style.display = 'none'}
}, 800)

.add({
  targets: '.insect-planet',
  width: ['28vw','22vw'],
  easing: 'easeOutSine',
  duration: 700,
}, 1600)
.add({
  targets: '.poison-planet',
  width: ['40vw','22vw'],
  easing: 'easeOutSine',
  duration: 700,
}, 1600)
.add({
  targets: '.destroyed-planet',
  width: ['25vw','22vw'],
  easing: 'easeOutSine',
  duration: 700,
}, 1600)

.add({
  targets: '.octopus-planet',
  width: ['15vw','40vw'],
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


// ПОСМОТРЕТЬ ПЕЙЗАЖ



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

// ВЕРНУТЬСЯ В КОСМОС

let backToSpaceFromOcto = anime.timeline({
autoplay: false,
})

backToSpaceFromOcto
.add({
  targets: '.planet-text',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  top: ['36vw','33vw'],
}, 1)
.add({
  targets: '.planet-text',
  begin: function () {
    document.querySelector('.planet-text').style.display = 'none'}
}, 1)
.add({
  targets: '.planet-land-name',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  duration: 700,
}, 1)
.add({
  targets: '.planet-land-name',
  begin: function () {
    document.querySelector('.planet-land-name').style.display = 'none'}
}, 1)
.add({
  targets: '.planet-land-decr',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  duration: 700,
}, 1)
.add({
  targets: '.planet-land-decr',
  begin: function () {
    document.querySelector('.planet-land-decr').style.display = 'none'}
}, 1)
.add({
  targets: '.planet-land-decr2',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  duration: 700,
}, 1)
.add({
  targets: '.planet-land-decr2',
  begin: function () {
    document.querySelector('.planet-land-decr2').style.display = 'none'}
}, 1)
.add({
  targets: '.octopuslandimg',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  top: ['15vw','12vw'],
  duration: 700,
}, 1)
.add({
  targets: '.octopuslandimg',
  begin: function () {
    document.querySelector('.octopuslandimg').style.display = 'none'}
}, 1)


.add({
  targets: '.octocirclechar',
  easing: 'easeOutSine',
  duration: 600,
  width: ['3vw','-10vw'],
  zindex: 5,
})
.add({
  targets: '.octocirclechar',
  begin: function () {
    document.querySelector('.octocirclechar').style.display = 'none'
  },
})
.add({
  targets: '.octopuslinechar',
  zindex: 5,
  strokeDashoffset: [anime.setDashoffset, 1000],
  easing: 'easeOutSine',
  duration: 600,
  delay: function(el, i) { return i * 0 },
}, 400)
.add({
  targets: '#octoAlienStripe',
  begin: function () {
    document.querySelector('#octoAlienStripe').style.display = 'none'},
}, 400)



.add({
  targets: '.planet-text-name',
  easing: 'easeOutSine',
  top:['65vw','62vw'],
}, 1000)
.add({
  targets: '.planet-text-name',
  begin: function () {
    document.querySelector('.planet-text-name').style.display = 'none'}
}, 1000)
.add({
  targets: '.planet-name',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  duration: 700,
}, 1000)
.add({
  targets: '.planet-name',
  begin: function () {
    document.querySelector('.planet-name').style.display = 'none'}
}, 1000)
.add({
  targets: '.planet-decr',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  duration: 700,
}, 1000)
.add({
  targets: '.planet-decr',
  begin: function () {
    document.querySelector('.planet-decr').style.display = 'none'}
}, 1000)
.add({
  targets: '.octopus-planet',
  // width: ['40vw','15vw'],
  width: '15vw',
  left: ['50vw'],
  top: ['5vw'],
  easing: 'easeOutSine',
  duration: 700,
  zindex: 2,
})


.add({
  targets: '.insect-planet',
  // width: ['22vw','28vw'],
  width: '28vw',
  easing: 'easeOutSine',
  duration: 700,
}, 1700)
.add({
  targets: '.poison-planet',
  // width: ['22vw','40vw'],
  width: '40vw',
  easing: 'easeOutSine',
  duration: 700,
}, 1700)
.add({
  targets: '.destroyed-planet',
  // width: ['22vw','25vw'],
  width: '25vw',
  easing: 'easeOutSine',
  duration: 700,
}, 1700)

.add({
  targets: '#octotarget',
  width: ['-10vw','10vw'],
  duration: 800,
  easing: 'easeInOutBack',
  begin: function () {
    document.querySelector('#octotarget').style.display = 'block'}
}, 2400)
.add({
  targets: '#insecttarget',
  width: ['-10vw','10vw'],
  duration: 800,
  easing: 'easeInOutBack',
  begin: function () {
    document.querySelector('#insecttarget').style.display = 'block'}
}, 2400)
.add({
  targets: '#poisontarget',
  width: ['-10vw','10vw'],
  duration: 800,
  easing: 'easeInOutBack',
  transformorigin: 'center',
  begin: function () {
    document.querySelector('#poisontarget').style.display = 'block'}
}, 2400)
.add({
  targets: '#destoyedtarget',
  width: ['-10vw','10vw'],
  duration: 800,
  easing: 'easeInOutBack',
  transformorigin: 'center',
  begin: function () {
    document.querySelector('#destoyedtarget').style.display = 'block'}
}, 2400)




let backToSpaceFromOctoButton =
document.querySelector('.back-to-map')

backToSpaceFromOctoButton.onclick = backToSpaceFromOcto.play
