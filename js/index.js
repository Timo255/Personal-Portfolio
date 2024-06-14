const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('.navItem');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.navItem[href*=' + id +']').classList.add('active');
            })
        }
    })
}