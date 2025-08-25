console.log(gsap);
gsap.registerPlugin(ScrollTrigger);





gsap.to(".contenedor",{
 x:0,
 duration:2,
 scrollTrigger: {
    trigger: ".contenedor",
    start: "top 65%",
     end: "bottom 55%",
  }

  

})


gsap.to(".contenedor2",{
 x:0,
 duration:2,
 scrollTrigger: {
    trigger: ".contenedor2",
    start: "top 55%",
     end: "bottom 55%",
    
  }

  

})



gsap.fromTo(".content-img img",
  {x:-200, opacity:0},
  {
    x:0,
    opacity:1,
    duration:1,
    scrollTrigger: {
      trigger: ".content-img",
      start: "top 72%",
       end: "bottom 70%",
       toggleActions: "play reverse play reverse",
       scrub:true,
       
    }
 
}
)



gsap.fromTo(".irPastel",
  {x:400, opacity:0},
  {
    x:0,
    opacity:1,
    duration:1,
    scrollTrigger:{
      trigger: ".content-img",
      start: "top 72%",
       end: "bottom 70%",
        toggleActions: "play reverse play reverse",   
        scrub:true,
        //markers:true
    }


  })


