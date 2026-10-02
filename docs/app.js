const pages = {
  home: `
    <section class="hero page-section">
      <div class="hero-text">
        <p class="eyebrow">Welcome</p>
        <p>
xFlow is a research group led by Dr Bruño Fraga whose focus is modelling complex flows for environmental and healthcare applications.
We develop in-house algorithms and numerical models to solve multiphase flows, with a particular emphasis in particle-laden or dispersed flows, where one of the phases is split in many small portions and submerged in a fluid matrix. We have a solid track record creating models for fluid-solid interaction, four-way coupled particle-laden flows, Eulerian-Lagrangian frameworks or chemistry-fluids coupling among other things. In terms of applications, some key current topics are the spread of expiratory bioaerosols, transport of microplastics in freshwater systems, flow through porous media, multiphase turbulence and bubble plume dynamics.
Check out projects and publications below to learn more, and get in touch if you want to try our base model, MultiFlow3D.
        </p>
        <button class="primary-button" type="button" data-page="projects">
          Explore our projects
        </button>
        <button class="primary-button" type="button" data-page="projects">
          Meet the Team
        </button>
      </div>

      <img
        class="hero-image"
        src="../images/github1.jpg"
        alt="Expiratory particle dispersion by turbulent exhalation jet during speaking made by <a href="https://www.linkedin.com/in/aleksandra-monka-41115331b/">Aleksandra Monka</a>"
      >  <figcaption>
    Expiratory particle dispersion by turbulent exhalation jet during speaking.
    Image by Aleksandra Monka.
  </figcaption>
</figure>
    </section>
  `,

  projects: `
    <section class="page-section">
      <div class="section-heading">
        <p class="eyebrow">What we do</p>
        <h1>Our Projects</h1>
        <p>Discover some of the work our team is proud of.</p>
      </div>
      <div class="card-grid" id="projects-list"></div>
    </section>
  `,

members: `
  <section class="page-section">
    <div class="section-heading">
      <p class="eyebrow">The people behind the work</p>
      <h1>Meet Our Members</h1>
      <p>Add a short introduction to your team here.</p>
    </div>

    <section>
      <h2>Current Members</h2>
      <div class="card-grid" id="current-members-list"></div>
    </section>

    <section>
      <h2>Past Members</h2>
      <div class="card-grid" id="past-members-list"></div>
    </section>
  </section>
`

};

// Add or edit project entries here.
// Image paths are relative to index.html.
const projects = [
  {
    title: "BreatHE IN",
    description: "Funded by EPSRC, BreatHE IN will focus on improvements to the built environment in both existing and new buildings. Officially launched in November 2025, BreatHE IN is led by the University of Birmingham and supported by partners including Oxford, Cardiff, Nottingham, UCL, Bath, the UKHSA, Hertfordshire County Council, Siemens, ANSYS, BIOREME and the Met Office. The push towards airtight indoor spaces, to preserve energy and isolate us from the outside weather and noise, can also have undesired consequences. BreatHE IN provides a platform and resources to facilitate the interaction between researchers and stakeholders from different disciplines and sectors and to train the new generation of experts to design healthier indoor environments. BreatHE IN hosted its first interdisciplinary sandpit on Wednesday 29 April at the University of Birmingham, bringing together 75 participants from across the UK, including researchers, industry professionals and public contributors from diverse disciplines, reflecting a commitment to integrating knowledge across sectors to address complex challenges in indoor air quality and the built environment. A total of 25 feasibility funding applications were submitted following the sandpit, competing for a £129k in flexible funding..",
    image: "../images/github2.jpg",
    alt: "A group photo from the BreatHE IN sandpit on 29th April 2026.",
    caption: "BreatHE IN sandpit on 29th April 2026."
  },
    {
    title: "Fusion Forest",
    description: "Fusion Forest will provide strategies and tools to enhance the natural immunity of forests and halt tree epidemics. We combine knowledge on tree immunity with ecology and physics. We will increase forest resilience by proposing combinations of tree species and priming of defence. We will bring together ecological and physical modelling to create a tool – ForestFlow – to predict the spread of fungal spores and design physical barriers to it. The decisions we make today will determine the forest landscapes of future generations. Fusion Forest will prevent high disease pressures and enhance tree immunity ahead of the occurrence of outbreaks.",
    image: "../images/github3.jpg",
    alt: "A Schematic vision for Fusion Forest, showing a plan for disease suppression in forests by enhancing tree immunity, reducing disease pressure, and designing barriers to pathogens.",
    caption: "A schematic vision for Fusion Forest."
  },
  {
    title: "Build Air",
    description: "BuildAir is a UKRI-funded interdisciplinary consortium committed to design new research to tackle airborne epidemic outbreaks. With over 20 academic and 8 non-academic partners, our goal is to consolidate the lessons learned from the COVID-19 pandemic and provide tools that leverage sensing and modelling to facilitate decision-making and quick responses to respiratory infections.",
  },
    {
    title: "IAQ-EMS",
    description: "Led by Prof Christian Pfrang, the project "Indoor Air Quality Emissions & Modelling System (IAQ-EMS)" aims to develop ambitious software and data tools to advance the UK’s capacity for indoor air quality modelling, for estimation of emissions and exposure. IAQ-EMS aims to enable collaboration between the investigators involved to deliver a progressive suite of open access resources for the research community which is highly capable and readily extendable. Collaboration within this project will draw on the expertise of investigators which includes the areas of air quality monitoring, chemical and dynamical modelling, built environment and public health.",
    image: "../images/github3.jpg",
    alt: "The graphic shows air flow in different ventilation scenarios: unventilated, natural ventilation and mechanical extraction.",
    caption: "ChemFlow3D solves explicitly basic chemical reactions as the fluid flow evolves in space in time. It is built on the MultiFlow3D engine."
  }
];

// Add or edit team members here.
const members = [
  {
    title: "Member Name",
    description: "Add a role, area of expertise, or short biography.",
    image: "images/member-1.jpg",
    alt: "Portrait of Member Name"
  },
  {
    title: "Another Member",
    description: "Add this member's role or a short biography.",
    image: "images/member-2.jpg",
    alt: "Portrait of Another Member"
  }
];

const mainContent = document.querySelector("#main-content");
const navButtons = document.querySelectorAll(".nav-button");

function createCards(items) {
  return items.map(item => `
    <article class="card">
      <img src="${item.image}" alt="${item.alt}">
      <div class="card-content">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
      </div>
    </article>
  `).join("");
}

function showPage(pageName) {
  const page = pages[pageName] ? pageName : "home";
  mainContent.innerHTML = pages[page];

  if (page === "projects") {
    document.querySelector("#projects-list").innerHTML = createCards(projects);
  }

  if (page === "members") {
    document.querySelector("#members-list").innerHTML = createCards(members);
  }

  navButtons.forEach(button => {
    const isActive = button.dataset.page === page;
    button.classList.toggle("active", isActive);

    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  // Keep the selected page in the URL, so links can be shared.
  history.replaceState(null, "", `#${page}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", event => {
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) showPage(pageButton.dataset.page);
});

document.querySelector("#year").textContent = new Date().getFullYear();

// Open the page named in the URL, or Home if no page is specified.
showPage(window.location.hash.slice(1) || "home");
