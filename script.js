const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("category");
const descInput = document.getElementById("desc");
const eventsDiv = document.getElementById("events");
document.getElementById("addBtn").addEventListener("click", addEvent);

document.getElementById("clearBtn").addEventListener("click", () => {
  eventsDiv.innerHTML = "";
});
document.getElementById("sampleBtn").addEventListener("click", addSample);