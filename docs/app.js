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

<figure class="hero-figure">
  <img
    class="hero-image"
    src="images/github1.jpg"
    alt="Particles dispersing in a turbulent exhalation jet during speaking"
  >
  <figcaption>
    Expiratory particle dispersion by turbulent exhalation jet during speaking.
    Image by <a href="https://www.linkedin.com/in/aleksandra-monka-41115331b/"
      target="_blank" rel="noopener noreferrer">Aleksandra Monka</a>.
  </figcaption>
</figure>

    </section>
  `,

  projects: `
    <section class="page-section">
      <div class="section-heading">
        <p class="eyebrow">What we do</p>
        <h1>Research Projects</h1>
      </div>
      <div class="card-grid" id="projects-list"></div>
    </section>
  `,

members: `
  <section class="page-section">
    <div class="section-heading">
      <h1>Meet the Team</h1>
    </div>

    <section>
      <h2>Current Members</h2>
      <div class="card-grid" id="current-members-list"></div>
    </section>

    <figure class="member-section-image">
      <img src="../images/github8.jpg" alt="Current members of the team">
      <figcaption>Caption for the current members photo.</figcaption>
    </figure>

    <section>
      <h2>Past Members</h2>
      <div class="card-grid" id="past-members-list"></div>

      <figure class="member-section-image">
      <img src="../images/github7.jpg" alt="Past members of the team">
      <figcaption>Caption for the past members photo.</figcaption>
      </figure>
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
    description: `Led by Prof Christian Pfrang, the project "Indoor Air Quality Emissions & Modelling System (IAQ-EMS)" aims to develop ambitious software and data tools to advance the UK's capacity for indoor air quality modelling, for estimation of emissions and exposure.`,
    image: "../images/github3.png",
    alt: "The graphic shows air flow in different ventilation scenarios: unventilated, natural ventilation and mechanical extraction.",
    caption: "ChemFlow3D solves explicitly basic chemical reactions as the fluid flow evolves in space in time. It is built on the MultiFlow3D engine."
  }
];

// Add or edit team members here.
const currentMembers = [
  {
    title: "Dr. Bruño Fraga",
    description: "Associate Professor, School of Engineering, University of Birmingham.",
    image: "../images/github4.png",
    alt: "Portrait of Bruño Fraga",
    links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/bru%C3%B1o-fraga-a574795b/" },
    { label: "Staff Profile", url: "https://www.birmingham.ac.uk/staff/profiles/civil/fraga-bruno" }
  ]
  },
  {
    title: "Dr. Aleksandra Monka",
    description: "Research Associate, School of Engineering, University of Birmingham",
    image: "../images/github5.png",
    alt: "Portrait of Aleksandra Monka",
    links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/aleksandra-monka-41115331b/" }
  ]
  },
    {
    title: "Dr. Emilie Cosway",
    description: "Network Manager, School of Engineering, University of Birmingham",
    links: [
    { label: "Research Profile", url: "https://research.birmingham.ac.uk/en/persons/emilie-cosway/" }
  ]
  },
    {
    title: "Yu Zhang",
    description: "PhD student, School of Engineering, University of Birmingham",
  },
    {
    title: "Fuad Alqrinawi",
    description: "PhD student, School of Geography, Environmental and Earth Sciences, University of Birmingham",
  },
    {
    title: "Zijian Chen",
    description: "PhD student, School of Geography, Environmental and Earth Sciences, University of Birmingham",
  },
  {
    title: "Niloofar Mohammadzadeh ",
    description: "PhD student, School of Engineering, University of Birmingham",
  }
];

const pastMembers = [
  {
    title: "Dr. Zhen Liu",
    description: "Engineer at WSP",
    links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/zhen-liu-a30a73262/" }
  ]
  },
  {
    title: "Dr. Boyang Chen",
    description: "Research Associate, Applied Modelling and Computation Group, Faculty of Engineering, Imperial College London.",
    links: [
    { label: "Research Profile", url: "https://profiles.imperial.ac.uk/boyang.chen16" }
  ]
  },
    {
    title: "Dr. Riza Siregar",
    description: "Lecturer, Faculty of Engineering, Universitas Sumatera Utara.",
    links: [
    { label: "Research Profile", url: "https://ft.usu.ac.id/en/lecturer/riza-inanda-siregar#" }
  ]
  },
    {
    title: "James Howorth",
    description: "MEng student, School of Engineering, University of Birmingham.",
      
  }
];

const mainContent = document.querySelector("#main-content");
const navButtons = document.querySelectorAll(".nav-button");

function createCards(items) {
  return items.map(item => `
    <article class="card">
      ${item.image ? `<img src="${item.image}" alt="${item.alt || ""}">` : ""}
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
    document.querySelector("#current-members-list").innerHTML =
      createCards(currentMembers);

    document.querySelector("#past-members-list").innerHTML =
      createCards(pastMembers);
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
