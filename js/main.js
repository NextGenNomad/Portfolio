
window.addEventListener('scroll', function() {
    var navContainer = document.querySelector('.nav-container');
    if (window.scrollY > 0) {
        navContainer.classList.add('shadow');
    } else {
        navContainer.classList.remove('shadow');
    }
});



const calcScrollValue = () => {
    let backToTopBtn = document.getElementById('backToTopBtn')
    // position of the scroll
    let position = document.documentElement.scrollTop 
    //height of alrady scrolled
    let calcHeight = document.documentElement.scrollHeight - 
                     document.documentElement.clientHeight
    let scrollvalue = Math.round((100 * position) / calcHeight)
    if([position] > 20 || position > 20){
        backToTopBtn.style.display = 'flex'
     }else{
         backToTopBtn.style.display = 'none'
     } 
     // back to  top 
     backToTopBtn.addEventListener('click',() =>{
       document.documentElement.scrollTop = 0
     })
     //progress value
     backToTopBtn.style.background = `conic-gradient(#39cccc ${scrollvalue}%, transparent ${scrollvalue}%)`;

}

window.onscroll = calcScrollValue
window.onload = calcScrollValue




gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({ default: { duration: 1 } });
let imgCard = document.querySelector('.hero .right .img__card');

tl.from('.anim1', { y: -6, stagger: 0.3, opacity: 0, duration: 1 })
  .from(imgCard, { y: 50, opacity: 0, ease: "power4.easeOut" }, '-=.3')
  .from('.hero__design',{
    opacity: 0, x: 50, ease: "power4.easeOut"
  }, '-=.1')
  .from('.poly-anim',{
    stagger : .2,
    scale: 0.1,
    opacity: 0,
    duration: 1,
    ease: Back.easeOut.config(1.7)
}, '-=.1')

/*====== ABOUT ME SECTION  ANIM ====*/

gsap.to('.about .header-box, .about .text__desc', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger : '.about',
        start: 'top 80%'
    }
});

/*====== SERVICE SECTION  ANIM ====*/

gsap.to('.service .header-box, .service .text__desc', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger : '.service',
        start: 'top 80%'
    }
});


gsap.to('.card', {
opacity: 1,
y: 0,
duration: 1,
stagger: 0.3,
scrollTrigger: {
    trigger: '.card-container',
    start: 'top bottom',
    end: 'bottom center',
    toggleActions: 'play none none reverse'
}
});

/*====== SKILLS SECTION  ANIM ====*/

gsap.to('.skills__experience .left .header-box', {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.skills__experience',
        start: 'top 80%',
        end: 'bottom 70%',
        toggleActions: 'play none none none'
    }
});

gsap.to('.skills__experience .text__desc', {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.skills__experience',
        start: 'top 80%',
        end: 'bottom 70%',
        toggleActions: 'play none none none'
    }
});

gsap.from('.skills__experience .right', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.skills__experience',
        start: 'top 80%',
        end: 'bottom 70%',
        toggleActions: 'play none none none'
    }
});

gsap.from('.skills__container ul li', {
    scrollTrigger: {
        trigger: '.skills__experience',
        start: 'top 80%',
        end: 'bottom 70%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});

gsap.from('.skills__experience .right li', {
    scrollTrigger: {
        trigger: '.skills__experience',
        start: 'top 80%',
        end: 'bottom 70%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});


/*====== PORTFOLIO SECTION  ANIM ====*/

gsap.to('.portfolio .header-box, .portfolio .text__desc, .portfolio .cv__btn', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger : '.portfolio',
        start: 'top 80%'
    }
})


gsap.from('.portfolio__content .right .card', {
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger: '.portfolio',
        start: 'top 80%', 
        toggleActions: 'play none none none' 
    }
});

gsap.from('.portfolio__content .pagination, .portfolio__content .arrow-container', {
    opacity: 0,
    duration: 1,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger: '.portfolio__content .card',
        start: 'top 80%', 
        toggleActions: 'play none none none'
    },
});



/*====== TESTEMONIALS SECTION ANIM =========*/

gsap.to('.testemonials .header-box, .testemonials .polka', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger : '.portfolio',
        start: 'top 80%'
    }
});

gsap.from('.testemonials .user-card', {
    opacity: 0,
    y: 50,
    stagger: 0.3, 
    duration: 1,
    ease: 'power4.eseOut',

    scrollTrigger: {
        trigger: '.testemonials',
        start: 'top 80%', 
        toggleActions: 'play none none none' 
    }
});


/*======= FOOTER SECTION ANIM ======*/

gsap.to('.footer .header-box, .footer .polka', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger : '.portfolio',
        start: 'top 80%'
    }
});


gsap.from('.footer .img__card img', {
    opacity : 0,
    y: 50,
    duration: 1,
    ease: 'power4.easeOut',

    scrollTrigger: {
        trigger: '.footer .contact-details .details',
        start: 'top 80%'
    }
})

gsap.from('.footer .contact-details .details, .footer .form__container', {
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
    ease: 'power4.easeOut',

    scrollTrigger: {
        trigger: '.footer .contact-details .details',
        start: 'top 80%', 
        toggleActions: 'play none none none'
    }
});


gsap.from('.footer .social ul', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power4.easeOut',

    scrollTrigger: {
        trigger: '.footer .contact-details .details',
        start: 'top 80%',
        toggleActions: 'play none none none' 
    }
});
