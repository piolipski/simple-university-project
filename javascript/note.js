const notesContainer = document.getElementById('notesContainer');
const newNote = document.getElementById('newNote');
const addNoteButton = document.getElementById('addNoteButton');
const noteTemplate = document.getElementById('noteTemplate');

const notes = new Set();

const saveToLocalStorage = () => {
	localStorage.setItem('notes', JSON.stringify([...notes]));
};

const addNote = (text) => {
	const note = {text};

	const cloned = noteTemplate.content.firstElementChild.cloneNode(true);
	const input = cloned.getElementsByClassName('noteInput')[0];
	input.value = text;

	input.addEventListener('input', () => {
		note.text = input.value;
		saveToLocalStorage();
	});

	cloned.querySelector('.removeBtn').addEventListener('click', () => {
		cloned.remove();
		notes.delete(note);
		saveToLocalStorage();
	});

	notesContainer.append(cloned);

	notes.add(note);
};

addNoteButton.addEventListener('click', () => {
	addNote(newNote.value);
	newNote.value = '';
	saveToLocalStorage();
});

if (localStorage.getItem('notes') !== null) {
	const loadedNotes = JSON.parse(localStorage.getItem('notes'));
	
	for (const {text} of loadedNotes) {
		addNote(text);
	}
}