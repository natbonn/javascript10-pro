import { insertNote, strikeThrough } from "./model";
import { renderGRDate, renderNotes } from "./view";

const inputNote = document.getElementById('inputNote');
const addButton = document.getElementById('addNoteBtn');

const getNoteValue = () => inputNote.value.trim();

const handlers = {
    onStrikeThrough: onStrikeThroughHandler,
    onDelete: onDeleteHandler,
}

addButton.addEventListener("click", () => {
    onInsertHandler(getNoteValue());
    inputNote.value = "";
});

inputNote.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        onInsertHandler(getNoteValue());
        inputNote.value = "";
    }
});

function onInsertHandler(note) {
    if (!note) return;

    insertNote(note);
    renderNotes(getNotes(), handlers)
}

function onStrikeThroughHandler(key) {
    strikeThrough(key)
    renderNotes(getNotes(), handlers);
}

function onDeleteHandler(key) {
    deleteNote(key);
    renderNotes(getNotes(), handlers);
}

// renderGRDate();
setInterval(1000, renderGRDate);
renderNotes(getNotes(), handlers);