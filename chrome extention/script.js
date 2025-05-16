const inputEl = document.getElementById("note-input");
const notesListEl = document.getElementById("notes-list");

function saveNote() {
  const note = inputEl.value.trim();
  if (note) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.unshift(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    inputEl.value = "";
    renderNotes();
  }
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

function deleteAllNotes() {
  if (confirm("Are you sure you want to delete all notes?")) {
    localStorage.removeItem("notes");
    renderNotes();
  }
}

function renderNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notesListEl.innerHTML = "";

  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${note}</span>
      <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
    `;
    notesListEl.appendChild(li);
  });
}

renderNotes();
