function infosEtudiant(nom, note) { 
    if (note>=10) {
        return "Admis";
    }
    else {
        return "Ajourné";
    }
}

console.log(infosEtudiant("Youssef", 12));