gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MorphSVGPlugin);

let skewSetter = gsap.quickTo("img", "skewY");
let clampy = gsap.utils.clamp(-10, 10); 

let smoother = ScrollSmoother.create({
  wrapper: '.animation_container',
  content: '.wrapper_content',
  smooth: 2,
  effects: true,
  onUpdate: self => skewSetter(clampy(self.getVelocity() / -25)),
  onStop: () => skewSetter(0)
});


gsap.fromTo( '.intro_header', { duration: 2, opacity: 0 },
  {
    duration: 1.5,
    opacity: 1,
    x: 0, y: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: '#000046',
    borderRadius: '8px',
    border: 'solid 2px rgba(255, 255, 255, 0.6)',
    padding: '3rem',
    ease: 'back.inOut' 
  });

  // Section Understand
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.understand',
      start: '-60%  center',
      end: '25%',
      scrub: true,
      // markers:true
    }
  })

  tl1.to( '#understand_title',  {
    duration: 0.2,
    x: 50,
    scale: 2,
    morphSVG: '#idea',
    ease: "power2.inOut",
  }, 'start')

  .fromTo('.understand_cont', { 
      opacity: 0,
      x: -300,
    },
    {
      duration: 0.5,
      scale: 1.5,
      opacity: 1,
      x: '25vw', 
      height: '40vh !important',
      // x: 200, 
      y: 150,
      ease: "circ.inOut",
    }, 'start')
  
  .to( '#understand_img',  {
    duration: 0.5,
    opacity: 0,
    y: -150,
    scale: 1,  
    border: 'solid #eee 25px',
    borderRadius: '10px'
  })
 

// Section Transform
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.transform',
    start: '-50% center',
    // end: 'bottom',
    end: '25%',
    scrub: true,
  }
})

tl2.to( '#transform_title',  {
  duration: 0.5,
  x: 50,
  scale: 2,
  morphSVG: '#nature',
  ease: "power2.inOut",
}, 'start')
.fromTo('.transform_text', {
    opacity: 0,
    x: 300,
  },
  {
    duration: 0.5,
    scale: 1.5,
    opacity: 1,
    x: 30, 
    y: 150,
    ease: "circ.inOut",
  }, 'start')

tl2.to( '#transform_img',  {
  duration: 0.5,
  opacity: 0,
  y: -150,
  scale: 1,  
  border: 'solid #fff 25px',
  borderRadius: '10px'
})

// Section Network
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.network',
    start: '-50% center',
    // end: 'bottom',
    end: '25%',
    scrub: true,
   
  }
})

tl3.to( '#network_title',  {
  duration: 0.5,
  x: 50,
  scale: 2,
  morphSVG: '#network',
  ease: "power2.inOut",
}, 'start')
.fromTo('.network_text', {
    opacity: 0,
    x: -200,
  },
  {
    duration: 0.2,
    scale: 1.5,
    opacity: 1,
    // x: 150, 
    // x: 300, 
    x: '20vw', 
    y: 150,
    ease: "circ.inOut",
  }, 'start')

  tl3.to( '#network_img',  {
  duration: 0.5,
  opacity: 0,
  y: -150,
  scale: 1,  
  border: 'solid #fff 25px',
  borderRadius: '10px'
})

// Section Outro
let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.outro',
    start: '-50% center',
    end: 'center',
    scrub: true,
  }
})
tl4.to('.outro_text', {
  scale: 5,
  duration: 1,
  
})


