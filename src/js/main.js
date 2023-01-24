document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > header.offsetHeight) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
});
    