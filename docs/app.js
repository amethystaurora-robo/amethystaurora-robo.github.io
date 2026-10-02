const pages = {
  home: `
    <section class="hero page-section">
      <div class="hero-text">
        <p class="eyebrow">Welcome</p>
        <h1>Ideas, people, and projects making a difference.</h1>
        <p>
          Add a short introduction to your team, research group, club, or
          organization here. Tell visitors what you do and what makes your
          work special.
        </p>
        <button class="primary-button" type="button" data-page="projects">
          Explore our projects
        </button>
      </div>

      <img
        class="hero-image"
        src="images/home.jpg"
        alt="Describe your home page image"
      >
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
