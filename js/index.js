let tl = anime.timeline({
  autoplay: false
})

tl
.add({
  targets: '#octotarget',
  width: '-10vw',
  duration: 1000,
  easing: 'easeInOutBack' ,
  display: 'none',
})
.add({
  targets: '#insecttarget',
    width: '-10vw',
    easing: 'easeInOutBack',
    duration: 1000,
    display: 'none',
}, 1000)
.add({
  targets: '#poisontarget',
    width: '-10vw',
    easing: 'easeInOutBack',
    duration: 1000,
    display: 'none',
}, 1000)
.add({
  targets: '#destoyedtarget',
    width: '-10vw',
    easing: 'easeInOutBack',
    duration: 1000,
    display: 'none',
}, 1000)

.add({
  targets: '.insect-planet',
    width: '22vw',
    easing: 'easeInOutBack',
    duration: 1000,
}, 1500)
.add({
  targets: '.poison-planet',
    width: '22vw',
    easing: 'easeInOutBack',
    duration: 1000,
}, 1500)
.add({
  targets: '.destroyed-planet',
    width: '22vw',
    easing: 'easeInOutBack',
    duration: 1000,
}, 1500)

.add({
  targets: '.octopus-planet',
    width: '40vw',
    left: '30vw',
    top: '14vw',
    easing: 'easeOutSine',
    duration: 1000,
    zindex: 2,
})

.add({
  targets: '#octotargetland',
    easing: 'easeOutSine',
    duration: 1000,
    zindex: 3,
    opacity: 1,
    display: 'inline',
})

let targetsoctoPlay =
document.querySelector('#octotarget')

targetsoctoPlay.onclick = tl.play
























//   targets: '.octopus',
//   width: '-10vw',
//   autoplay: false,
//   easing: 'easeInOutBack',
//   duration: 2000,
// })

// let viewplanet1 = anime({
//   targets: '.octopus',
//   width: '-10vw',
//   autoplay: false,
//   easing: 'easeInOutBack',
//   duration: 2000,
// })
// let viewplanet2 = anime({
//   targets: '.octopus-planet',
//   width: '70vw',
//   transform: translate(-50%, -50%),
//   autoplay: false,
//   easing: 'easeOutSine',
//   duration: 4000,
// })
// let viewplanet3 = anime({
//   targets: '.poison-planet .insect-planet .destroyed-planet',
//   width: '30vw',
//   autoplay: false,
//   easing: 'easeOutSine',
//   duration: 4000,
// })
// let viewplanet4 = anime({
//   targets: '.target .alien .octopus',
//   display: 'block',
//   width: ['-10vw', '10vw'],
//   autoplay: false,
//   easing: 'easeOutSine',
//   duration: 4000,
// })




// let viewplanet1 = anime.timeline({
//   targets: '#octotarget',
//   // width: ['10vw', '-10vw'],
//   scale: -1,
//   autoplay: false,
//   easing: 'easeInOutBack',
//   duration: 2000,
// }, 0)
// viewplanet1.add({
//   targets: '.octopus-planet',
//   width: '70vw',
//   autoplay: false,
//   easing: 'easeOutSine',
//   duration: 4000,
// }, 0)
// viewplanet1.add({
//   targets: '.poison-planet .insect-planet .destroyed-planet',
//   width: '30vw',
//   autoplay: false,
//   easing: 'easeOutSine',
//   duration: 4000,
// }, 3000)
// viewplanet1.add({
//   targets: '.target .alien .octopus',
//   display: 'block',
//   width: ['-10vw', '10vw'],
//   autoplay: false,
//   easing: 'easeOutSine',
//   duration: 4000,
// }, 8000)

// let planetbutton = document.querySelector('.octopus')
//
// planetbutton.onclick = viewplanet1.play



// let targetsPlay =
// document.querySelector('.octopus')
//
// targetsPlay.onclick = targets.play
//
//
// let targets2 = anime({
//   targets: '.insect',
//   width: '-10vw',
//   autoplay: false,
//   easing: 'easeInOutBack',
//   duration: 2000,
// })
//
// let targetsPlay2 =
// document.querySelector('.insect')
//
// targetsPlay2.onclick = targets2.play
//
// let targets3 = anime({
//   targets: '.poison',
//   width: '-10vw',
//   autoplay: false,
//   easing: 'easeInOutBack',
//   duration: 2000,
// })
//
// let targetsPlay3 =
// document.querySelector('.poison')
//
// targetsPlay3.onclick = targets3.play
//
//
// let targets4 = anime({
//   targets: '.destroyed',
//   width: '-10vw',
//   autoplay: false,
//   easing: 'easeInOutBack',
//   duration: 2000,
// })
//
// let targetsPlay4 =
// document.querySelector('.destroyed')
//
// targetsPlay4.onclick = targets4.play
