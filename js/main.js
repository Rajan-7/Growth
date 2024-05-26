document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    // alert(1);
    const groupHeader = e.target.closest(".faq-group-header");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const icon = groupHeader.querySelector("i");
    const groupBody = group.querySelector(".faq-group-body");

    // toggle

    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // toggle the open of the body

    groupBody.classList.toggle("open");

    // close other faq bodies
    const otherGroups = document.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector("i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});

// mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
