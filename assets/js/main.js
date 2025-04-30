/* SEARCH EXPERIENCE */
function searchExperience() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const jobElements = document.querySelectorAll("#experienceSection .job");

  jobElements.forEach((job) => {
    const text = job.innerText.toLowerCase();
    if (text.includes(query) || query.trim() === "") {
      job.style.display = "block";
    } else {
      job.style.display = "none";
    }
  });
}

/* TOGGLE COLLAPSIBLE */
function toggleCollapsible(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  section.classList.toggle("open");
  const toggleIcon = document.getElementById(sectionId + "Toggle");
  if (!toggleIcon) return;
  toggleIcon.textContent = section.classList.contains("open") ? "–" : "+";
}
