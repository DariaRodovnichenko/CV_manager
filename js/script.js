const language = 'en';

function updateAboutMe(language) {
  const aboutMeSection = document.querySelector('[data-key="about-me"]');
  const mainInformation = translations[language].aboutMe;

  aboutMeSection.innerHTML = mainInformation
    .map(
      information => `<div>
              <h1 class="my-name">${information.name}</h1>
        <h2 class="my-profession">${information.profession}</h2>
        <p class="my-summary">${information.summary}</p>
        <h3 class="main-content-title">${information.skills}</h3>
        <ul class="project-list">
          ${information.list
            .map(item => `<li class="project-item">${item}</li>`)
            .join('')}
        </ul>
      </div>
      `
    )
    .join('');
}

function updateWorkExperience(language) {
  const workExperienceSection = document.querySelector(
    '[data-key="work-experience"]'
  );
  const positions = translations[language].workExperience;

  workExperienceSection.innerHTML = positions
    .map(
      position => `
      <div class="work-experience-place">
        <h4 class="work-experience-position">${
          position.title
        } <span class="work-experience-company">${position.company}</span></h4>
        <p class="work-period">${position.period}</p>
        <ul class="responsibilities">
          ${position.responsibilities
            .map(task => `<li class="work-duties">${task}</li>`)
            .join('')}
        </ul>
      </div>
    `
    )
    .join('');
}

function updateContacts(language) {
  const contactsSection = document.querySelector('[data-key="contacts"]');
  const contacts = translations[language].contacts;

  contactsSection.innerHTML = `
      <h3 class="sidebar-title">${contacts.title}</h3>
    <p class="contacts-item"><strong>Phone:</strong> <a href="tel:${contacts.phone}" class="contacts-number">${contacts.phone}</a></p>
    <p class="contacts-item"><strong>Email:</strong> <a href="mailto:${contacts.email} class="contacts-email"">${contacts.email}</a></p>
    <p class="contacts-item"><strong>LinkedIn:</strong> <a href="${contacts.linkedin.url}"  class="contacts-email" target="_blank">${contacts.linkedin.label}</a></p>
     `;
}

function updateEducation(language) {
  const educationSection = document.querySelector('[data-key="education"]');
  const educationData = translations[language].education;
  const educationTitle = translations[language].educationTitle;

  educationSection.innerHTML = `
     <h3 class="sidebar-title">${educationTitle}</h3>${educationData
    .map(
      edu => `
      <div class="education-item">
            <h4 class="education-university">${edu.university}</h4>
        <p class="education-specialization">${edu.specialization}</p>
        <p class="education-period">${edu.period}</p>
      </div>
    `
    )
    .join('')}`;
}

function updateTechSkills(language) {
  const techSkillsSection = document.querySelector('[data-key="tech-skills"]');
  const techSkills = translations[language].techSkills[0].skills;

  techSkillsSection.innerHTML = `
       <h3 class="sidebar-title">${
         translations[language].techSkills[0].title
       }</h3>
    <ul class="skills-list">
      ${techSkills
        .map(skill => `<li class="skills-list-item">${skill}</li>`)
        .join('')}
    </ul>
      `;
}

function updateSoftSkills(language) {
  const softSkillsSection = document.querySelector('[data-key="soft-skills"]');
  const softSkills = translations[language].softSkills[0].skills;

  softSkillsSection.innerHTML = `
      <h3 class="sidebar-title">${
        translations[language].softSkills[0].title
      }</h3>
    <ul class="skills-list">
      ${softSkills
        .map(skill => `<li class="skills-list-item">${skill}</li>`)
        .join('')}
    </ul>
  `;
}

function updateLanguages(language) {
  const languagesSection = document.querySelector('[data-key="languages"]');
  const languages = translations[language].languages[0].list;

  languagesSection.innerHTML = `
      <h3 class="sidebar-title">${
        translations[language].languages[0].title
      }</h3>
    <ul class="skills-list">
      ${languages
        .map(lang => `<li class="skills-list-item">${lang}</li>`)
        .join('')}
    </ul>
     `;
}

function updateTranslations(language) {
  updateAboutMe(language);
  updateWorkExperience(language);
  updateContacts(language);
  updateEducation(language);
  updateTechSkills(language);
  updateSoftSkills(language);
  updateLanguages(language);
  // Add other translation update functions if needed.
}

function setLanguage(language) {
  updateTranslations(language);
}

// Initialize with default language (e.g., English)
document.addEventListener('DOMContentLoaded', () => {
  updateTranslations('en');
});
