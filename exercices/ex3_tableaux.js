notes = [12, 8, 15, 10, 7];
moyenne = 0;
for (let i = 0; i < notes.length; i++) {
    moyenne += notes[i];
}

meilleureNote = 0;
for (let i = 0; i < notes.length; i++) {
    if (notes[i] > meilleureNote) {
        meilleureNote = notes[i];
    }
}

nbrDeNotesSup10 = 0;
for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        nbrDeNotesSup10++;
    }
}

console.log("Moyenne: " + moyenne/notes.length);
console.log("Meilleure note: " + meilleureNote);
console.log("Nombre de notes supérieures ou égales à 10: " + nbrDeNotesSup10);