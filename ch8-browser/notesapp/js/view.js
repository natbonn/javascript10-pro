const daysGR = [
    "Κυριακή",
    "Δευτέρα",
    "Τρίτη",
    "Τετάρτη",
    "Πέμπτη",
    "Παρασκευή",
    "Σάββατο"
];

const monthsGR = [
    "Ιανουαρίου",
    "Φεβρουαρίου",
    "Μαρτίου",
    "Απριλίου",
    "Μαϊου",
    "Ιουνίου",
    "Ιουλίου",
    "Αυγούστου",
    "Σεπτεμβρίου",
    "Οκτωβρίου",
    "Νοεμβρίου",
    "Δεκεμβρίου"
];

const dateDOM = document.getElementById('dateTxt');
const notesContainer = document.getElementById('notesWrapper');

export function renderGRDate() {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0")

    const dateStr = `${daysGR[now.getDay()]}, ${now.getDate()}, ${monthsGR[now.getMonth()]}, ${now.getFullYear()}`;

    const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    dateDOM.innerHTML = `${dateStr}<br>${timeStr}`;
}

function createNoteElement(noteObj, {onStrikeThrough, onDelete}) {
    const div = document.createElement("div")
    div.id = 'noteTemplate' + noteObj.key;
    div.className = 
        "flex justify-between items-center px-[2px] border-b border-black";
    
    const checkBox = document.createElement('input')
    checkBox.id = 'checkBox' + noteObj.key;
    checkBox.type = "checkbox";
    checkBox.checked = noteObj.softDeleted;
    checkBox.addEventListener('click', () => onStrikeThrough(noteObj.key));

    const label = document.createElement('label');
    label.id = 'label' + noteObj.key;
    label.htmlFor = checkBox.id;
    label.textContent = noteObj.note;
    label.className = `w-[200px] max-h-[100px] overflow-hidden break-words white-space-normal text-base ${noteObj.softDeleted ? "line-through text-gray-500" : ""}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.id = "deleteBtn" + noteObj.key;
    deleteBtn.textContent = "X";
    deleteBtn.className = " w-[35px] h-[35px] rounded-full border border-black";
    deleteBtn.setAttribute('aria-label', 'Delete note: ' + noteObj.note);
    deleteBtn.addEventListener('click', () => onDelete(noteObj.key));

    div.appendChild(checkBox);
    div.appendChild(label);
    div.appendChild(deleteBtn);

    return div;
}

export function renderNotes(notes, handlers) {
    notesContainer.textContent = "";
    notes.forEach((noteObj) => 
        notesContainer.appendChild(createNoteElement(noteObj, handlers)),
    );

}