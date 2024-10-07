document.addEventListener('DOMContentLoaded', function () {
  const logos = {
    'bayonetta 3': document.querySelector("img[alt='logo3']"),
    'bayonetta 2': document.querySelector("img[alt='logo2']"),
    'bayonetta 1': document.querySelector("img[alt='logo1']"),
  };

  const navLinks = document.querySelectorAll('.bayo-nav a');

  navLinks.forEach((link) => {
    link.addEventListener('mouseover', function () {
      const imgAlt = this.querySelector('img').alt;
      if (logos[imgAlt]) {
        logos[imgAlt].classList.add('show-logo'); // Add class to show logo with transition
      }
    });

    link.addEventListener('mouseout', function () {
      const imgAlt = this.querySelector('img').alt;
      if (logos[imgAlt]) {
        logos[imgAlt].classList.remove('show-logo'); // Remove class to hide logo with transition
      }
    });
  });
});
