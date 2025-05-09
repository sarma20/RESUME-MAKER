// script.js

// When the form is submitted, gather the data and show the preview
document.getElementById("resume-form").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload

  // Retrieve values from the form fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;

  // Populate the preview elements
  document.getElementById("preview-name").textContent = name;
  document.getElementById("preview-email").textContent = email;
  document.getElementById("preview-experience").textContent = experience;
  document.getElementById("preview-skills").textContent = skills;

  // Hide the form and display the preview
  document.getElementById("resume-form").style.display = "none";
  document.getElementById("preview").style.display = "block";
});
