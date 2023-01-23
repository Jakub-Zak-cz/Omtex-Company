document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const menuBtn = document.querySelector('.menu-btn');
let listOpen = document.querySelector("#unactive");
let menuOpen = false;
menuBtn.addEventListener('click', (event) => { 
   if(event.target === menuBtn) {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        listOpen.classList.remove("unactive");
        listOpen.classList.add("active");
        menuOpen = true;
        // document.body.style.overflow = "hidden";
        let rect = menuBtn.getBoundingClientRect();
        listOpen.style.top = `${rect.top}px`;
        listOpen.style.left = `${(window.innerWidth - rect.width) / 2}px`;
        /* listOpen.style.left = `${(window.innerWidth - rect.width) / 2}px`; i use this and i want it to go from right to the center but this shows that list from that menu to the center but that menu is not right at the  side but i want that list to go from the side */
        listOpen.style.position = 'fixed';
      } else {
        menuBtn.classList.remove('open');
        listOpen.classList.remove("active");
        listOpen.classList.add("unactive");
        menuOpen = false;
        document.body.style.overflow = "auto";
      }
   }
 

});

document.addEventListener('click', e => {
    if (!menuBtn.contains(e.target) && !listOpen.contains(e.target) || e.target.classList.contains("menu-btn__x")) {
      menuBtn.classList.remove('open');
      listOpen.classList.remove("active");
      listOpen.classList.add("unactive");
      menuOpen = false;
      // kdyz to vypnu tak nemuzu scrolovat
    }
  });

  