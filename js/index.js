// let octopusAlienStripeRise = anime({
//   targets: '#octo-stripe-land',
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
  // scale: [2,1],
  // transformorigin: 'center',
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
}, 1600)
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
}, 1600)
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
}, 1600)

.add({
  targets: '.insect-planet',
  width: ['28vw','22vw'],
  easing: 'easeOutSine',
  duration: 50,
}, 1600)
.add({
  targets: '.poison-planet',
  width: ['40vw','22vw'],
  easing: 'easeOutSine',
  duration: 50,
}, 1600)
.add({
  targets: '.destroyed-planet',
  width: ['25vw','22vw'],
  easing: 'easeOutSine',
  duration: 50,
}, 1600)

.add({
  targets: '.octopus-planet',
  width: ['15vw','40vw'],
  left: '30vw',
  top: '14vw',
  easing: 'easeOutSine',
  duration: 50,
  zindex: 2,
})

.add({
  targets: '.planet-text-name',
  easing: 'easeOutSine',
  bottom: '5vw',
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
  targets: '#octotargetland',
  easing: 'easeOutSine',
  duration: 1000,
  zindex: 3,
  width: ['0vw','13vw'],
  begin: function () {
    document.querySelector('#octotargetland').style.display = 'block'
  },
  }, 3000)
.add({
  targets: '#octotargetchar',
  easing: 'easeOutSine',
  duration: 1000,
  zindex: 3,
  width: ['0vw','13vw'],
  begin: function () {
    document.querySelector('#octotargetchar').style.display = 'block'
  },
  }, 3000)

let targetsoctoPlay =
document.querySelector('#octotarget')

targetsoctoPlay.onclick = tlOcto.play


// ПОСМОТРЕТЬ ПЕЙЗАЖ



let tlOctoLand = anime.timeline({
autoplay: false
})

tlOctoLand
.add({
  targets: '#octotargetland',
  width: ['13vw','-10vw'],
  duration: 800,
  easing: 'easeInOutBack' ,
})
.add({
  targets: '#octotargetland',
  begin: function () {
    document.querySelector('#octotargetland').style.display = 'none'}
})
.add({
  targets: '.octocircleland',
  easing: 'easeOutSine',
  duration: 600,
  width: '3vw',
  zindex: 5,
  begin: function () {
    document.querySelector('.octocircleland').style.display = 'block'
  },
}, 1200)
.add({
  targets: '#octo-stripe-land',
  begin: function () {
    document.querySelector('#octo-stripe-land').style.display = 'block'},
}, 1200)
.add({
  targets: '.octopuslineland',
  zindex: 5,
  strokeDashoffset: [anime.setDashoffset, 745],
  easing: 'easeOutSine',
  duration: 600,
  delay: function(el, i) { return i * 0 },
}, 1200)


.add({
  targets: '.planet-text-land',
  easing: 'easeOutSine',
  top: '36vw',
  begin: function () {
    document.querySelector('.planet-text-land').style.display = 'block'}
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
  top: '26vw',
  duration: 700,
  begin: function () {
    document.querySelector('.octopuslandimg').style.display = 'block'}
}, 1800)


let targetsOctoLAndPlay =
document.querySelector('#octotargetland')

targetsOctoLAndPlay.onclick = tlOctoLand.play





// ПОСМОТРЕТЬ ПЕРСОНАЖА





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
}, 1200)
.add({
  targets: '#octo-stripe-char',
  begin: function () {
    document.querySelector('#octo-stripe-char').style.display = 'block'},
}, 1200)
.add({
  targets: '.octopuslinechar',
  zindex: 5,
  strokeDashoffset: [anime.setDashoffset, 870],
  easing: 'easeOutSine',
  duration: 600,
  delay: function(el, i) { return i * 0 },
}, 1200)


.add({
  targets: '.planet-text-char',
  easing: 'easeOutSine',
  top: '44vw',
  begin: function () {
    document.querySelector('.planet-text-char').style.display = 'block'}
}, 1800)
.add({
  targets: '.planet-char-name',
  easing: 'easeOutSine',
  opacity: ['0%','100%'],
  duration: 700,
  begin: function () {
    document.querySelector('.planet-char-name').style.display = 'block'}
}, 1800)
.add({
  targets: '.planet-char-decr',
  easing: 'easeOutSine',
  opacity: ['0%','100%'],
  duration: 700,
  begin: function () {
    document.querySelector('.planet-char-decr').style.display = 'block'}
}, 1800)
.add({
  targets: '.octopuscharimg',
  easing: 'easeOutSine',
  opacity: ['0%','100%'],
  top: '24vw',
  duration: 700,
  begin: function () {
    document.querySelector('.octopuscharimg').style.display = 'block'}
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
  targets: '.planet-text-land',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  top: ['36vw','33vw'],
  duration: 700,
}, 0)
.add({
  targets: '.planet-text-land',
  begin: function () {
    document.querySelector('.planet-text-land').style.display = 'none'}
}, 700)
.add({
  targets: '.planet-land-name',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  duration: 700,
}, 0)
.add({
  targets: '.planet-land-name',
  begin: function () {
    document.querySelector('.planet-land-name').style.display = 'none'}
}, 700)
.add({
  targets: '.planet-land-decr',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  duration: 700,
}, 0)
.add({
  targets: '.planet-land-decr',
  begin: function () {
    document.querySelector('.planet-land-decr').style.display = 'none'}
}, 700)
.add({
  targets: '.planet-land-decr2',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  duration: 700,
}, 0)
.add({
  targets: '.planet-land-decr2',
  begin: function () {
    document.querySelector('.planet-land-decr2').style.display = 'none'}
}, 700)
.add({
  targets: '.octopuslandimg',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  top: ['26vw','23vw'],
  duration: 700,
}, 0)
.add({
  targets: '.octopuslandimg',
  begin: function () {
    document.querySelector('.octopuslandimg').style.display = 'none'}
}, 700)


