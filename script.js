const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const counters = document.querySelectorAll("[data-count]");
let countersStarted = false;

const animateCounters = () => {
  if (countersStarted) return;

  const numbersSection = document.querySelector(".numbers");
  const sectionTop = numbersSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 80) {
    countersStarted = true;

    counters.forEach((counter) => {
      const target = Number(counter.getAttribute("data-count"));
      let current = 0;
      const increment = Math.max(1, Math.ceil(target / 80));

      const updateCounter = () => {
        current += increment;

        if (current >= target) {
          counter.textContent = target;
          return;
        }

        counter.textContent = current;
        requestAnimationFrame(updateCounter);
      };

      updateCounter();
    });
  }
};

window.addEventListener("scroll", animateCounters);
window.addEventListener("load", animateCounters);