const navLinks = document.querySelectorAll('header nav a');
const menuLinks = document.querySelector('#menu-icon')
const navBar = document.querySelector('header nav')

menuLinks.addEventListener('click',()=>{
    menuLinks.classList.toggle('bx-x')
    navBar.classList.toggle('active')
})
navLinks.forEach((link,idx)=>{
    link.addEventListener('click',()=>{
        const sections = document.querySelectorAll('section')
        sections.forEach((s,idx)=>{
            s.classList.remove('active')
        })
        sections[idx].classList.add('active')

        navLinks.forEach((l)=>{
            l.classList.remove('active')
        })
        navLinks[idx].classList.add('active')
    })
})

const resumeBtn = document.querySelectorAll('.resume-btn');

resumeBtn.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        const resumeDetails = document.querySelectorAll('.resume-detail')
        resumeDetails.forEach((d)=>{
            d.classList.remove('active')
        })
        resumeDetails[idx].classList.add('active')

        resumeBtn.forEach((b)=>{
            b.classList.remove('active')
        })
        btn.classList.add('active')
    })
})