.add({
  targets: '.octocircleland',
  easing: 'easeOutSine',
  duration: 600,
  width: ['3vw','-10vw'],
  zindex: 5,
}, 700)
.add({
  targets: '.octocircleland',
  begin: function () {
    document.querySelector('.octocircleland').style.display = 'none'
  },
})
.add({
  targets: '.octopuslineland',
  zindex: 5,
  strokeDashoffset: [anime.setDashoffset, -365],
  easing: 'easeOutSine',
  duration: 600,
  delay: function(el, i) { return i * 1000 },
  direction: 'alternate',
}, 700)
.add({
  targets: '#octo-stripe-land',
  begin: function () {
    document.querySelector('#octo-stripe-land').style.display = 'none'},
})




.add({
  targets: '.planet-text-char',
  easing: 'easeOutSine',
  top: ['44vw','41vw'],
}, 0)
.add({
  targets: '.planet-text-char',
  begin: function () {
    document.querySelector('.planet-text-char').style.display = 'none'}
}, 700)
.add({
  targets: '.planet-char-name',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  duration: 700,
}, 0)
.add({
  targets: '.planet-char-name',
  begin: function () {
    document.querySelector('.planet-char-name').style.display = 'none'}
}, 700)
.add({
  targets: '.planet-char-decr',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  duration: 700,
}, 0)
.add({
  targets: '.planet-char-decr',
  begin: function () {
    document.querySelector('.planet-char-decr').style.display = 'none'}
}, 700)
.add({
  targets: '.octopuscharimg',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  top: ['24vw','21vw'],
  duration: 700,
}, 0)
.add({
  targets: '.octopuscharimg',
  begin: function () {
    document.querySelector('.octopuscharimg').style.display = 'none'}
}, 700)
.add({
  targets: '.octocirclechar',
  easing: 'easeOutSine',
  duration: 600,
  width: ['3vw','-10vw'],
  zindex: 5,
}, 700)
.add({
  targets: '.octocirclechar',
  begin: function () {
    document.querySelector('.octocirclechar').style.display = 'none'
  },
})


.add({
  targets: '.octopuslinechar',
  zindex: 5,
  strokeDashoffset: [anime.setDashoffset, -375],
  easing: 'easeOutSine',
  duration: 600,
  delay: function(el, i) { return i * 0 },
}, 700)
.add({
  targets: '#octo-stripe-char',
  begin: function () {
    document.querySelector('#octo-stripe-char').style.display = 'none'},
})





.add({
  targets: '.planet-text-name',
  easing: 'easeOutSine',
  bottom:['5vw','2vw'],
}, 1400)
.add({
  targets: '.planet-text-name',
  begin: function () {
    document.querySelector('.planet-text-name').style.display = 'none'}
})
.add({
  targets: '.planet-name',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  duration: 700,
}, 1400)
.add({
  targets: '.planet-name',
  begin: function () {
    document.querySelector('.planet-name').style.display = 'none'}
})
.add({
  targets: '.planet-decr',
  easing: 'easeOutSine',
  opacity: ['100%','0%'],
  duration: 700,
}, 1400)
.add({
  targets: '.planet-decr',
  begin: function () {
    document.querySelector('.planet-decr').style.display = 'none'}
})
.add({
  targets: '.octopus-planet',
  // width: ['40vw','15vw'],
  width: '15vw',
  left: ['50vw'],
  top: ['5vw'],
  easing: 'easeOutSine',
  duration: 50,
  zindex: 2,
}, 2000)


.add({
  targets: '.insect-planet',
  // width: ['22vw','28vw'],
  width: '28vw',
  easing: 'easeOutSine',
  duration: 50,
}, 2700)
.add({
  targets: '.poison-planet',
  // width: ['22vw','40vw'],
  width: '40vw',
  easing: 'easeOutSine',
  duration: 50,
}, 2700)
.add({
  targets: '.destroyed-planet',
  // width: ['22vw','25vw'],
  width: '25vw',
  easing: 'easeOutSine',
  duration: 50,
}, 2700)

.add({
  targets: '#octotarget',
  width: ['-10vw','10vw'],
  duration: 800,
  easing: 'easeInOutBack',
  begin: function () {
    document.querySelector('#octotarget').style.display = 'block'}
}, 3400)
.add({
  targets: '#insecttarget',
  width: ['-10vw','10vw'],
  duration: 800,
  easing: 'easeInOutBack',
  begin: function () {
    document.querySelector('#insecttarget').style.display = 'block'}
}, 3400)
.add({
  targets: '#poisontarget',
  width: ['-10vw','10vw'],
  duration: 800,
  easing: 'easeInOutBack',
  transformorigin: 'center',
  begin: function () {
    document.querySelector('#poisontarget').style.display = 'block'}
}, 3400)
.add({
  targets: '#destoyedtarget',
  width: ['-10vw','10vw'],
  duration: 800,
  easing: 'easeInOutBack',
  transformorigin: 'center',
  begin: function () {
    document.querySelector('#destoyedtarget').style.display = 'block'}
}, 3400)




let backToSpaceFromOctoButton =
document.querySelector('.back-to-map')

backToSpaceFromOctoButton.onclick = backToSpaceFromOcto.play
