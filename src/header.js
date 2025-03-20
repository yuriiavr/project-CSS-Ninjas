// toggles mobile menu open/close
document.querySelector('.burger-menu').addEventListener('click', function () {
  document
    .querySelector('.mobile-header-nav-sidebar-overlay')
    .classList.toggle('is-open');
  document.querySelector('.burger-menu').classList.toggle('is-active');
});

//hides mobile menu on window resize if it is open
window.addEventListener('resize', function () {
  if (window.innerWidth >= 1280) {
    document
      .querySelector('.mobile-header-nav-sidebar-overlay')
      .classList.remove('is-open');
    document.querySelector('.burger-menu').classList.remove('is-active');
  }
});

// makes clicked nav link active
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".header-nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      // Remove active class from all links
      navLinks.forEach(nav => nav.classList.remove("header-nav-link-active"));

      // Add active class to the clicked link
      this.classList.add("header-nav-link-active");
    });
  });

  // Remove active class when scrolling to the top
  window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
      navLinks.forEach(link => link.classList.remove("header-nav-link-active"));
    }
  });
});