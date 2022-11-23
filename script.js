/////////////////////////////////////////////////////
//Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    //Scroll to top

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      // console.log(section);
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

////////////////////////////////////////////////////////
// sticky navigation

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  }
);
obs.observe(sectionHero);

// Fixing flexbox gap property missing in some Safari versions

// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   // console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }

// checkFlexGap();
