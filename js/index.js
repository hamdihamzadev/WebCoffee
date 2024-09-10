let allNavLink = document.querySelectorAll('.nav-link')


allNavLink.forEach(ele => ele.addEventListener('click', () => {
    allNavLink.forEach(ele=> ele.classList.remove('active') )
    ele.classList.add('active')
   
}))


