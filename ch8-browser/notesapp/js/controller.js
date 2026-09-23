import { deleteNote, getNotes, insertNote, strikeThrough } from "./model.js";
import { renderGRDate, renderNotes } from "./view.js";

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

renderGRDate();
setInterval(renderGRDate, 1000);
renderNotes(getNotes(), handlers);