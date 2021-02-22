(() => {
  function onScroll() {
    const sectionElems = Array.from(document.querySelectorAll("section"));
    sectionElems.forEach((sectionElem) => {
      const contElem = sectionElem.querySelector("article");
      const imgElem = sectionElem.querySelector("img");

      const scrollPosition = window.pageYOffset;
      const revealPosition = (contElem.offsetTop + contElem.offsetHeight) / 8;

      if (scrollPosition >= revealPosition) {
        imgElem.classList.add("reveal");
      }
      if (scrollPosition <= revealPosition) {
        imgElem.classList.remove("reveal");
      }
    });
  }

  function run() {
    document.addEventListener("scroll", onScroll);
  }

  run();
})();
