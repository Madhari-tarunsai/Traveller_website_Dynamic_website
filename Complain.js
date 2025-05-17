const form = document.getElementById("complaintForm");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");
const complaintList = document.getElementById("complaintList");

let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

function displayComplaints() {
  complaintList.innerHTML = "";
  complaints.forEach((complaint, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${complaint.title}</h3>
      <p>${complaint.description}</p>
    `;
    complaintList.appendChild(card);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newComplaint = {
    title: titleInput.value.trim(),
    description: descInput.value.trim()
  };
  if (newComplaint.title && newComplaint.description) {
    complaints.push(newComplaint);
    localStorage.setItem("complaints", JSON.stringify(complaints));
    displayComplaints();
    form.reset();
  }
});

window.addEventListener("load", displayComplaints);
