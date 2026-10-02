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
      </div>

      <img
        class="hero-image"
        src="images/Pic_1.jpg"
        alt="Expiratory particle dispersion by turbulent exhalation jet during speaking made by Aleksandra Monka"
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
      <div class="card-grid" id="members-list"></div>
    </section>
  `
};

// Add or edit project entries here.
// Image paths are relative to index.html.
const projects = [
  {
    title: "Project One",
    description: "Describe your project, its purpose, and what your team achieved.",
    image: "images/project-1.jpg",
    alt: "Describe the project image"
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
